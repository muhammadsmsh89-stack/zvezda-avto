// Направления подтверждены каталогом holy-nails.clients.site, прайсом на
// n996226.yclients.com и шапкой Instagram (@holy_nails_tula: «МАНИКЮР •
// ПЕДИКЮР • НАРАЩИВАНИЕ • ТУЛА»). Проверено 18.08.2026.

export type Direction = {
  slug: string;
  code: string;
  index: string;
  title: string;
  short: string;
  long: string;
  priceFrom: number;
  unit?: string;
};

export const directions: readonly Direction[] = [
  {
    slug: "manicure",
    code: "МАН",
    index: "01",
    title: "Маникюр",
    short: "Классический уход, укрепление и покрытие гель-лаком — от нюда до смелого дизайна.",
    long:
      "Гигиенический маникюр, выравнивание ногтевой пластины и покрытие гель-лаком. Выравнивание входит в стоимость, на покрытие действует гарантия 2 недели. Есть отдельный мужской маникюр.",
    priceFrom: 1190,
  },
  {
    slug: "pedicure",
    code: "ПЕД",
    index: "02",
    title: "Педикюр",
    short: "Уход и покрытие для стоп — с гарантией и вниманием к деталям.",
    long: "Педикюр без покрытия или с однотонным гель-лаком, включая обработку пальцев.",
    priceFrom: 1890,
  },
  {
    slug: "extensions",
    code: "НАР",
    index: "03",
    title: "Наращивание",
    short: "Форма и длина на геле — до 2 см и от 2 см, с коррекцией.",
    long: "Наращивание и коррекция на геле — форма и длина по вашему запросу.",
    priceFrom: 2600,
  },
  {
    slug: "design",
    code: "ДИЗ",
    index: "04",
    title: "Nail Design",
    short: "Френч, роспись, втирка, стразы — от минимализма до сложного дизайна из Pinterest.",
    long: "Дизайн — от простого акцента на одном ногте до ручной росписи на всех пальцах.",
    priceFrom: 300,
  },
  {
    slug: "brows-lashes",
    code: "БР",
    index: "05",
    title: "Брови и ресницы",
    short: "Ламинирование и окрашивание бровей и ресниц.",
    long: "Ламинирование бровей и ресниц с окрашиванием, коррекция формы пинцетом.",
    priceFrom: 350,
  },
] as const;

export function getDirectionBySlug(slug: string) {
  return directions.find((d) => d.slug === slug);
}
