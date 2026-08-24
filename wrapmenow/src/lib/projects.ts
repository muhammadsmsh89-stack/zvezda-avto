// Реальные проекты WrapMeNow — с официального сайта wrapmenow.ru, раздел
// «Проекты». Названия, материалы и формулировки работ — как на карточках
// проектов, фото — из галерей тех же карточек (см. scripts/photo-sources.md).
// Проверено 23.08.2026.

import { projectImage, type MediaAsset } from "@/lib/media";

export type ProjectCategory = "ppf" | "color" | "styling" | "blackout" | "branding" | "moto";

export const categoryLabels: Record<ProjectCategory, string> = {
  ppf: "Защита (PPF)",
  color: "Цвет",
  styling: "Стайлинг",
  blackout: "Антихром",
  branding: "Брендирование",
  moto: "Мотоциклы",
};

export type Project = {
  slug: string;
  vehicle: string;
  brand: string;
  category: ProjectCategory;
  title: string;
  material?: string;
  work: string[];
  summary: string;
  images: MediaAsset[];
  sourceUrl: string;
};

function images(slug: string, count: number, vehicle: string, position = "center"): MediaAsset[] {
  return Array.from({ length: count }, (_, i) => projectImage(slug, i + 1, `${vehicle} — работа WrapMeNow`, position));
}

