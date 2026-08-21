# -*- coding: utf-8 -*-
"""extracted.json -> typed JSON data files for the Next.js project."""
import re, html, json, os, unicodedata
from collections import OrderedDict

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.abspath(os.path.join(
    ROOT, '..', '..', '..', '..', '..',
    'Users/patyasaidova/Desktop/10K websites/zvezda-avto/beautyway-clinic/src/data/generated'))
OUT = "/Users/patyasaidova/Desktop/10K websites/zvezda-avto/beautyway-clinic/src/data/generated"
os.makedirs(OUT, exist_ok=True)

docs = json.load(open(os.path.join(ROOT, 'extracted.json'), encoding='utf-8'))
by_path = {d['path'].rstrip('/') or '/': d for d in docs}

# ---------------------------------------------------------------- taxonomy
home = open(os.path.join(ROOT, 'raw', '_home.html'), encoding='utf-8').read()
nav = home[home.find('<nav class="topmenu">'):home.find('</nav>', home.find('<nav class="topmenu">'))]

cats, cur = [], None
depth = 1
for m in re.finditer(r'<li class="([^"]*)"[^>]*>|<a[^>]*href="([^"]*)"[^>]*>\s*(?:<span[^>]*>)?([^<]*)', nav):
    cls, href, txt = m.group(1), m.group(2), m.group(3)
    if cls:
        lv = re.search(r'tm_level(\d)', cls)
        if lv: depth = int(lv.group(1))
    if not (href and txt and txt.strip()): continue
    title = html.unescape(txt.strip())
    href = href.strip().rstrip('/')
    if not href.startswith('uslugi/'): continue
    slug = href[len('uslugi/'):]
    if depth == 2:
        cur = {'slug': slug, 'title': title, 'children': []}
        cats.append(cur)
    elif depth == 3 and cur is not None:
        cur['children'].append({'slug': slug, 'title': title})

cat_of = {}
for c in cats:
    cat_of[c['slug']] = c['slug']
    for ch in c['children']:
        cat_of[ch['slug']] = c['slug']

# ---------------------------------------------------------------- helpers
# --- Медицинская редактура -------------------------------------------------
# Правила точечные и сохраняют грамматику: мы снимаем абсолютные обещания,
# но не трогаем законные условные обороты («если нет противопоказаний»,
# «полностью исключить алкоголь», «избавиться навсегда невозможно»).
RULES = [
    # 1. Снимаем усилитель абсолютности, оставляя согласованное прилагательное.
    (re.compile(r'(?i)\b(?:абсолютно|полностью|на\s*100\s*%|100\s*%)\s+(безопасн(?:ый|ая|ое|ые|а|о|ы|ым|ыми|ых|ого|ому))\b'),
     r'\1', 'снят абсолютный усилитель при слове «безопасный»'),
    # 2. «гарантирует» -> «обеспечивает» (совпадает по спряжению).
    (re.compile(r'(?i)\bгарантиру(ет|ют|я)\b'), r'обеспечива\1',
     '«гарантирует» заменено на «обеспечивает»'),
    (re.compile(r'(?i)\bгарантированн(ый|ая|ое|ые|ым|ого|ому|ыми|ых)\s+результат'),
     r'предсказуемый результат', '«гарантированный результат» -> «предсказуемый результат»'),
    (re.compile(r'(?i)\bгарантир(ует|уют)\s+(?:100\s*%\s*)?безопасность'),
     r'повышает безопасность', 'обещание гарантии безопасности смягчено'),
    (re.compile(r'(?i)\bгарантия\s+результата\b'), 'предсказуемость результата',
     '«гарантия результата» -> «предсказуемость результата»'),
    # 3. «риск полностью исключён» — но не «практически полностью исключают».
    (re.compile(r'(?i)(?<!практически\s)\bриск(\w*)\s+((?:\w+\s+){0,2}?)полностью\s+исключ(?:ен|ён|ена|ены|ается|аются)\s*[!.]?'),
     r'риск\1 \2сведён к минимуму. ', 'абсолютное «риск полностью исключён» смягчено'),
    # 4. «без риска» -> «с минимальным риском» (согласуется с род. падежом далее).
    (re.compile(r'(?i)\bбез\s+риска\b'), 'с минимальным риском', '«без риска» -> «с минимальным риском»'),
    (re.compile(r'(?i)\bбез\s+рисков\b'), 'с минимальными рисками', '«без рисков» -> «с минимальными рисками»'),
    # 5. «подходит всем» -> «подходит большинству».
    (re.compile(r'(?i)\bподходит\s+всем\s+пациентам\b'), 'подходит большинству пациентов',
     '«подходит всем» -> «подходит большинству»'),
    (re.compile(r'(?i)\bподходит\s+всем\b(?!\s+пациентам)'), 'подходит большинству',
     '«подходит всем» -> «подходит большинству»'),
    # 6. «лучший врач/клиника Москвы».
    (re.compile(r'(?i)\bлучш(ий|ая|ие)\s+(врач|клиник|специалист)(\w*)\s+(в\s+)?москв\w*'),
     r'опытные \2\3 клиники', 'превосходная степень «лучший в Москве» снята'),
    # 7. Нулевой риск — абсолютное утверждение.
    (re.compile(r'(?i)\b(?:практически\s+)?нулев(?:ой|ая|ое|ые)\s+риск(\w*)'), r'низкий риск\1',
     '«нулевой риск» -> «низкий риск»'),
    (re.compile(r'(?i)\bубрать\s+(\w+)\s+навсегда\b'), r'убрать \1 за один сеанс в большинстве случаев',
     'обещание «навсегда» снято'),
    # 7. «мгновенный результат» как обещание.
    (re.compile(r'(?i)\bмгновенн(ый|ая|ое)\s+результат\b'), r'быстро заметный результат',
     '«мгновенный результат» -> «быстро заметный результат»'),
]
audit_hits = []

