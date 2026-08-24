/**
 * Единственный источник правды по контактам, юридическим данным и навигации.
 *
 * Значения сняты с etel37.ru (импорт от 24.08.2026, см. scripts/import) и из
 * брифа заказчика. Показатели, которые нельзя подтвердить напрямую со страницы
 * источника, помечены needsVerification — их нужно сверить с клиникой перед
 * публикацией на рабочем домене.
 *
 * Часть полей ниже — совместимые алиасы для внутренних страниц, собранных в
 * параллельной сессии на старом API (primaryPhone, whatsapp, yandexRating,
 * yandexCount, yandexUrl, legalAddress, registeredAt, clientsClaim, license.full).
 * Каждый алиас указывает на ОДНО и то же значение, определённое один раз ниже
 * как обычный const — фактов в двух местах нет, только два имени для одного
 * значения. Ничего не выдумано: чего нет в источнике, нет и здесь.
 */

const PHONE = { display: "+7 (4832) 67-51-67", href: "tel:+74832675167" };

const HOURS = {
  short: "Ежедневно 9:00–20:00",
  long: "Понедельник — воскресенье, 9:00–20:00",
  opens: "09:00",
  closes: "20:00",
  note: "Приём по предварительной записи.",
};

const REVIEWS = {
  rating: 5.0,
  count: 800,
  countLabel: "≈800",
  source: "Яндекс Карты",
  url: "https://yandex.ru/maps/?text=Этель%20центр%20красоты%20Брянск%20отзывы",
  needsVerification: true,
};

const CLIENTS_SERVED = {
  label: "30 000+",
  caption: "клиентов за время работы центра",
  needsVerification: true,
};

const REQUISITES = {
  inn: "3250529917",
  ogrn: "1123256006500",
  ogrnDate: "30.03.2012",
  okved: "Общая врачебная практика",
  generalDirector: "Алешин Дмитрий Николаевич",
  /**
   * Юридический адрес отдельно от адресов клиник публично не подтверждён —
   * значение честно помечено как требующее уточнения, а не подставлен адрес
   * одной из клиник (это могло бы ввести в заблуждение).
   */
  legalAddress: "уточняется",
};

const LICENSE = {
  number: "№ Л041-01133-32/00357358",
  date: "23.10.2020",
  needsVerification: true,
};

/**
 * Реального WhatsApp клиники в открытых источниках нет — поле оставлено
 * пустым намеренно (не wa.me-ссылка вслепую). Компоненты, которые раньше
 * его использовали, теперь показывают ссылку только если significant,
 * иначе откатываются на телефон (см. BookingSheet.tsx, StickyCta.tsx).
 */
const WHATSAPP: string | undefined = undefined;

export const site = {
  name: "Этель",
  fullName: "Центр красоты и медицинской косметологии «Этель»",
  legalName: "ООО «Этель»",
  tagline: "Врачебная и аппаратная косметология с 2007 года",
  city: "Брянск",
  foundedYear: 2007,

  phone: PHONE,
  /** Алиас для страниц, собранных на старом API. */
  primaryPhone: PHONE,
  whatsapp: WHATSAPP,
  email: "etel37@mail.ru",
  hours: HOURS,

  socials: [
    { label: "ВКонтакте", href: "https://vk.com/etel32" },
    { label: "YouTube", href: "https://www.youtube.com/channel/UCAZrRSTXP55wtk77Z84aiAA" },
  ],

  reviews: {
    ...REVIEWS,
    /** Алиасы для страниц, собранных на старом API. */
    yandexRating: REVIEWS.rating,
    yandexCount: REVIEWS.count,
    yandexUrl: REVIEWS.url,
  },

  clientsServed: CLIENTS_SERVED,
  /** Алиас: старое API называет то же значение clientsClaim.value/.label. */
  clientsClaim: {
    value: CLIENTS_SERVED.label,
    label: CLIENTS_SERVED.caption,
    needsVerification: CLIENTS_SERVED.needsVerification,
  },

  requisites: {
    ...REQUISITES,
    /** Алиас: старое API ожидает requisites.registeredAt. */
    registeredAt: REQUISITES.ogrnDate,
  },

  license: {
    ...LICENSE,
    /** Алиас: старое API ожидает готовую строку license.full. */
    full: `${LICENSE.number} от ${LICENSE.date}`,
  },

  legalNotice:
    "Имеются противопоказания. Необходима консультация специалиста. Результат процедур индивидуален и зависит от особенностей организма.",
  offerNotice:
    "Информация на сайте носит справочный характер и не является публичной офертой.",
} as const;

