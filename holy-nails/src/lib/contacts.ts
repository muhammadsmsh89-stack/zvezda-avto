// Контакты сверены с Яндекс Картами (yandex.ru/maps/org/kholli_neyls/238234258183/),
// официальным сайтом holy-nails.clients.site, YCLIENTS (n996226.yclients.com),
// 2ГИС (2gis.ru/tula/firm/70000001077106678) и Instagram (@holy_nails_tula).
// Проверено 18.08.2026.

export const contacts = {
  city: "Тула",
  address: "ул. Демонстрации, 1Г",
  addressFull: "Тула, ул. Демонстрации, 1Г, ТЦ «Утюг», 1 этаж",
  landmark: "Отдельный вход слева со стороны ул. Фридриха Энгельса, по ступенькам налево",

  phone: { value: "+7 (920) 778-09-50", href: "79207780950" },

  whatsappUrl: "https://wa.me/79207780950",
  whatsappMessage: "Здравствуйте! Хочу записаться в Holy Nails",
  telegramUrl: "https://t.me/+79207780950",
  vkUrl: "https://vk.com/manicure_tula_studio",
  instagramUrl: "https://www.instagram.com/holy_nails_tula/",

  yandexUrl: "https://yandex.ru/maps/org/kholli_neyls/238234258183/",
  yandexReviewsUrl: "https://yandex.ru/maps/org/kholli_neyls/238234258183/reviews/",
  twoGisUrl: "https://2gis.ru/tula/firm/70000001077106678",
  clientsSiteUrl: "https://holy-nails.clients.site/",
  yclientsUrl: "https://n996226.yclients.com/",

  hoursNote: "Ежедневно 09:00–21:00, по предварительной записи",

  bookingChannel: "yclients" as const,
} as const;

export function whatsappLink(message: string = contacts.whatsappMessage) {
  return `${contacts.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export function whatsappBookingLink(serviceTitle?: string, masterName?: string) {
  let message = "Здравствуйте! Хочу записаться в Holy Nails";
  if (serviceTitle) message += ` на «${serviceTitle}»`;
  if (masterName) message += ` к мастеру ${masterName}`;
  message += ", подскажите, пожалуйста, свободное время.";
  return whatsappLink(message);
}

export const socialLinks = [
  { label: "Яндекс Карты", href: contacts.yandexUrl },
  { label: "2ГИС", href: contacts.twoGisUrl },
  { label: "ВКонтакте", href: contacts.vkUrl },
  { label: "Instagram", href: contacts.instagramUrl },
  { label: "WhatsApp", href: contacts.whatsappUrl },
  { label: "Telegram", href: contacts.telegramUrl },
] as const;

export const legal = {
  ogrnip: "321332800019682",
  inn: "330573594231",
} as const;
