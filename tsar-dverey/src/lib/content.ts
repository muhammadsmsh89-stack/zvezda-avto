// Навигация и контентные константы, не относящиеся к товарным/контактным данным (те — в
// src/data/company.ts, src/lib/catalog.ts, src/lib/products.ts).

export const nav = [
  { label: "Каталог", href: "/catalog" },
  { label: "Интерьеры", href: "/interiors" },
  { label: "Контакты", href: "/contacts" },
] as const;

export const footerNav = [
  { label: "Каталог", href: "/catalog" },
  { label: "Интерьеры", href: "/interiors" },
  { label: "Контакты", href: "/contacts" },
] as const;

export const quizHref = "/#podbor";
