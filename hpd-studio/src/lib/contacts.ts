// Контакты HPD Studio. Сверено напрямую с живой карточкой Яндекс Карт
// (yandex.ru/maps/org/hpd_studio/227086737296/ — телефон, WhatsApp, Telegram,
// VK, адрес, координаты подъезда, «−1 этаж, 5-я секция» подтверждено в VK-био
// vk.com/hpd_detailing) и официальным сайтом hpd-detailing.clients.site.
// Проверено 17.08.2026.

export const contacts = {
  city: "Воронеж",
  address: "Пушкинская ул., 8",
  addressFull: "Воронеж, Пушкинская ул., 8",
  landmark: "−1 этаж, 5-я секция · рядом с Центральным рынком",

  phone: { value: "+7 (900) 300-90-50", href: "79003009050" },

  whatsappUrl: "https://wa.me/79003009050",
  whatsappMessage: "Здравствуйте! Хочу записать автомобиль в HPD Studio. Подскажите, пожалуйста, свободное время.",
  telegramUrl: "https://t.me/hpddetailing",
  vkUrl: "https://vk.com/hpd_detailing",

  yandexUrl: "https://yandex.ru/maps/org/hpd_studio/227086737296/",
  yandexReviewsUrl: "https://yandex.ru/maps/org/hpd_studio/227086737296/reviews/",

  hoursNote: "Ежедневно, 10:00–20:00",
} as const;

export function whatsappLink(message: string = contacts.whatsappMessage) {
  return `${contacts.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export const socialLinks = [
  { label: "WhatsApp", href: contacts.whatsappUrl },
  { label: "Telegram", href: contacts.telegramUrl },
  { label: "VK", href: contacts.vkUrl },
  { label: "Яндекс Карты", href: contacts.yandexUrl },
] as const;
