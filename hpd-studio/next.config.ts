import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// Как и у соседних подпроектов монорепозитория (seychas-studio, naturel-studio
// и др.): при деплое hpd-studio/out мёржится ВНУТРЬ корневого out/ репозитория
// zvezda-avto (см. .github/workflows/deploy.yml), поэтому реальный публичный
// путь — /zvezda-avto/hpd-studio, а не просто /hpd-studio.
const basePath = isProd ? "/zvezda-avto/hpd-studio" : "";

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
