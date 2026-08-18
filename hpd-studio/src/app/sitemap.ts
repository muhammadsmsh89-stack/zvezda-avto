import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

export const dynamic = "force-static";

const base = "https://muhammadsmsh89-stack.github.io/zvezda-avto/hpd-studio";

const paths = [
  "/",
  "/services/",
  ...services.map((s) => `/services/${s.slug}/`),
  "/works/",
  "/reviews/",
  "/about/",
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
