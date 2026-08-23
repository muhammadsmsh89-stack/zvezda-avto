/** 28000 -> «28 000 ₽». Неразрывный пробел, чтобы цена не рвалась переносом. */
export function formatPrice(value: number): string {
  return `${value.toLocaleString("ru-RU").replace(/\s/g, " ")} ₽`;
}

/** «от 3 300 ₽» — для карточек направлений, где показываем нижнюю границу. */
export function formatFrom(value: number): string {
  return `от ${formatPrice(value)}`;
}

/** 9 -> «9 лет», 5 -> «5 лет», 21 -> «21 год». */
export function years(n: number): string {
  const mod100 = n % 100;
  const mod10 = n % 10;
  if (mod100 >= 11 && mod100 <= 14) return `${n} лет`;
  if (mod10 === 1) return `${n} год`;
  if (mod10 >= 2 && mod10 <= 4) return `${n} года`;
  return `${n} лет`;
}
