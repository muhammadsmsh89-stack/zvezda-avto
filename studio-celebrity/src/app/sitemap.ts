import type { MetadataRoute } from "next";
import { masters } from "@/lib/masters";

export const dynamic = "force-static";

const base = "https://studio-celebrity.example";

const paths = [
  "",
  "/hair",
  "/makeup",
  "/brows-lashes",
  "/event-beauty",
  "/masters",
  ...masters.map((m) => `/masters/${m.slug}`),
  "/works",
  "/education",
  "/prices",
  "/reviews",
  "/about",
  "/gift",
  "/contacts",
  "/booking",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified,
  }));
}
