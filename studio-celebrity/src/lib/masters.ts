// Состав команды и специализации — см. PHOTO_REQUIREMENTS.md для источников
// и статуса подтверждения владельцем. Портретные фотографии ждём от студии;
// до тех пор используется editorial-плейсхолдер (PhotoPlaceholder).

export type Master = {
  slug: string;
  name: string;
  /** Dative form of `name`, for grammatically correct CTAs ("записаться к Юлии"). */
  nameDative: string;
  role: string;
  specialty: string;
  bio: string;
  focusAreas: readonly string[];
  categorySlug: string;
};

export const masters: readonly Master[] = [
  {
    slug: "yulia",
    name: "Юлия",
    nameDative: "Юлии",
    role: "Стилист-колорист",
    specialty: "Сложное окрашивание и стрижки",
    bio: "Ведёт сложные окрашивания и выходы из тёмного, подбирает уход после процедуры.",
    focusAreas: ["Окрашивание", "Тонирование", "Стрижки", "Уход за волосами"],
    categorySlug: "hair",
  },
  {
    slug: "marina",
    name: "Марина",
    nameDative: "Марине",
    role: "Топ-стилист",
    specialty: "Причёски и образы к мероприятиям",
    bio: "Собирает причёску и макияж к событиям, работает в паре «в 4 руки» с визажистом.",
    focusAreas: ["Укладки", "Свадебные причёски", "Event Beauty", "Макияж"],
    categorySlug: "event-beauty",
  },
  {
    slug: "natalya",
    name: "Наталья",
    nameDative: "Наталье",
    role: "Визажист",
    specialty: "Макияж и уход за волосами",
    bio: "Проводит макияж и восстанавливающие spa-процедуры для волос, учитывает пожелания и референсы клиента.",
    focusAreas: ["Макияж", "Уход за волосами", "Укладка"],
    categorySlug: "makeup",
  },
  {
    slug: "armina",
    name: "Армина",
    nameDative: "Армине",
    role: "Brow-мастер",
    specialty: "Архитектура бровей и укладки",
    bio: "Оформляет брови и собирает сложные укладки, которые держат форму весь день.",
    focusAreas: ["Архитектура бровей", "Окрашивание бровей", "Укладки"],
    categorySlug: "brows-lashes",
  },
] as const;

export function getMasterBySlug(slug: string): Master | undefined {
  return masters.find((m) => m.slug === slug);
}
