import data from "@/data/generated/prices.json";

export type PriceItem = {
  name: string;
  /** Код номенклатуры медуслуг Минздрава, например A22.01.001. */
  code: string | null;
  codeName: string | null;
  /** Число для сортировки и «от N ₽». */
  price: number;
  /** Непустое, когда в прайсе две цены в одной ячейке: «8 000 / 12 000». */
  priceNote: string;
};

export type PriceSection = {
  id: string;
  title: string;
  unit: string;
  items: PriceItem[];
};

export type PriceDirection = {
  slug: string;
  title: string;
  sections: PriceSection[];
};

export const priceDirections = data as PriceDirection[];

export function directionPrices(slug: string): PriceDirection | undefined {
  return priceDirections.find((d) => d.slug === slug);
}

/** Минимальная цена направления — для «от N ₽» на карточках. */
export function minPrice(slug: string): number | undefined {
  const d = directionPrices(slug);
  if (!d) return undefined;
  const values = d.sections.flatMap((s) => s.items.map((i) => i.price));
  return values.length ? Math.min(...values) : undefined;
}

export function countItems(slug?: string): number {
  const list = slug ? priceDirections.filter((d) => d.slug === slug) : priceDirections;
  return list.reduce((n, d) => n + d.sections.reduce((m, s) => m + s.items.length, 0), 0);
}
