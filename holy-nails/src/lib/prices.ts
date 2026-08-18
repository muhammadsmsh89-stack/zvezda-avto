// Цены — из каталога услуг holy-nails.clients.site (официальный сайт студии,
// раздел «Каталог»), сверены с прайсом на n996226.yclients.com. Указаны цены
// мастера и топ-мастера, где они различаются. Проверено 18.08.2026.
// Актуальную стоимость на момент записи уточняйте у администратора.

export type PriceItem = {
  title: string;
  master?: number;
  topMaster?: number;
  price?: number;
  note?: string;
};

export type PriceGroup = {
  directionSlug: string;
  items: readonly PriceItem[];
};

export const priceGroups: readonly PriceGroup[] = [
  {
    directionSlug: "manicure",
    items: [
      { title: "Маникюр классический без покрытия", master: 1190, topMaster: 1300 },
      { title: "Маникюр с покрытием на базе", topMaster: 2000 },
      { title: "Маникюр с покрытием гель-лак", master: 1890, topMaster: 2300 },
      { title: "Мужской маникюр", master: 1200, topMaster: 1600 },
      { title: "Снятие старого покрытия", price: 300 },
    ],
  },
  {
    directionSlug: "pedicure",
    items: [
      { title: "Педикюр без покрытия", master: 1890, topMaster: 2100 },
      { title: "Педикюр, пальчики с однотонным покрытием", master: 2000, topMaster: 2500 },
      { title: "Педикюр с покрытием гель-лак", topMaster: 2800 },
    ],
  },
  {
    directionSlug: "extensions",
    items: [
      { title: "Наращивание ногтей до 2 см", master: 2600, topMaster: 3200 },
      { title: "Наращивание ногтей от 2 см", topMaster: 3700 },
      { title: "Коррекция наращённых ногтей до 2 см", master: 2300, topMaster: 2700 },
      { title: "Коррекция наращённых ногтей от 2 см", topMaster: 3200 },
    ],
  },
  {
    directionSlug: "design",
    items: [
      { title: "Дизайн", price: 300, note: "один элемент" },
      { title: "Дизайн-френч на всех пальцах", price: 400 },
      { title: "Дизайн-роспись", price: 700 },
      { title: "Дизайн-стразы на всех пальцах", price: 600 },
      { title: "Втирка / стемпинг на всех пальцах", price: 400, note: "от" },
      { title: "Фигурка", price: 50 },
    ],
  },
  {
    directionSlug: "brows-lashes",
    items: [
      { title: "Коррекция бровей пинцетом", price: 350 },
      { title: "Окрашивание бровей без коррекции", price: 500 },
      { title: "Окрашивание бровей с коррекцией", price: 900 },
      { title: "Ламинирование бровей без окрашивания", price: 1000 },
      { title: "Ламинирование бровей с окрашиванием", price: 1500 },
      { title: "Ламинирование ресниц без окрашивания", price: 1500 },
      { title: "Ламинирование ресниц с окрашиванием", price: 2000 },
    ],
  },
] as const;

export function getPriceGroup(directionSlug: string) {
  return priceGroups.find((g) => g.directionSlug === directionSlug);
}

export function formatPrice(value: number) {
  return `${value.toLocaleString("ru-RU")} ₽`;
}
