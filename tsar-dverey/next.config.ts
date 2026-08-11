import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// Как и у остальных подпроектов монорепозитория (naturel-studio, altair-furniture,
// liberty-technology): при деплое tsar-dverey/out мёржится ВНУТРЬ корневого out/ репозитория
// zvezda-avto (см. .github/workflows/deploy.yml), поэтому реальный публичный путь —
// /zvezda-avto/tsar-dverey, а не просто /tsar-dverey.
const basePath = isProd ? "/zvezda-avto/tsar-dverey" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
