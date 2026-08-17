// Состав команды — актуальный список специалистов с DIKIDI
// (dikidi.net/ru/profile/seychas_953828, раздел «Специалисты», проверено
// 17.08.2026). Имена, специализации и портреты (см. src/lib/media.ts,
// masterImages) подтверждены карточками специалистов на DIKIDI; для
// Светланы, Дарьи и Анастасии также хайлайтами Instagram (@seychas_studio).
// Мастера, отмеченные на DIKIDI как «больше не работает», в список не
// включены. Стаж, образование и сертификаты не публикуются — не подтверждены.

export type Master = {
  slug: string;
  name: string;
  nameDative: string;
  role: string;
  categorySlug: string;
  ratingNote?: string;
};

export const masters: readonly Master[] = [
  {
    slug: "darya",
    name: "Дарья",
    nameDative: "Дарье",
    role: "Топ-мастер маникюра и педикюра",
    categorySlug: "nails",
    ratingNote: "5.0 · 45 оценок на DIKIDI",
  },
  {
    slug: "anastasiya",
    name: "Анастасия",
    nameDative: "Анастасии",
    role: "Топ-мастер маникюра и педикюра",
    categorySlug: "nails",
    ratingNote: "5.0 · 48 оценок на DIKIDI",
  },
  {
    slug: "svetlana",
    name: "Светлана",
    nameDative: "Светлане",
    role: "Мастер-бровист",
    categorySlug: "brows",
    ratingNote: "5.0 · 8 оценок на DIKIDI",
  },
  {
    slug: "olesya",
    name: "Олеся",
    nameDative: "Олесе",
    role: "Мастер по наращиванию ресниц",
    categorySlug: "lashes",
    ratingNote: "5.0 · 8 оценок на DIKIDI",
  },
  {
    slug: "dasha",
    name: "Даша",
    nameDative: "Даше",
    role: "Мастер маникюра",
    categorySlug: "nails",
  },
] as const;

export function getMasterBySlug(slug: string): Master | undefined {
  return masters.find((m) => m.slug === slug);
}
