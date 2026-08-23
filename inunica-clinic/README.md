# INUNICA clinic

Редизайн сайта клиники косметологии INUNICA (Белгород, ООО «АТМ»).
Sibling-проект в монорепо `zvezda-avto`, статический экспорт Next.js.

Публичный путь превью — `/zvezda-avto/inunica-clinic`.
Рабочий домен клиники — `inunica.ru`.

## Разработка

```bash
npm install
npm run dev        # http://localhost:4900
```

Превью в Claude Code: конфигурация `inunica-clinic` в `.claude/launch.json`
корня рабочей директории (не репозитория).

## Сборка и проверки

```bash
npm run build      # статический экспорт в out/
npm run check      # ссылки + SEO + доступность по out/
node scripts/check-contrast.mjs   # WCAG-контраст палитры
```

`npm run check` запускается **после** сборки: скрипты читают `out/`.

## Индексация

Превью на GitHub Pages — публичная копия сайта работающей клиники. Если её
проиндексирует поиск, она начнёт конкурировать в выдаче с настоящим inunica.ru,
поэтому по умолчанию сборка отдаёт `noindex` и `Disallow: /`.

При переносе на рабочий домен:

```bash
NEXT_PUBLIC_INDEXABLE=1 npm run build
```

## Импорт контента

Пайплайн переноса с Tilda лежит в `scripts/import/`. Он вежлив к серверу
(одно соединение, паузы, докачка) и переносит **контент, а не разметку**:
шаблоны, CSS, счётчики и tracking ID Tilda в проект не попадают.

| Шаг | Команда | Что делает |
| --- | --- | --- |
| 1 | `node scripts/import/crawl.mjs` | 11 страниц из `inunica.ru/sitemap.xml` → `raw/` |
| 2 | `python3 scripts/import/extract_prices.py` | Разбор 49 таблиц Tilda → `prices.json` |
| 3 | `python3 scripts/import/build_data.py` | Группировка, регистр, дедуп → `src/data/generated/prices.json` |
| 4 | `python3 scripts/import/build_legal.py` | Правовые тексты → `src/data/generated/legal.json` |
| 5 | `node scripts/import/fetch_assets.mjs` | Локальные копии фотографий → `assets-orig/` |
| 6 | `node scripts/optimize-media.mjs` | Отбор и пережатие в WebP → `public/` |
| 7 | `python3 scripts/import/make_inventory.py` | `CONTENT_INVENTORY.md`, `REDIRECT_MAP.md` |

Шаги 1 и 5 резюмируемы: повторный запуск докачивает только недостающее.

## Документы

- [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md) — палитра, типографика, движение, доступность
- [`BEFORE_AFTER.md`](BEFORE_AFTER.md) — что исправлено и что нужно от клиники
- [`CONTENT_INVENTORY.md`](CONTENT_INVENTORY.md) — что перенесено со старого сайта
- [`REDIRECT_MAP.md`](REDIRECT_MAP.md) — 301-редиректы для переезда

## Данные

Единственный источник правды по контактам и юридическим данным — `src/lib/site.ts`.
Цены — `src/data/generated/prices.json`, пересобирается из прайса клиники.
Ничего не выдумано: чего нет в источнике, нет и здесь.
