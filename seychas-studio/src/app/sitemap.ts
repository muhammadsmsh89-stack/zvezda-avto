import type { MetadataRoute } from "next";
import { directions } from "@/lib/services";
import { masters } from "@/lib/masters";

export const dynamic = "force-static";

const base = "https://muhammadsmsh89-stack.github.io/zvezda-avto/seychas-studio";

const paths = [
  "/",
  "/services/",
  ...directions.map((d) => `/services/${d.slug}/`),
  "/masters/",
  ...masters.map((m) => `/masters/${m.slug}/`),
  "/works/",
  "/prices/",
  "/reviews/",
  "/about/",
  "/faq/",
  "/contacts/",
  "/privacy/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified,
  }));
}
