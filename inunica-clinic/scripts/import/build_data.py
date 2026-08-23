# -*- coding: utf-8 -*-
"""
Превращает сырой prices.json в типизированные данные сайта.

Три вещи, которые здесь происходят, и почему:

1. Группировка. У Tilda прайс — 49 плоских таблиц. Мы раскладываем их по шести
   направлениям, под которые на сайте есть отдельные страницы.

2. Читаемые заголовки разделов. В исходнике заголовком секции часто оказывается
   рекламное описание аппарата на три строки — вместо него ставим короткое имя.

3. Регистр и повторы. Исходник набран КАПСОМ, а название аппарата дублируется
   в каждой строке («МИКРОИГОЛЬЧАТЫЙ RF-ЛИФТИНГ НА АППАРАТЕ SYLFIRM X: ЛИЦО»).
   Общий префикс уходит в заголовок секции, остаток переводится в нормальный
   регистр. Цены, коды номенклатуры и смысл при этом не меняются.
"""
import io, os, re, json

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(os.path.dirname(ROOT), '..', 'src', 'data', 'generated')

# Направления сайта: slug -> (заголовок, индексы секций исходника)
DIRECTIONS = [
    ('consultation', 'Консультация и диагностика', [0]),
    ('lazernaya-epilyaciya', 'Лазерная эпиляция', [1, 2, 3]),
    ('apparatnaya-kosmetologiya-lica', 'Аппаратная косметология лица',
     [4, 5, 6, 7, 9, 12, 13]),
    ('apparatnaya-kosmetologiya-tela', 'Аппаратная косметология тела', [8, 10, 11]),
    ('inekcii-kapelnicy', 'Инъекции и капельницы', list(range(14, 39)) + [48]),
    ('esteticheskaya-kosmetologiya', 'Эстетическая косметология', [39, 40, 41, 42]),
    ('massazh', 'Массаж и SPA', [43, 44, 45, 46, 47]),
]

# Заголовок секции в исходнике часто = рекламный текст. Здесь — короткие имена.
TITLES = {
    0: 'Консультация и диагностика',
    1: 'Комплексы для женщин', 2: 'Женский прайс — зоны', 3: 'Мужской прайс — зоны',
    4: 'Микроигольчатый RF-лифтинг Sylfirm X', 5: 'Фототерапия ClearLight',
    6: 'Лазерная шлифовка CO₂ Bioxel', 7: 'Фотодинамическая терапия Revixan',
    8: 'RF-лифтинг', 9: 'Микротоки', 10: 'Вакуумный массаж', 11: 'Кавитация',
    12: 'Газожидкостный пилинг', 13: 'Холодная плазма',
    14: 'Плазмолифтинг Cortexil PRP', 15: 'Плазмолифтинг',
    16: 'Контурная пластика губ', 17: 'Контурная пластика носогубных складок',
    18: 'Контурная пластика подбородка, скул, висков и овала лица',
    19: 'Контурная пластика носослёзной борозды',
    20: 'Контурная пластика шеи, «кольца Венеры»',
    21: 'Бланширование мелких морщин',
    22: 'Belotero Hydro', 23: 'Filorga NCTF', 24: 'Novacutan', 25: 'Plinest',
    26: 'Prophilo', 27: 'Биоревитализация BioGel', 28: 'Гиалрипайер (Hyalrepair)',
    29: 'Мезотерапия MESO', 30: 'Мезотерапия волосистой части головы',
    31: 'Ботулинотерапия «Релатокс»', 32: 'СФЕРО*гель', 33: 'Коллост',
    34: 'Nithya', 35: 'Нитевой лифтинг', 36: 'Липолитики', 37: 'Скинбустеры',
    38: 'Экзосомы',
    39: 'Чистка лица', 40: 'Пилинги', 41: 'Маски и уходы', 42: 'Парафинотерапия',
    43: 'Массаж лица и зоны декольте', 44: 'Массаж тела', 45: 'Коррекция фигуры',
    46: 'SPA-процедуры', 47: 'Аппаратный массаж тела',
    48: 'Капельницы',
}

# Латиница, которую нельзя трогать: это аббревиатуры, а не «капс».
KEEP_LATIN = {
    'RF', 'PRP', 'CO2', 'SPA', 'LED', 'IPL', 'SMAS', 'DNA', 'NCTF', 'HA',
    'YBIO', 'SBIO', 'X', 'C71', 'MD', 'PDO',
}
# Кириллические аббревиатуры: их нельзя опускать вместе с остальным капсом.
KEEP_CYR = {'ФДТ', 'ФБМ', 'СМАС', 'ПРП', 'СПА', 'ЛПГ', 'РФ', 'УЗ'}
# Дубль-глосс перед латинским названием препарата: «(СТИЛАЖ ЛИПС) Stylage Lips».
GLOSS = re.compile(r'^\(\s*[А-ЯЁ][А-ЯЁ\s\-\d]*\)\s*(?=[A-Za-z])')
CYR_UPPER = re.compile(r'[А-ЯЁ]')
CYR_LOWER = re.compile(r'[а-яё]')
IS_CYR_CAPS = re.compile(r'^[А-ЯЁ\-]{4,}$')
# Точечные правки орфографии исходника: «е» вместо «ё» и пробелы вокруг дефиса.
SPELL = [
    (re.compile(r'\bПрием консультация\b'), 'Приём (консультация)'),
    (re.compile(r'\bПрием\b'), 'Приём'),
    (re.compile(r'\bприем\b'), 'приём'),
    (re.compile(r'\bЩеки\b'), 'Щёки'),
    (re.compile(r'\bщеки\b'), 'щёки'),
    (re.compile(r'\bБедра\b'), 'Бёдра'),
    (re.compile(r'\bбедра\b'), 'бёдра'),
    (re.compile(r'\bНоги\b'), 'Ноги'),
    (re.compile(r'(?<=[а-яё])\s+-\s+(?=[а-яё])'), '-'),
]


