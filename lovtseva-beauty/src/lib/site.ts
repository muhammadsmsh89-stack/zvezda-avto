// Идентичность бренда и навигация. Рейтинг и счётчики — с Яндекс Карт
// (yandex.ru/maps/org/tsentr_krasoty_natalyi_lovtsevoy/1281310175/), проверено 17.08.2026.
// Вторичный источник — 2ГИС (2gis.ru/ryazan/firm/70000001006482335): 4.9, 242 оценки, 231 отзыв.

export const studio = {
  name: "Центр красоты Натальи Ловцевой",
  shortName: "Центр Натальи Ловцевой",
  city: "Рязань",
  tagline: "Команда специалистов разных направлений красоты — в одном центре",
} as const;

export const rating = {
  value: "5.0",
  ratingsCount: 450,
  reviewsCount: 297,
  source: "Яндекс Карты",
  verifiedAt: "2026-08-17",
  award: "Хорошее место 2026",
} as const;

export const navLinks = [
  { href: "/services", label: "Услуги" },
  { href: "/masters", label: "Мастера" },
  { href: "/works", label: "Работы" },
  { href: "/prices", label: "Прайс" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/about", label: "О центре" },
] as const;

export const mobileNavLinks = [...navLinks, { href: "/contacts", label: "Контакты" }] as const;

export const footerNavLinks = mobileNavLinks;

export const footerDocuments = [{ label: "Политика конфиденциальности", href: "/privacy" }] as const;

export const ctaLabels = {
  primary: "Записаться",
  chooseService: "Выбрать услугу",
  chooseMaster: "Выбрать мастера",
  whatsapp: "Написать в WhatsApp",
  works: "Наши работы",
  prices: "Весь прайс",
  allServices: "Все услуги и цены",
} as const;

export const seo = {
  titleDefault:
    "Центр красоты Натальи Ловцевой — Рязань, Быстрецкая, 20 | Стрижки, ногти, косметология, лазер",
  titleTemplate: "%s — Центр красоты Натальи Ловцевой",
  description:
    "Центр красоты Натальи Ловцевой в Рязани на Быстрецкой, 20: волосы, ногти, косметология, лазерная эпиляция, перманентный макияж, брови и ресницы, массаж, пирсинг, солярий. Рейтинг 5.0, 297 отзывов на Яндекс Картах.",
  keywords: [
    "центр красоты Рязань",
    "салон красоты Наталья Ловцева",
    "японская биозавивка Рязань",
    "лазерная эпиляция Рязань",
    "маникюр Быстрецкая",
    "перманентный макияж Рязань",
    "косметология Рязань",
  ],
} as const;
