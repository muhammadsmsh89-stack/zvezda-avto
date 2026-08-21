# -*- coding: utf-8 -*-
"""Structured extractor for crawled bwclinic.ru pages -> extracted.json"""
import re, html, json, os, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
RAW = os.path.join(ROOT, 'raw')

def unslug(fn):
    base = fn[:-5]
    if base == '_home': return 'https://bwclinic.ru/'
    return 'https://bwclinic.ru/' + base.replace('__', '/')

def strip_tags(s):
    s = re.sub(r'(?is)<(script|style|noscript)\b.*?</\1>', ' ', s)
    s = re.sub(r'(?is)<br\s*/?>', '\n', s)
    s = re.sub(r'(?is)</(p|div|li|h[1-6]|tr)>', '\n', s)
    s = re.sub(r'(?is)<[^>]+>', ' ', s)
    s = html.unescape(s)
    s = re.sub(r'[ \t\xa0]+', ' ', s)
    s = re.sub(r'\n\s*\n+', '\n', s)
    return s.strip()

def meta(s, name=None, prop=None):
    if name:
        m = re.search(r'<meta\s+name="%s"\s+content="([^"]*)"' % name, s, re.I)
    else:
        m = re.search(r'<meta\s+property="%s"\s+content="([^"]*)"' % prop, s, re.I)
    return html.unescape(m.group(1)).strip() if m else None

def page_type(url):
    p = url.replace('https://bwclinic.ru/', '').rstrip('/')
    if p == '': return 'home'
    seg = p.split('/')
    if seg[0] == 'blog': return 'blog-index' if len(seg) == 1 else 'article'
    if seg[0] == 'uslugi': return 'service-index' if len(seg) == 1 else 'service'
    if seg[0] == 'problem': return 'problem-index' if len(seg) == 1 else 'problem'
    if seg[0] == 'preparaty': return 'preparation-index' if len(seg) == 1 else 'preparation'
    if seg[0] == 'vrachi': return 'doctor-index' if len(seg) == 1 else 'doctor'
    if seg[0] == 'kompleksyi': return 'complex'
    if seg[0] == 'menyu-uslugi': return 'service-menu'
    if seg[0].lower().startswith('kosmecevtika'): return 'cosmeceutical'
    if seg[0] == 'contacts': return 'contacts' if len(seg) == 1 else 'branch'
    if p in ('oborudovanie',): return 'equipment-index'
    if p in ('harmony-xl-pro','heleo4','lazer-alma-hybrid','lazer-motus-ax-moveo','rf-liftinga-sylfirm-x',
             'smas-lifting-ultraformer-mpt','ultraformer-3','radiovolnovoy-apparat-sensitec-esf-160',
             'frakczionnyij-lazer'): return 'equipment'
    if p in ('politika-konfidencialnosti','soglasie-na-obrabotku-personalnykh-dannykh',
             'vyishestoyashhie-organizaczii','sposobyi-oplatyi','liczenzii-i-sertifikatyi','pacientam'): return 'legal'
    return 'page'

def extract_prices(s):
    out = []
    for tw in re.finditer(r'(?is)<table class="price-table__table">(.*?)</table>', s):
        cat = None
        for tr in re.finditer(r'(?is)<tr>(.*?)</tr>', tw.group(1)):
            row = tr.group(1)
            mcat = re.search(r'(?is)price-table__cell--cat[^>]*>(.*?)</td>', row)
            if mcat:
                cat = strip_tags(mcat.group(1)); continue
            mt = re.search(r'(?is)price-table__cell--prod-title[^>]*>(.*?)</td>', row)
            mp = re.search(r'(?is)price-table__cell--price"\s+data-price="([^"]*)"\s+data-currency="([^"]*)"(.*?)</td>', row)
            if not mt: continue
            name_html = mt.group(1)
            link = re.search(r'href="([^"]+)"', name_html)
            badge = 'Акция!' in name_html
            name = strip_tags(re.sub(r'(?is)<span class="price-table__cell--badge.*?</span>', '', name_html))
            item = {'category': cat, 'name': name}
            if mp:
                raw_price = mp.group(1).strip()
                item['price'] = int(raw_price) if raw_price.isdigit() else None
                item['currency'] = html.unescape(mp.group(2))
                old = re.search(r'(?is)price-old">([^<]*)<', mp.group(3))
                if old: item['oldPriceText'] = html.unescape(old.group(1)).strip()
            if link: item['link'] = link.group(1)
            if badge: item['promo'] = True
            out.append(item)
    return out

