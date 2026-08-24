// Контакты WrapMeNow. Телефон, адрес и почта сверены с wrapmenow.ru и
// подтверждены веб-поиском 23.08.2026. WhatsApp, Telegram, VK и Instagram —
// из брифа заказчика (публичные каналы студии), самостоятельно не изменялись.
// В открытых источниках встречаются расхождения по графику работы и
// дополнительным телефонам — намеренно используем только значения из брифа,
// без домыслов. См. CONTENT_VERIFICATION.md.

export const contacts = {
  city: "Москва",
  address: "Ташкентская улица, 28, строение 8",
  addressFull: "Москва, Ташкентская улица, 28, строение 8",
  landmark: "Юго-Восточный административный округ",

  phone: { value: "+7 (499) 009-89-40", href: "74990098940" },
  email: "info@wrapmenow.ru",

  whatsappUrl: "https://wa.me/79296771664",
  whatsappMessage: "Здравствуйте! Хочу рассчитать стоимость оклейки автомобиля в WrapMeNow.",
  telegramUrl: "https://t.me/wrapmenow",
  vkUrl: "https://vk.com/wrapmenow",
  instagramUrl: "https://instagram.com/wrapmenow_ru",
  youtubeUrl: "https://www.youtube.com/@WrapMeNow",

  yandexUrl: "https://yandex.com/maps/org/wrapmenow/115250628221/",
  yandexReviewsUrl: "https://yandex.com/maps/org/wrapmenow/115250628221/reviews/",

  hoursWeekdays: "09:00–20:00",
  hoursWeekend: "10:00–20:00",
  hoursNote: "Будни 09:00–20:00 · Выходные 10:00–20:00",

  legal: {
    entity: "ИП Горелый Николай Петрович",
    inn: "324106327117",
    ogrnip: "318325600044240",
  },
} as const;

export function whatsappLink(message: string = contacts.whatsappMessage) {
  return `${contacts.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export const socialLinks = [
  { label: "WhatsApp", href: contacts.whatsappUrl },
  { label: "Telegram", href: contacts.telegramUrl },
  { label: "VK", href: contacts.vkUrl },
  { label: "Instagram", href: contacts.instagramUrl },
  { label: "YouTube", href: contacts.youtubeUrl },
  { label: "Яндекс Карты", href: contacts.yandexUrl },
] as const;
