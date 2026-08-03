// Реальные данные сети салонов красоты Naturel Studio, собранные с naturel-studio.ru
// (главная, /contactsmain/, /masters/, /price/). Адреса, телефоны, режим работы,
// мессенджеры, категории услуг и мастера — фактические, не изменялись.
//
// Единственное, чего нет в открытом доступе на сайте — конкретные цены и точный
// хронометраж по каждой подкатегории услуг (страница /price/ не отдаёт цифры без
// авторизованной консультации). Поля `priceFrom` / `duration` в serviceCategories —
// ИЛЛЮСТРАТИВНЫЕ ПЛЕЙСХОЛДЕРЫ на основе типичных рыночных ориентиров для этих услуг.
// Перед публикацией сайта их нужно заменить на реальный прайс-лист салона.

export const company = {
  name: "Naturel Studio",
  fullName: "Сеть салонов красоты Naturel Studio",
  tagline: "Ваша красота — наша миссия",
  description:
    "Мы внимательно относимся к каждому клиенту, обеспечивая высокое качество услуг и индивидуальный подход, чтобы подчеркнуть естественную красоту каждого.",
  city: "Москва",
  foundedYear: 2009,
  yearsOfExperience: 16,
  salonsCount: 7,
  hours: "Ежедневно, 10:00–22:00",
  phone: { value: "8 (495) 045-6558", href: "+74950456558" },
  whatsapp: "79684763125",
  whatsappUrl: "https://wa.me/79684763125",
  telegramUrl: "https://t.me/naturel_studio",
  emails: {
    qualityGroupA: "naturelstudio-kachestvo@mail.ru",
    qualityGroupB: "naturelstudio.kachestvo@mail.ru",
    partnerships: "pr.naturelstudio@mail.ru",
  },
} as const;

export const trustStats = [
  { value: "16", suffix: " лет", label: `Опыта на рынке красоты — с ${company.foundedYear} года` },
  { value: "7", suffix: "", label: "Салонов в разных районах Москвы" },
  { value: "60", suffix: "+", label: "Мастеров и специалистов в штате" },
  { value: "6", suffix: "", label: "Направлений услуг под одной крышей" },
] as const;

export const advantages = [
  {
    title: "Стиль",
    description:
      "Подчёркиваем вашу индивидуальность и красоту. Создаём образы, которые запоминаются и работают на вас каждый день.",
  },
  {
    title: "Интерьер",
    description:
      "Уютные и элегантные пространства, мягкое освещение и приятная атмосфера — чтобы каждый визит был моментом отдыха.",
  },
  {
    title: "Мастера",
    description:
      "Профессионалы своего дела регулярно проходят обучение и сертификацию, чтобы быть в курсе последних техник и трендов.",
  },
  {
    title: "Все услуги в одном месте",
    description:
      "Волосы, ногти, визаж, косметология и массаж — не нужно ездить по городу, чтобы собрать полный бьюти-день.",
  },
  {
    title: "7 салонов по Москве",
    description:
      "Выбирайте студию рядом с домом или работой — Москва-Сити, Белорусская, Комсомольская, Тульская, Академическая, Раменки, Сердце столицы.",
  },
  {
    title: "Запись без ожидания на линии",
    description:
      "Записывайтесь онлайн за 30 секунд или напишите в WhatsApp/Telegram — без звонков и ожидания оператора.",
  },
] as const;

