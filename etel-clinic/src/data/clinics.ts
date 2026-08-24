/**
 * Единственный источник правды по клиникам — src/lib/site.ts.
 *
 * Этот файл раньше содержал собственную (неверную) копию данных: телефон с
 * переставленными цифрами (+7 8432... вместо +7 4832...) и неверный район
 * для клиники на Дуки. Чтобы у сайта не было двух версий фактов, которые
 * могут разойтись, здесь остаётся только реэкспорт проверенных данных.
 */
export type { Clinic } from "@/lib/site";
export { clinics } from "@/lib/site";

import { clinics } from "@/lib/site";

export function findClinic(slug: string) {
  return clinics.find((c) => c.slug === slug);
}
