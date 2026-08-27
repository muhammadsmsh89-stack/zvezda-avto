// Портфолио «до/после» — заглушки под реальные фотографии работ салона
// (286 фото на Яндексе, 134 в 2ГИС). Категории отражают заявленные техники из брифа.

export const workCategories = [
  "Все работы",
  "Airtouch",
  "Balayage",
  "Shatush",
  "Блонд",
  "Стрижки",
] as const;

export const works = [
  { id: "01", title: "Airtouch на тёмных волосах", category: "Airtouch", master: "Ольга" },
  { id: "02", title: "Balayage на средней длине", category: "Balayage", master: "Дмитрий Баздырев" },
  { id: "03", title: "Shatush без осветления корней", category: "Shatush", master: "Вера Форостян" },
  { id: "04", title: "Сложный блонд из тёмного", category: "Блонд", master: "Ольга" },
  { id: "05", title: "Авторская стрижка каре", category: "Стрижки", master: "Никита Шамай" },
  { id: "06", title: "Тон в тон с уходом", category: "Airtouch", master: "Вера Форостян" },
  { id: "07", title: "Balayage на длинных волосах", category: "Balayage", master: "Дмитрий Баздырев" },
  { id: "08", title: "Мужская стрижка и борода", category: "Стрижки", master: "Дмитрий Баздырев" },
] as const;
