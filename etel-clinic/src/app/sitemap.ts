import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { doctors } from "@/data/doctors";
import { equipment } from "@/data/equipment";
import { clinics } from "@/data/clinics";
import { concerns } from "@/data/concerns";
import { directions } from "@/data/directions";

export const dynamic = "force-static";

/** Приоритет отражает путь пациента: задачи и врачи важнее документов. */
const PAGES: [string, number][] = [
  ["/", 1],
  ["/concerns/", 0.9],
  ["/doctors/", 0.9],
  ["/technology/", 0.8],
  ["/services/", 0.8],
  ["/clinics/", 0.8],
  ["/prices/", 0.6],
  ["/about/", 0.6],
  ["/reviews/", 0.6],
  ["/offers/", 0.5],
  ["/contacts/", 0.7],
  ["/legal/", 0.2],
  ["/privacy/", 0.2],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...PAGES.map(([url, priority]) => ({ url: `${SITE_URL}${url}`, lastModified, priority })),
    ...doctors.map((d) => ({ url: `${SITE_URL}/doctors/${d.slug}/`, lastModified, priority: 0.6 })),
    ...equipment.map((e) => ({ url: `${SITE_URL}/technology/${e.slug}/`, lastModified, priority: 0.6 })),
    ...clinics.map((c) => ({ url: `${SITE_URL}/clinics/${c.slug}/`, lastModified, priority: 0.7 })),
    ...concerns.map((c) => ({ url: `${SITE_URL}/concerns/${c.slug}/`, lastModified, priority: 0.8 })),
    ...directions.map((d) => ({ url: `${SITE_URL}/services/${d.slug}/`, lastModified, priority: 0.7 })),
  ];
}
