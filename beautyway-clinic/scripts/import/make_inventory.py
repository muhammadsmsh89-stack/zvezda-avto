# -*- coding: utf-8 -*-
"""CONTENT_INVENTORY.md + REDIRECT_MAP.md из extracted.json и sitemap."""
import json, os, re
from collections import Counter

ROOT = os.path.dirname(os.path.abspath(__file__))
PROJ = "/Users/patyasaidova/Desktop/10K websites/zvezda-avto/beautyway-clinic"
D = os.path.join(PROJ, 'src/data/generated')

docs = json.load(open(os.path.join(ROOT, 'extracted.json'), encoding='utf-8'))
by_path = {d['path'].rstrip('/') or '/': d for d in docs}
sitemap_urls = [u.strip() for u in open(os.path.join(ROOT, 'urls.txt'), encoding='utf-8') if u.strip()]
failures = {u: why for u, why in json.load(open(os.path.join(ROOT, 'crawl-failures.json'), encoding='utf-8'))}

load = lambda n: json.load(open(os.path.join(D, n + '.json'), encoding='utf-8'))
built = {
    'service':     {x['slug']: '/uslugi/' + x['slug'] for x in load('services')},
    'problem':     {x['slug']: '/problem/' + x['slug'] for x in load('problems')},
    'preparation': {x['slug']: '/preparaty/' + x['slug'] for x in load('preparations')},
    'doctor':      {x['slug']: '/vrachi/' + x['slug'] for x in load('doctors')},
    'equipment':   {x['slug']: '/oborudovanie/' + x['slug'] for x in load('equipment')},
    'article':     {x['slug']: '/blog/' + x['slug'] for x in load('articles')},
}
STATIC_ROUTES = {
    '/': '/', '/uslugi': '/uslugi', '/problem': '/problem', '/vrachi': '/vrachi',
    '/oborudovanie': '/oborudovanie', '/preparaty': '/preparaty', '/blog': '/blog',
    '/price': '/price', '/promo': '/promo', '/abonementy': '/abonementy',
    '/portfolio': '/portfolio', '/reviews': '/reviews', '/video': '/video',
    '/contacts': '/contacts', '/contacts/strastnoy': '/contacts/strastnoy',
    '/contacts/myasnitskaya': '/contacts/myasnitskaya', '/about-us': '/about-us',
    '/liczenzii-i-sertifikatyi': '/liczenzii-i-sertifikatyi', '/pacientam': '/pacientam',
    '/sposobyi-oplatyi': '/sposobyi-oplatyi',
    '/politika-konfidencialnosti': '/politika-konfidencialnosti',
    '/soglasie-na-obrabotku-personalnykh-dannykh': '/soglasie-na-obrabotku-personalnykh-dannykh',
    '/vyishestoyashhie-organizaczii': '/vyishestoyashhie-organizaczii',
}
# Куда уводим то, что не получило собственной страницы.
FALLBACK = {
    'kompleksyi': ('/uslugi', 'Комплекс сведён в каталог услуг: отдельные процедуры перенесены'),
    'menyu-uslugi': ('/uslugi', 'Технический раздел меню; на исходном сайте отдаёт 404'),
    'kosmecevtika': ('/uslugi', 'Космецевтика: витрина товаров, вне объёма редизайна'),
    'kak-nas-najti': ('/contacts', 'Дублирует страницу контактов'),
    'calculator': ('/price', 'Калькулятор требует бэкенда; заменён живым прайсом с поиском'),
    'gift-certificate': ('/promo', 'Подарочная карта: продажа требует бэкенда'),
    'discount': ('/promo', 'Акция «приведи подругу» сведена в раздел акций'),
    'search': ('/uslugi', 'Поиск по сайту заменён поиском в каталоге'),
    'sitemap': ('/uslugi', 'HTML-карта сайта заменена навигацией и sitemap.xml'),
    'vk': ('/contacts', 'Страница соцсетей сведена в контакты'),
}

def dest_for(d):
    p = d['path'].rstrip('/') or '/'
    t = d['type']
    if p in STATIC_ROUTES: return STATIC_ROUTES[p], 'перенесено', ''
    for kind, table in built.items():
        prefix = {'service': '/uslugi/', 'problem': '/problem/', 'preparation': '/preparaty/',
                  'doctor': '/vrachi/', 'equipment': '/oborudovanie/', 'article': '/blog/'}[kind]
        if t == kind:
            slug = p[len(prefix):] if p.startswith(prefix) else p.strip('/')
            if slug in table: return table[slug], 'перенесено', ''
    seg = p.strip('/').split('/')[0]
    for key, (dest, why) in FALLBACK.items():
        if seg.lower().startswith(key): return dest, 'сведено', why
    return '/uslugi', 'сведено', 'Страница не имеет отдельного шаблона в редизайне'

