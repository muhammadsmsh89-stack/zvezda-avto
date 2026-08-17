import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://muhammadsmsh89-stack.github.io/zvezda-avto/lovtseva-beauty/sitemap.xml",
  };
}
