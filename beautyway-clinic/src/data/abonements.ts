/**
 * Абонементы. Источник: https://bwclinic.ru/abonementy — сверено 21 августа 2026.
 * Цены перенесены без изменений.
 */
export type AbonementGroup = {
  group: string;
  rows: { name: string; sessions: number; price: string }[];
};

export const abonementsCheckedOn = "2026-08-21";

export const abonements: AbonementGroup[] = [
  {
    group: "Мезотерапия кожи головы",
    rows: [{ name: "Априлайн Хэир (Швейцария), 5 мл", sessions: 10, price: "59 990 ₽" }],
  },
  {
    group: "Плазмолифтинг",
    rows: [
      { name: "Кожи головы", sessions: 4, price: "19 990 ₽" },
      { name: "Кожи лица", sessions: 4, price: "19 990 ₽" },
      { name: "Зоны декольте", sessions: 4, price: "19 990 ₽" },
      { name: "Кистей рук", sessions: 4, price: "19 990 ₽" },
    ],
  },
  {
    group: "Эпиляция александритовым лазером Motus AX MOVEO (Италия)",
    rows: [
      { name: "Глубокое бикини и подмышки", sessions: 5, price: "19 990 ₽" },
      { name: "Глубокое бикини, голени и подмышки", sessions: 5, price: "31 990 ₽" },
      { name: "Глубокое бикини, подмышки и ноги полностью", sessions: 5, price: "39 990 ₽" },
      { name: "Глубокое бикини, подмышки, ноги и руки полностью", sessions: 5, price: "51 990 ₽" },
      { name: "Всё тело с головы до ног", sessions: 5, price: "87 990 ₽" },
    ],
  },
];

export const abonementTerms = [
  "Срок действия — 1 год с момента покупки.",
  "Абонемент не подлежит возврату или обмену на денежные средства.",
  "Оплата онлайн, наличными или по безналичному расчёту в клинике.",
  "Электронный абонемент отправляется на почту или в мессенджер.",
];
