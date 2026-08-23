# -*- coding: utf-8 -*-
"""
Переносит юридические тексты inunica.ru в src/data/generated/legal.json.

Текст правовых документов переписывать нельзя, поэтому здесь только
разметка: шапка и подвал Tilda отрезаются, заголовки разделов отделяются
от абзацев. Формулировки остаются буква в букву.
"""
import io, os, re, json

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(ROOT, '..', '..', 'src', 'data', 'generated')

DOCS = [
    ('privacy', 'Политика конфиденциальности', 'privacy.txt'),
    ('personalnye-dannye', 'Положение об обработке и защите персональных данных',
     'polozhenie-ob-obrabotke-i-zashchite-personalnyh-dannyh.txt'),
]

START = 'Html code will be here'
STOP = re.compile(r'^Косметология «Inunica Clinic»')
# Заголовки в двух документах набраны по-разному: «1. ОБЩИЕ ПОЛОЖЕНИЯ» капсом
# и «1 Общие положения» обычным регистром. Общее у них — номер верхнего уровня,
# короткая строка и отсутствие точки в конце.
HEADING_CAPS = re.compile(r'^\d+\.?\s+[А-ЯЁ][А-ЯЁ\s,\-()«»]{4,}$')
HEADING_PLAIN = re.compile(r'^\d{1,2}\.?\s+[А-ЯЁ][^.]{4,60}$')
# Титул документа дублирует H1 страницы — на странице он не нужен.
TITLE_LINES = {
    'Политика конфиденциальности', 'интернет-сайта', 'ПОЛОЖЕНИЕ',
    'Об обработке и защите персональных данных работников (иных лиц) в ООО "АТМ"',
}


def is_heading(line):
    return bool(HEADING_CAPS.match(line) or HEADING_PLAIN.match(line))


def parse(path):
    lines = [l.rstrip() for l in io.open(path, encoding='utf-8')]
    try:
        i = lines.index(START) + 1
    except ValueError:
        i = 0
    blocks = []
    for line in lines[i:]:
        line = line.strip()
        if not line:
            continue
        if STOP.match(line):
            break
        if not blocks and line in TITLE_LINES:
            continue
        blocks.append({'kind': 'h2' if is_heading(line) else 'p', 'text': line})
    return blocks


def main():
    os.makedirs(OUT, exist_ok=True)
    docs = []
    for slug, title, fn in DOCS:
        blocks = parse(os.path.join(ROOT, 'text', fn))
        docs.append({'slug': slug, 'title': title, 'blocks': blocks})
        heads = sum(1 for b in blocks if b['kind'] == 'h2')
        print(f'{slug:22s} блоков {len(blocks):4d}, из них заголовков {heads}')
    io.open(os.path.join(OUT, 'legal.json'), 'w', encoding='utf-8').write(
        json.dumps(docs, ensure_ascii=False, indent=2))


main()
