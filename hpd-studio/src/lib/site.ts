// Идентичность бренда и навигация. Рейтинг и счётчики — с живой карточки
// Яндекс Карт (yandex.ru/maps/org/hpd_studio/227086737296/), проверено 17.08.2026.

export const studio = {
  name: "HPD",
  fullName: "HPD Studio",
  tagline: "Детейлинг. Защита. Восстановление.",
  city: "Воронеж",
} as const;

export const rating = {
  value: "5,0",
  ratingsCount: 56,
  reviewsCount: 48,
  source: "Яндекс Карты",
  award: "Хорошее место 2026",
  verifiedAt: "2026-08-17",
} as const;

export const navLinks = [
  { href: "/works", label: "Работы" },
  { href: "/services", label: "Услуги" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/contacts", label: "Контакты" },
] as const;

export const mobileNavLinks = [
  { href: "/works", label: "Работы" },
  { href: "/services", label: "Услуги" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/about", label: "О студии" },
  { href: "/contacts", label: "Контакты" },
] as const;

export const footerDocuments = [{ label: "Политика конфиденциальности", href: "/privacy" }] as const;

export const ctaLabels = {
  primary: "Записать автомобиль",
  works: "Посмотреть работы",
  cost: "Узнать стоимость",
  whatsapp: "Написать в WhatsApp",
} as const;

export const seo = {
  titleDefault: "HPD Studio — детейлинг в Воронеже | Пушкинская, 8",
  titleTemplate: "%s — HPD Studio",
  description:
    "HPD Studio — детейлинг-студия в центре Воронежа на Пушкинской, 8. Полировка, защита кузова, химчистка салона, тонировка, шумоизоляция. Рейтинг 5,0, 48 отзывов на Яндекс Картах.",
  keywords: [
    "детейлинг Воронеж",
    "полировка авто Воронеж",
    "оклейка плёнкой Воронеж",
    "химчистка салона Воронеж",
    "тонировка Воронеж",
    "керамика на авто Воронеж",
    "HPD Studio",
  ],
} as const;
