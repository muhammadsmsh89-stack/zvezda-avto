// Реестр работ по направлениям. Реальные фотографии центра (312 фото на
// 2ГИС, фотогалерея на Яндекс Картах) не могут быть загружены в этот проект
// без разрешения владельца — карточки используют редакционный
// photo-placeholder (см. src/components/ui/PhotoPlaceholder.tsx) и готовы к
// подстановке реальных снимков через media.ts. Названия работ соответствуют
// реально подтверждённым услугам центра (services.ts), без придуманных
// before/after.

export type Work = {
  slug: string;
  directionSlug: string;
  title: string;
  tone: "ivory" | "espresso" | "charcoal";
  subject: "portrait" | "wide" | "detail";
  aspect: string;
  featured?: boolean;
};

export const works: readonly Work[] = [
  { slug: "hair-biozavivka", directionSlug: "hair", title: "Японская биозавивка tocosme", tone: "espresso", subject: "portrait", aspect: "aspect-[4/5]", featured: true },
  { slug: "hair-coloring", directionSlug: "hair", title: "Сложное окрашивание", tone: "ivory", subject: "portrait", aspect: "aspect-[4/5]" },
  { slug: "hair-cut", directionSlug: "hair", title: "Женская стрижка и укладка", tone: "charcoal", subject: "portrait", aspect: "aspect-square" },
  { slug: "hair-volume", directionSlug: "hair", title: "Прикорневой объём", tone: "ivory", subject: "detail", aspect: "aspect-[3/4]" },
  { slug: "nails-aquarium", directionSlug: "nails", title: "Аквариумное наращивание", tone: "ivory", subject: "detail", aspect: "aspect-square" },
  { slug: "nails-design", directionSlug: "nails", title: "Дизайн ногтей", tone: "charcoal", subject: "detail", aspect: "aspect-[4/5]" },
  { slug: "nails-pedicure", directionSlug: "nails", title: "Педикюр", tone: "ivory", subject: "detail", aspect: "aspect-[4/3]" },
  { slug: "cosmetology-facial", directionSlug: "cosmetology", title: "Уход и чистка лица", tone: "espresso", subject: "portrait", aspect: "aspect-[4/5]" },
  { slug: "permanent-brows", directionSlug: "permanent", title: "Перманентный макияж бровей", tone: "espresso", subject: "detail", aspect: "aspect-square" },
  { slug: "permanent-lips", directionSlug: "permanent", title: "Акварельная техника губ", tone: "charcoal", subject: "detail", aspect: "aspect-[4/5]" },
  { slug: "brows-lamination", directionSlug: "brows-lashes", title: "Ламинирование бровей", tone: "ivory", subject: "detail", aspect: "aspect-square" },
  { slug: "lashes-extension", directionSlug: "brows-lashes", title: "Наращивание ресниц", tone: "charcoal", subject: "detail", aspect: "aspect-[4/5]" },
  { slug: "laser-epilation", directionSlug: "laser", title: "Лазерная эпиляция", tone: "espresso", subject: "wide", aspect: "aspect-[4/3]" },
  { slug: "piercing-ear", directionSlug: "piercing", title: "Прокол ушей", tone: "ivory", subject: "detail", aspect: "aspect-square" },
] as const;

export function getWorksByDirection(directionSlug: string | null) {
  if (!directionSlug) return works;
  return works.filter((w) => w.directionSlug === directionSlug);
}

export function getWorkBySlug(slug: string) {
  return works.find((w) => w.slug === slug);
}
