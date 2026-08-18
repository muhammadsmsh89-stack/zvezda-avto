// Идентичность бренда и навигация. Рейтинг и счётчики — с Яндекс Карт
// (yandex.ru/maps/org/kholli_neyls/238234258183/), проверено 18.08.2026.
// Вторичный источник — 2ГИС (2gis.ru/tula/firm/70000001077106678): 5.0, 22 оценки.

export const studio = {
  name: "Holy Nails",
  shortName: "Holy Nails",
  city: "Тула",
  tagline: "Забота о вас в каждой детали",
} as const;

export const rating = {
  value: "5.0",
  ratingsCount: 225,
  reviewsCount: 186,
  source: "Яндекс Карты",
  verifiedAt: "2026-08-18",
  award: "Хорошее место 2026",
  fromPrice: "990 ₽",
} as const;

export const navLinks = [
  { href: "/services", label: "Услуги" },
  { href: "/masters", label: "Мастера" },
  { href: "/works", label: "Работы" },
  { href: "/prices", label: "Цены" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/contacts", label: "Контакты" },
] as const;

export const mobileNavLinks = navLinks;

export const footerNavLinks = navLinks;

export const footerDocuments = [{ label: "Политика конфиденциальности", href: "/privacy" }] as const;

export const ctaLabels = {
  primary: "Записаться онлайн",
  whatsapp: "Написать в WhatsApp",
  works: "Смотреть все работы",
  allServices: "Все услуги и цены",
  chooseMaster: "Записаться к мастеру",
  reference: "Отправить в WhatsApp",
} as const;

export const seo = {
  titleDefault: "Holy Nails — ногтевая студия в Туле, ул. Демонстрации 1Г | Маникюр, педикюр, наращивание",
  titleTemplate: "%s — Holy Nails, Тула",
  description:
    "Holy Nails — ногтевая студия в Туле, ТЦ «Утюг», ул. Демонстрации 1Г. Маникюр, педикюр, наращивание, дизайн ногтей. Рейтинг 5.0, 186 отзывов на Яндекс Картах, «Хорошее место 2026». Запись онлайн.",
  keywords: [
    "маникюр Тула",
    "ногтевая студия Тула",
    "педикюр Тула",
    "наращивание ногтей Тула",
    "Holy Nails Тула",
    "маникюр ТЦ Утюг",
    "дизайн ногтей Тула",
  ],
} as const;
