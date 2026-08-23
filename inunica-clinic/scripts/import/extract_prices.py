# -*- coding: utf-8 -*-
"""
Разбор прайса inunica.ru/price_full.

Tilda верстает прайс блоками t614: у блока есть заголовок-секция, шапка со
столбцами и строки t614__middle_item. В левой ячейке — название услуги и в
скобках код номенклатуры медуслуг, в правых — цены по столбцам.
"""
import io, os, re, json, html, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
RAW = os.path.join(ROOT, 'raw')

def txt(s):
    # <style> внутри записей Tilda: содержимое обязано уйти вместе с тегом,
    # иначе CSS приклеивается к заголовку секции.
    s = re.sub(r'(?is)<(script|style)\b.*?</\1>', ' ', s)
    s = re.sub(r'(?is)<br\s*/?>', '\n', s)
    s = re.sub(r'(?is)<[^>]+>', '', s)
    s = html.unescape(s)
    s = s.replace('\xa0', ' ')
    s = re.sub(r'[ \t]+', ' ', s)
    return '\n'.join(l.strip() for l in s.split('\n')).strip()

# Код номенклатуры медуслуг: «(A22.01.001 Удаление волос…)». Формат плавает
# (A22.01.001 и B01.008.001), встречаются составные коды «A17.10.010+ A14.01.013»,
# а в исходнике попадаются незакрытые скобки — поэтому ищем начало кода, а всё
# после него считаем аннотацией.
CODE = re.compile(r'\(\s*([A-ZА-Я]\d{2,3}(?:\.\d{2,3}){2}(?:\.\d+)?'
                  r'(?:\s*\+\s*[A-ZА-Я]\d{2,3}(?:\.\d{2,3}){2}(?:\.\d+)?)*)')
PRICE = re.compile(r'^\d[\d\s]*$')

def split_name(raw):
    """Отделяет название услуги от кода номенклатуры медуслуг."""
    flat = re.sub(r'\s+', ' ', raw.replace('\n', ' ')).strip()
    m = CODE.search(flat)
    if not m:
        return flat, None, None
    name = flat[:m.start()].strip(' -–—')
    code = re.sub(r'\s*\+\s*', ' + ', m.group(1)).strip()
    code_name = flat[m.end():].strip().rstrip(')').strip()
    return name, code, code_name

def parse_price(raw):
    """
    '3 300' -> 3300. Ячейка «8 000 / 12 000» (цена за 1 и за 3 прохода) — не
    ошибка: для сортировки берём первое число, для показа храним исходный текст.
    """
    t = re.sub(r'[\u00a0\u2009\u202f]', ' ', raw).strip()
    if not t:
        return None, ''
    if PRICE.match(t):
        return int(re.sub(r'\D', '', t)), ''
    nums = re.findall(r'\d[\d\s]*', t)
    first = int(re.sub(r'\D', '', nums[0])) if nums else None
    return first, re.sub(r'\s+', ' ', t)

def records(s):
    """Все записи Tilda по порядку: (record_type, html)."""
    out = []
    marks = list(re.finditer(r'<div id="rec\d+"[^>]*data-record-type="(\d+)"', s))
    for i, m in enumerate(marks):
        end = marks[i + 1].start() if i + 1 < len(marks) else len(s)
        out.append((m.group(1), s[m.start():end]))
    return out

def heading(rec_html):
    """Заголовок записи: у прайс-таблиц он в js-block-header-descr,
    у разделителей — в t015__title или t-title."""
    for pat in (r'(?is)<div\s+class="js-block-header-descr[^"]*"[^>]*>(.*?)(?=<div\s+class="t614__container)',
                r'(?is)<div\s+class="t015__title[^"]*"[^>]*>(.*?)</div>',
                r'(?is)<div\s+class="[^"]*t-title[^"]*"[^>]*field="title"[^>]*>(.*?)</div>'):
        m = re.search(pat, rec_html)
        if m:
            t = re.sub(r'\s+', ' ', txt(m.group(1))).strip()
            if t:
                return t
    return ''

def cells(item_html):
    """Текст всех ячеек строки по порядку: [левая, столбец1, столбец2, ...]."""
    return [txt(m.group(1)) for m in
            re.finditer(r'(?is)<div\s+class="t614__title t614__(?:middle|header)_title[^"]*"[^>]*>(.*?)</div>', item_html)]

def main():
    src = io.open(os.path.join(RAW, 'price_full.html'), encoding='utf-8').read()
    sections, seen_rows = [], 0
    pending = ''   # заголовок из предыдущей записи-разделителя

    for rtype, rhtml in records(src):
        h = heading(rhtml)
        if rtype != '614':
            if h:
                pending = h
            continue

        header = re.search(r'(?is)<div\s+class="t614__header".*?(?=<div\s+class="t614__body")', rhtml)
        columns = cells(header.group(0))[1:] if header else []
        body = re.search(r'(?is)<div\s+class="t614__body".*', rhtml)
        rows = []
        if body:
            for m in re.finditer(r'(?is)<div\s+class="t614__middle_item[^"]*"[^>]*>(.*?)(?=<div\s+class="t614__middle_item|\Z)', body.group(0)):
                c = cells(m.group(1))
                if not c:
                    continue
                name, code, code_name = split_name(c[0])
                if not name:
                    continue
                prices = []
                for raw in c[1:]:
                    v, note = parse_price(raw)
                    prices.append({'value': v, 'note': note})
                if not prices or all(p['value'] is None and not p['note'] for p in prices):
                    continue
                rows.append({'name': name, 'code': code, 'codeName': code_name, 'prices': prices})

        if not rows:
            if h:
                pending = h
            continue
        sections.append({'group': pending or h, 'title': h or pending,
                         'columns': columns, 'rows': rows})
        seen_rows += len(rows)

    out = os.path.join(ROOT, 'prices.json')
    io.open(out, 'w', encoding='utf-8').write(
        json.dumps(sections, ensure_ascii=False, indent=2))
    print(f'секций: {len(sections)}, позиций: {seen_rows} -> {out}')
    for s in sections[:60]:
        print(f'  {len(s["rows"]):3d}  {s["group"][:34]:34s} | {s["title"][:60]}')

main()
