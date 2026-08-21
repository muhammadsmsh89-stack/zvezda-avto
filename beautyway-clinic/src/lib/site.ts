/**
 * Проверяемые факты о клинике.
 * Источник: bwclinic.ru (главная, /contacts, /about-us, /liczenzii-i-sertifikatyi).
 * Дата сверки: 21 августа 2026.
 * Ничего в этом файле не придумано — каждое поле имеет соответствие на исходном сайте.
 */

export const VERIFIED_ON = "2026-08-21";
export const VERIFIED_ON_HUMAN = "21 августа 2026";

export const site = {
  name: "BeautyWay Clinic",
  legalName: "ООО «БьютиВэй клиник»",
  inn: "9701150586",
  kpp: "770101001",
  license: "Л041-01137-77/00349231",
  licenseTitle: "Лицензия на осуществление медицинской деятельности",
  tagline: "Клиника эстетической медицины и косметологии",
  city: "Москва",
  phone: "+7 (499) 393-36-16",
  phoneHref: "tel:+74993933616",
  email: "info@bwclinic.ru",
  hours: "Ежедневно с 10:00 до 22:00",
  hoursShort: "10:00–22:00, без выходных",
  officialSite: "https://bwclinic.ru/",
} as const;

/** Официальные каналы. Аккаунт записи и информационный канал — разные. */
export const channels = {
  /** Аккаунт для записи. На исходном сайте открывается с преднабранным текстом. */
  bookingTelegram: "https://t.me/beauty_way_clinic",
  bookingTelegramHandle: "@beauty_way_clinic",
  /** Информационный канал клиники — не для записи. */
  channelTelegram: "https://t.me/bwclinic",
  channelTelegramHandle: "@bwclinic",
  vk: "https://vk.com/BeautyWayclinic",
  instagram: "https://www.instagram.com/BeautyWay_clinic/",
} as const;

/** Ссылка на запись в Telegram с осмысленным преднабранным сообщением. */
export function bookingLink(context?: string): string {
  const text = context
    ? `Здравствуйте! Хочу записаться: ${context}`
    : "Здравствуйте! Хочу записаться на консультацию.";
  return `${channels.bookingTelegram}?text=${encodeURIComponent(text)}`;
}

export type Branch = {
  slug: string;
  name: string;
  address: string;
  addressShort: string;
  metro: string[];
  hours: string;
  photo: string;
  mapUrl: string;
  geo: { lat: number; lng: number };
};

/**
 * Координаты сняты по адресам филиалов и используются только для ссылки
 * «Открыть в Яндекс Картах» и разметки PostalAddress.
 */
export const branches: Branch[] = [
  {
    slug: "strastnoy",
    name: "На Страстном бульваре",
    address: "Москва, Страстной бульвар, 4 (Деловой центр), 3 этаж",
    addressShort: "Страстной бульвар, 4",
    metro: ["Чеховская", "Пушкинская", "Тверская"],
    hours: site.hours,
    photo: "branches/strastnoy",
    mapUrl: "https://yandex.ru/maps/?text=" + encodeURIComponent("Москва, Страстной бульвар, 4"),
    geo: { lat: 55.765806, lng: 37.607889 },
  },
  {
    slug: "myasnitskaya",
    name: "На Мясницкой",
    address: "Москва, ул. Мясницкая, 24/7, строение 3",
    addressShort: "Мясницкая, 24/7, с3",
    metro: ["Чистые пруды", "Тургеневская", "Сретенский бульвар"],
    hours: site.hours,
    photo: "branches/myasnitskaya",
    mapUrl: "https://yandex.ru/maps/?text=" + encodeURIComponent("Москва, Мясницкая улица, 24/7с3"),
    geo: { lat: 55.763323, lng: 37.636445 },
  },
];

/**
 * Рейтинги внешних площадок. Каждый — отдельный, со своим источником и ссылкой.
 * Значения НЕ усредняются и НЕ объединяются в один «общий рейтинг».
 */
export const ratings = [
  { platform: "Яндекс Карты", value: "5,0", url: "https://yandex.ru/maps/-/CHBNAPZE" },
  { platform: "Google Карты", value: "4,9", url: "https://goo.gl/maps/ChCH3ob8RcP1jaxP7" },
  {
    platform: "2ГИС",
    value: "5,0",
    url: "https://2gis.ru/moscow/firm/70000001041222115/tab/reviews",
  },
  { platform: "Yell", value: "5,0", url: "https://www.yell.ru/moscow/com/BeautyWay-clinic_12086755/reviews/" },
  {
    platform: "Flamp",
    value: "4,9",
    url: "https://moscow.flamp.ru/firm/BeautyWay_clinic_klinika_ehsteticheskojj_kosmetologii-70000001041222115",
  },
  {
    platform: "Zoon",
    value: "4,7",
    url: "https://zoon.ru/msk/medical/klinika_esteticheskoj_kosmetologii_BeautyWay_clinic_na_metro_sretenskij_bulvar/reviews/",
  },
] as const;

/** Показатели, заявленные на официальном сайте клиники. */
export const claims = {
  reviewsTotal: 8682,
  clientsClaimed: "более 30 000",
  averageExperience: 10,
} as const;

export const MEDICAL_DISCLAIMER =
  "Имеются противопоказания. Необходима консультация специалиста.";

export const DEMO_NOTICE =
  "Демонстрационный редизайн. Проект не является официальным сайтом клиники и создан как концепция интерфейса.";
