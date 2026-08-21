# BeautyWay Clinic — мобильный редизайн

Демонстрационный редизайн сайта клиники эстетической медицины
[bwclinic.ru](https://bwclinic.ru/). Не официальный сайт клиники.

Изолированный подпроект монорепозитория `zvezda-avto`. Публичный путь —
`/zvezda-avto/beautyway-clinic`, собирается статическим экспортом Next.js и
мёржится в общий `out/` (см. `.github/workflows/deploy.yml` в корне).

## Запуск

```bash
npm install
npm run dev          # http://localhost:4500
```

```bash
npm run build        # статический экспорт в out/
npm run typecheck
npm run lint
```

## Проверки

```bash
node scripts/check-links.mjs   # ссылки, ассеты, пустые href, заглушки, alt
node scripts/check-a11y.mjs    # H1, lang, landmarks, доступные имена, дубли id
node scripts/check-seo.mjs     # мета, canonical, OG, JSON-LD, дубли
node scripts/serve-out.mjs     # локальный сервер экспорта с реальным basePath
```

Все три проверки запускаются после `npm run build` и читают `out/`.

## Структура

```
src/
  app/                 маршруты (App Router, статический экспорт)
  components/          UI и секции; client-компоненты не тянут контентный слой
  data/
    generated/         результат импортёра — JSON с контентом bwclinic.ru
    concerns.ts        связка «запрос пациента → услуга → проблемы»
    promos.ts          акции с validUntil и датой проверки
    abonements.ts      абонементы
    homeFaq.ts         FAQ главной (организационные факты)
  lib/
    site.ts            проверяемые факты о клинике, каналы записи
    content.ts         типизированный доступ к перенесённому контенту
    seo.tsx            мета, canonical, JSON-LD
    plural.ts          русское согласование числительных
  fonts/               self-hosted Prata + Inter (latin + cyrillic)
public/
  media/               локальные копии изображений (AVIF + WebP)
  video/               6 пережатых видеоотзывов
scripts/
  import/              импортёр контента с bwclinic.ru
```

## Документация

| Файл | О чём |
| --- | --- |
| `CONTENT_INVENTORY.md` | Все 611 URL исходного sitemap: тип, мета, куда перенесены, статус |
| `REDIRECT_MAP.md` | Изменённые адреса и дубли исходного сайта |
| `SOURCE_ASSET_MANIFEST.md` | Каждое изображение и видео: источник, где используется, оптимизация |
| `MEDICAL_COPY_AUDIT.md` | Снятые абсолютные обещания и что оставлено осознанно |
| `SEO_AUDIT.md` | Мета, разметка, дубли, решение по AggregateRating |
| `DESIGN_SYSTEM.md` | Палитра из логотипа, контраст, типографика, правила движения |
| `HIGGSFIELD_REPORT.md` | Проверка доступности Higgsfield и решение по генеративному видео |

## Важное про демоверсию

- Весь сайт отдаёт `noindex, nofollow`, `robots.txt` — `Disallow: /`.
- Аналитика, GTM, cookies и tracking ID действующей клиники не переносились.
- Персональные данные сайт не собирает: запись идёт в официальный Telegram
  клиники (`@beauty_way_clinic`) или по телефону. Форм с ПДн нет, поэтому нет
  и чекбокса согласия — согласовывать нечего.
- Информационный канал (`@bwclinic`) и аккаунт записи (`@beauty_way_clinic`)
  разведены и подписаны по-разному.
- WhatsApp не используется: на исходном сайте кнопка с легаси-классом `wame`
  открывает Telegram, а номер WhatsApp нигде не подтверждён.

## Перед реальным запуском

1. Снять `ROBOTS` в `src/lib/seo.tsx` и `Disallow` в `src/app/robots.ts`.
2. Заменить `SITE_URL` на боевой домен, пересобрать `sitemap.xml`.
3. Подтвердить у клиники цифры «более 30 000 клиентов» и «8 682 отзыва»
   (см. `MEDICAL_COPY_AUDIT.md`).
4. Пересверить цены и сроки акций — данные зафиксированы на 21 августа 2026.
5. Убрать строку о демонстрационном редизайне из футера (`DEMO_NOTICE`).
