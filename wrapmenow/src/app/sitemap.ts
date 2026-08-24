import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";

export const dynamic = "force-static";

const base = "https://muhammadsmsh89-stack.github.io/zvezda-avto/wrapmenow";

const paths = [
  "/",
  "/services/",
  ...services.map((s) => `/services/${s.slug}/`),
  "/portfolio/",
  ...projects.map((p) => `/portfolio/${p.slug}/`),
  "/materials/",
  "/prices/",
  "/about/",
  "/reviews/",
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
