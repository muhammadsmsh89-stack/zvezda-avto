export const company = {
  name: "Альтаир",
  tagline: "Лаборатория мебели",
  city: "Махачкала",
  address: {
    line: "Производственная ул., 102/1",
    district: "Ленинский район",
    city: "Махачкала",
    postalCode: "367004",
    verified: true,
    source: "Яндекс Карты",
  },
  phone: {
    display: "+7 928 051-29-29",
    href: "tel:+79280512929",
    verified: true,
    source: "Яндекс Карты",
  },
  whatsapp: {
    display: "+7 988 642-00-10",
    number: "79886420010",
    verified: true,
    source: "Instagram @altair.05",
  },
  instagram: {
    handle: "@altair.05",
    url: "https://www.instagram.com/altair.05/",
    verified: true,
  },
  yandexMaps: {
    url: "https://yandex.ru/maps/org/altair/235173322702/",
    rating: 4.3,
    ratingsCount: 76,
    reviewsCount: 23,
    verified: true,
    checkedAt: "2026-08",
  },
  bioQuote: {
    text: "Альтаир — это лаборатория мебели, где ваши желания обретают форму",
    verified: true,
    source: "Instagram @altair.05, bio",
  },
  foundedYear: {
    value: 2000,
    verified: false,
    note: "OWNER_CONFIRMATION_REQUIRED — заявлено в собственной публикации компании, не подтверждено независимым источником",
  },
  leadTimeWardrobes: {
    value: "от 10 рабочих дней",
    scope: "шкафы и гардеробные",
    verified: false,
    note: "OWNER_CONFIRMATION_REQUIRED — публично заявлялось только для этой категории, не переносится на кухни/спальни",
  },
  legacyWebsite: {
    domain: "altair05.ru",
    status: "не подтверждён как действующий",
    note: "Встречается в справочниках 2019 года без активных отзывов; официальный сайт в актуальных источниках не указан",
  },
} as const;