def extract_faq(s):
    out = []
    blocks = re.split(r'(?is)<div class="faq__item"', s)
    for b in blocks[1:]:
        q = re.search(r'(?is)faq__item--title[^>]*>(.*?)</div>', b)
        a = re.search(r'(?is)faq__item--content[^>]*>(.*?)</div>\s*</div>', b)
        if q and a:
            qt, at = strip_tags(q.group(1)), strip_tags(a.group(1))
            if qt and at: out.append({'q': qt, 'a': at})
    return out

def extract_sections(s):
    """Split the main .content block by h2/h3 headings."""
    # Разные шаблоны исходного сайта: div.content (услуги/статьи),
    # section.content > div.content_imgs (юридические и информационные страницы).
    m = re.search(r'(?is)<div class="content"[^>]*>(.*)', s)
    if not m:
        m = re.search(r'(?is)<div class="content_imgs"[^>]*>(.*)', s)
    if not m:
        m = re.search(r'(?is)<section class="content"[^>]*>(.*)', s)
    if not m: return []
    body = m.group(1)
    # Режем по структурным маркерам конца контента и откатываемся к началу тега,
    # чтобы в текст не попадал обрывок вида «<div».
    for marker in ['class="faq__title', 'id="reviews"', 'id="video_reviews"', 'id="works"',
                   'class="block-title lic__title"', 'related-content-title',
                   'class="topwrap"', 'class="footer', '<footer', 'class="cnts"',
                   'class="soc_block', 'id="callback']:
        i = body.find(marker)
        if i > 200:
            cut = body.rfind('<', 0, i)
            body = body[:cut if cut > 200 else i]
    body = re.sub(r'(?is)<(script|style|noscript)\b.*?</\1>', ' ', body)
    parts = re.split(r'(?is)<h([23])[^>]*>(.*?)</h\1>', body)
    secs = []
    intro = strip_tags(parts[0]) if parts else ''
    if intro: secs.append({'heading': None, 'level': 0, 'text': intro})
    for i in range(1, len(parts) - 2, 3):
        lvl, head, cont = parts[i], parts[i + 1], parts[i + 2]
        h, t = strip_tags(head), strip_tags(cont)
        if h or t: secs.append({'heading': h or None, 'level': int(lvl), 'text': t})
    return secs

def extract_images(s):
    out, seen = [], set()
    for m in re.finditer(r'(?is)<img\b([^>]*)>', s):
        a = m.group(1)
        src = re.search(r'data-src="([^"]+)"', a) or re.search(r'\bsrc="([^"]+)"', a)
        if not src: continue
        u = src.group(1)
        if u.startswith('data:') or 'op-img' in u or u in seen: continue
        seen.add(u)
        alt = re.search(r'\balt="([^"]*)"', a)
        out.append({'src': u, 'alt': html.unescape(alt.group(1)) if alt else ''})
    return out

def extract_links(s, prefix):
    out = set()
    for m in re.finditer(r'href="(?:https://bwclinic\.ru)?/(%s/[^"#?]+)"' % prefix, s):
        out.add('/' + m.group(1).rstrip('/'))
    return sorted(out)