def normalize_case(s):
    """
    КАПС -> нормальный регистр.

    Кириллицу опускаем пословно и поднимаем первую букву предложения.
    Полностью заглавные латинские слова длиннее трёх букв считаем брендом и
    приводим к Title Case; аббревиатуры из KEEP_LATIN и KEEP_CYR не трогаем.
    Заодно убираем кириллический дубль-глосс перед латинским названием
    препарата и разделитель «I», доставшийся от вёрстки Tilda.
    """
    s = GLOSS.sub('', s.strip())
    s = re.sub(r'\s+[I|]\s+', ' · ', s)
    s = s.replace('Toп', 'Топ')  # опечатка исходника: латинские T и o

    # «Кричит», если заглавной кириллицы больше, чем строчной.
    shouting = len(CYR_UPPER.findall(s)) > len(CYR_LOWER.findall(s))

    def fix_word(w):
        core = w.strip('()«»,.:;+*/')
        if not core:
            return w
        if core.isascii():
            if core.isupper() and len(core) > 3 and core not in KEEP_LATIN:
                return w.replace(core, core.capitalize())
            return w
        # Кричащее слово опускаем даже когда строка в целом набрана нормально:
        # «… · ЛИЦО + ШЕЯ + ДЕКОЛЬТЕ» посреди обычного текста — тот же капс.
        if core not in KEEP_CYR and (shouting or IS_CYR_CAPS.match(core)):
            return w.replace(core, core.lower())
        return w

    out = ' '.join(fix_word(w) for w in s.split(' '))
    # Первая буква предложения — заглавная. Начало строки может быть занято
    # аббревиатурой в скобках: «(ФДТ) фотодинамическая терапия».
    out = re.sub(r'(^|^\([^)]+\)\s+|[.:!?]\s+|«)([а-яё])',
                 lambda m: m.group(1) + m.group(2).upper(), out)
    for rx, to in SPELL:
        out = rx.sub(to, out)
    return re.sub(r'\s+', ' ', out).strip()

def common_prefix(names):
    """
    Самый длинный общий префикс строк, обрезанный по «: ». Именно он дублирует
    название аппарата в каждой строке — его место в заголовке секции.
    """
    if len(names) < 2:
        return ''
    p = os.path.commonprefix(names)
    i = p.rfind(': ')
    return p[:i + 2] if i > 0 else ''


def main():
    src = json.load(io.open(os.path.join(ROOT, 'prices.json'), encoding='utf-8'))
    directions, total, trimmed = [], 0, 0

    for slug, title, indexes in DIRECTIONS:
        sections = []
        for i in indexes:
            raw = src[i]
            names = [r['name'] for r in raw['rows']]
            prefix = common_prefix(names)
            section_title = TITLES.get(i) or normalize_case(raw['title'])
            items = []
            for r in raw['rows']:
                name = r['name'][len(prefix):] if prefix and r['name'].startswith(prefix) else r['name']
                if prefix and name != r['name']:
                    trimmed += 1
                items.append({
                    'name': normalize_case(name),
                    'code': r['code'],
                    'codeName': r['codeName'],
                    'price': r['prices'][0]['value'],
                    'priceNote': r['prices'][0]['note'],
                })
            sections.append({'id': f'{slug}-{i}', 'title': section_title,
                             'unit': raw['columns'][0] if raw['columns'] else '1 процедура',
                             'items': items})
            total += len(items)
        directions.append({'slug': slug, 'title': title, 'sections': sections})

    os.makedirs(OUT, exist_ok=True)
    path = os.path.join(OUT, 'prices.json')
    io.open(path, 'w', encoding='utf-8').write(
        json.dumps(directions, ensure_ascii=False, indent=2))

    covered = {i for _, _, idx in DIRECTIONS for i in idx}
    missed = sorted(set(range(len(src))) - covered)
    print(f'направлений: {len(directions)}, позиций: {total}, '
          f'убрано дублей названия аппарата: {trimmed}')
    if missed:
        print('НЕ РАЗЛОЖЕНЫ по направлениям:', missed)
    for d in directions:
        print(f'  {d["slug"]:32s} {sum(len(s["items"]) for s in d["sections"]):4d}')


main()
