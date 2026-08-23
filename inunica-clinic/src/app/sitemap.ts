import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { directions } from "@/data/directions";

export const dynamic = "force-static";

/** Приоритет отражает путь пациента: процедуры и прайс важнее документов. */
const PAGES: [string, number][] = [
  ["/", 1],
  ["/uslugi/", 0.9],
  ["/price/", 0.9],
  ["/komanda/", 0.7],
  ["/akcii/", 0.7],
  ["/kontakty/", 0.7],
  ["/svedeniya-ob-organizacii/", 0.4],
  ["/privacy/", 0.2],
  ["/personalnye-dannye/", 0.2],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...PAGES.map(([url, priority]) => ({
      url: `${SITE_URL}${url}`,
      lastModified,
      priority,
    })),
    ...directions.map((d) => ({
      url: `${SITE_URL}/uslugi/${d.slug}/`,
      lastModified,
      priority: 0.8,
    })),
  ];
}
