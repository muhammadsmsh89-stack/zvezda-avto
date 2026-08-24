/**
 * Навигатор «Что вас беспокоит» — пациент выбирает задачу, а не название
 * аппарата. Группы и формулировки — по брифу заказчика; связи с реальными
 * технологиями и специалистами клиники — по данным, снятым с etel37.ru.
 *
 * doctorSlug выбран по реально совпадающей специализации в профиле врача
 * (см. src/data/doctors.ts), а не произвольно: трихология → Леонова
 * (указана трихологом), гинекология → Гаврилова (единственный акушер-
 * гинеколог), подология → Горелова, коррекция фигуры → Кузнецова.
 * Для «лицевых» задач специализация у девяти врачей-косметологов совпадает
 * дословно — указан главный врач как первая точка контакта.
 *
 * `lead` и `area` — совместимые алиасы для страниц, собранных в параллельной
 * сессии на старом API (`concern.lead`, `concern.area`, `areas`,
 * `concernsByArea`). Они не хранят отдельные факты: `lead` — это то же
 * значение, что и `description`, `area` — то же значение, что и `group`,
 * оба вычисляются один раз при экспорте (см. `concerns` ниже), а не
 * прописаны в данных вручную второй раз.
 */

export type ConcernGroup = "face" | "body" | "hair" | "women" | "feet";

export type ConcernInput = {
  slug: string;
  label: string;
  group: ConcernGroup;
  description: string;
  equipmentSlugs: string[];
  doctorSlug: string;
};

/** `Concern` = `ConcernInput` + вычисленные алиасы `lead`/`area` (см. комментарий выше). */
export type Concern = ConcernInput & { lead: string; area: ConcernGroup };

export const concernGroups: { id: ConcernGroup; label: string; caption: string }[] = [
  { id: "face", label: "Лицо", caption: "Кожа, морщины, овал, пигментация" },
  { id: "body", label: "Тело", caption: "Фигура, кожа тела, волосы" },
  { id: "hair", label: "Волосы", caption: "Выпадение, кожа головы" },
  { id: "women", label: "Женское здоровье", caption: "Консультация, интимное здоровье" },
  { id: "feet", label: "Стопы", caption: "Подология" },
];

/** Алиас для страниц на старом API: те же группы, только с полем `eyebrow` — короткий порядковый код, не факт. */
export const areas = concernGroups.map((g, i) => ({
  ...g,
  eyebrow: String(i + 1).padStart(2, "0"),
}));

const CONCERNS_INPUT: ConcernInput[] = [
  {
    slug: "skin-quality",
    label: "Качество кожи",
    group: "face",
    description: "Тусклость, неровный рельеф, потеря упругости.",
    equipmentSlugs: ["bbl-mjoule", "hydra-facial", "aerolaze", "jet-peel"],
    doctorSlug: "aleshina-ekaterina-leonidovna",
  },
  {
    slug: "wrinkles",
    label: "Морщины",
    group: "face",
    description: "Мимические и возрастные морщины, снижение тонуса.",
    equipmentSlugs: ["morpheus-8", "liftera-a", "volnewmer", "microson"],
    doctorSlug: "aleshina-ekaterina-leonidovna",
  },
  {
    slug: "pigmentation",
    label: "Пигментация",
    group: "face",
    description: "Пигментные пятна, следы постакне, неровный тон.",
    equipmentSlugs: ["fraxel-restore", "lotus-ii", "aerolaze"],
    doctorSlug: "aleshina-ekaterina-leonidovna",
  },
  {
    slug: "acne",
    label: "Акне",
    group: "face",
    description: "Воспаления, постакне, расширенные поры.",
    equipmentSlugs: ["clearlight", "jet-peel", "aerolaze"],
    doctorSlug: "aleshina-ekaterina-leonidovna",
  },
  {
    slug: "vessels",
    label: "Сосуды",
    group: "face",
    description: "Купероз и сосудистые звёздочки.",
    equipmentSlugs: ["aerolaze", "velure-s5"],
    doctorSlug: "aleshina-ekaterina-leonidovna",
  },
  {
    slug: "face-oval",
    label: "Овал лица",
    group: "face",
    description: "Потеря чёткости овала, птоз мягких тканей.",
    equipmentSlugs: ["morpheus-8", "liftera-a", "microson", "inus"],
    doctorSlug: "aleshina-ekaterina-leonidovna",
  },
  {
    slug: "body-correction",
    label: "Коррекция фигуры",
    group: "body",
    description: "Локальные объёмы, рельеф, эффект целлюлита.",
    equipmentSlugs: ["lpg-integral", "impact-uzk", "kn-magnetiс", "beautylizer"],
    doctorSlug: "kuznecova-svetlana-anatolevna",
  },
  {
    slug: "body-skin",
    label: "Качество кожи тела",
    group: "body",
    description: "Дряблость, снижение упругости кожи тела.",
    equipmentSlugs: ["lpg-integral", "zimmer-medizinsysteme"],
    doctorSlug: "kuznecova-svetlana-anatolevna",
  },
  {
    slug: "unwanted-hair",
    label: "Нежелательные волосы",
    group: "body",
    description: "Лазерная эпиляция на лице и теле.",
    equipmentSlugs: ["clearlight"],
    doctorSlug: "bugaeva-ekaterina-mihailovna",
  },
  {
    slug: "hair-loss",
    label: "Выпадение волос",
    group: "hair",
    description: "Диффузное и очаговое выпадение, поредение.",
    equipmentSlugs: ["aramo-sg"],
    doctorSlug: "leonova-anastasiya-evgenevna",
  },
  {
    slug: "scalp",
    label: "Состояние кожи головы",
    group: "hair",
    description: "Себорея, зуд, повышенная жирность кожи головы.",
    equipmentSlugs: ["aramo-sg"],
    doctorSlug: "leonova-anastasiya-evgenevna",
  },
  {
    slug: "women-consultation",
    label: "Консультация гинеколога",
    group: "women",
    description: "Приём акушера-гинеколога, плановое наблюдение.",
    equipmentSlugs: [],
    doctorSlug: "gavrilova-olga-mihailovna",
  },
  {
    slug: "intimate-health",
    label: "Интимное здоровье",
    group: "women",
    description: "Лазерные и аппаратные методы интимной коррекции.",
    equipmentSlugs: ["lotus-ii"],
    doctorSlug: "gavrilova-olga-mihailovna",
  },
  {
    slug: "podology",
    label: "Подология",
    group: "feet",
    description: "Вросшие ногти, натоптыши, аппаратный педикюр.",
    equipmentSlugs: [],
    doctorSlug: "gorelova-svetlana-aleksandrovna",
  },
];

export const concerns: Concern[] = CONCERNS_INPUT.map((c) => ({
  ...c,
  lead: c.description,
  area: c.group,
}));

export function findConcern(slug: string) {
  return concerns.find((c) => c.slug === slug);
}

export function concernsByGroup(group: ConcernGroup) {
  return concerns.filter((c) => c.group === group);
}

/** Алиас для страниц на старом API. */
export const concernsByArea = concernsByGroup;
