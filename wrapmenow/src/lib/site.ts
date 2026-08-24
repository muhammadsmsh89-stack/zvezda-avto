// Идентичность бренда и навигация. Рейтинг и счётчики — с живой карточки
// Яндекс Карт (yandex.com/maps/org/wrapmenow/115250628221/reviews/),
// проверено 23.08.2026: 5,0 · 385 оценок · 218 отзывов · 198 фото ·
// «Хорошее место 2026». Совпадает с цифрами, заявленными владельцем.

export const studio = {
  name: "WrapMeNow",
  fullName: "WrapMeNow",
  tagline: "Оклейка автомобиля, за которую отвечаем по договору",
  city: "Москва",
  yearFounded: 2014,
} as const;

export const rating = {
  value: "5,0",
  ratingsCount: 385,
  reviewsCount: 218,
  photosCount: 198,
  source: "Яндекс Карты",
  award: "Хорошее место 2026",
  verifiedAt: "2026-08-23",
} as const;

export const navLinks = [
  { href: "/portfolio", label: "Работы" },
  { href: "/services", label: "Услуги" },
  { href: "/materials", label: "Материалы" },
  { href: "/about", label: "О студии" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/contacts", label: "Контакты" },
] as const;

export const mobileNavLinks = [
  { href: "/portfolio", label: "Работы" },
  { href: "/services", label: "Услуги" },
  { href: "/materials", label: "Материалы" },
  { href: "/prices", label: "Цены" },
  { href: "/about", label: "О студии" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/contacts", label: "Контакты" },
] as const;

export const footerDocuments = [{ label: "Политика конфиденциальности", href: "/privacy" }] as const;

export const ctaLabels = {
  primary: "Рассчитать стоимость",
  works: "Посмотреть работы",
  cost: "Узнать стоимость",
  whatsapp: "Написать в WhatsApp",
  exactCalc: "Получить точный расчёт",
} as const;

export const trustLine = `${rating.value} на Яндексе · ${rating.reviewsCount} отзывов · с ${studio.yearFounded} года · гарантия по договору`;

export const seo = {
  titleDefault: "WrapMeNow — оклейка автомобиля в Москве | Ташкентская, 28с8",
  titleTemplate: "%s — WrapMeNow",
  description:
    "WrapMeNow — студия оклейки и защиты автомобилей в Москве с 2014 года. Полиуретановая защитная плёнка, цветная оклейка, антихром, тонировка, брендирование. Рейтинг 5,0, 218 отзывов на Яндекс Картах.",
  keywords: [
    "оклейка автомобиля Москва",
    "защитная плёнка авто Москва",
    "полиуретановая плёнка",
    "оклейка кузова",
    "антихром автомобиля",
    "цветная оклейка автомобиля",
    "WrapMeNow",
  ],
} as const;
