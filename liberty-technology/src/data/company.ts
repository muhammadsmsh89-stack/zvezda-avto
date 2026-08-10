export const company = {
  name: "Liberty Technology",
  shortName: "LIBERTY",
  tagline: "Detailing & Restoration",
  city: "Махачкала",

  address: {
    line: "Жемчужная ул., 12",
    district: "Ипподром м-н, Ленинский район",
    city: "Махачкала",
    postalCode: "367018",
    verified: true,
    source: "Яндекс Карты, 2ГИС",
  },

  phone: {
    display: "+7 988 444-44-62",
    href: "tel:+79884444462",
    verified: true,
    source: "Яндекс Карты, бриф владельца",
  },

  phoneSecondary: {
    display: "+7 986 444-44-62",
    href: "tel:+79864444462",
    verified: false,
    note: "OWNER_CONFIRMATION_REQUIRED — активная ссылка tel: в карточке 2ГИС; какой номер считать основным для приёма заявок, не уточнено",
  },

  whatsapp: {
    display: "+7 988 444-44-62",
    number: "79884444462",
    verified: true,
    source: "бриф владельца, кнопка WhatsApp подтверждена в карточке 2ГИС",
  },

  email: {
    display: "kuliev.ilyas@bk.ru",
    href: "mailto:kuliev.ilyas@bk.ru",
    verified: true,
    source: "2ГИС",
  },

  owner: {
    firstName: "Ильяс",
    verified: true,
    source: "email kuliev.ilyas@bk.ru; многократно упомянут в отзывах Яндекс Карт и 2ГИС",
  },

  instagram: {
    handle: "@liberty__technology",
    url: "https://www.instagram.com/liberty__technology/",
    followers: 103000,
    followersDisplay: "103 тыс.",
    bio: "Детайлинг + восстановление",
    bioLines: [
      "Полный спектр Детейлинг процедур",
      "Кузовной ремонт (покраска, рихтовка)",
      "Восстановление под ключ",
    ],
    verified: true,
    source: "Instagram @liberty__technology, август 2026",
  },

  yandexMaps: {
    url: "https://yandex.ru/maps/org/liberty_technology/104622934036/",
    rating: 4.9,
    ratingsCount: 129,
    reviewsCount: 50,
    verified: true,
    checkedAt: "2026-08",
  },

  twoGis: {
    url: "https://2gis.ru/makhachkala/firm/70000001036781756",
    rating: 4.9,
    ratingsCount: 55,
    reviewsCount: 32,
    award: "Премия 2ГИС — Качество без компромиссов",
    verified: true,
    checkedAt: "2026-08",
  },

  categories: {
    values: ["Кузовной ремонт", "Детейлинг", "Студия тюнинга", "Автомастерская"],
    verified: true,
    source: "Яндекс Карты, 2ГИС",
  },

  features: {
    values: [
      "Оплата картой",
      "Парковка",
      "Wi-Fi",
      "Предварительная запись",
      "Пандус",
      "Парковка для людей с инвалидностью",
    ],
    verified: true,
    source: "Яндекс Карты",
  },

  hours: {
    display: "09:00 — 22:00",
    verified: false,
    note: "OWNER_CONFIRMATION_REQUIRED — реконструировано из двух источников (2ГИС: «откроется завтра в 09:00», Яндекс Карты: «22:00 закрыто»), расписание по дням недели не подтверждено",
  },
} as const;