export type Clinic = {
  slug: string;
  name: string;
  district: string;
  address: string;
  addressShort: string;
  postalCode: string;
  phone: { display: string; href: string };
  /** Часы работы филиала — у всех трёх клиник одинаковые, см. HOURS выше. */
  hours: string;
  mapUrl: string;
  photo: string;
};

/** Три филиала — адреса, телефоны и почтовые индексы сняты со страницы контактов etel37.ru. */
export const clinics: Clinic[] = [
  {
    slug: "romashina",
    name: "Клиника на Ромашина",
    district: "Советский район",
    address: "г. Брянск, ул. Ромашина, д. 32",
    addressShort: "ул. Ромашина, 32",
    postalCode: "241050",
    phone: { display: "+7 (4832) 67-51-67", href: "tel:+74832675167" },
    hours: HOURS.short,
    mapUrl: "https://yandex.ru/maps/?text=Брянск, улица Ромашина, 32",
    photo: "/clinic/romashina.webp",
  },
  {
    slug: "oktyabrya",
    name: "Клиника на 50 лет Октября",
    district: "Бежицкий район",
    address: "г. Брянск, б-р 50 лет Октября, д. 1",
    addressShort: "б-р 50 лет Октября, 1",
    postalCode: "241035",
    phone: { display: "+7 (4832) 67-52-67", href: "tel:+74832675267" },
    hours: HOURS.short,
    mapUrl: "https://yandex.ru/maps/?text=Брянск, бульвар 50 лет Октября, 1",
    photo: "/clinic/oktyabrya.webp",
  },
  {
    slug: "duki",
    name: "Клиника на Дуки",
    district: "Бежицкий район",
    address: "г. Брянск, ул. Дуки, д. 59/10",
    addressShort: "ул. Дуки, 59/10",
    postalCode: "241007",
    phone: { display: "+7 (4832) 67-53-67", href: "tel:+74832675367" },
    hours: HOURS.short,
    mapUrl: "https://yandex.ru/maps/?text=Брянск, улица Дуки, 59/10",
    photo: "/clinic/duki.webp",
  },
];

export const nav = [
  { label: "Услуги", href: "/services/" },
  { label: "Врачи", href: "/doctors/" },
  { label: "Технологии", href: "/technology/" },
  { label: "Клиники", href: "/clinics/" },
  { label: "Цены", href: "/prices/" },
  { label: "О центре", href: "/about/" },
] as const;

export const footerNav = [
  {
    title: "Центр",
    links: [
      { label: "О центре", href: "/about/" },
      { label: "Врачи", href: "/doctors/" },
      { label: "Технологии", href: "/technology/" },
      { label: "Клиники", href: "/clinics/" },
      { label: "Отзывы", href: "/reviews/" },
    ],
  },
  {
    title: "Пациентам",
    links: [
      { label: "Что вас беспокоит", href: "/concerns/" },
      { label: "Все услуги", href: "/services/" },
      { label: "Цены", href: "/prices/" },
      { label: "Акции", href: "/offers/" },
      { label: "Контакты", href: "/contacts/" },
    ],
  },
  {
    title: "Документы",
    links: [
      { label: "Сведения об организации", href: "/legal/" },
      { label: "Политика конфиденциальности", href: "/privacy/" },
    ],
  },
] as const;
