import type { IllustrationId } from "@/components/illustrations";

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
  illustrationId: IllustrationId;
};

// Общий порядок работы над проектом мебели на заказ. Не зафиксированный внутренний
// регламент компании — точные сроки и условия каждого этапа уточняются на замере.
// OWNER_CONFIRMATION_REQUIRED для точных сроков по этапам.
export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Заявка",
    description: "Вы описываете задачу и помещение — через форму на сайте или в WhatsApp.",
    illustrationId: "joinery",
  },
  {
    index: "02",
    title: "Консультация",
    description: "Обсуждаем бюджет, материалы и ориентировочные сроки.",
    illustrationId: "custom",
  },
  {
    index: "03",
    title: "Замер",
    description: "Выезжаем на объект и фиксируем точные размеры помещения.",
    illustrationId: "dressing",
  },
  {
    index: "04",
    title: "Проект и расчёт",
    description: "Готовим чертёж и смету по фактическим размерам и выбранным материалам.",
    illustrationId: "kitchen",
  },
  {
    index: "05",
    title: "Производство",
    description: "Изготавливаем мебель на собственной производственной базе.",
    illustrationId: "wardrobe",
  },
  {
    index: "06",
    title: "Доставка и монтаж",
    description: "Привозим и устанавливаем готовую мебель на объекте.",
    illustrationId: "bedroom",
  },
];
