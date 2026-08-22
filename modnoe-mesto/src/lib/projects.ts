export type Project = {
  id: string;
  /** Что видно на фотографии — подписи не додумывают факты. */
  car: string;
  work: string;
  tag: string;
  src: string;
  alt: string;
  /** Соотношение сторон исходника, чтобы не было CLS. */
  ratio: string;
};

export const projects: Project[] = [
  {
    id: "gle",
    car: "Mercedes-Benz GLE",
    work: "Оклейка кузова в матовую плёнку",
    tag: "Плёнка",
    src: "/media/case-gle-after.webp",
    alt: "Mercedes-Benz GLE после оклейки кузова в матовую плёнку графитового цвета",
    ratio: "341 / 631",
  },
  {
    id: "ferrari",
    car: "Ferrari F8",
    work: "Детейлинг в боксе студии",
    tag: "Детейлинг",
    src: "/media/work-ferrari.webp",
    alt: "Красный Ferrari F8 в светлом боксе детейлинг-центра MODNOE MESTO",
    ratio: "3 / 2",
  },
  {
    id: "starsky",
    car: "Салон",
    work: "Звёздное небо в потолке",
    tag: "Дооснащение",
    src: "/media/work-starsky.webp",
    alt: "Потолок автомобиля со звёздным небом над салоном с красными сиденьями",
    ratio: "341 / 631",
  },
  {
    id: "polish",
    car: "Кузов",
    work: "Восстановительная полировка ЛКП",
    tag: "Полировка",
    src: "/media/process-polish.webp",
    alt: "Мастер полирует крыло тёмного автомобиля полировальной машинкой",
    ratio: "3 / 2",
  },
];

export const featuredCase = {
  car: "Mercedes-Benz GLE",
  work: "Оклейка кузова в матовую плёнку",
  before: {
    src: "/media/case-gle-before.webp",
    alt: "Mercedes-Benz GLE до работ: глянцевый чёрный кузов",
  },
  after: {
    src: "/media/case-gle-after.webp",
    alt: "Mercedes-Benz GLE после работ: кузов оклеен матовой плёнкой графитового цвета",
  },
  lead:
    "Глянцевый чёрный — самый требовательный цвет: на нём видно каждую микроцарапину от мойки.",
  body:
    "Здесь кузов оклеен матовой плёнкой. Изменились цвет и фактура, заводская краска осталась под плёнкой — нетронутой и защищённой. Плёнку можно снять, не повредив ЛКП.",
  note: "Фото до и после — из архива студии MODNOE MESTO.",
};
