// Данные Redken Loft (Краснодар) — собраны из брифа владельца и публичных карточек
// компании (Яндекс, 2ГИС, Instagram, VK). Ничего не выдумано.
//
// Поля с requiresVerification: true нужно подтвердить у владельца до публикации —
// это гарантирует, что на сайт не попадут неточные факты (см. AGENTS/бриф, разделы
// «Factual integrity» и «10+ лет»).
//
// bookingUrl намеренно null: у салона нет собственной формы онлайн-записи, только
// звонок / WhatsApp / Viber / карточки на картах. Компоненты обязаны использовать
// buildBookingHref() и не изобретать ссылку.

export const company = {
  name: "Redken Loft",
  city: "Краснодар",
  district: "Центральный микрорайон",
  address: "ул. Кубанская Набережная, 37, 1 этаж",
  hours: "Ежедневно, 09:00–21:00",
  phone: { value: "+7 (962) 860-00-06", href: "+79628600006" },
  whatsappUrl: "https://wa.me/79628600006",
  viberHref: "viber://chat?number=%2B79628600006",
  instagram: { handle: "@redken_loft_krd", url: "https://instagram.com/redken_loft_krd" },
  vk: { handle: "redken_loft_krd", url: "https://vk.com/redken_loft_krd" },
  // Нет собственной онлайн-записи — фолбэк на звонок/WhatsApp во всех CTA.
  bookingUrl: null as string | null,
  positioning:
    "Redken Loft — авторские стрижки и окрашивания, созданные под вашу индивидуальность.",
  yearsClaim: {
    text: "более 10 лет в Краснодаре",
    requiresVerification: true,
  },
} as const;

export function buildBookingHref(): string {
  return company.bookingUrl ?? company.whatsappUrl;
}

export const reputation = {
  yandex: {
    rating: "5,0",
    reviews: 209,
    photos: 286,
    staffPositive: 98,
    colorPositive: 100,
    atmospherePositive: 100,
    competencePositive: 98,
  },
  twoGis: {
    rating: "4,9",
    ratingsCount: "≈175",
    textReviews: "≈140",
    photos: 134,
  },
  heroTrustLine: "5,0 на Яндексе · 209 отзывов · 98% хвалят персонал",
  compactTrustLine: "5,0 на Яндексе · 209 отзывов · сложные окрашивания · Краснодар",
} as const;

export const navLinks = [
  { href: "#works", label: "Работы" },
  { href: "#services", label: "Услуги" },
  { href: "#team", label: "Стилисты" },
  { href: "#process", label: "О салоне" },
  { href: "#location", label: "Контакты" },
] as const;

export const heroCopy = {
  h1: "Цвет и форма, которые действительно вам подходят",
  subhead:
    "Авторские стрижки, сложные окрашивания и профессиональный уход в центре Краснодара. Сначала изучаем волосы, стиль и пожелания — затем создаём индивидуальный образ.",
  ctaPrimary: "Записаться к стилисту",
  ctaSecondary: "Посмотреть работы",
} as const;

export const positioning = {
  eyebrow: "Позиционирование",
  title: "Мы не подбираем оттенок отдельно от человека",
  lead:
    "Перед окрашиванием стилист оценивает исходную базу, состояние волос, привычный уход и то, как вы носите волосы каждый день — а не просто открывает палитру.",
  chain: [
    { label: "Форма лица", detail: "какие линии стрижки её поддержат" },
    { label: "Структура волос", detail: "густота, пористость, как волосы ведут себя после мытья" },
    { label: "Цветотип", detail: "какой оттенок будет читаться на коже, а не только в зеркале салона" },
    { label: "Привычки ухода", detail: "сколько времени и укладочных средств вы готовы тратить дома" },
    { label: "Желаемый результат", detail: "то, к чему стремимся с первой консультации" },
  ],
} as const;

export type WorkCategory = "Блонд" | "Airtouch" | "Авторское окрашивание" | "Стрижки" | "До / после";

