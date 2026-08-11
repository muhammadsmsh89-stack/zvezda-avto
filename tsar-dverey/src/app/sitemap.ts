import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { doorCategories } from "@/lib/catalog";
import { products } from "@/lib/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/catalog", "/interiors", "/contacts"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const categoryRoutes = doorCategories.map((c) => ({
    url: `${SITE_URL}/catalog/${c.slug}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((p) => ({
    url: `${SITE_URL}/product/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
