import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// beautyway-clinic/out мёржится ВНУТРЬ корневого out/ репозитория zvezda-avto
// (см. .github/workflows/deploy.yml), поэтому публичный путь —
// /zvezda-avto/beautyway-clinic, а не просто /beautyway-clinic.
const basePath = isProd ? "/zvezda-avto/beautyway-clinic" : "";

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
