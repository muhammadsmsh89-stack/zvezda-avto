import type { MetadataRoute } from "next";
import { serviceCategories } from "@/lib/content";

export const dynamic = "force-static";

const base = "https://tc-zvezda.ru";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/uslugi",
    "/price",
    "/akcii",
    "/galereya",
    "/o-kompanii",
    "/kontakty",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = serviceCategories.map((s) => ({
    url: `${base}/uslugi/${s.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes];
}
