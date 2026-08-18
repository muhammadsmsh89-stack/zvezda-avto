import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = "https://muhammadsmsh89-stack.github.io/zvezda-avto/holy-nails";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/masters",
    "/works",
    "/prices",
    "/reviews",
    "/contacts",
    "/privacy",
  ];

  return routes.map((path) => ({
    url: `${base}${path}/`,
    lastModified: "2026-08-18",
  }));
}