rows, redirects = [], []
stat = Counter()
for u in sitemap_urls:
    p = u.replace('https://bwclinic.ru', '').rstrip('/') or '/'
    d = by_path.get(p)
    if d is None:
        why = failures.get(u, 'не скачано')
        code = '404 на исходном сайте' if str(why) == '404' else str(why)
        rows.append({'url': u, 'type': '—', 'title': '', 'desc': '', 'h1': '',
                     'dest': '—', 'status': 'не перенесено', 'note': code,
                     'prices': 0, 'faq': 0, 'imgs': 0, 'svc': '', 'doc': '', 'prep': ''})
        stat['не перенесено'] += 1
        continue
    dest, status, note = dest_for(d)
    stat[status] += 1
    rows.append({
        'url': u, 'type': d['type'],
        'title': (d['title'] or '').replace('|', '/')[:110],
        'desc': (d['description'] or '').replace('|', '/')[:110],
        'h1': (d['h1'] or '').replace('|', '/')[:70],
        'dest': dest, 'status': status, 'note': note,
        'prices': len(d['prices']), 'faq': len(d['faq']),
        'imgs': len([i for i in d['images'] if 'uploaded' in i['src'] or 'gallery' in i['src']]),
        'svc': str(len(d['relServices'])), 'doc': str(len(d['relDoctors'])),
        'prep': str(len(d['relPreparations'])),
    })
    if p != dest and p != '/':
        redirects.append((p, dest, status, note or 'смена структуры раздела'))
    can = d.get('canonical')
    if can:
        cp = can.replace('https://bwclinic.ru', '').rstrip('/')
        if cp and cp != p:
            redirects.append((p, dest, 'дубль', f'исходный canonical отличается: {cp}'))

CHECKED = '21 августа 2026'
out = [
 '# CONTENT_INVENTORY',
 '',
 f'Инвентаризация контента bwclinic.ru. Дата сверки — **{CHECKED}**.',
 f'Источник списка: `https://bwclinic.ru/sitemap.xml` ({len(sitemap_urls)} URL).',
 '',
 '## Итог',
 '',
 '| Показатель | Значение |',
 '| --- | --- |',
 f'| URL в исходном sitemap | {len(sitemap_urls)} |',
 f'| Успешно скачано импортёром | {len(docs)} |',
 f'| Перенесено на собственную страницу | {stat["перенесено"]} |',
 f'| Сведено в существующий раздел | {stat["сведено"]} |',
 f'| Не перенесено | {stat["не перенесено"]} |',
 '',
 '## Что перенесено по типам',
 '',
 '| Тип | Страниц в редизайне |',
 '| --- | --- |',
]
for k, label in [('service', 'Услуги'), ('problem', 'Проблемы и зоны'), ('article', 'Статьи блога'),
                 ('preparation', 'Препараты'), ('doctor', 'Врачи'), ('equipment', 'Оборудование')]:
    out.append(f'| {label} | {len(built[k])} |')
out += ['| Статические разделы | %d |' % len(STATIC_ROUTES), '',
        '## Полная таблица', '',
        '| # | Исходный URL | Тип | H1 | Title | Description | Цены | FAQ | Изобр. | Связ. услуги | Врачи | Препараты | Destination route | Статус | Примечание | Проверено |',
        '| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |']
for i, r in enumerate(rows, 1):
    out.append('| {} | `{}` | {} | {} | {} | {} | {} | {} | {} | {} | {} | {} | `{}` | {} | {} | {} |'.format(
        i, r['url'], r['type'], r['h1'], r['title'], r['desc'], r['prices'], r['faq'], r['imgs'],
        r['svc'], r['doc'], r['prep'], r['dest'], r['status'], r['note'], CHECKED))

open(os.path.join(PROJ, 'CONTENT_INVENTORY.md'), 'w', encoding='utf-8').write('\n'.join(out) + '\n')
print('CONTENT_INVENTORY.md:', len(rows), 'строк', stat)

# ---- REDIRECT_MAP
seen, uniq = set(), []
for a, b, st, why in redirects:
    if (a, b, st) in seen: continue
    seen.add((a, b, st)); uniq.append((a, b, st, why))
rm = ['# REDIRECT_MAP', '',
      f'Карта соответствия старых адресов bwclinic.ru новым маршрутам. Сверено {CHECKED}.', '',
      'Slug сохранён везде, где это было возможно: услуги, проблемы, препараты, врачи,',
      'оборудование, статьи и юридические страницы живут по тем же адресам.',
      'Ниже перечислено только то, что изменилось или требует canonical.', '',
      '| Старый путь | Новый путь | Тип | Причина |', '| --- | --- | --- | --- |']
for a, b, st, why in sorted(uniq):
    rm.append(f'| `{a}` | `{b}` | {st} | {why} |')
rm += ['', f'Всего записей: {len(uniq)}.', '',
       '## Дубли на исходном сайте', '',
       'На bwclinic.ru часть страниц доступна по двум адресам: URL из sitemap и другой',
       'адрес в `<link rel="canonical">`. Пример: `/uslugi/uvelichenie-gub` отдаёт',
       'canonical `/uslugi/yvelichenie-gyb`. В редизайне такие страницы существуют в',
       'одном экземпляре; второй адрес указан в таблице выше как `дубль`.']
open(os.path.join(PROJ, 'REDIRECT_MAP.md'), 'w', encoding='utf-8').write('\n'.join(rm) + '\n')
print('REDIRECT_MAP.md:', len(uniq), 'записей')
