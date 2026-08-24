import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// etel-clinic/out мёржится ВНУТРЬ корневого out/ репозитория zvezda-avto,
// поэтому публичный путь превью — /zvezda-avto/etel-clinic.
const basePath = isProd ? "/zvezda-avto/etel-clinic" : "";

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
