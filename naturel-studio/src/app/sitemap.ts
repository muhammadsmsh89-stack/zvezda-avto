import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = "https://naturel-studio.ru";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: base,
      lastModified: new Date(),
    },
  ];
}