export type ServiceSubcategory = { name: string; duration: string; priceFrom: string };
export type ServiceCategory = {
  slug: string;
  title: string;
  description: string;
  icon: "hair" | "nails" | "makeup" | "cosmetology" | "massage" | "home";
  subcategories: ServiceSubcategory[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "parikmaherskiy-zal",
    title: "Парикмахерский зал",
    description: "Окрашивание, стрижки, укладки и уход — от лёгкой коррекции до полного преображения.",
    icon: "hair",
    subcategories: [
      { name: "Мелирование волос", duration: "от 120 мин", priceFrom: "от 6 500 ₽" },
      { name: "Окрашивание волос", duration: "от 90 мин", priceFrom: "от 4 500 ₽" },
      { name: "Стрижка волос", duration: "от 45 мин", priceFrom: "от 2 500 ₽" },
      { name: "Услуги биозавивки", duration: "от 150 мин", priceFrom: "от 7 000 ₽" },
      { name: "Причёски и укладки волос", duration: "от 40 мин", priceFrom: "от 2 800 ₽" },
      { name: "Уход за волосами", duration: "от 45 мин", priceFrom: "от 3 000 ₽" },
      { name: "Выпрямление волос", duration: "от 120 мин", priceFrom: "от 5 500 ₽" },
      { name: "Наращивание волос", duration: "от 180 мин", priceFrom: "от 15 000 ₽" },
    ],
  },
  {
    slug: "manikur-i-pedikur",
    title: "Маникюр и педикюр",
    description: "Ногтевой сервис полного цикла: от классики до сложных покрытий и дизайна.",
    icon: "nails",
    subcategories: [
      { name: "Услуги маникюра", duration: "от 60 мин", priceFrom: "от 2 200 ₽" },
      { name: "Услуги педикюра", duration: "от 75 мин", priceFrom: "от 3 000 ₽" },
      { name: "Услуги наращивания ногтей", duration: "от 120 мин", priceFrom: "от 4 500 ₽" },
      { name: "Ногтевой сервис", duration: "от 60 мин", priceFrom: "от 2 200 ₽" },
      { name: "Покрытия для ногтей", duration: "от 30 мин", priceFrom: "от 1 200 ₽" },
    ],
  },
  {
    slug: "vizazh",
    title: "Визаж",
    description: "Брови, ресницы и макияж для будней, съёмок и особых случаев.",
    icon: "makeup",
    subcategories: [
      { name: "Брови и ресницы", duration: "от 45 мин", priceFrom: "от 1 800 ₽" },
      { name: "Макияж", duration: "от 60 мин", priceFrom: "от 3 500 ₽" },
    ],
  },
  {
    slug: "kosmetologiya",
    title: "Косметология",
    description: "Эстетическая, аппаратная и инъекционная косметология под контролем врача.",
    icon: "cosmetology",
    subcategories: [
      { name: "Эстетическая косметология", duration: "от 60 мин", priceFrom: "от 3 500 ₽" },
      { name: "Аппаратная косметология", duration: "от 45 мин", priceFrom: "от 4 000 ₽" },
      { name: "Инъекционная косметология", duration: "от 40 мин", priceFrom: "от 7 000 ₽" },
    ],
  },
  {
    slug: "massazh",
    title: "Массаж",
    description: "Расслабление и уход за телом: от классического массажа до обёртываний.",
    icon: "massage",
    subcategories: [
      { name: "Массаж для тела", duration: "от 60 мин", priceFrom: "от 3 500 ₽" },
      { name: "Прессотерапия", duration: "от 45 мин", priceFrom: "от 2 500 ₽" },
      { name: "Обёртывания", duration: "от 60 мин", priceFrom: "от 3 000 ₽" },
    ],
  },
  {
    slug: "uslugi-na-domu",
    title: "Услуги на дому",
    description: "Мастер приезжает к вам — тот же уровень сервиса в комфорте своего дома.",
    icon: "home",
    subcategories: [
      { name: "Парикмахерские услуги на дому", duration: "от 60 мин", priceFrom: "от 3 500 ₽" },
      { name: "Ногтевой сервис на дому", duration: "от 60 мин", priceFrom: "от 3 000 ₽" },
      { name: "Визаж на дому", duration: "от 60 мин", priceFrom: "от 4 500 ₽" },
      { name: "Массаж на дому", duration: "от 60 мин", priceFrom: "от 4 000 ₽" },
    ],
  },
];

export type Salon = {
  slug: string;
  metro: string;
  address: string;
  phone: { value: string; href: string };
  hours: string;
};

export const salons: Salon[] = [
  {
    slug: "moskva-siti",
    metro: "Москва-Сити",
    address: "Пресненская наб., дом 10, стр. 2, 1 этаж",
    phone: { value: "+7 930 036-10-56", href: "+79300361056" },
    hours: "10:00–22:00",
  },
  {
    slug: "serdtse-stolitsy",
    metro: "ЖК «Сердце столицы»",
    address: "ул. Шелепихинская наб., дом 34, корп. 4",
    phone: { value: "+7 930 036-21-68", href: "+79300362168" },
    hours: "10:00–22:00",
  },
  {
    slug: "komsomolskaya",
    metro: "Комсомольская",
    address: "ул. Маши Порываевой, д. 38",
    phone: { value: "+7 930 036-10-54", href: "+79300361054" },
    hours: "10:00–22:00",
  },
  {
    slug: "belorusskaya",
    metro: "Белорусская",
    address: "Верхняя ул., 20к1",
    phone: { value: "+7 930 036-10-48", href: "+79300361048" },
    hours: "10:00–22:00",
  },
  {
    slug: "tulskaya",
    metro: "Тульская",
    address: "Духовской пер., дом 17, стр. 11",
    phone: { value: "+7 930 036-10-47", href: "+79300361047" },
    hours: "10:00–22:00",
  },
  {
    slug: "akademicheskaya",
    metro: "Академическая",
    address: "ул. Новочерёмушкинская, д. 13",
    phone: { value: "+7 930 036-10-53", href: "+79300361053" },
    hours: "10:00–22:00",
  },
  {
    slug: "ramenki",
    metro: "Раменки",
    address: "ул. Винницкая, дом 8, к. 3",
    phone: { value: "+7 930 036-10-58", href: "+79300361058" },
    hours: "10:00–22:00",
  },
] as const;

