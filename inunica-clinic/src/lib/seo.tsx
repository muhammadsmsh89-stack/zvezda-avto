import { site } from "./site";

/**
 * Канонический адрес — рабочий домен клиники. Превью выкладывается на
 * GitHub Pages по другому пути, но канониклы и разметка должны указывать
 * туда, где сайт будет жить.
 */
export const SITE_URL = "https://inunica.ru";

/**
 * Превью выкладывается на GitHub Pages — это публичная копия сайта работающей
 * клиники. Если её проиндексирует поиск, она начнёт конкурировать в выдаче
 * с настоящим inunica.ru, поэтому по умолчанию копия закрыта от индексации.
 * Индексация включается только явно, при переезде на рабочий домен:
 * NEXT_PUBLIC_INDEXABLE=1 npm run build
 */
export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "1";

export const ROBOTS = { index: INDEXABLE, follow: INDEXABLE } as const;

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Данные формируются на сборке из site.ts, пользовательского ввода здесь нет.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function clinicLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: site.name,
    legalName: site.legalName,
    description:
      "Клиника косметологии INUNICA в Белгороде: лазерная эпиляция, аппаратная и инъекционная косметология, уходы и массаж. Медицинская лицензия, врачи-косметологи.",
    url: SITE_URL,
    telephone: site.phone.display,
    email: site.email,
    priceRange: "₽₽",
    medicalSpecialty: ["Dermatology"],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.city,
      postalCode: "308001",
      addressCountry: "RU",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: site.hours.opens,
      closes: site.hours.closes,
    },
    sameAs: site.socials.map((s) => s.href),
  };
}

/** Разметка отдельной процедуры — для страниц направлений. */
export function serviceLd(title: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: title,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@type": "MedicalClinic", name: site.name, url: SITE_URL },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