export const projects: Project[] = [
  {
    slug: "range-rover-sport",
    vehicle: "Range Rover Sport",
    brand: "Land Rover",
    category: "ppf",
    title: "Полная защита кузова матовой плёнкой Crystal Pro",
    material: "Crystal Pro (матовая полиуретановая)",
    work: ["Полная защита кузова", "Матовая полиуретановая плёнка"],
    summary:
      "Кузов Range Rover Sport полностью защищён матовой полиуретановой плёнкой Crystal Pro — от сколов, царапин и дорожной химии, с сохранением матовой фактуры.",
    images: images("range-rover-sport", 3, "Range Rover Sport", "center 55%"),
    sourceUrl: "https://wrapmenow.ru/projects/zashchita-avtomobilya/land-rover/polnaya-zashchita-poliuretanovoy-matovoy-plenkoy-crystal-pro-range-rover-sport/",
  },
  {
    slug: "zeekr-001",
    vehicle: "Zeekr 001",
    brand: "Zeekr",
    category: "ppf",
    title: "Защитная глянцевая полиуретановая плёнка",
    work: ["Оклейка защитной плёнкой", "Глянцевое покрытие"],
    summary: "Zeekr 001 оклеен защитной полиуретановой плёнкой в глянце — кузов сохраняет заводской блеск и получает защиту от сколов.",
    images: images("zeekr-001", 3, "Zeekr 001"),
    sourceUrl: "https://wrapmenow.ru/projects/zashchita-avtomobilya/okleyka-zashchitnoy-poliuretanovoy-glyantsevoy-plenkoy-zeekr-001/",
  },
  {
    slug: "xiaomi-su7",
    vehicle: "Xiaomi SU7",
    brand: "Xiaomi",
    category: "ppf",
    title: "Защитная глянцевая плёнка Gliss Pro Premium",
    material: "Gliss Pro Premium (глянцевая полиуретановая)",
    work: ["Оклейка защитной плёнкой", "Глянцевое покрытие"],
    summary: "Xiaomi SU7 получил полную защиту кузова глянцевой полиуретановой плёнкой Gliss Pro Premium с сохранением фирменного бирюзового цвета.",
    images: images("xiaomi-su7", 2, "Xiaomi SU7"),
    sourceUrl: "https://wrapmenow.ru/projects/zashchita-avtomobilya/okleyka-glyantsevoy-zashchitnoy-poliuretanovoy-plenkoy-gliss-pro-premium-xiaomi-su7/",
  },
  {
    slug: "tesla-model-x-plaid",
    vehicle: "Tesla Model X Plaid",
    brand: "Tesla",
    category: "ppf",
    title: "Двухслойная оклейка: винил + защитная матовая плёнка",
    material: "Crystal Matt (матовая полиуретановая)",
    work: ["Оклейка винилом", "Полная защита матовой плёнкой"],
    summary: "Tesla Model X Plaid оклеена в два слоя: виниловая плёнка меняет цвет, а полиуретановая матовая Crystal Matt защищает результат от повреждений.",
    images: images("tesla-model-x-plaid", 2, "Tesla Model X Plaid"),
    sourceUrl: "https://wrapmenow.ru/projects/okleyka-avto/polnaya-zashchita-poliuretanovoy-matovoy-plenkoy-crystal-pro-tesla-model-x-plaid/",
  },
  {
    slug: "li-l7",
    vehicle: "Li Auto L7",
    brand: "Li Auto",
    category: "ppf",
    title: "Полная защита полиуретановой плёнкой Crystal Pro",
    material: "Crystal Pro",
    work: ["Полная защита кузова"],
    summary: "Li Auto L7 полностью оклеен защитной полиуретановой плёнкой Crystal Pro.",
    images: images("li-l7", 2, "Li Auto L7"),
    sourceUrl: "https://wrapmenow.ru/projects/okleyka-avto/polnaya-zashchita-poliuretanovoy-matovoy-plenkoy-crystal-pro-lixiang-l7-3/",
  },
  {
    slug: "li-l6",
    vehicle: "Li Auto L6",
    brand: "Li Auto",
    category: "ppf",
    title: "Полная защита матовой полиуретановой плёнкой",
    work: ["Полная защита кузова", "Матовое покрытие"],
    summary: "Li Auto L6 получил полную защиту кузова матовой полиуретановой плёнкой.",
    images: images("li-l6", 2, "Li Auto L6"),
    sourceUrl: "https://wrapmenow.ru/projects/zashchita-avtomobilya/polnaya-zashchita-poliuretanovoy-matovoy-plenkoy-lixiang-li-l6/",
  },
  {
    slug: "jeep-wrangler",
    vehicle: "Jeep Wrangler Unlimited Sport",
    brand: "Jeep",
    category: "color",
    title: "Полная оклейка с проёмами плёнкой Avery Grass Green",
    material: "Avery BP1180001-G (Grass Green)",
    work: ["Полная оклейка кузова", "Оклейка проёмов дверей"],
    summary: "Четырёхдверный Jeep Wrangler полностью переоклеен в Avery Grass Green — включая дверные проёмы, для аккуратного результата без видимых границ плёнки.",
    images: images("jeep-wrangler", 2, "Jeep Wrangler Unlimited Sport", "center 40%"),
    sourceUrl: "https://wrapmenow.ru/projects/okleyka-avto/polnaya-okleyka-s-proemami-4-dvernogo-jeep-wrangler-unlimited-sport-iv-jl-v-plenku-avery-bp1180001-g/",
  },
  {
    slug: "toyota-fj-cruiser",
    vehicle: "Toyota FJ Cruiser",
    brand: "Toyota",
    category: "ppf",
    title: "Полная защита кузова полиуретановой плёнкой",
    work: ["Полная защита кузова"],
    summary: "Toyota FJ Cruiser получил полную защиту кузова полиуретановой плёнкой.",
    images: images("toyota-fj-cruiser", 2, "Toyota FJ Cruiser", "center 45%"),
    sourceUrl: "https://wrapmenow.ru/projects/zashchita-avtomobilya/polnaya-zashchita-poliuretanovoy-plenkoy-toyota-fj-cruiser/",
  },
  {
    slug: "audi-tt-rs",
    vehicle: "Audi TT RS",
    brand: "Audi",
    category: "ppf",
    title: "Полная защита полиуретановой плёнкой Crystal Pro",
    material: "Crystal Pro",
    work: ["Полная защита кузова"],
    summary: "Audi TT RS полностью оклеен защитной полиуретановой плёнкой Crystal Pro.",
    images: images("audi-tt-rs", 2, "Audi TT RS"),
    sourceUrl: "https://wrapmenow.ru/projects/zashchita-avtomobilya/audi/polnaya-zashchita-poliuretanovoy-zashchitnoy-plenkoy-crystal-pro-audi-tt-rs/",
  },
  {
    slug: "changan-uni-v",
    vehicle: "Changan UNI-V",
    brand: "Changan",
    category: "ppf",
    title: "Полная защита полиуретановой плёнкой",
    work: ["Полная защита кузова"],
    summary: "Changan UNI-V получил полную защиту кузова полиуретановой плёнкой.",
    images: images("changan-uni-v", 2, "Changan UNI-V"),
    sourceUrl: "https://wrapmenow.ru/projects/zashchita-avtomobilya/changan/polnaya-zashchita-poliuretanovoy-plenkoy-changan-uni-v/",
  },
  {
    slug: "hyundai-staria",
    vehicle: "Hyundai Staria",
    brand: "Hyundai",
    category: "ppf",
    title: "Полная защита полиуретановой плёнкой Crystal Pro",
    material: "Crystal Pro",
    work: ["Полная защита кузова"],
    summary: "Минивэн Hyundai Staria полностью оклеен защитной полиуретановой плёнкой Crystal Pro.",
    images: images("hyundai-staria", 2, "Hyundai Staria"),
    sourceUrl: "https://wrapmenow.ru/projects/zashchita-avtomobilya/polnaya-zashchita-poliuretanovoy-plenkoy-crystal-pro-huyndai-staria/",
  },
  {
    slug: "mercedes-e-class",
    vehicle: "Mercedes-Benz E-Class W213",
    brand: "Mercedes-Benz",
    category: "ppf",
    title: "Полная оклейка матовой защитной плёнкой",
    work: ["Полная защита кузова", "Матовое покрытие"],
    summary: "Mercedes-Benz E-Class W213 полностью оклеен матовой полиуретановой защитной плёнкой.",
    images: images("mercedes-e-class", 2, "Mercedes-Benz E-Class"),
    sourceUrl: "https://wrapmenow.ru/projects/zashchita-avtomobilya/mercedes/polnaya-okleyka-poliuretanovoy-matovoy-zashchitnoy-plenkoy-mercedes-benz-e-class-w213/",
  },
  {
    slug: "mini-cooper-jcw",
    vehicle: "Mini Cooper JCW",
    brand: "Mini",
    category: "styling",
    title: "Изготовление и оклейка гоночных полос",
    work: ["Виниловые полосы", "Индивидуальный дизайн"],
    summary: "Для Mini Cooper JCW изготовлены и наклеены фирменные гоночные полосы по индивидуальному макету.",
    images: images("mini-cooper-jcw", 2, "Mini Cooper JCW", "center 40%"),
    sourceUrl: "https://wrapmenow.ru/projects/okleyka-avto/mini-cooper-jcw/",
  },
  {
    slug: "honda-ctx",
    vehicle: "Honda CTX",
    brand: "Honda",
    category: "moto",
    title: "Оклейка мотоцикла в чёрный сатин",
    material: "Oracal (чёрный сатин)",
    work: ["Оклейка бака", "Сатиновая плёнка"],
    summary: "Мотоцикл Honda CTX оклеен плёнкой Oracal в чёрный сатин.",
    images: images("honda-ctx", 2, "Honda CTX"),
    sourceUrl: "https://wrapmenow.ru/projects/okleyka-mototsikla/okleyka-mototsikla-honda-ctx-v-chernyy-satin-oracal/",
  },
  {
    slug: "vw-golf-branding",
    vehicle: "Volkswagen Golf Mk2",
    brand: "Volkswagen",
    category: "branding",
    title: "Брендирование для «Автокластер 19/21»",
    work: ["Брендирование", "Виниловая плёнка", "Полноцветная печать"],
    summary: "Volkswagen Golf Mk2 оформлен фирменной графикой «Автокластер 19/21» — брендирование виниловой плёнкой с печатью.",
    images: images("vw-golf-branding", 2, "Volkswagen Golf Mk2", "center 45%"),
    sourceUrl: "https://wrapmenow.ru/projects/reklama-na-avto/brendirovanie-vinilovoy-plenkoy-volkswagen-golf-mk2-dlya-avtoklaster-19-21/",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const featuredProject = getProject("range-rover-sport")!;

export const projectBrands = Array.from(new Set(projects.map((p) => p.brand))).sort();
