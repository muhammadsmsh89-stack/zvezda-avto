/** Оборудование клиники — то, что названо на inunica.ru и в прайсе. */
export type Equipment = {
  name: string;
  purpose: string;
  /** Регистрационное удостоверение, если оно указано клиникой. */
  registration?: string;
  photo?: string;
};

export const equipment: Equipment[] = [
  {
    name: "In-Motion D2",
    purpose: "Диодный лазер повышенной мощности для эпиляции всех зон",
    registration: "РУ № РЗН 2018/9376 от 13.12.2019",
    photo: "/equipment/in-motion.webp",
  },
  {
    name: "Sylfirm X",
    purpose: "Микроигольчатый RF-лифтинг с двумя типами импульса",
  },
  {
    name: "ClearLight",
    purpose: "Фототерапия: сосуды, пигментация, акне, розацеа",
  },
  {
    name: "CO₂ Bioxel",
    purpose: "Фракционная лазерная шлифовка лица, век и шеи",
  },
  {
    name: "Revixan Midi Plus",
    purpose: "Фотодинамическая терапия и фотобиомодуляция",
  },
  {
    name: "SA-6047 «Scopula»",
    purpose: "Кавитация, вакуумный массаж и радиолифтинг тела",
    photo: "/equipment/plasma.webp",
  },
  {
    name: "«Атисмед»",
    purpose: "Газожидкостный пилинг",
  },
];
