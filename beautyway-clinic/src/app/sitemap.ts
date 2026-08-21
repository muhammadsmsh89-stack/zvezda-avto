import type { MetadataRoute } from "next";
import { services, problems, doctors, equipment, preparations, articles } from "@/lib/content";
import { branches, VERIFIED_ON } from "@/lib/site";
import { canonicalFor } from "@/lib/seo";

export const dynamic = "force-static";

const STATIC = [
  "/", "/uslugi", "/problem", "/vrachi", "/oborudovanie", "/preparaty", "/blog",
  "/price", "/promo", "/abonementy", "/portfolio", "/reviews", "/video",
  "/contacts", "/about-us", "/liczenzii-i-sertifikatyi", "/pacientam",
  "/sposobyi-oplatyi", "/politika-konfidencialnosti",
  "/soglasie-na-obrabotku-personalnykh-dannykh", "/vyishestoyashhie-organizaczii",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(VERIFIED_ON);
  const urls: string[] = [
    ...STATIC,
    ...branches.map((b) => `/contacts/${b.slug}`),
    ...services.map((s) => `/uslugi/${s.slug}`),
    ...problems.map((p) => `/problem/${p.slug}`),
    ...doctors.map((d) => `/vrachi/${d.slug}`),
    ...equipment.map((e) => `/oborudovanie/${e.slug}`),
    ...preparations.map((p) => `/preparaty/${p.slug}`),
    ...articles.map((a) => `/blog/${a.slug}`),
  ];

  return urls.map((u) => ({
    url: canonicalFor(u),
    lastModified,
    changeFrequency: u === "/" ? "weekly" : "monthly",
    priority: u === "/" ? 1 : u.split("/").length <= 2 ? 0.7 : 0.5,
  }));
}
