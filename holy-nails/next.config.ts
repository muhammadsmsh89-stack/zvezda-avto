import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// Как и у остальных подпроектов монорепозитория: при деплое holy-nails/out
// мёржится ВНУТРЬ корневого out/ репозитория zvezda-avto (см.
// .github/workflows/deploy.yml), поэтому реальный публичный путь —
// /zvezda-avto/holy-nails, а не просто /holy-nails.
const basePath = isProd ? "/zvezda-avto/holy-nails" : "";

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
