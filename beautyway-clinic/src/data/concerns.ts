/**
 * Быстрый выбор запроса на главной: «с чем вы пришли» -> реальные страницы.
 * Все slug'и проверяются тестом ниже (npm run check:links) и соответствуют
 * страницам, перенесённым с bwclinic.ru.
 */
export type Concern = {
  slug: string;
  label: string;
  hint: string;
  /** Куда ведёт основная кнопка. */
  service: string;
  /** Связанные страницы «проблема -> подходящие процедуры». */
  problems: string[];
};

export const concerns: Concern[] = [
  {
    slug: "morshchiny",
    label: "Морщины",
    hint: "Мимические и статические складки",
    service: "botulinoterapiya",
    problems: [
      "mimicheskie-morshhinyi-na-lbu",
      "morshchiny-mezhdu-brovyami",
      "gusinyye-lapki-vokrug-glaz",
      "nosogubnye-morshchiny-i-skladki",
      "morshhinyi-vokrug-gub",
    ],
  },
  {
    slug: "oval-lica",
    label: "Овал лица",
    hint: "Потеря чёткости, брыли, второй подбородок",
    service: "bezoperacionnaya-podtyazhka-lica",
    problems: ["nechetkij-oval-lica", "bryli", "vtoroj-podborodok", "ptoz-lica", "buldozhi-schechki"],
  },
  {
    slug: "guby",
    label: "Губы",
    hint: "Объём, контур, асимметрия",
    service: "yvelichenie-gyb",
    problems: ["tonkie-guby", "poterya-kontura-gub", "asimmetriya-gub", "ugolki-gub-opushcheny-vniz"],
  },
  {
    slug: "akne",
    label: "Акне и постакне",
    hint: "Воспаления, комедоны, следы",
    service: "lechenie-akne",
    problems: [
      "prishchi-na-litse-akne-osnovnie-prichini",
      "komedony",
      "chernye-tochki-na-nosu",
      "shramy-i-rubcy",
    ],
  },
  {
    slug: "pigmentaciya",
    label: "Пигментация",
    hint: "Пятна, неровный тон, сосуды",
    service: "fotoomolozhenie-lica",
    problems: ["pigmentnye-pyatna", "giperpigmentaciya", "sosudistye-zvezdochki", "kuperoz"],
  },
  {
    slug: "kachestvo-kozhi",
    label: "Качество кожи",
    hint: "Поры, сухость, тусклость, тургор",
    service: "biorevitalizaciya",
    problems: [
      "rasshirennyie-poryi-na-licze",
      "suhaya-kozha",
      "snizhenie-turgora-kozhi",
      "zhirnaya-kozha-licza-i-golovyi",
    ],
  },
  {
    slug: "epilyaciya",
    label: "Лазерная эпиляция",
    hint: "Нежелательные и вросшие волосы",
    service: "lazernaya-kosmetologiya",
    problems: ["vrosshie-volosy", "girsutizm"],
  },
  {
    slug: "volosy",
    label: "Волосы",
    hint: "Выпадение, плотность, кожа головы",
    service: "lechenie-vypadeniya-volos",
    problems: ["vypadenie-volos", "perhot"],
  },
  {
    slug: "muzhskaya",
    label: "Мужская косметология",
    hint: "Отдельные протоколы для мужчин",
    service: "muzhskaya-kosmetologiya",
    problems: ["povyshennaya-potlivost-gipergidroz", "vypadenie-volos"],
  },
];

/** Популярные процедуры на главной — цена «от» берётся из перенесённого прайса. */
export const popularServices = [
  "yvelichenie-gyb",
  "botulinoterapiya",
  "biorevitalizaciya",
  "kontyrnaja-plastika",
  "chistka-licza",
  "smas-lifting",
  "lechenie-akne",
  "mezoterapiya",
];
