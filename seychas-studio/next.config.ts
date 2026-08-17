import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// Как и у соседних подпроектов монорепозитория (studio-celebrity, naturel-studio,
// tsar-dverey и др.): при деплое seychas-studio/out мёржится ВНУТРЬ корневого out/
// репозитория zvezda-avto (см. .github/workflows/deploy.yml), поэтому реальный
// публичный путь — /zvezda-avto/seychas-studio, а не просто /seychas-studio.
const basePath = isProd ? "/zvezda-avto/seychas-studio" : "";

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
