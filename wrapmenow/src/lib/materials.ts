// Материалы. Crystal Pro, Gliss Pro Premium, Avery и Oracal подтверждены на
// реальных проектах WrapMeNow (wrapmenow.ru/projects/, см. lib/projects.ts).
// SunTek и Llumar упоминаются в описании услуг на wrapmenow.ru. VEGA,
// Armotek, Spectroll Premium и Quantum Palladium — из брифа заказчика,
// требуют подтверждения (см. CONTENT_VERIFICATION.md). Ни один бренд не
// заявлен как «официальный партнёр» без прямого подтверждения владельца.

export type Material = {
  name: string;
  category: "Защитная плёнка" | "Виниловая плёнка" | "Тонировочная плёнка";
  confirmed: boolean;
  note: string;
};

export const materials: Material[] = [
  { name: "Crystal Pro", category: "Защитная плёнка", confirmed: true, note: "Использована на нескольких реальных проектах WrapMeNow" },
  { name: "Gliss Pro Premium", category: "Защитная плёнка", confirmed: true, note: "Глянцевая полиуретановая — проект Xiaomi SU7" },
  { name: "Avery", category: "Виниловая плёнка", confirmed: true, note: "Цветная виниловая — проект Jeep Wrangler" },
  { name: "Oracal", category: "Виниловая плёнка", confirmed: true, note: "Использована на проекте Honda CTX" },
  { name: "SunTek", category: "Защитная плёнка", confirmed: true, note: "Упоминается в описании услуг студии" },
  { name: "Llumar", category: "Защитная плёнка", confirmed: true, note: "Упоминается в описании услуг студии" },
  { name: "VEGA", category: "Защитная плёнка", confirmed: false, note: "Требует подтверждения" },
  { name: "Armotek", category: "Защитная плёнка", confirmed: false, note: "Требует подтверждения" },
  { name: "Spectroll Premium", category: "Виниловая плёнка", confirmed: false, note: "Требует подтверждения" },
  { name: "Quantum Palladium", category: "Тонировочная плёнка", confirmed: false, note: "Требует подтверждения" },
];

export type MaterialParam = {
  label: string;
  values: Record<string, string>;
};

// Сравнение по типовым параметрам плёнки — ориентировочно, для навигации
// клиента между вариантами, не претендует на точные тех. данные конкретной
// партии материала.
export const materialParams: MaterialParam[] = [
  {
    label: "Прозрачность",
    values: { "Полиуретановая (PPF)": "Высокая — цвет кузова не меняется", "Винил матовый": "Меняет цвет и фактуру", "Винил глянцевый": "Меняет цвет, сохраняет блеск" },
  },
  {
    label: "Толщина",
    values: { "Полиуретановая (PPF)": "≈150–200 мкм", "Винил матовый": "≈100 мкм", "Винил глянцевый": "≈100 мкм" },
  },
  {
    label: "Блеск",
    values: { "Полиуретановая (PPF)": "Глянец или мат — под задачу", "Винил матовый": "Матовый", "Винил глянцевый": "Глянцевый" },
  },
  {
    label: "Защита от сколов",
    values: { "Полиуретановая (PPF)": "Высокая — основное назначение", "Винил матовый": "Косметическая", "Винил глянцевый": "Косметическая" },
  },
  {
    label: "Типичная задача",
    values: { "Полиуретановая (PPF)": "Сохранить кузов с завода", "Винил матовый": "Сменить облик, приглушённый эффект", "Винил глянцевый": "Сменить цвет, максимальный блеск" },
  },
];

export const materialsIntro =
  "Материал подбираем под задачу автомобиля, а не под максимальный чек: для защиты кузова с завода — полиуретановая плёнка, для смены облика — винил нужной фактуры.";