export type Master = {
  name: string;
  role: string;
  salonSlug: string;
  specialtyIcon: ServiceCategory["icon"];
};

export const masters: Master[] = [
  { name: "Мария Вождаева", role: "Топ-стилист", salonSlug: "moskva-siti", specialtyIcon: "hair" },
  { name: "Татьяна Козлова", role: "Косметолог-эстетист", salonSlug: "komsomolskaya", specialtyIcon: "cosmetology" },
  { name: "Валерия Панкратова", role: "Арт-визажист", salonSlug: "ramenki", specialtyIcon: "makeup" },
  { name: "Анжелика Пуканюк", role: "Врач-дерматокосметолог", salonSlug: "akademicheskaya", specialtyIcon: "cosmetology" },
  { name: "Людмила Малачлы", role: "Топ-массажист", salonSlug: "moskva-siti", specialtyIcon: "massage" },
  { name: "Тина Исаметова", role: "Ведущий мастер ногтевого сервиса", salonSlug: "ramenki", specialtyIcon: "nails" },
  { name: "Илья Лёвочкин", role: "Топ-стилист", salonSlug: "belorusskaya", specialtyIcon: "hair" },
  { name: "Виктория Мотина", role: "Арт-директор", salonSlug: "tulskaya", specialtyIcon: "hair" },
] as const;

export const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#team", label: "Мастера" },
  { href: "#before-after", label: "До / После" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#gallery", label: "Галерея" },
  { href: "#faq", label: "Вопросы" },
  { href: "#contacts", label: "Контакты" },
] as const;

export const faq = [
  {
    question: "Как быстро я получу подтверждение записи?",
    answer:
      "Заявка с сайта сразу уходит администратору салона в WhatsApp. В рабочее время подтверждение приходит в течение 15 минут — вам не нужно ждать обратного звонка.",
  },
  {
    question: "Можно ли перенести или отменить запись?",
    answer:
      "Да, напишите администратору в WhatsApp или Telegram того салона, куда записаны, минимум за 3 часа до визита — перенесём на удобное время без потери места.",
  },
  {
    question: "Нужно ли вносить предоплату?",
    answer:
      "Для большинства услуг предоплата не требуется. Для сложных многочасовых процедур (наращивание волос, комплексное окрашивание) администратор может попросить предоплату — это будет заранее оговорено при подтверждении.",
  },
  {
    question: "Что если я не знаю, какого мастера выбрать?",
    answer:
      "Оставьте выбор мастера пустым в форме записи — администратор подберёт специалиста нужного профиля и уровня в выбранном салоне.",
  },
  {
    question: "Работаете ли вы по выходным?",
    answer: `Да, все ${company.salonsCount} салонов работают без выходных, ${company.hours.toLowerCase()}.`,
  },
] as const;

export function buildWhatsappBookingUrl(params: {
  categoryTitle?: string;
  subcategoryName?: string;
  salonMetro?: string;
  masterName?: string;
  date?: string;
  time?: string;
  name?: string;
  phone?: string;
}) {
  const lines = [
    "Здравствуйте! Хочу записаться в Naturel Studio.",
    params.categoryTitle && `Услуга: ${params.categoryTitle}${params.subcategoryName ? ` — ${params.subcategoryName}` : ""}`,
    params.salonMetro && `Салон: ${params.salonMetro}`,
    params.masterName && `Мастер: ${params.masterName}`,
    (params.date || params.time) && `Дата и время: ${[params.date, params.time].filter(Boolean).join(", ")}`,
    params.name && `Имя: ${params.name}`,
    params.phone && `Телефон: ${params.phone}`,
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${company.whatsapp}?text=${text}`;
}

export const gallery = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  alt: `Naturel Studio — интерьер и атмосфера салона, фото ${i + 1}`,
}));