def sanitize(text, where):
    if not text: return text
    out = text
    for rx, repl, note in RULES:
        def _sub(m):
            audit_hits.append({'where': where, 'found': m.group(0).strip()[:120], 'note': note})
            return m.expand(repl) if '\\' in repl else repl
        out = rx.sub(_sub, out)
    return re.sub(r'  +', ' ', out)

def clean_sections(secs, where):
    res = []
    for s in secs:
        h = (s.get('heading') or '').strip() or None
        t = sanitize((s.get('text') or '').strip(), where)
        if not t and not h: continue
        # split text into paragraphs / list items
        lines = [l.strip() for l in t.split('\n') if l.strip()]
        if not lines: continue
        res.append({'heading': h, 'body': lines})
    return res

# «1 мл.», «1 ед.», «1 линия» — цена за единицу, а не за процедуру целиком.
UNIT_RX = re.compile(r'(?i)(?:^|[\s(,])1\s*(ед|мл|шт|лини[яию]|зон[ауы]|сеанс|см2|см²)\.?(?:$|[\s),.])')
UNIT_LABEL = {'ед': 'ед.', 'мл': 'мл', 'шт': 'шт.', 'линия': 'линию', 'линию': 'линию',
              'линии': 'линию', 'зона': 'зону', 'зону': 'зону', 'зоны': 'зону',
              'сеанс': 'сеанс', 'см2': 'см²', 'см²': 'см²'}
# Строки-добавки и консультации не задают цену самой процедуры.
NOT_A_PROCEDURE = re.compile(
    r'(?i)(консультаци|использование|анестез|удаление\s+филлера|удаление\s+гел|'
    r'доплат|дополнительн|сыворотк\w*\s+BOOSTER|выезд|повторн\w+\s+приём|'
    r'единичн\w+\s+волос|станок|самостоятельн)')

def price_from(prices, h1=None):
    """«От» считаем по ОСНОВНОЙ категории прайса, а не по глобальному минимуму.

    Иначе у «Увеличения губ» минимумом становилась строка из раздела
    ботулотоксинов (2 990 ₽), а у SMAS-лифтинга — «1 линия» за 50 ₽.
    """
    rows = [p for p in prices
            if isinstance(p.get('price'), int) and p['price'] > 0
            and not NOT_A_PROCEDURE.search(p['name'])]
    if not rows: return None, None
    groups = {}
    for p in rows:
        groups.setdefault(p.get('category') or '', []).append(p)
    # Основная категория — самая полная (это профильный раздел прайса услуги).
    best = max(groups, key=lambda c: (len(groups[c]), -min(x['price'] for x in groups[c])))
    items = groups[best]
    # «за 1 мл» и «за 1 ед.» — общепринятые единицы для инъекционных препаратов,
    # такие цены показываем как есть (с подписью единицы). «За 1 линию» и подобное
    # без минимального объёма ввело бы в заблуждение — там берём цену процедуры.
    def unit_of(name):
        m = UNIT_RX.search(name)
        return m.group(1).lower() if m else None
    whole = [p for p in items if unit_of(p['name']) is None]
    per_unit_ok = [p for p in items if unit_of(p['name']) in ('мл', 'ед')]
    pool = whole + per_unit_ok or items
    row = min(pool, key=lambda x: x['price'])
    m = UNIT_RX.search(row['name'])
    unit = UNIT_LABEL.get(m.group(1).lower()) if m else None
    return row['price'], unit

def pick_image(d):
    for im in d.get('images', []):
        src = im['src']
        if 'uploaded' in src and re.search(r'\.(jpg|jpeg|png|webp)$', src, re.I):
            return src
    return None

def rel(paths, prefix):
    return [p[len(prefix):].strip('/') for p in paths if p.startswith(prefix)]

