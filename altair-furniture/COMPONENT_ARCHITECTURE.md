# COMPONENT_ARCHITECTURE — Альтаир

Next.js 16 (App Router) + TypeScript + Tailwind v4 + framer-motion + clsx. Одностраничный
editorial-опыт с якорными секциями (см. IA в DESIGN_DIRECTION.md §11), статический экспорт
по конвенции репозитория (`output: "export"`, basePath на проде).

```
altair-furniture/
  DESIGN_DIRECTION.md
  CONTENT_MAP.md
  COMPONENT_ARCHITECTURE.md
  scripts/dev.sh
  src/
    app/
      layout.tsx          — шрифты, metadata, JSON-LD (LocalBusiness), Header/Footer/MobileCta
      page.tsx             — сборка секций по порядку IA
      globals.css           — design tokens, base styles, reduced-motion
      robots.ts
      sitemap.ts
      privacy/page.tsx      — заглушка политики конфиденциальности
      consent/page.tsx      — заглушка согласия на обработку ПДн
    components/
      Header.tsx             — прозрачный→плотный при скролле, мобильное меню
      Footer.tsx
      MobileCta.tsx           — sticky нижняя панель (звонок/WhatsApp/рассчитать)
      icons.tsx                — инлайн SVG, единая толщина линии
      illustrations/
        AxonKitchen.tsx        — аксонометрия кухонного модуля (hero + категория «Кухни»)
        SectionWardrobe.tsx    — разрез шкафа
        DressingPlan.tsx       — план гардеробной сверху с размерными линиями
        BedElevation.tsx       — фронтальная проекция кровати
        CustomExploded.tsx     — exploded view для «Индивидуальные проекты»
        DrawingFrame.tsx       — общая рамка чертежа (рамка листа, штамп, координатная сетка)
      sections/
        Hero.tsx
        ProofStrip.tsx
        Philosophy.tsx
        Categories.tsx           — index-лента с переключением иллюстрации
        Projects.tsx              — editorial-ритм портфолио
        ProjectCard.tsx            — используется Projects, варианты layout через prop
        Process.tsx                 — вертикальная таймлиния
        Calculator/
          CalculatorSection.tsx
          BriefForm.tsx               — стейт-машина idle/step/loading/success/error
          StepFurnitureType.tsx
          StepSpace.tsx
          StepContact.tsx
        Materials.tsx
        Reviews.tsx
        Faq.tsx                        — accordion, keyboard-доступный
        FinalCta.tsx
        Contacts.tsx                    — адрес, карта-заглушка (lazy), способы связи
      ui/
        Reveal.tsx                       — обёртка scroll-reveal (opacity/clip), уважает reduced-motion
        DrawPath.tsx                       — SVG path draw-on-scroll (framer-motion pathLength)
        SectionHeading.tsx
        Container.tsx                       — container-wide/content/text по design tokens
        NumberTag.tsx                        — mono-индекс (01, 02…)
        WhatsAppLink.tsx                      — генерирует wa.me ссылку с контекстным текстом
    data/
      company.ts       — контакты, соцсети, рейтинг; verified-флаги
      categories.ts
      projects.ts        — placeholder-проекты, image: null + OWNER_ASSET_REQUIRED
      process.ts
      reviews.ts           — 3 реальных отзыва
      faq.ts
    lib/
      analytics.ts         — трекинг-абстракция (см. §28 брифа), no-op пока нет ключей
      whatsapp.ts             — форматирование сообщений по контексту
      basePath.ts
```

## Ключевые решения

- **Один маршрут `/`.** Портфолио, категории и калькулятор — секции, не отдельные страницы:
  это соответствует объёму реально подтверждённых данных сегодня и конвенции соседних
  премиальных сайтов репозитория (naturel-studio, zvezda-avto). `/privacy` и `/consent` —
  отдельные страницы, т.к. юридический текст не должен жить внутри лендинга.
- **BriefForm — client component**, локальный стейт `idle | submitting | success | error`.
  Без backend/CRM интеграции в этой сессии (не запрошена, требует секретов) — при сабмите
  форма формирует контекстное сообщение и после «успеха» предлагает продублировать заявку в
  WhatsApp одним тапом. Архитектура готова принять реальный `/api/lead` по образцу
  `irbis-mebel/src/lib/leads/*`, если владелец подключит канал приёма заявок (email/Telegram).
- **Иллюстрации — переиспользуемые SVG-компоненты**, а не картинки: одна иллюстрация на
  категорию, используется и в Categories, и в Hero, и в соответствующих карточках Projects.
- **DrawPath/Reveal** — единственные motion-примитивы; все секции используют их вместо
  point-in-place анимаций, чтобы ритм проявления был единым, но не одинаковым (разный
  delay/direction по контексту секции).
- **`lib/analytics.ts`** экспортирует `track(event, payload?)` — no-op консоль-лог в dev,
  готовый интерфейс для подключения реального провайдера. События по списку из ТЗ (§28).
- **Static export**: `next.config.ts` — `output: "export"`, `images.unoptimized: true`
  (как во всех соседних проектах), `basePath` продовый `/zvezda-avto/altair-furniture`.