export type WorkItem = {
  id: string;
  category: WorkCategory;
  caption: string;
  span: "tall" | "wide" | "square";
  swatch: [string, string];
  isPlaceholder: true;
};

// ВАЖНО: реальные фотографии работ Redken Loft недоступны в этой среде разработки.
// Плейсхолдеры сделаны как цветовые карты (color story), а не как выдуманные
// стоковые фото — ни один снимок не подписан как «работа салона». Каждый isPlaceholder
// нужно заменить на реальные фотографии из портфолио салона перед публикацией.
export const works: WorkItem[] = [
  { id: "w1", category: "Блонд", caption: "Блонд · холодная база", span: "tall", swatch: ["#efe6d3", "#cdbb95"], isPlaceholder: true },
  { id: "w2", category: "Airtouch", caption: "Airtouch · плавный переход", span: "wide", swatch: ["#e7d9c2", "#a98a5f"], isPlaceholder: true },
  { id: "w3", category: "Авторское окрашивание", caption: "Авторское окрашивание · тёплый карамель", span: "square", swatch: ["#caa06b", "#7a4b34"], isPlaceholder: true },
  { id: "w4", category: "Стрижки", caption: "Стрижка · форма под структуру волос", span: "square", swatch: ["#e9e2d6", "#8f8677"], isPlaceholder: true },
  { id: "w5", category: "До / после", caption: "До / после · коррекция формы и цвета", span: "wide", swatch: ["#dccbb3", "#5c3a2e"], isPlaceholder: true },
  { id: "w6", category: "Блонд", caption: "Блонд · платиновый уход", span: "square", swatch: ["#f2ecdf", "#b7a37f"], isPlaceholder: true },
  { id: "w7", category: "Авторское окрашивание", caption: "Авторское окрашивание · дымчатый бордо", span: "tall", swatch: ["#8c5a52", "#3d1f1c"], isPlaceholder: true },
  { id: "w8", category: "Airtouch", caption: "Airtouch · натуральные корни", span: "square", swatch: ["#e3d3b8", "#9c7a4e"], isPlaceholder: true },
] as const;

export const workCategories: (WorkCategory | "Все")[] = [
  "Все",
  "Блонд",
  "Airtouch",
  "Авторское окрашивание",
  "Стрижки",
  "До / после",
];

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  priceFrom: string;
  priceNote?: string;
};

export const services: ServiceItem[] = [
  {
    id: "color-signature",
    title: "Авторское окрашивание",
    description: "Индивидуальная техника и оттенок, подобранные под базу и структуру волос.",
    priceFrom: "от 13 000 ₽",
    priceNote: "короткие волосы · средние от 17 000 ₽ · длинные от 20 000 ₽",
  },
  {
    id: "color-tone",
    title: "Окрашивание тон в тон",
    description: "Обновление цвета без осветления — ровный, глубокий оттенок.",
    priceFrom: "7 000–10 000 ₽",
  },
  {
    id: "toning",
    title: "Тонирование",
    description: "Коррекция оттенка и нейтрализация нежелательной желтизны или тусклости.",
    priceFrom: "7 000–10 000 ₽",
  },
  {
    id: "root-color",
    title: "Окрашивание корней",
    description: "Поддержание отросших корней в тон общей длине.",
    priceFrom: "от 6 500 ₽",
  },
  {
    id: "haircut-women",
    title: "Женская стрижка",
    description: "Форма, подобранная под структуру волос и то, как вы укладываетесь каждый день.",
    priceFrom: "от 3 000 ₽",
  },
  {
    id: "haircut-men",
    title: "Мужская стрижка",
    description: "Точная форма и линия, которые держатся между визитами.",
    priceFrom: "от 1 900 ₽",
  },
  {
    id: "perm",
    title: "Биозавивка",
    description: "Долговременная укладка с бережным для структуры волос составом.",
    priceFrom: "10 000–22 000 ₽",
  },
  {
    id: "styling",
    title: "Укладка",
    description: "Укладка на выход или под настроение дня.",
    priceFrom: "2 000–2 300 ₽",
  },
];