def base(d, where):
    return {
        'sourceUrl': d['url'],
        'title': d['title'],
        'description': d['description'],
        'canonical': d['canonical'],
        'h1': d['h1'],
        'sections': clean_sections(d['sections'], where),
        'faq': [{'q': f['q'], 'a': sanitize(f['a'], where)} for f in d['faq']],
        'prices': d['prices'],
        'priceFrom': price_from(d['prices'], d.get('h1'))[0],
        'priceUnit': price_from(d['prices'], d.get('h1'))[1],
        'image': pick_image(d),
        'images': [i for i in d['images'] if 'uploaded' in i['src']][:12],
    }

# ---------------------------------------------------------------- build
services, problems, preparations, doctors, equipment, articles, complexes, cosmeceuticals, pages = \
    {}, {}, {}, {}, {}, {}, {}, {}, {}

for d in docs:
    t, p = d['type'], d['path'].rstrip('/') or '/'
    if t == 'service':
        slug = p[len('/uslugi/'):]
        rec = base(d, p)
        rec['slug'] = slug
        rec['category'] = cat_of.get(slug)
        rec['relatedServices'] = [x for x in rel(d['relServices'], '/uslugi/') if x and x != slug][:8]
        rec['relatedPreparations'] = rel(d['relPreparations'], '/preparaty/')[:10]
        rec['relatedProblems'] = rel(d['relProblems'], '/problem/')[:8]
        rec['relatedDoctors'] = rel(d['relDoctors'], '/vrachi/')[:12]
        services[slug] = rec
    elif t == 'problem':
        slug = p[len('/problem/'):]
        rec = base(d, p); rec['slug'] = slug
        rec['relatedServices'] = rel(d['relServices'], '/uslugi/')[:12]
        problems[slug] = rec
    elif t == 'preparation':
        slug = p[len('/preparaty/'):]
        rec = base(d, p); rec['slug'] = slug
        rec['relatedServices'] = rel(d['relServices'], '/uslugi/')[:10]
        preparations[slug] = rec
    elif t == 'doctor':
        slug = p[len('/vrachi/'):]
        rec = base(d, p); rec['slug'] = slug
        di = d.get('doctor') or {}
        rec['name'] = d['h1']
        rec['post'] = di.get('post')
        rec['photo'] = di.get('photo')
        rec['experienceText'] = di.get('experienceText')
        rec['experienceYears'] = di.get('experienceYears')
        rec['ratingValue'] = di.get('ratingValue')
        rec['ratingCount'] = di.get('ratingCount')
        rec['sections'] = clean_sections(di.get('bio') or d['sections'], p)
        rec['image'] = di.get('photo')
        rec['relatedServices'] = rel(d['relServices'], '/uslugi/')[:14]
        doctors[slug] = rec
    elif t == 'equipment':
        slug = p.strip('/')
        rec = base(d, p); rec['slug'] = slug
        rec['relatedServices'] = rel(d['relServices'], '/uslugi/')[:12]
        equipment[slug] = rec
    elif t == 'article':
        slug = p[len('/blog/'):]
        rec = base(d, p); rec['slug'] = slug
        rec['relatedServices'] = rel(d['relServices'], '/uslugi/')[:8]
        articles[slug] = rec
    elif t == 'complex':
        slug = p[len('/kompleksyi/'):]
        rec = base(d, p); rec['slug'] = slug
        complexes[slug] = rec
    elif t == 'cosmeceutical':
        slug = p.strip('/').split('/', 1)[-1]
        rec = base(d, p); rec['slug'] = slug
        cosmeceuticals[slug] = rec
    else:
        pages[p] = base(d, p)

def dump(name, obj):
    path = os.path.join(OUT, name + '.json')
    json.dump(obj, open(path, 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
    print(f'{name:16s} {len(obj):4d}  {os.path.getsize(path)//1024} KB')

dump('services', list(services.values()))
dump('problems', list(problems.values()))
dump('preparations', list(preparations.values()))
dump('doctors', list(doctors.values()))
dump('equipment', list(equipment.values()))
dump('articles', list(articles.values()))
dump('complexes', list(complexes.values()))
dump('cosmeceuticals', list(cosmeceuticals.values()))
dump('pages', pages)
dump('taxonomy', cats)

json.dump(audit_hits, open(os.path.join(ROOT, 'medical-audit.json'), 'w', encoding='utf-8'),
          ensure_ascii=False, indent=1)
print('medical copy rewrites:', len(audit_hits))

# Видеоотзывы: подставляем имя врача прямо в данные, чтобы клиентский
# компонент не тянул за собой весь контентный слой.
vr_path = os.path.join(OUT, 'video-reviews.json')
if os.path.exists(vr_path):
    vr = json.load(open(vr_path, encoding='utf-8'))
    names = {d['slug']: d.get('name') for d in doctors.values()}
    for r in vr:
        r['doctorName'] = names.get(r.get('doctor') or '', None)
    json.dump(vr, open(vr_path, 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
    print('video-reviews enriched:', len(vr))
