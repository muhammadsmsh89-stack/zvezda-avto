export const site = {
  name: "MODNOE MESTO",
  nameRu: "Модное Место",
  tagline: "Детейлинг-центр в Москве",
  url: "https://muhammadsmsh89-stack.github.io/zvezda-avto/modnoe-mesto/",
} as const;

/** Только подтверждённые публичные данные компании. */
export const facts = {
  clients: "5000+",
  specialists: "100+",
  rating: "5.0",
  ratingSource: "Яндекс Карты",
  /** Предложный падеж — «рейтинг на Яндекс Картах». */
  ratingSourceIn: "Яндекс Картах",
  certificateFrom: "15 000 ₽",
  telegramDiscount: "5%",
} as const;

export const seo = {
  titleDefault:
    "MODNOE MESTO — детейлинг-центр в Москве: оклейка плёнкой, полировка, керамика",
  titleTemplate: "%s — MODNOE MESTO",
  description:
    "Оклейка антигравийной плёнкой, полировка, керамика, химчистка и дооснащение премиальных автомобилей. Москва, ул. Подвойского, вл. 5/19. Гарантия на работы и материалы.",
  keywords: [
    "детейлинг Москва",
    "оклейка антигравийной плёнкой",
    "полиуретановая плёнка",
    "керамическое покрытие",
    "полировка кузова",
    "химчистка салона",
    "детейлинг-центр",
  ],
} as const;
