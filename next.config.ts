import type { NextConfig } from "next";

const repoName = "zvezda-avto";
const isProd = process.env.NODE_ENV === "production";

const basePath = isProd ? `/${repoName}` : "";

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
};

export default nextConfig;
