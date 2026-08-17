// Контакты и ссылки на внешние сервисы SEYCHAS.
// Сверено с Яндекс Картами (yandex.ru/maps/org/seychas/132539768768, телефон
// +7 (910) 585-54-37), 2ГИС (2gis.ru/tula/firm/70000001066090053 — второй
// номер +7 (919) 073-04-05 и подтверждённые ссылки WhatsApp/Telegram/VK),
// DIKIDI (dikidi.net/ru/profile/seychas_953828) и VK-сообществом
// (vk.com/club208238738). Проверено 14.08.2026.

export const contacts = {
  city: "Тула",
  address: "ул. Льва Толстого, 81",
  addressFull: "Тула, ул. Льва Толстого, 81",
  landmark: "рядом с Тульской филармонией",

  phone: { value: "+7 (910) 585-54-37", href: "79105855437" },
  whatsappNumber: { value: "+7 (919) 073-04-05", href: "79190730405" },

  whatsappUrl: "https://wa.me/79190730405",
  whatsappMessage:
    "Здравствуйте! Хочу записаться в SEYCHAS. Подскажите, пожалуйста, свободное время",
  telegramUrl: "https://t.me/+79190730405",
  vkUrl: "https://vk.com/club208238738",
  instagramUrl: "https://www.instagram.com/seychas_studio/",
  instagramHandle: "@seychas_studio",

  yandexUrl: "https://yandex.ru/maps/org/seychas/132539768768/",
  yandexReviewsUrl: "https://yandex.ru/maps/org/seychas/132539768768/reviews/",
  dikidiUrl: "https://dikidi.net/ru/profile/seychas_953828",
  twoGisUrl: "https://2gis.ru/tula/firm/70000001066090053",

  hoursNote: "Работаем по предварительной записи",

  legalName: "ИП Хромова Е.А.",
} as const;

export function whatsappLink(message: string = contacts.whatsappMessage) {
  return `${contacts.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export const socialLinks = [
  { label: "DIKIDI", href: contacts.dikidiUrl },
  { label: "WhatsApp", href: contacts.whatsappUrl },
  { label: "Telegram", href: contacts.telegramUrl },
  { label: "VK", href: contacts.vkUrl },
  { label: "Instagram", href: contacts.instagramUrl },
  { label: "Яндекс Карты", href: contacts.yandexUrl },
] as const;
