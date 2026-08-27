// Контакты собраны из карточек компании на Яндекс Картах и в 2ГИС (бриф от 27.08.2026).
// Номер телефона подтверждён в обеих карточках. WhatsApp и Viber указаны как
// подключённые каналы связи в карточке — прямые ссылки построены от основного номера,
// перед публикацией стоит свериться с салоном, что это тот же номер.
// Юридические реквизиты (ИНН/ОГРНИП) на площадках расходятся — на сайт не выносим,
// пока владелец не подтвердит актуальную карточку организации.

export const contacts = {
  city: "Краснодар",
  district: "Центральный микрорайон",
  address: "ул. Кубанская Набережная, 37, 1 этаж",
  addressFull: "Краснодар, ул. Кубанская Набережная, 37, 1 этаж",

  phone: { value: "+7 (962) 860-00-06", href: "79628600006" },

  whatsappUrl: "https://wa.me/79628600006",
  whatsappMessage: "Здравствуйте! Хочу записаться в Redken Loft",
  viberUrl: "viber://chat?number=%2B79628600006",

  instagramHandle: "@redken_loft_krd",
  instagramUrl: "https://www.instagram.com/redken_loft_krd/",
  vkHandle: "redken_loft_krd",
  vkUrl: "https://vk.com/redken_loft_krd",

  yandexUrl: "https://yandex.ru/maps/?text=Redken%20Loft%20Краснодар",
  twoGisUrl: "https://2gis.ru/krasnodar/search/Redken%20Loft",

  hoursNote: "Ежедневно, 09:00–21:00, по предварительной записи",
  hours: "09:00–21:00",

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
  { label: "Instagram", href: contacts.instagramUrl },
  { label: "VK", href: contacts.vkUrl },
] as const;
