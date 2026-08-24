/** Приводит поле, снятое со страницы врача (список или строка), к массиву. */
export function toList(value: string[] | string | null | undefined): string[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}
