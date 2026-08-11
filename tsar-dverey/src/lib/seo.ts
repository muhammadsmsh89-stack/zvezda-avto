// URL текущего деплоя — намеренно не захардкожен на гипотетический домен компании: это
// демонстрационная концепция (см. src/data/company.ts, isDemoMode), а не официальный сайт.
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  return "http://localhost:3900";
}

export const SITE_URL = resolveSiteUrl();
