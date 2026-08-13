// Цены — фактические, с публичного раздела «Товары и услуги» на Яндекс Картах
// (yandex.ru/maps/org/studio_celebrity/165256171430, раздел обновлён 29.06.2026,
// проверено 13.08.2026). Позиции без источника отмечены price: null и выводятся
// как «Уточнить стоимость» — цену придумывать нельзя.

export type PriceItem = {
  name: string;
  price: string | null;
  note?: string;
};

export type Direction = {
  slug: string;
  code: string;
  title: string;
  short: string;
  description: string;
  items: readonly PriceItem[];
};

export const directions: readonly Direction[] = [
  {
    slug: "hair",
    code: "HAIR",
    title: "Hair",
    short: "Стрижки, окрашивания, уход и восстановление",
    description:
      "Стрижки, сложное окрашивание, уход и восстановление волос — от выхода из тёмного до мягкого натурального блонда.",
    items: [
      { name: "Стрижка", price: null },
      { name: "Тонирование", price: "от 6 000 ₽", note: "в зависимости от длины и густоты" },
      { name: "Сложное окрашивание", price: "от 10 000 ₽", note: "VERIFY_BEFORE_PRODUCTION" },
      { name: "Укладка / локоны", price: "от 2 500 ₽", note: "доплата за очень длинные/густые волосы" },
      { name: "Детская укладка", price: "от 2 500 ₽" },
      { name: "Свадебная причёска", price: "от 4 000 ₽" },
      { name: "Наращивание волос", price: null },
      { name: "Кератиновое выпрямление", price: null },
      { name: "Биоламинирование / нанопластика", price: null },
    ],
  },
  {
    slug: "makeup",
    code: "MAKEUP",
    title: "Makeup",
    short: "Профессиональный макияж на любое событие",
    description: "Макияж на мероприятия, вечерние образы и съёмки — с учётом пожеланий и референсов клиента.",
    items: [
      { name: "Макияж на мероприятие", price: null },
      { name: "Вечерний образ", price: null },
      { name: "Индивидуальный урок «Макияж для себя»", price: "8 000 ₽" },
    ],
  },
  {
    slug: "brows-lashes",
    code: "BROWS & LASHES",
    title: "Brows & Lashes",
    short: "Архитектура бровей, ламинирование, ресницы",
    description: "Архитектура и окрашивание бровей, ламинирование бровей и ресниц.",
    items: [
      { name: "Архитектура бровей", price: "1 700 ₽" },
      { name: "Окрашивание бровей", price: "1 000 ₽", note: "краска или хна на выбор" },
      { name: "Ламинирование / долговременная укладка бровей", price: "2 000 ₽" },
      { name: "Ламинирование ресниц", price: "2 000 ₽" },
    ],
  },
  {
    slug: "event-beauty",
    code: "EVENT BEAUTY",
    title: "Event Beauty",
    short: "Макияж + причёска в 4 руки",
    description: "Два мастера работают одновременно, чтобы собрать законченный образ и сэкономить время перед событием.",
    items: [
      { name: "Образ в 4 руки (макияж + причёска)", price: null },
      { name: "Свадебный образ", price: null },
    ],
  },
  {
    slug: "education",
    code: "BEAUTY SCHOOL",
    title: "Beauty School",
    short: "Обучение для мастеров и для себя",
    description: "Курсы для будущих мастеров и индивидуальные уроки для тех, кто хочет разобраться в макияже для себя.",
    items: [
      { name: "Базовый курс «Brow master»", price: "от 20 000 до 35 000 ₽" },
      { name: "Индивидуальный урок «Макияж для себя»", price: "8 000 ₽" },
    ],
  },
] as const;

export function getDirectionBySlug(slug: string): Direction | undefined {
  return directions.find((d) => d.slug === slug);
}
