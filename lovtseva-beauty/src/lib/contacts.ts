// Контакты сверены с 2ГИС (2gis.ru/ryazan/firm/70000001006482335 — телефон
// подтверждён ссылкой tel:+79307850828, email lovset84@mail.ru, мессенджеры
// VK/WhatsApp/Viber/Telegram) и Яндекс Картами (адрес, цокольный этаж,
// сайт tsentr-krasoty-natali.clients.site). Проверено 17.08.2026.
// Старый домен natali-lovtsevoj-salon.ru не работает (502) — не используется.
// Контакты требуют финального подтверждения владельцем перед публикацией.

export const contacts = {
  city: "Рязань",
  address: "Быстрецкая ул., 20",
  addressFull: "Рязань, Быстрецкая ул., 20 (цокольный этаж)",
  landmark: "Советский район, рядом с бассейном «Классика»",

  phone: { value: "+7 (930) 785-08-28", href: "79307850828" },

  whatsappUrl: "https://wa.me/79307850828",
  whatsappMessage: "Здравствуйте! Хочу записаться в Центр красоты Натальи Ловцевой",
  telegramUrl: "https://t.me/+79307850828",
  viberUrl: "viber://chat?number=%2B79307850828",

  email: "lovset84@mail.ru",

  yandexUrl: "https://yandex.ru/maps/org/tsentr_krasoty_natalyi_lovtsevoy/1281310175/",
  yandexReviewsUrl: "https://yandex.ru/maps/org/tsentr_krasoty_natalyi_lovtsevoy/1281310175/reviews/",
  twoGisUrl: "https://2gis.ru/ryazan/firm/70000001006482335",
  clientsSiteUrl: "https://tsentr-krasoty-natali.clients.site/",

  hoursNote: "Работаем ежедневно по предварительной записи",

  bookingChannel: "whatsapp" as const,
} as const;

export function whatsappLink(message: string = contacts.whatsappMessage) {
  return `${contacts.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export function whatsappBookingLink(serviceTitle?: string, masterName?: string) {
  let message = "Здравствуйте! Хочу записаться";
  if (serviceTitle) message += ` на «${serviceTitle}»`;
  if (masterName) message += ` к мастеру ${masterName}`;
  message += ", подскажите, пожалуйста, свободное время.";
  return whatsappLink(message);
}

export const socialLinks = [
  { label: "Яндекс Карты", href: contacts.yandexUrl },
  { label: "2ГИС", href: contacts.twoGisUrl },
  { label: "WhatsApp", href: contacts.whatsappUrl },
  { label: "Telegram", href: contacts.telegramUrl },
] as const;
