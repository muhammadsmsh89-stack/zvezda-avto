import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// Как и у соседних подпроектов монорепозитория (hpd-studio, seychas-studio
// и др.): при деплое wrapmenow/out мёржится ВНУТРЬ корневого out/ репозитория
// zvezda-avto (см. .github/workflows/deploy.yml), поэтому реальный публичный
// путь — /zvezda-avto/wrapmenow, а не просто /wrapmenow.
const basePath = isProd ? "/zvezda-avto/wrapmenow" : "";

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
