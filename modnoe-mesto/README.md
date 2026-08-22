# MODNOE MESTO — концепт-редизайн

Mobile-first редизайн сайта детейлинг-центра MODNOE MESTO (Москва,
ул. Подвойского, вл. 5/19). Подпроект монорепозитория `zvezda-avto`.

- **Публичный адрес:** https://muhammadsmsh89-stack.github.io/zvezda-avto/modnoe-mesto/
- **Источник контента:** https://modnoe-mesto.com/ — см. [REAL_ASSETS.md](./REAL_ASSETS.md)

## Запуск

```bash
npm install && npm run dev
```

Дев-сервер поднимается на порту **4700**.

Статический экспорт:

```bash
npm run build
```

При `NODE_ENV=production` включается `basePath = /zvezda-avto/modnoe-mesto`,
потому что `out/` мёржится внутрь корневого `out/` репозитория
(см. `.github/workflows/deploy.yml`).

## Структура

```
src/
  app/          layout, page, globals.css, icon.svg
  components/
    Header.tsx  MobileStickyCTA.tsx  Footer.tsx
    sections/   Hero TrustStrip SelectedProjects Services FeaturedCase
                WhyUs Process Materials Reviews Calculator FinalCTA Contacts
    ui/         Container Button SectionHeading Reveal GoalLink Wordmark Icons
  lib/          site contacts services projects reviews calculator basePath
public/media/   реальные фотографии студии (WebP)
```

Весь фактический контент вынесен в `src/lib/*` — тексты, цены, отзывы
и контакты правятся там, без захода в разметку.

## Дизайн-система

- **Палитра** — фирменная: графит `#0b0b0c` / `#131315`, тёплый белый `#f0eee9`,
  единственный акцент — фирменное золото `#c0994e` (взято с сайта компании).
- **Типографика** — одно семейство, Manrope 400–800, кириллица. Шесть ролей
  вместо произвольных размеров (токены `--text-*` в `globals.css`):
  `label` 12 · `micro` 13.5 · `small` 15 · `body` 16/1.6 ·
  `lead` 18→19.5 · `hero` 19→21. Ничего мельче 13.5 px, кроме
  разряженных капслок-меток.
- **Скругления** — два значения: 4 px (элементы управления) и 6 px (медиа).
- **Движение** — только появление секций (opacity + 14 px) и одно оседание
  hero-фото 1.045 → 1.00. Никакого параллакса и scroll-hijacking.
  `prefers-reduced-motion` оставляет переходы прозрачности и убирает движение.

## Заявки

Статический экспорт, бэкенда нет. Форма расчёта валидируется на клиенте,
формирует текст заявки, копирует его в буфер обмена и предлагает три реальных
канала: Telegram студии, звонок, письмо (`mailto:` с заполненным телом).
Для production нужен эндпоинт или интеграция с CRM — см. чек-лист в
[REAL_ASSETS.md](./REAL_ASSETS.md).