export const servicesNote =
  "Точная стоимость окрашивания зависит от длины, густоты и текущего состояния волос. Стилист назовёт стоимость после консультации.";

export type Stylist = {
  id: string;
  name: string;
  role: string;
  specialization: string;
  philosophy?: string;
  prices?: { label: string; value: string }[];
};

export const stylists: Stylist[] = [
  {
    id: "dmitriy-bazdyrev",
    name: "Дмитрий Баздырев",
    role: "Стилист",
    specialization: "Авторские женские и мужские стрижки, окрашивания",
    prices: [
      { label: "Женская стрижка", value: "4 700 ₽" },
      { label: "Мужская стрижка", value: "3 500 ₽" },
    ],
  },
  {
    id: "nikita-shamay",
    name: "Никита Шамай",
    role: "Стилист",
    specialization: "Стрижки и окрашивания",
    prices: [{ label: "Женская стрижка", value: "3 700 ₽" }],
  },
  {
    id: "vera-forostyan",
    name: "Вера Форостян",
    role: "Стилист",
    specialization: "Цвет и стрижки",
    prices: [{ label: "Женская стрижка", value: "3 700 ₽" }],
  },
  {
    id: "olga",
    name: "Ольга",
    role: "Стилист",
    specialization: "Работа с блондом / Airtouch",
  },
  {
    id: "ekaterina",
    name: "Екатерина",
    role: "Мастер салона",
    specialization: "",
  },
];

export const process = [
  { number: "01", title: "Диалог", description: "Понимаем желаемый образ и привычный уход." },
  { number: "02", title: "Диагностика", description: "Оцениваем базу, структуру и состояние волос." },
  { number: "03", title: "Формула", description: "Подбираем технику, оттенок и план работы." },
  {
    number: "04",
    title: "Результат",
    description: "Создаём цвет и форму с учётом того, как они будут выглядеть не только в салоне, но и после.",
  },
] as const;

export const materials = {
  caption: "В работе — профессиональные системы Redken, Kevin Murphy и La Biosthetique.",
  brands: ["Redken", "Kevin Murphy", "La Biosthetique"],
} as const;

export type ReviewPattern = {
  id: string;
  theme: string;
  summary: string;
};

// Summary-стиль без кавычек — точных текстов отзывов у нас нет, дословно ничего не цитируем.
export const reviewPatterns: ReviewPattern[] = [
  {
    id: "loyalty",
    theme: "Многолетние отношения с одним мастером",
    summary:
      "Часть клиентов приходит к одному и тому же стилисту годами и не рассматривает других мастеров.",
  },
  {
    id: "understanding",
    theme: "Точное понимание пожеланий",
    summary:
      "Клиенты отмечают, что результат совпадает с тем, что они описывали на консультации — без сюрпризов.",
  },
  {
    id: "blond",
    theme: "Бережный вывод в блонд",
    summary:
      "Осветление и Airtouch описывают как аккуратную работу с сохранением состояния волос.",
  },
  {
    id: "out-of-town",
    theme: "Едут из других городов",
    summary:
      "Есть клиенты, которые сохраняют запись к конкретному мастеру и приезжают к нему из других городов.",
  },
];

export const atmosphereCopy = {
  title: "Пространство, куда возвращаются не только за результатом.",
} as const;

export const locationCopy = {
  ctaRoute: "Построить маршрут",
  ctaBook: "Записаться",
  // Ссылку на карту/маршрут владелец должен подтвердить и предоставить точный адрес-код Я/2ГИС.
  mapUrl: null as string | null,
  requiresVerification: {
    parking: true,
    promotions: true,
    legal: true,
  },
} as const;

export const finalCta = {
  title: "Хороший цвет начинается не с палитры, а с разговора.",
  cta: "Записаться на консультацию",
} as const;

export const legal = {
  // Публичные юридические реквизиты (ИНН/ОГРНИП) в открытых источниках конфликтуют
  // между собой — ничего не переносим на сайт до подтверждения владельцем.
  entityName: null as string | null,
  inn: null as string | null,
  ogrn: null as string | null,
  requiresVerification: true,
} as const;
