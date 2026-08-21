import type { MetadataRoute } from "next";

// Требование output: "export" — маршрут должен быть статическим.
export const dynamic = "force-static";

/**
 * Демонстрационный редизайн: закрываем от индексации целиком,
 * чтобы не конкурировать с действующим сайтом клиники.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", disallow: "/" }],
  };
}
