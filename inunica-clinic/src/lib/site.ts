/**
 * Единственный источник правды по контактам, юридическим данным и навигации.
 *
 * Все значения сняты с inunica.ru (импорт от 23.08.2026, см. scripts/import).
 * Ничего не выдумано: если данные нет в источнике — поля здесь тоже нет.
 */

export const site = {
  name: "INUNICA clinic",
  legalName: "ООО «АТМ»",
  tagline: "Клиника косметологии",
  /* На сайте клиники: «Косметология „Inunica Clinic“ (ранее „Уника Клиник“)». */
  formerName: "Уника Клиник",
  city: "Белгород",

  address: {
    street: "ул. Белгородского полка, 49",
    full: "Белгород, ул. Белгородского полка, 49",
    postal: "308001, Белгородская область, г. Белгород, ул. Белгородского полка, д. 49",
    mapUrl: "https://yandex.ru/maps/?text=Белгород, улица Белгородского полка, 49",
    routeUrl:
      "https://yandex.ru/maps/?rtext=~Белгород, улица Белгородского полка, 49&rtt=auto",
  },

  hours: {
    short: "Ежедневно 10:00–20:00",
    long: "Понедельник — воскресенье, 10:00–20:00 без перерыва",
    opens: "10:00",
    closes: "20:00",
    note: "Приём по предварительной записи.",
  },

  phone: { display: "+7 (909) 200-43-51", href: "tel:+79092004351" },
  whatsapp: "https://wa.me/79092004351",
  email: "unica.clinic@bk.ru",

  socials: [
    { label: "Telegram", href: "https://t.me/unica_rf" },
    { label: "ВКонтакте", href: "https://vk.com/inunica_clinic" },
    { label: "WhatsApp", href: "https://wa.me/79092004351" },
  ],

  license: {
    number: "ЛО-31-01-003186",
    date: "25.11.2021",
    issuer: "Департамент здравоохранения Белгородской области",
    full: "№ ЛО-31-01-003186 от 25.11.2021, выдана Департаментом здравоохранения Белгородской области",
  },

  requisites: {
    inn: "3123444107",
    kpp: "312301001",
    ogrn: "1183123027427",
    okpo: "33317539",
  },

  /* Отзывы на сторонних площадках — их считает не клиника, а площадка. */
  reviews: {
    prodoctorov: "https://prodoctorov.ru/belgorod/lpu/80925-unica-clinic/",
    yandex: "https://yandex.ru/maps/?text=INUNICA clinic Белгород отзывы",
  },

  /** Цена первичной консультации врача-косметолога — из действующего прайса. */
  consultationPrice: 1700,

  legalNotice:
    "Имеются противопоказания. Необходима консультация специалиста. Результат процедур зависит от индивидуальных особенностей организма.",

  offerNotice:
    "Информация на сайте носит справочный характер и не является публичной офертой. Цены не являются публичной офертой.",
} as const;

export const nav = [
  { label: "Процедуры", href: "/uslugi/" },
  { label: "Прайс", href: "/price/" },
  { label: "Команда", href: "/komanda/" },
  { label: "Акции", href: "/akcii/" },
  { label: "Контакты", href: "/kontakty/" },
] as const;

/** Разделы подвала: услуги, клиника, юридическое. */
export const footerNav = [
  {
    title: "Процедуры",
    links: [
      { label: "Лазерная эпиляция", href: "/uslugi/lazernaya-epilyaciya/" },
      { label: "Аппаратная косметология лица", href: "/uslugi/apparatnaya-kosmetologiya-lica/" },
      { label: "Аппаратная косметология тела", href: "/uslugi/apparatnaya-kosmetologiya-tela/" },
      { label: "Эстетическая косметология", href: "/uslugi/esteticheskaya-kosmetologiya/" },
      { label: "Инъекции и капельницы", href: "/uslugi/inekcii-kapelnicy/" },
      { label: "Массаж", href: "/uslugi/massazh/" },
    ],
  },
  {
    title: "Клиника",
    links: [
      { label: "Все процедуры", href: "/uslugi/" },
      { label: "Прайс-лист", href: "/price/" },
      { label: "Команда", href: "/komanda/" },
      { label: "Акции и абонементы", href: "/akcii/" },
      { label: "Контакты", href: "/kontakty/" },
    ],
  },
  {
    title: "Документы",
    links: [
      { label: "Сведения об организации", href: "/svedeniya-ob-organizacii/" },
      { label: "Политика конфиденциальности", href: "/privacy/" },
      { label: "Обработка персональных данных", href: "/personalnye-dannye/" },
    ],
  },
] as const;
