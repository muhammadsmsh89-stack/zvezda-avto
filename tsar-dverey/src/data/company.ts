// Централизованная конфигурация данных компании — единственный источник истины для контактных
// данных, рейтингов и юридических плейсхолдеров по всему сайту.
//
// Дисциплина этого файла: реальные значения — только то, что подтверждено на действующих
// карточках компании (Яндекс Карты, 2ГИС, Instagram @king_doors05) на момент подготовки сайта,
// август 2026. Всё остальное — явный плейсхолдер вида «[УКАЗАТЬ …]», который нельзя случайно
// принять за настоящие данные. См. также PLACEHOLDER_FACTS ниже.

export type ContactPoint = { display: string; href: string };

export const PLACEHOLDER = {
  legalName: "[УКАЗАТЬ ЮРИДИЧЕСКОЕ НАЗВАНИЕ / ИП]",
  inn: "[УКАЗАТЬ ИНН]",
  ogrn: "[УКАЗАТЬ ОГРН/ОГРНИП]",
  dataProtectionEmail: "[УКАЗАТЬ EMAIL ДЛЯ ОБРАЩЕНИЙ ПО ПЕРСОНАЛЬНЫМ ДАННЫМ]",
  responsiblePerson: "[УКАЗАТЬ ОТВЕТСТВЕННОЕ ЛИЦО ЗА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ]",
} as const;

// Этот сайт — демонстрационная концепция, подготовленная на основе открытых данных компании
// (Яндекс Карты, 2ГИС, Instagram), а не официальный сайт, заказанный и утверждённый владельцем
// бизнеса. Флаг управляет тем, показываем ли мы структурированные данные (JSON-LD) поисковикам
// как будто это официальный ресурс, и включает дисклеймер в футере. Переключить в false можно
// только после согласования с реальным владельцем «Царь Дверей».
export const isDemoMode = true;

export const company = {
  brand: "Царь Дверей",
  city: "Махачкала",
  // Подтверждено дословно: Яндекс Карты и 2ГИС — карточка организации.
  legalName: PLACEHOLDER.legalName,
  inn: PLACEHOLDER.inn,
  ogrn: PLACEHOLDER.ogrn,
  dataProtectionEmail: PLACEHOLDER.dataProtectionEmail,
  responsiblePerson: PLACEHOLDER.responsiblePerson,

  phone: { display: "+7 (963) 408-62-23", href: "tel:+79634086223" } satisfies ContactPoint,
  email: "king_doors@mail.ru",

  // 2ГИС: «Ежедневно с 09:00 до 18:30».
  hoursShort: "Ежедневно 09:00–18:30",
  hoursNote: "Ежедневно с 09:00 до 18:30",
} as const;

export type Location = {
  id: string;
  name: string;
  address: string;
  floor?: string;
  isPrimary: boolean;
  hours: string;
  phone: ContactPoint;
  mapsUrl: string;
  twoGisUrl: string;
};

// 2ГИС указывает «4 филиала», но публично раскрыт только основной адрес — три остальных не
// подтверждены и не публикуются, пока клиент их не предоставит (см. PLACEHOLDER_FACTS).
export const locations: Location[] = [
  {
    id: "irchi-kazaka",
    name: "Основной шоурум",
    address: "ул. Ирчи Казака, 86",
    floor: "цокольный этаж",
    isPrimary: true,
    hours: company.hoursNote,
    phone: company.phone,
    mapsUrl: "https://yandex.ru/maps/org/tsar_dverey/127224168717/",
    twoGisUrl: "https://2gis.ru/makhachkala/firm/70000001044045224",
  },
];

export const branchesTotalConfirmed = 4; // 2ГИС: «4 филиала» — количество подтверждено, адреса нет.

export const socialLinks = {
  instagram: "https://www.instagram.com/king_doors05/",
  whatsapp: "https://wa.me/79634086223",
  telegram: "https://t.me/+79634086223",
  yandexMaps: "https://yandex.ru/maps/org/tsar_dverey/127224168717/",
  twoGis: "https://2gis.ru/makhachkala/firm/70000001044045224",
} as const;

export type RatingSource = {
  id: "yandex" | "2gis";
  label: string;
  score: string;
  scoreCount: number;
  reviewCount: number;
  url: string;
};

// Снято вручную с открытых карточек, август 2026. Числа меняются со временем — обновлять
// периодически, не выдавать за автоматический live-виджет.
export const ratings: RatingSource[] = [
  {
    id: "yandex",
    label: "Яндекс Карты",
    score: "4,9",
    scoreCount: 50,
    reviewCount: 32,
    url: socialLinks.yandexMaps,
  },
  {
    id: "2gis",
    label: "2ГИС",
    score: "5,0",
    scoreCount: 41,
    reviewCount: 33,
    url: socialLinks.twoGis,
  },
];

// Self-reported данные из Instagram-био (@king_doors05) — не независимо подтверждены, используются
// с явной атрибуцией источника, не как факт, проверенный третьей стороной.
export const selfReported = {
  yearsOnMarket: "более 9 лет",
  clientsServed: "5000",
  source: "Instagram @king_doors05",
} as const;

export const doorTypesConfirmed = [
  "скрытые",
  "купе",
  "металлические",
  "ПВХ",
  "стальные",
  "раздвижные",
  "межкомнатные",
  "алюминиевые",
  "массив",
  "входные",
] as const;

export const servicesConfirmed = [
  "замер",
  "монтаж",
  "производство",
  "предварительная запись",
  "самовывоз",
  "парковка",
] as const;

export const paymentMethodsConfirmed = [
  "наличными",
  "картой",
  "банковским переводом",
  "СБП",
  "рассрочка",
  "кредит",
] as const;
