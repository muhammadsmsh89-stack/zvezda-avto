# Holy Nails — provenance реальных фотографий

Внутренний dev-документ. Не публикуется на сайте, не показывается посетителям.

Все 4 файла получены напрямую от пользователя (архив `holy-nails-real-assets.zip`,
локальные файлы на его Desktop) — не скачивались агентом самостоятельно.
Пользователь указал источник: официальная страница студии
https://holy-nails.clients.site/

---

## Asset 01 — интерьер

- **Оригинал:** `holy-nails-interior.jpg` (1138×640, JPEG)
- **Source platform:** Holy Nails, официальный сайт (clients.site)
- **Source page:** https://holy-nails.clients.site/
- **Integration method:** локальный файл → переконвертирован в AVIF (`sips`, без внешних загрузок)
- **What it shows:** интерьер студии — два маникюрных места, кирпичная стена, окно,
  розовая неоновая вывеска, сухоцветы, декор
- **Used in:** `ExperienceSection` («Два часа для себя»), landscape-визуал 16:10
- **Local file:** `public/images/holy-nails/interior.avif` (138 KB)
- **Confidence:** HIGH — предоставлено пользователем как материал именно Holy Nails
- **Notes:** реальный розовый бренд-акцент на фото учтён точечно — маленькая
  розовая точка (`#e8188c`) рядом с лейблом «Атмосфера», без смены общей палитры.

## Asset 02 — work-01 / «нюд»

- **Оригинал:** `holy-nails-work-01.jpg` (633×800, JPEG)
- **Source platform:** Holy Nails, официальный сайт (clients.site)
- **Source page:** https://holy-nails.clients.site/
- **Integration method:** локальный файл → кадрирован (`sips -c`, вручную откалиброванный
  crop) для исключения постороннего текстового оверлея «mur!», второй пары рук и обуви
  из исходного кадра → AVIF
- **What it shows:** кисть руки, нюдовый миндалевидный маникюр, два серебряных кольца
- **Used in:**
  - `Hero` — вторая (деталь) фотография
  - `RealWorksGallery` — второй, меньший real-work тайл (homepage + `/works`)
- **Local file:** `public/images/holy-nails/work-nude.avif` (13 KB, 300×380)
- **Confidence:** HIGH (сама работа) / кадрирование — художественное решение агента,
  чтобы убрать нерелевантный контент кадра
- **Notes:** оригинальный кадр — казуальное stories-фото с двумя людьми, текстом
  «mur!» и сердцем; для сайта использована только чистая часть с рукой и маникюром.

## Asset 03 — work-02 / «молочный»

- **Оригинал:** `holy-nails-work-02.jpg` (533×800, JPEG)
- **Source platform:** Holy Nails, официальный сайт (clients.site)
- **Source page:** https://holy-nails.clients.site/
- **Integration method:** локальный файл → два деривата: (1) crop 3:4 (533×711) для Hero,
  center-crop, композиция уже хорошо балансировала кадр; (2) нативный кадр 533×800
  без кропа для Works → AVIF
- **What it shows:** крупный план руки, миндалевидные ногти, молочно-белый гель-лак
  с голографическими блёстками, мягкое боке (лицо/волосы на фоне)
- **Used in:**
  - `Hero` — главная (первая) фотография, `priority` (LCP)
  - `RealWorksGallery` — крупный, главный real-work тайл (homepage + `/works`)
- **Local files:**
  - `public/images/holy-nails/work-milky.avif` (22 KB, 533×711 — hero-crop)
  - `public/images/holy-nails/work-milky-full.avif` (25 KB, 533×800 — works-тайл)
- **Confidence:** HIGH
- **Notes:** протестирован как Hero-кандидат согласно брифу — визуально сильнее
  абстрактного placeholder и не превращает Hero в generic salon landing (композиция
  Hero — asymmetric, с typography и CTA — сохранена без изменений).

## Asset 04 — логотип

- **Оригинал:** `holy-nails-logo.jpg` (150×150, JPEG, ярко-розовый)
- **Source platform:** Holy Nails, официальный сайт (clients.site)
- **Source page:** https://holy-nails.clients.site/
- **Integration method:** локальный файл → переконвертирован в AVIF, сохранён как
  reference-asset
- **Used in:** нигде в текущем UI
- **Local file:** `public/images/holy-nails/logo-reference.avif` (6 KB) — не импортируется
  ни одним компонентом
- **Confidence:** HIGH (что это реальный лого), но:
- **Почему не использован:** разрешение 150×150 слишком низкое для чёткого показа
  в шапке/крупных блоках (будет пиксельным на Retina); базовый цвет — насыщенный
  розовый, прямое использование потянуло бы за собой весь site chrome в «розовый
  beauty template», чего бренд-бриф прямо запрещает. Типографический wordmark
  `HOLY NAILS` в Header остаётся. Файл сохранён локально, чтобы владелец мог сверить
  и при желании прислать более качественный/актуальный логотип для будущей интеграции.

---

## Что не использовано и почему

- Фильтр-категории старой Works-секции (5 направлений × абстрактные placeholder-тайлы)
  — удалены полностью вместе с `WorksGrid.tsx` и `lib/works.ts`, так как показывать
  8–10 «работ» при наличии только 2 подтверждённых реальных фото было бы нечестно
  (прямое указание брифа). Вместо этого — честная 2-фото галерея + ссылки на
  Instagram/VK студии за остальным портфолио.
- Portrait-фотографии мастеров (Екатерина М., Марьям, Мария) — в переданном архиве
  их не было. `MastersGrid` продолжает использовать нейтральный editorial
  placeholder — ошибочно приписывать случайное фото конкретному имени хуже, чем
  оставить его без фото.
