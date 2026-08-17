import type { MetadataRoute } from "next";
import { directions } from "@/lib/services";
import { masters } from "@/lib/masters";

export const dynamic = "force-static";

const base = "https://muhammadsmsh89-stack.github.io/zvezda-avto/lovtseva-beauty";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
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
    lastModified: "2026-08-17",
  }));

  const directionRoutes = directions.map((d) => ({
    url: `${base}/services/${d.slug}/`,
    lastModified: "2026-08-17",
  }));

  const masterRoutes = masters.map((m) => ({
    url: `${base}/masters/${m.slug}/`,
    lastModified: "2026-08-17",
  }));

  return [...staticRoutes, ...directionRoutes, ...masterRoutes];
}
