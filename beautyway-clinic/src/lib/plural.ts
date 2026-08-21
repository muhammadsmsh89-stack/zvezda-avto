/**
 * Русское согласование числительных: 1 процедура, 2 процедуры, 5 процедур.
 * Без этого получаются фразы вида «81 разбора».
 */
export function plural(n: number, one: string, few: string, many: string): string {
  const mod100 = Math.abs(n) % 100;
  const mod10 = mod100 % 10;
  if (mod100 >= 11 && mod100 <= 14) return many;
  if (mod10 === 1) return one;
  if (mod10 >= 2 && mod10 <= 4) return few;
  return many;
}

/** «203 процедуры» — число вместе с согласованным словом. */
export function pluralize(n: number, one: string, few: string, many: string): string {
  return `${n.toLocaleString("ru-RU")} ${plural(n, one, few, many)}`;
}
