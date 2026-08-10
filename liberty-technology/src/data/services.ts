export type CapabilityId = "detailing" | "protection" | "bodywork" | "tuning";

export type Capability = {
  id: CapabilityId;
  index: string;
  name: string;
  eyebrow: string;
  description: string;
  details: string[];
  whatsappContext: string;
  verified: boolean;
};

// Четыре основных направления — подтверждены Яндекс Картами / 2ГИС / отзывами.
export const capabilities: Capability[] = [
  {
    id: "detailing",
    index: "01",
    name: "Детейлинг",
    eyebrow: "Detailing",
    description: "Полировка кузова и стёкол, реставрация царапин и сколов, химчистка салона.",
    details: ["Полировка кузова", "Полировка стёкол", "Реставрация царапин и сколов", "Химчистка салона"],
    whatsappContext: "детейлинг",
    verified: true,
  },
  {
    id: "protection",
    index: "02",
    name: "Защита кузова",
    eyebrow: "Protection / PPF",
    description: "Антигравийная плёнка, в том числе сатиновая бронеплёнка полным контуром кузова.",
    details: ["Антигравийная плёнка", "Полная оклейка кузова", "Оклейка зон риска", "Антихром"],
    whatsappContext: "защиту кузова плёнкой",
    verified: true,
  },
  {
    id: "bodywork",
    index: "03",
    name: "Кузовной ремонт",
    eyebrow: "Bodywork",
    description: "Покраска, рихтовка, ремонт бамперов, удаление вмятин без покраски.",
    details: ["Покраска", "Рихтовка", "Ремонт бамперов", "Удаление вмятин без покраски (PDR)"],
    whatsappContext: "кузовной ремонт",
    verified: true,
  },
  {
    id: "tuning",
    index: "04",
    name: "Тюнинг",
    eyebrow: "Tuning",
    description: "Студия тюнинга: обвес, карбоновые элементы салона, рестайлинг под задачу клиента.",
    details: ["Обвес", "Карбоновые элементы салона", "Рестайлинг", "Тюнинг мототехники"],
    whatsappContext: "проект тюнинга",
    verified: true,
  },
];

export type SecondaryService = {
  name: string;
  verified: boolean;
  note?: string;
};

// Дополнительные направления. Тонировка подтверждена независимо (Яндекс Карты, отзывы).
// Шумоизоляция и реставрация фар — заявлены владельцем в брифе на разработку сайта,
// не встретились в независимых источниках при фактчекинге.
export const secondaryServices: SecondaryService[] = [
  { name: "Тонировка", verified: true },
  { name: "Полировка стекла", verified: true },
  { name: "Тюнинг мототехники", verified: true },
  {
    name: "Шумоизоляция",
    verified: false,
    note: "заявлено владельцем, требует подтверждения независимым источником",
  },
  {
    name: "Реставрация фар",
    verified: false,
    note: "заявлено владельцем, требует подтверждения независимым источником",
  },
];
