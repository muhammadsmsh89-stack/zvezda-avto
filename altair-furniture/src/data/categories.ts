import type { IllustrationId } from "@/components/illustrations";

export type CategoryId = "kitchens" | "wardrobes" | "dressing" | "bedroom" | "custom";

export type Category = {
  id: CategoryId;
  illustrationId: IllustrationId;
  index: string;
  name: string;
  description: string;
  whatsappContext: string;
};

export const categories: Category[] = [
  {
    id: "kitchens",
    illustrationId: "kitchen",
    index: "01",
    name: "Кухни на заказ",
    description: "Корпус, фасады и наполнение под размеры и сценарий вашей кухни.",
    whatsappContext: "кухню",
  },
  {
    id: "wardrobes",
    illustrationId: "wardrobe",
    index: "02",
    name: "Шкафы",
    description: "Встроенные и корпусные — под нишу, стену или угол, без типового зазора.",
    whatsappContext: "шкаф",
  },
  {
    id: "dressing",
    illustrationId: "dressing",
    index: "03",
    name: "Гардеробные",
    description: "Система хранения, спроектированная под площадь и структуру вещей.",
    whatsappContext: "гардеробную",
  },
  {
    id: "bedroom",
    illustrationId: "bedroom",
    index: "04",
    name: "Мебель для спальни",
    description: "Кровать, тумбы и системы хранения одним проектом под комнату.",
    whatsappContext: "мебель для спальни",
  },
  {
    id: "custom",
    illustrationId: "custom",
    index: "05",
    name: "Индивидуальные проекты",
    description: "То, что не описывается стандартной категорией — считаем как отдельную задачу.",
    whatsappContext: "мебель по индивидуальному проекту",
  },
];
