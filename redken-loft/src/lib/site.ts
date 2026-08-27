// Идентичность бренда, навигация и рейтинги.
// Рейтинги — из карточек Яндекс Карт и 2ГИС, приведённых в брифе от 27.08.2026.
// Даты открытия, юрлицо и точный состав команды помечены как требующие
// подтверждения владельцем — см. VERIFY_BEFORE_PRODUCTION в комментариях ниже.

export const VERIFY = "уточняется у владельца" as const;

export const studio = {
  name: "Redken Loft",
  shortName: "Redken Loft",
  city: "Краснодар",
  tagline: "Авторские стрижки и окрашивания, созданные под вашу индивидуальность",
  yearsNote: "Более 10 лет в Краснодаре", // VERIFY_BEFORE_PRODUCTION: точная дата открытия у владельца
} as const;

export const rating = {
  yandex: {
    value: "5,0",
    reviewsCount: 209,
    photosCount: 286,
    staffPositive: 98,
    coloringPositive: 100,
    atmospherePositive: 100,
    competencePositive: 98,
    source: "Яндекс Карты",
  },
  twoGis: {
    value: "4,9",
    ratingsCount: 175,
    reviewsCount: 140,
    photosCount: 134,
    source: "2ГИС",
  },
  verifiedAt: "2026-08-27",
} as const;

export const navLinks = [
  { href: "/#services", label: "Услуги" },
  { href: "/masters", label: "Мастера" },
  { href: "/works", label: "Работы" },
  { href: "/prices", label: "Цены" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/about", label: "О салоне" },
] as const;

export const mobileNavLinks = [...navLinks, { href: "/contacts", label: "Контакты" }] as const;

export const footerNavLinks = mobileNavLinks;

export const footerDocuments = [{ label: "Политика конфиденциальности", href: "/privacy" }] as const;

export const ctaLabels = {
  primary: "Записаться к стилисту",
  works: "Посмотреть работы",
  chooseMaster: "Выбрать стилиста",
  whatsapp: "Написать в WhatsApp",
  allPrices: "Весь прайс",
  allWorks: "Все работы",
  allReviews: "Все отзывы",
  consultation: "Записаться на консультацию",
} as const;

export const seo = {
  titleDefault: "Redken Loft — авторские окрашивания и стрижки в Краснодаре | ул. Кубанская Набережная, 37",
  titleTemplate: "%s — Redken Loft",
  description:
    "Redken Loft — студия авторских стрижек и сложного колористики в центре Краснодара. Airtouch, Shatush, Balayage, работа с блондом. Рейтинг 5,0, 209 отзывов на Яндекс Картах.",
  keywords: [
    "салон красоты Краснодар",
    "окрашивание волос Краснодар",
    "Airtouch Краснодар",
    "Shatush Краснодар",
    "Balayage Краснодар",
    "сложное окрашивание Краснодар",
    "стрижка Краснодар Кубанская Набережная",
    "Redken Loft",
  ],
} as const;
