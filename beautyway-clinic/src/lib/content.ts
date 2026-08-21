/**
 * Типизированный доступ к контенту, перенесённому с bwclinic.ru.
 * Данные лежат в src/data/generated/*.json и собираются импортёром
 * (см. CONTENT_INVENTORY.md). Компоненты не разбирают HTML — только эти типы.
 */
import servicesRaw from "@/data/generated/services.json";
import problemsRaw from "@/data/generated/problems.json";
import preparationsRaw from "@/data/generated/preparations.json";
import doctorsRaw from "@/data/generated/doctors.json";
import equipmentRaw from "@/data/generated/equipment.json";
import articlesRaw from "@/data/generated/articles.json";
import taxonomyRaw from "@/data/generated/taxonomy.json";
import pagesRaw from "@/data/generated/pages.json";

export type PriceRow = {
  category: string | null;
  name: string;
  price?: number | null;
  currency?: string;
  oldPriceText?: string;
  promo?: boolean;
  link?: string;
};

export type Section = { heading: string | null; body: string[] };
export type Faq = { q: string; a: string };

export type ContentBase = {
  slug: string;
  sourceUrl: string;
  title: string | null;
  description: string | null;
  canonical: string | null;
  h1: string | null;
  sections: Section[];
  faq: Faq[];
  prices: PriceRow[];
  priceFrom: number | null;
  priceUnit: string | null;
  image: string | null;
};

export type Service = ContentBase & {
  category: string | null;
  relatedServices: string[];
  relatedPreparations: string[];
  relatedProblems: string[];
  relatedDoctors: string[];
};

export type Problem = ContentBase & { relatedServices: string[] };
export type Preparation = ContentBase & { relatedServices: string[] };
export type Equipment = ContentBase & { relatedServices: string[] };
export type Article = ContentBase & { relatedServices: string[] };

export type Doctor = ContentBase & {
  name: string | null;
  post: string | null;
  photo: string | null;
  experienceText: string | null;
  experienceYears: number | null;
  ratingValue: number | null;
  ratingCount: number | null;
  relatedServices: string[];
};

export type Category = { slug: string; title: string; children: { slug: string; title: string }[] };

export const services = servicesRaw as unknown as Service[];
export const problems = problemsRaw as unknown as Problem[];
export const preparations = preparationsRaw as unknown as Preparation[];
export const doctors = doctorsRaw as unknown as Doctor[];
export const equipment = equipmentRaw as unknown as Equipment[];
export const articles = articlesRaw as unknown as Article[];
export const taxonomy = taxonomyRaw as unknown as Category[];
export const staticPages = pagesRaw as unknown as Record<string, ContentBase>;

const index = <T extends { slug: string }>(list: T[]) =>
  new Map(list.map((x) => [x.slug, x]));

export const serviceBySlug = index(services);
export const problemBySlug = index(problems);
export const preparationBySlug = index(preparations);
export const doctorBySlug = index(doctors);
export const equipmentBySlug = index(equipment);
export const articleBySlug = index(articles);
export const categoryBySlug = index(taxonomy);

/** Заголовок для карточки: h1 надёжнее, чем SEO-title. */
export function displayTitle(item: ContentBase): string {
  return (item.h1 || item.title || item.slug).trim();
}

/** Первый содержательный абзац — для превью и описаний. */
export function lede(item: ContentBase, max = 190): string {
  for (const s of item.sections) {
    for (const line of s.body) {
      const t = line.trim();
      if (t.length > 60) return t.length > max ? t.slice(0, max).replace(/[\s,.;:—-]+$/, "") + "…" : t;
    }
  }
  const d = (item.description || "").trim();
  return d.length > max ? d.slice(0, max) + "…" : d;
}

/**
 * Название для списков: снимаем служебные префиксы («Препарат Belotero…»),
 * которые в перечне повторяются в каждой строке и мешают читать.
 */
export function shortTitle(item: ContentBase): string {
  return displayTitle(item)
    .replace(/^(?:Препарат|Аппарат)\s+/i, "")
    .trim();
}

/** Первый содержательный абзац целиком — для лида страницы (без «…»). */
export function firstParagraph(item: ContentBase): string | undefined {
  for (const sec of item.sections) {
    if (sec.heading) break;
    for (const line of sec.body) {
      const t = line.trim();
      if (t.length > 60) return t;
    }
  }
  return undefined;
}

export function formatPrice(v?: number | null): string | null {
  if (typeof v !== "number" || !Number.isFinite(v) || v <= 0) return null;
  return v.toLocaleString("ru-RU") + " ₽";
}

/**
 * «от 12 990 ₽ за мл» — единица обязательна, если прайс клиники указан
 * поштучно. Без неё цена вводила бы пациента в заблуждение.
 */
export function priceFromLabel(item: Pick<ContentBase, "priceFrom" | "priceUnit">): string | null {
  const p = formatPrice(item.priceFrom);
  if (!p) return null;
  return item.priceUnit ? `от ${p} за ${item.priceUnit}` : `от ${p}`;
}

/** Услуги верхнего уровня каталога в порядке навигации исходного сайта. */
export function categoriesWithServices(): { category: Category; items: Service[] }[] {
  return taxonomy.map((category) => {
    const wanted = new Set(category.children.map((c) => c.slug));
    const items = services.filter(
      (s) => wanted.has(s.slug) || (s.category === category.slug && s.slug !== category.slug),
    );
    return { category, items };
  });
}

/** Все услуги категории, включая вложенные пути вида a/b. */
export function servicesInCategory(catSlug: string): Service[] {
  return services.filter((s) => s.category === catSlug || s.slug.startsWith(catSlug + "/"));
}

export function resolveServices(slugs: string[]): Service[] {
  return slugs.map((s) => serviceBySlug.get(s)).filter((x): x is Service => Boolean(x));
}

export function resolveDoctors(slugs: string[]): Doctor[] {
  return slugs.map((s) => doctorBySlug.get(s)).filter((x): x is Doctor => Boolean(x));
}
