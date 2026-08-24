// Верхнеуровневые направления — соответствуют разделам меню etel37.ru
// (face-cosmetology, body-cosmetology, trihology, podologiya, gynecology,
// beauty-saloon), переработаны в собственную структуру раздела /services.

export type Direction = {
  slug: string;
  title: string;
  lead: string;
  concernSlugs: string[];
};

export const directions: Direction[] = [
  {
    slug: "face-cosmetology",
    title: "Косметология лица",
    lead: "Врачебная и аппаратная косметология: инъекции, лазеры, пилинги, уходовые протоколы.",
    concernSlugs: ["skin-quality", "wrinkles", "pigmentation", "acne", "vessels", "face-oval"],
  },
  {
    slug: "body-cosmetology",
    title: "Косметология тела",
    lead: "Коррекция фигуры, уход за кожей тела, лазерная эпиляция.",
    concernSlugs: ["body-correction", "body-skin", "unwanted-hair"],
  },
  {
    slug: "trichology",
    title: "Трихология",
    lead: "Диагностика и лечение выпадения волос, состояние кожи головы.",
    concernSlugs: ["hair-loss", "scalp"],
  },
  {
    slug: "gynecology",
    title: "Гинекология",
    lead: "Приём врача акушера-гинеколога, эстетическая гинекология.",
    concernSlugs: ["women-consultation", "intimate-health"],
  },
  {
    slug: "podology",
    title: "Подология",
    lead: "Медицинский аппаратный педикюр, лечение вросшего ногтя.",
    concernSlugs: ["podology"],
  },
  {
    slug: "beauty-salon",
    title: "Салон красоты",
    lead: "Парикмахерский зал, массаж, маникюр и педикюр.",
    concernSlugs: [],
  },
];

export function findDirection(slug: string) {
  return directions.find((d) => d.slug === slug);
}
