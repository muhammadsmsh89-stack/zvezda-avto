// Состав команды — только имена, подтверждённые официальными хайлайтами
// Instagram (@holy_nails_tula: «Топ Екатерина М», «Мастер Мария», «Мастер
// Марьям») и живыми отзывами на Яндекс Картах / clients.site. Стаж,
// образование, сертификаты и точные специализации не публикуются — не
// подтверждены. Проверено 18.08.2026.

export type Master = {
  slug: string;
  name: string;
  nameDative: string;
  role: string;
  note?: string;
  featured?: boolean;
};

export const masters: readonly Master[] = [
  {
    slug: "ekaterina",
    name: "Екатерина М.",
    nameDative: "Екатерине",
    role: "Топ-мастер",
    note: "Маникюр, педикюр, наращивание — по верхней категории цен.",
    featured: true,
  },
  {
    slug: "maryam",
    name: "Марьям",
    nameDative: "Марьям",
    role: "Мастер",
    note: "«Обожаю Марьям! Работает быстро, но при этом качественно. А на все мои дизайны всегда отвечает: „Могу!“» — из отзыва клиентки.",
  },
  {
    slug: "maria",
    name: "Мария",
    nameDative: "Марии",
    role: "Мастер",
  },
] as const;

export function getMasterBySlug(slug: string) {
  return masters.find((m) => m.slug === slug);
}
