// Идентичность бренда и навигация. Рейтинг и счётчики — с Яндекс Карт
// (yandex.ru/maps/org/seychas/132539768768), проверено 14.08.2026.

export const studio = {
  name: "SEYCHAS",
  tagline: "Лучшее время для себя",
  city: "Тула",
} as const;

export const rating = {
  value: "5.0",
  ratingsCount: 165,
  reviewsCount: 112,
  source: "Яндекс Карты",
  verifiedAt: "2026-08-14",
} as const;

export const navLinks = [
  { href: "/services", label: "Услуги" },
  { href: "/masters", label: "Мастера" },
  { href: "/works", label: "Работы" },
  { href: "/prices", label: "Цены" },
  { href: "/about", label: "О студии" },
  { href: "/contacts", label: "Контакты" },
] as const;

export const mobileNavLinks = [
  { href: "/services", label: "Услуги" },
  { href: "/masters", label: "Мастера" },
  { href: "/works", label: "Работы" },
  { href: "/prices", label: "Цены" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/about", label: "О студии" },
  { href: "/faq", label: "Вопросы" },
  { href: "/contacts", label: "Контакты" },
] as const;

export const footerDocuments = [{ label: "Политика конфиденциальности", href: "/privacy" }] as const;

export const ctaLabels = {
  primary: "Записаться",
  chooseMaster: "Выбрать мастера",
  whatsapp: "Написать в WhatsApp",
  works: "Наши работы",
  prices: "Актуальная стоимость",
} as const;

export const seo = {
  titleDefault: "SEYCHAS — студия красоты в Туле | Ногти, брови, ресницы",
  titleTemplate: "%s — SEYCHAS",
  description:
    "SEYCHAS — студия красоты в Туле на ул. Льва Толстого, 81. Маникюр, педикюр, брови, ресницы. Рейтинг 5.0, 112 отзывов на Яндекс Картах. Запись онлайн через DIKIDI.",
  keywords: [
    "салон красоты Тула",
    "маникюр Тула",
    "педикюр Тула",
    "брови Тула",
    "наращивание ресниц Тула",
    "ногтевая студия Тула",
    "SEYCHAS Тула",
  ],
} as const;
