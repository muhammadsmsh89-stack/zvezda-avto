import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// Подпроект монорепозитория zvezda-avto: при деплое modnoe-mesto/out мёржится
// внутрь корневого out/ (см. .github/workflows/deploy.yml), поэтому публичный
// путь — /zvezda-avto/modnoe-mesto.
const basePath = isProd ? "/zvezda-avto/modnoe-mesto" : "";

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