def extract_doctor(s):
    """Специализированный разбор карточки врача."""
    d = {}
    img = re.search(r'(?is)<div class="doctors_main__item-img">\s*<img[^>]*\bsrc="([^"]+)"[^>]*\balt="([^"]*)"', s)
    if img:
        d['photo'] = img.group(1)
        d['photoAlt'] = html.unescape(img.group(2))
    post = re.search(r'(?is)<div class="doctor__post">(.*?)</div>', s)
    if post: d['post'] = strip_tags(post.group(1))
    staj = re.search(r'(?is)<div class="doctor__staj">(.*?)</div>', s)
    if staj:
        d['experienceText'] = strip_tags(staj.group(1))
        yrs = re.search(r'(\d+)', d['experienceText'])
        if yrs: d['experienceYears'] = int(yrs.group(1))
    cnt = re.search(r'(?is)doctor__rating--count">(\d+)</span>\s*оценок</span>,\s*среднее\s*([\d,\.]+)', s)
    if cnt:
        d['ratingCount'] = int(cnt.group(1))
        d['ratingValue'] = float(cnt.group(2).replace(',', '.'))
    txt = re.search(r'(?is)<div class="doctor__txt">(.*?)</div>\s*</div>', s)
    if txt:
        body = txt.group(1)
        parts = re.split(r'(?is)<h2[^>]*>(.*?)</h2>', body)
        secs = []
        intro = strip_tags(parts[0]) if parts else ''
        if intro: secs.append({'heading': None, 'level': 0, 'text': intro})
        for i in range(1, len(parts) - 1, 2):
            h, t = strip_tags(parts[i]), strip_tags(parts[i + 1])
            if h or t: secs.append({'heading': h or None, 'level': 2, 'text': t})
        d['bio'] = secs
    return d


def extract_works(s):
    """Реальные работы до/после из блока #works (только с этой же страницы)."""
    i = s.find('id="works"')
    if i < 0: return []
    j = s.find('<h2', i + 10)
    j = s.find('id="', i + 400)
    chunk = s[i:i + 40000]
    end = chunk.find('id="video_reviews"')
    if end > 0: chunk = chunk[:end]
    out, seen = [], set()
    for m in re.finditer(r'(?is)<a data-fancybox="[^"]*" href="([^"]+)"[^>]*>\s*<img[^>]*data-lazy="([^"]+)"[^>]*alt="([^"]*)"', chunk):
        full, thumb, alt = m.group(1), m.group(2), html.unescape(m.group(3))
        if full in seen: continue
        seen.add(full)
        out.append({'full': full, 'thumb': thumb, 'alt': alt})
    return out

def extract_video_posters(s):
    out, seen = [], set()
    for m in re.finditer(r'(?is)<img[^>]*\bsrc="(/assets/cache/images/\d+/[^"]+_300x530\.jpg)"[^>]*\balt="([^"]*)"', s):
        u, alt = m.group(1), html.unescape(m.group(2))
        if u in seen: continue
        seen.add(u); out.append({'poster': u, 'title': alt})
    return out

def main():
    files = sorted(os.listdir(RAW))
    docs = []
    for fn in files:
        if not fn.endswith('.html'): continue
        path = os.path.join(RAW, fn)
        s = open(path, encoding='utf-8', errors='replace').read()
        url = unslug(fn)
        if 'Страница не найдена' in s or '404' in (meta(s, name='description') or '') and len(s) < 45000:
            pass
        t = re.search(r'(?is)<title[^>]*>(.*?)</title>', s)
        h1 = re.search(r'(?is)<h1[^>]*>(.*?)</h1>', s)
        can = re.search(r'(?is)<link rel="canonical" href="([^"]+)"', s)
        doc = {
            'url': url,
            'path': url.replace('https://bwclinic.ru', '') or '/',
            'type': page_type(url),
            'title': html.unescape(strip_tags(t.group(1))) if t else None,
            'description': meta(s, name='description'),
            'canonical': can.group(1) if can else None,
            'h1': strip_tags(h1.group(1)) if h1 else None,
            'ogImage': meta(s, prop='og:image'),
            'sections': extract_sections(s),
            'prices': extract_prices(s),
            'faq': extract_faq(s),
            'images': extract_images(s),
            'relServices': extract_links(s, 'uslugi'),
            'relDoctors': extract_links(s, 'vrachi'),
            'relPreparations': extract_links(s, 'preparaty'),
            'relProblems': extract_links(s, 'problem'),
            'bytes': len(s),
            'doctor': extract_doctor(s) if page_type(url) == 'doctor' else None,
            'works': extract_works(s),
            'videoPosters': extract_video_posters(s),
        }
        docs.append(doc)
    json.dump(docs, open(os.path.join(ROOT, 'extracted.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    from collections import Counter
    print('docs:', len(docs))
    print(Counter(d['type'] for d in docs).most_common())
    print('with prices:', sum(1 for d in docs if d['prices']))
    print('with faq:', sum(1 for d in docs if d['faq']))

if __name__ == '__main__':
    main()
