import type { MetadataRoute } from "next";
import { masters } from "@/lib/masters";

export const dynamic = "force-static";

const base = "https://muhammadsmsh89-stack.github.io/zvezda-avto/redken-loft";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/masters",
    "/works",
    "/prices",
    "/reviews",
    "/about",
    "/contacts",
    "/booking",
    "/privacy",
  ].map((path) => ({
    url: `${base}${path}/`,
    lastModified: "2026-08-27",
  }));

  const masterRoutes = masters.map((m) => ({
    url: `${base}/masters/${m.slug}/`,
    lastModified: "2026-08-27",
  }));

  return [...staticRoutes, ...masterRoutes];
}
