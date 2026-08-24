// Цены — ориентир «от», без официального прайс-листа (страница /price/ на
// wrapmenow.ru не отдаёт цифры в исходном HTML — см. scripts/photo-sources.md).
// Анкерное значение «от 147 700 ₽» для полной защиты кузова — из брифа
// заказчика. Остальные величины — пропорциональные ориентиры на его основе,
// НЕ прайс-лист. Итоговая стоимость фиксируется только после осмотра
// автомобиля и согласования. См. CONTENT_VERIFICATION.md.

export type PriceRow = { label: string; from: string };
export type PriceGroup = { title: string; rows: PriceRow[] };

export const priceGroups: PriceGroup[] = [
  {
    title: "Защитная оклейка (PPF)",
    rows: [
      { label: "Зоны риска", from: "от 45 000 ₽*" },
      { label: "Передняя часть", from: "от 85 000 ₽*" },
      { label: "Кузов целиком", from: "от 147 700 ₽*" },
      { label: "Фары", from: "от 6 000 ₽*" },
      { label: "Лобовое стекло", from: "от 18 000 ₽*" },
    ],
  },
  {
    title: "Цветная оклейка",
    rows: [
      { label: "Отдельные элементы (капот, крыша)", from: "от 25 000 ₽*" },
      { label: "Кузов целиком — матовая/глянцевая", from: "от 95 000 ₽*" },
      { label: "Карбон, хамелеон, текстуры", from: "от 120 000 ₽*" },
      { label: "Индивидуальный дизайн с печатью", from: "от 150 000 ₽*" },
    ],
  },
  {
    title: "Антихром",
    rows: [
      { label: "Решётка радиатора", from: "от 12 000 ₽*" },
      { label: "Молдинги и шильдики", from: "от 6 000 ₽*" },
      { label: "Ручки дверей", from: "от 8 000 ₽*" },
      { label: "Диски (комплект)", from: "от 20 000 ₽*" },
    ],
  },
  {
    title: "Тонировка",
    rows: [
      { label: "Задняя полусфера", from: "от 8 000 ₽*" },
      { label: "Лобовое стекло", from: "от 5 000 ₽*" },
      { label: "Весь автомобиль", from: "от 15 000 ₽*" },
    ],
  },
  {
    title: "Брендирование",
    rows: [
      { label: "Легковой автомобиль / такси", from: "от 35 000 ₽*" },
      { label: "Коммерческий транспорт", from: "от 90 000 ₽*" },
      { label: "Спецтехника", from: "по расчёту" },
    ],
  },
];

export const pricesNote =
  "* Цены ориентировочные. Точная стоимость зависит от класса автомобиля, материала и площади оклейки и фиксируется после осмотра автомобиля и согласования — по договору.";

// ---- Калькулятор ----

export const vehicleClasses = [
  { id: "sedan", label: "Седан", factor: 1 },
  { id: "crossover", label: "Кроссовер", factor: 1.15 },
  { id: "suv", label: "Большой внедорожник", factor: 1.4 },
  { id: "coupe", label: "Купе", factor: 0.95 },
  { id: "premium", label: "Премиум / другое", factor: 1.3 },
] as const;

export const calcNeeds = [
  { id: "ppf", label: "Защита кузова", base: 45000 },
  { id: "color-wrap", label: "Изменение цвета", base: 25000 },
  { id: "blackout", label: "Антихром", base: 12000 },
  { id: "tint", label: "Тонировка", base: 8000 },
  { id: "branding", label: "Другое", base: 35000 },
] as const;

export const calcAreas = [
  { id: "risk", label: "Зоны риска", factor: 1 },
  { id: "front", label: "Передняя часть", factor: 1.9 },
  { id: "full", label: "Полный кузов", factor: 3.3 },
  { id: "elements", label: "Отдельные элементы", factor: 0.6 },
] as const;

export const calcMaterials = [
  { id: "unsure", label: "Не знаю, нужна рекомендация" },
  { id: "glossy", label: "Глянцевая" },
  { id: "matte", label: "Матовая" },
  { id: "premium", label: "Премиальная (Crystal Pro / Gliss Pro)" },
] as const;

export function estimateRange(needId: string, areaId: string, vehicleClassId: string) {
  const need = calcNeeds.find((n) => n.id === needId) ?? calcNeeds[0];
  const area = calcAreas.find((a) => a.id === areaId) ?? calcAreas[0];
  const vehicleClass = vehicleClasses.find((v) => v.id === vehicleClassId) ?? vehicleClasses[0];

  const base = need.base * area.factor * vehicleClass.factor;
  const from = Math.round(base / 1000) * 1000;
  const to = Math.round((base * 1.35) / 1000) * 1000;

  return { from, to };
}

export function formatRub(value: number) {
  return `${value.toLocaleString("ru-RU")} ₽`;
}
