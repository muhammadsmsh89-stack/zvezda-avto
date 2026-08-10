import type { CategoryId } from "./categories";
import type { MediaAsset } from "./media";

// Тип визуала принципиально различает два состояния портфолио:
// "technical-study" — авторский пример сценария помещения и логики решения,
//   не выдаётся за конкретный выполненный объект;
// "real-project" — фактически реализованный проект Альтаира с фотографиями,
//   появится здесь, когда владелец предоставит материалы (см. media[]).
export type ProjectVisualType = "real-project" | "technical-study";

export type Project = {
  id: string;
  slug: string;
  index: string;
  category: CategoryId;
  categoryLabel: string;
  title: string;
  description: string;
  challenge?: string;
  solution?: string;
  location?: string;
  year?: number;
  area?: string;
  materials?: string;
  media: MediaAsset[];
  visualType: ProjectVisualType;
  layout: "large" | "pair" | "full-bleed";
};

export const projects: Project[] = [
  {
    id: "kitchen-01",
    slug: "kitchen-ventilation-niche",
    index: "01",
    category: "kitchens",
    categoryLabel: "Кухня",
    title: "Ниша с вентканалом",
    description: "Кухня встраивается в помещение с выступающим вентканалом и неровной стеной.",
    challenge: "Вентканал выступает в линию фасадов.",
    solution: "Фасад смещён на 40 мм — шкаф скрывает выступ без потери высоты.",
    media: [{ type: "blueprint", illustrationId: "kitchen" }],
    visualType: "technical-study",
    layout: "large",
  },
  {
    id: "wardrobe-01",
    slug: "wardrobe-corridor-niche",
    index: "02",
    category: "wardrobes",
    categoryLabel: "Шкаф",
    title: "Узкий встроенный шкаф",
    description: "Ниша коридора нестандартной глубины — типовые модули туда не входят.",
    challenge: "Глубина ниши меньше стандартного модуля на 120 мм.",
    solution: "Корпус сделан под фактическую глубину, без потери объёма.",
    media: [{ type: "blueprint", illustrationId: "wardrobe" }],
    visualType: "technical-study",
    layout: "pair",
  },
  {
    id: "bedroom-01",
    slug: "bedroom-low-headboard",
    index: "04",
    category: "bedroom",
    categoryLabel: "Спальня",
    title: "Гарнитур с низким изголовьем",
    description: "Кровать, тумбы и комод одной линией фасадов под размер комнаты.",
    challenge: "Комната узкая — стандартный гарнитур не оставляет прохода.",
    solution: "Единая линия фасадов без ручек экономит проход.",
    media: [{ type: "blueprint", illustrationId: "bedroom" }],
    visualType: "technical-study",
    layout: "pair",
  },
  {
    id: "dressing-01",
    slug: "dressing-instead-of-storage",
    index: "03",
    category: "dressing",
    categoryLabel: "Гардеробная",
    title: "Гардеробная вместо кладовой",
    description: "Перепланировка кладовой под систему хранения под структуру вещей.",
    challenge: "Площадь кладовой мала для типовой гардеробной системы.",
    solution: "Наполнение рассчитано под структуру вещей, а не усреднённый набор.",
    media: [{ type: "blueprint", illustrationId: "dressing" }],
    visualType: "technical-study",
    layout: "full-bleed",
  },
  {
    id: "custom-01",
    slug: "mansard-slope",
    index: "05",
    category: "custom",
    categoryLabel: "Индивидуальный сценарий",
    title: "Мебель под мансардный скос",
    description: "Нестандартная геометрия потолка — корпус повторяет линию скоса.",
    challenge: "Угол скоса делает верхнюю секцию недоступной для модуля.",
    solution: "Фасад повторяет угол скоса — объём используется полностью.",
    media: [{ type: "blueprint", illustrationId: "custom" }],
    visualType: "technical-study",
    layout: "large",
  },
];
