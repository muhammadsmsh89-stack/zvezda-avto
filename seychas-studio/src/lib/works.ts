// Работы студии по направлениям — реальные фотографии SEYCHAS с Яндекс Карт
// (раздел «Услуги» в фотогалерее организации), кроме одной иллюстративной
// фотографии направления Beauty (см. src/lib/media.ts). Мастер указывается
// только когда подтверждён для конкретной фотографии.

import { workImages } from "@/lib/media";

export type Work = {
  slug: string;
  directionSlug: string;
  title: string;
  imageKey: keyof typeof workImages;
  featured?: boolean;
};

export const works: readonly Work[] = [
  { slug: "nails-glossy", directionSlug: "nails", title: "Маникюр — глянцевое покрытие", imageKey: "nails-glossy", featured: true },
  { slug: "nails-french", directionSlug: "nails", title: "Маникюр — французское покрытие", imageKey: "nails-french" },
  { slug: "pedicure-red", directionSlug: "nails", title: "Педикюр", imageKey: "pedicure-red" },
  { slug: "nails-glitter", directionSlug: "nails", title: "Дизайн ногтей", imageKey: "nails-glitter" },
  { slug: "brows-shape", directionSlug: "brows", title: "Коррекция и оформление бровей", imageKey: "brows-shape" },
  { slug: "brows-lamination", directionSlug: "brows", title: "Долговременная укладка бровей", imageKey: "brows-lamination" },
  { slug: "lashes-extension", directionSlug: "lashes", title: "Наращивание ресниц", imageKey: "lashes-extension" },
  { slug: "lashes-lamination", directionSlug: "lashes", title: "Ламинирование ресниц", imageKey: "lashes-before-after" },
  { slug: "beauty-facial", directionSlug: "beauty", title: "Уход за лицом", imageKey: "beauty-facial" },
] as const;

export function getWorksByDirection(directionSlug: string | null) {
  if (!directionSlug) return works;
  return works.filter((w) => w.directionSlug === directionSlug);
}

export function getWorkBySlug(slug: string) {
  return works.find((w) => w.slug === slug);
}
