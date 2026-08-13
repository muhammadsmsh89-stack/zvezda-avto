// Studio Celebrity — Ярославль, ул. Кедрова, 3/8.
// Факты сверены с Яндекс Картами (yandex.ru/maps/org/studio_celebrity/165256171430,
// проверено 13.08.2026) и предоставленным заказчиком reference-скриншотом сайта.
// Всё, что не подтверждено этими источниками, помечено VERIFY_BEFORE_PRODUCTION
// или OWNER_CONFIRMATION_REQUIRED — см. PHOTO_REQUIREMENTS.md для списка медиа.

export const VERIFY = "уточняется" as const;

export const studio = {
  name: "Studio Celebrity",
  shortName: "CELEBRITY",
  city: "Ярославль",
  address: "ул. Кедрова, 3/8",
  addressFull: "Ярославль, ул. Кедрова, 3/8",
  landmark: "490 м от Красной площади",
  phone: { value: "+7 (902) 333-33-19", href: "+79023333319" },
  whatsappUrl: "https://wa.me/79023333319",
  telegramUrl: "https://t.me/+79023333319",
  instagramHandle: "@studio_celebrity_",
  instagramUrl: "https://www.instagram.com/studio_celebrity_/",
  hours: "10:00–20:00",
  hoursNote: "По предварительной записи",
  yandexUrl: "https://yandex.ru/maps/org/studio_celebrity/165256171430/",
  yandexReviewsUrl: "https://yandex.ru/maps/org/studio_celebrity/165256171430/reviews/",
  rating: "5.0",
  ratingsCount: 162,
  reviewsCount: 142,
  award: "Хорошее место 2026",
  awardNote: "Награда для любимых мест пользователей Яндекс Карт",
  features: [
    "Предварительная запись",
    "Онлайн-запись",
    "Подарочный сертификат",
    "Wi-Fi",
    "Парковка",
  ],
} as const;

export const navLinks = [
  { href: "/#services", label: "Услуги" },
  { href: "/masters", label: "Мастера" },
  { href: "/works", label: "Работы" },
  { href: "/education", label: "Обучение" },
  { href: "/about", label: "О студии" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/contacts", label: "Контакты" },
] as const;

export const mobileNavLinks = [
  { href: "/#services", label: "Услуги" },
  { href: "/masters", label: "Мастера" },
  { href: "/works", label: "Работы" },
  { href: "/prices", label: "Цены" },
  { href: "/education", label: "Обучение" },
  { href: "/contacts", label: "Контакты" },
] as const;

export const ctaLabels = {
  primary: "Записаться",
  primaryOnline: "Записаться онлайн",
  whatsapp: "Написать в WhatsApp",
  chooseMaster: "Выбрать мастера",
  consultation: "Получить консультацию",
} as const;

/** Отзывы Яндекс Карт по категориям — доля положительных, число отзывов. Источник: yandex.ru/maps org page, 13.08.2026. */
export const ratingBreakdown = [
  { label: "Персонал", percent: 99, count: 132 },
  { label: "Атмосфера", percent: 100, count: 65 },
  { label: "Уход за бровями", percent: 98, count: 48 },
  { label: "Макияж", percent: 100, count: 40 },
  { label: "Компетентность", percent: 100, count: 39 },
  { label: "Интерьер", percent: 100, count: 24 },
] as const;

export const seo = {
  titleDefault: "Studio Celebrity — салон красоты в Ярославле | Hair, Makeup, Brows",
  titleTemplate: "%s — Studio Celebrity",
  description:
    "Studio Celebrity — студия причёски, макияжа, бровей и ресниц в Ярославле на ул. Кедрова, 3/8. Рейтинг 5.0, 142 отзыва на Яндекс Картах. Запись онлайн и в WhatsApp.",
  keywords: [
    "салон красоты Ярославль",
    "студия причёски и макияжа",
    "брови и ресницы Ярославль",
    "макияж на мероприятие Ярославль",
    "окрашивание волос Ярославль",
    "визажист Ярославль",
    "Studio Celebrity",
  ],
} as const;

export const footerDocuments = [
  { label: "Политика конфиденциальности", href: "/privacy" },
  { label: "Согласие на обработку персональных данных", href: "/privacy" },
] as const;
