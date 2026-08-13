// Реальные фотографии трансформаций — OWNER_ASSET_REQUIRED, см. PHOTO_REQUIREMENTS.md.
// Категории и характер работ подтверждены разделом «Особенности» / «Товары и услуги»
// на Яндекс Картах (парикмахерские услуги: сложное окрашивание, осветление,
// мелирование, вечерняя/свадебная укладка — проверено 13.08.2026).

export type PortfolioCase = {
  slug: string;
  category: string;
  task: string;
  result: string;
  masterSlug?: string;
  /** Only ever set this from a confirmed studio price — never a guess. */
  priceFrom?: string;
};

export const portfolio: readonly PortfolioCase[] = [
  {
    slug: "vyhod-iz-temnogo",
    category: "Hair Color",
    task: "Сложный выход из тёмного",
    result: "Мягкий натуральный блонд без жёлтого подтона",
    masterSlug: "yulia",
  },
  {
    slug: "makiyazh-na-meropriyatie",
    category: "Makeup",
    task: "Макияж на вечернее мероприятие",
    result: "Стойкий образ, который держится весь вечер",
    masterSlug: "natalya",
  },
  {
    slug: "strizhka-i-ukladka",
    category: "Hair",
    task: "Стрижка и укладка локонами",
    result: "Лёгкий объём и форма, сохраняющая структуру волос",
    masterSlug: "yulia",
  },
  {
    slug: "obraz-na-fotosessiyu",
    category: "Event",
    task: "Образ в 4 руки на фотосессию",
    result: "Причёска и макияж, собранные синхронно двумя мастерами",
    masterSlug: "marina",
  },
] as const;

export const portfolioCategories = [
  "Все",
  "Hair Color",
  "Hair",
  "Makeup",
  "Event",
] as const;
