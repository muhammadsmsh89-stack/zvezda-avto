// Товарные карточки. На момент подготовки сайта в открытых источниках подтверждена только одна
// модель — «Пронто» (карточка «Цены» на 2ГИС: материал, цвет, производство указаны дословно).
// Остальной ассортимент реален (см. отзывы, фото шоурума), но конкретные названия моделей не
// публикуются нигде в открытом доступе — значит, придумывать их нельзя (ЭТАП 24/PHASE 12 брифа).
//
// Вместо фейковых карточек — товар помечается isPlaceholder: true и получает честный текст
// «уточняется» вместо выдуманных характеристик. Такие карточки не должны визуально выглядеть как
// подтверждённые товарные позиции.

import type { DoorCategorySlug } from "./catalog";

export type Product = {
  slug: string;
  name: string;
  category: DoorCategorySlug;
  material?: string;
  color?: string;
  production?: string;
  priceLabel: string;
  isPlaceholder: boolean;
  whatsappContext: string;
  // Тон иллюстрации подобран по подтверждённому цвету товара («патина золото» → тёплый sepia-тон),
  // не декоративный выбор — см. DoorTexturePanel.
  visualTone: "default" | "dark" | "walnut" | "gold";
};

export const products: Product[] = [
  {
    slug: "pronto",
    name: "Пронто",
    category: "mezhkomnatnye",
    material: "Натуральный шпон",
    color: "Патина золото",
    production: "Ковров",
    priceLabel: "По запросу",
    isPlaceholder: false,
    whatsappContext: "модель «Пронто»",
    visualTone: "gold",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: DoorCategorySlug): Product[] {
  return products.filter((p) => p.category === category);
}
