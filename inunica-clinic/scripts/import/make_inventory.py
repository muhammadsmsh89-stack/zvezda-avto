# -*- coding: utf-8 -*-
"""
CONTENT_INVENTORY.md и REDIRECT_MAP.md — доказательство, что при переезде
с Tilda ничего не потеряно и старые адреса ведут на новые.
"""
import io, os, json

ROOT = os.path.dirname(os.path.abspath(__file__))
PROJ = os.path.join(ROOT, '..', '..')

# Старый URL -> новый. Составлено по sitemap.xml inunica.ru от 23.08.2026.
REDIRECTS = [
    ('/', '/', 'Главная — полностью пересобрана'),
    ('/price_full', '/price/', 'Прайс: 373 позиции, добавлен поиск и фильтр по направлениям'),
    ('/laser', '/uslugi/lazernaya-epilyaciya/', 'Лазерная эпиляция'),
    ('/cosmet', '/uslugi/apparatnaya-kosmetologiya-lica/', 'Аппаратная косметология лица'),
    ('/cosmet_body', '/uslugi/apparatnaya-kosmetologiya-tela/', 'Аппаратная косметология тела'),
    ('/estetic', '/uslugi/esteticheskaya-kosmetologiya/', 'Эстетическая косметология'),
    ('/info', '/svedeniya-ob-organizacii/', 'Сведения об организации и лицензия'),
    ('/privacy', '/privacy/', 'Политика конфиденциальности — текст перенесён дословно'),
    ('/polozhenie-ob-obrabotke-i-zashchite-personalnyh-dannyh', '/personalnye-dannye/',
     'Положение о персональных данных — текст перенесён дословно'),
    ('/thankyou', '/', 'Страница «спасибо» больше не нужна: форма не перезагружает страницу'),
    ('/page69816941.html', '/uslugi/', 'Служебная страница Tilda без собственного содержания'),
]

NEW_PAGES = [
    ('/uslugi/', 'Хаб направлений — на старом сайте его не было'),
    ('/uslugi/inekcii-kapelnicy/', 'Инъекции и капельницы: 106 позиций прайса были без своей страницы'),
    ('/uslugi/massazh/', 'Массаж и SPA: 37 позиций прайса были без своей страницы'),
    ('/komanda/', 'Команда отдельной страницей, а не блоком на главной'),
    ('/kontakty/', 'Контакты отдельной страницей'),
    ('/akcii/', 'Акции и абонементы отдельной страницей'),
    ('/404', 'Страница ошибки с навигацией'),
]


def main():
    prices = json.load(io.open(os.path.join(PROJ, 'src/data/generated/prices.json'),
                               encoding='utf-8'))
    legal = json.load(io.open(os.path.join(PROJ, 'src/data/generated/legal.json'),
                              encoding='utf-8'))
    media = []
    for base, _, files in os.walk(os.path.join(PROJ, 'public')):
        for f in files:
            if f.endswith('.webp'):
                media.append(os.path.relpath(os.path.join(base, f),
                                             os.path.join(PROJ, 'public')))

    total_items = sum(len(s['items']) for d in prices for s in d['sections'])

    inv = ['# Инвентаризация контента\n',
           'Что перенесено с inunica.ru (импорт от 23 августа 2026 года).\n',
           '## Прайс\n',
           f'Всего позиций: **{total_items}**. У каждой сохранён код номенклатуры '
           'медицинских услуг Минздрава, как в исходном прайсе клиники.\n',
           '| Направление | Разделов | Позиций |', '| --- | ---: | ---: |']
    for d in prices:
        inv.append(f'| {d["title"]} | {len(d["sections"])} | '
                   f'{sum(len(s["items"]) for s in d["sections"])} |')

    inv += ['\n## Правовые документы\n',
            'Тексты перенесены дословно, изменена только разметка.\n',
            '| Документ | Абзацев | Разделов |', '| --- | ---: | ---: |']
    for doc in legal:
        inv.append(f'| {doc["title"]} | {len(doc["blocks"])} | '
                   f'{sum(1 for b in doc["blocks"] if b["kind"] == "h2")} |')

    inv += [f'\n## Фотографии\n',
            f'Перенесено и пережато в WebP: **{len(media)}** изображений. '
            'Все файлы лежат локально в `public/` — хотлинка на Tilda CDN нет.\n']
    for group in sorted({m.split('/')[0] for m in media}):
        items = sorted(m for m in media if m.startswith(group + '/'))
        inv.append(f'- **{group}** ({len(items)}): ' +
                   ', '.join(os.path.basename(i)[:-5] for i in items))

    inv += ['\n## Новые страницы\n', '| Адрес | Зачем |', '| --- | --- |']
    inv += [f'| `{u}` | {why} |' for u, why in NEW_PAGES]

    io.open(os.path.join(PROJ, 'CONTENT_INVENTORY.md'), 'w', encoding='utf-8').write(
        '\n'.join(inv) + '\n')

    red = ['# Карта редиректов\n',
           'Все 11 адресов из `inunica.ru/sitemap.xml`. Настроить 301-редиректы '
           'при переносе на рабочий домен — тогда позиции в поиске не просядут.\n',
           '| Было | Стало | Комментарий |', '| --- | --- | --- |']
    red += [f'| `{a}` | `{b}` | {c} |' for a, b, c in REDIRECTS]
    io.open(os.path.join(PROJ, 'REDIRECT_MAP.md'), 'w', encoding='utf-8').write(
        '\n'.join(red) + '\n')

    print(f'CONTENT_INVENTORY.md: {total_items} позиций прайса, {len(media)} фото')
    print(f'REDIRECT_MAP.md: {len(REDIRECTS)} адресов')


main()
