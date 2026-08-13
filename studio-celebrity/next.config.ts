import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// Как и у остальных подпроектов монорепозитория (naturel-studio, altair-furniture,
// liberty-technology, tsar-dverey): при деплое studio-celebrity/out мёржится ВНУТРЬ
// корневого out/ репозитория zvezda-avto (см. .github/workflows/deploy.yml), поэтому
// реальный публичный путь — /zvezda-avto/studio-celebrity, а не просто /studio-celebrity.
const basePath = isProd ? "/zvezda-avto/studio-celebrity" : "";

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
