import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// Как и у остальных подпроектов монорепозитория (studio-celebrity, seychas-studio,
// tsar-dverey и др.): при деплое lovtseva-beauty/out мёржится ВНУТРЬ корневого out/
// репозитория zvezda-avto (см. .github/workflows/deploy.yml), поэтому реальный
// публичный путь — /zvezda-avto/lovtseva-beauty, а не просто /lovtseva-beauty.
const basePath = isProd ? "/zvezda-avto/lovtseva-beauty" : "";

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
