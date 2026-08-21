/**
 * Акции. Источник: https://bwclinic.ru/promo — сверено 21 августа 2026.
 * У каждой акции есть validUntil: после этой даты она перестаёт
 * отображаться автоматически (см. activePromos).
 */
export type Promo = {
  id: string;
  title: string;
  oldPrice?: string;
  newPrice?: string;
  unit?: string;
  note?: string;
  href?: string;
  validUntil: string; // ISO
  checkedOn: string;  // ISO
};

const CHECKED = "2026-08-21";

export const promos: Promo[] = [
  {
    id: "epilyaciya-50",
    title: "Скидка 50% на первую лазерную эпиляцию",
    note: "Для новых пациентов клиники",
    href: "/uslugi/lazernaya-kosmetologiya",
    validUntil: "2026-08-31",
    checkedOn: CHECKED,
  },
  {
    id: "konturnaya-plastika",
    title: "Контурная пластика",
    oldPrice: "15 000 ₽",
    newPrice: "от 11 990 ₽",
    unit: "за 1 мл",
    href: "/uslugi/kontyrnaja-plastika",
    validUntil: "2026-08-31",
    checkedOn: CHECKED,
  },
  {
    id: "uvelichenie-gub",
    title: "Увеличение губ",
    oldPrice: "15 000 ₽",
    newPrice: "от 12 990 ₽",
    href: "/uslugi/yvelichenie-gyb",
    validUntil: "2026-08-31",
    checkedOn: CHECKED,
  },
  {
    id: "botulinoterapiya",
    title: "Ботулинотерапия",
    oldPrice: "250 ₽",
    newPrice: "от 150 ₽",
    unit: "за единицу",
    href: "/uslugi/botulinoterapiya",
    validUntil: "2026-08-31",
    checkedOn: CHECKED,
  },
  {
    id: "lipolitiki",
    title: "Липолитический коктейль",
    oldPrice: "3 500 ₽",
    newPrice: "от 2 490 ₽",
    unit: "за 1 мл",
    href: "/uslugi/lipolitiki",
    validUntil: "2026-09-01",
    checkedOn: CHECKED,
  },
  {
    id: "mezoterapiya",
    title: "Мезотерапия",
    oldPrice: "6 000 ₽",
    newPrice: "от 4 990 ₽",
    href: "/uslugi/mezoterapiya",
    validUntil: "2026-08-31",
    checkedOn: CHECKED,
  },
];

/** Акция исчезает со страницы на следующий день после validUntil. */
export function activePromos(today = new Date()): Promo[] {
  const t = today.toISOString().slice(0, 10);
  return promos.filter((p) => p.validUntil >= t);
}

export function formatRuDate(iso: string): string {
  const months = [
    "января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря",
  ];
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${months[m - 1]} ${y}`;
}
