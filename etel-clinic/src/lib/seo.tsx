import { site, clinics } from "./site";

/**
 * Канонический адрес — рабочий домен клиники. Превью выкладывается на
 * GitHub Pages по другому пути, но канониклы и разметка указывают туда,
 * где сайт будет жить в проде.
 */
export const SITE_URL = "https://etel37.ru";

/**
 * Превью на GitHub Pages — публичная копия сайта работающего центра. Если её
 * проиндексирует поиск, она начнёт конкурировать в выдаче с настоящим
 * etel37.ru, поэтому по умолчанию копия закрыта от индексации.
 * NEXT_PUBLIC_INDEXABLE=1 npm run build — включить при переезде на прод-домен.
 */
export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "1";
export const ROBOTS = { index: INDEXABLE, follow: INDEXABLE } as const;

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Данные формируются на сборке из site.ts/data, пользовательского ввода здесь нет.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function clinicLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: site.fullName,
    legalName: site.legalName,
    description:
      "Сеть из трёх клиник медицинской косметологии в Брянске: врачебная, аппаратная и инъекционная косметология, трихология, гинекология, подология с 2007 года.",
    url: SITE_URL,
    telephone: site.phone.href.replace("tel:", ""),
    email: site.email,
    priceRange: "₽₽",
    medicalSpecialty: ["Dermatology"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.reviews.rating,
      reviewCount: site.reviews.count,
    },
    department: clinics.map((c) => ({
      "@type": "MedicalClinic",
      name: `${site.fullName} — ${c.name}`,
      telephone: c.phone.href.replace("tel:", ""),
      address: {
        "@type": "PostalAddress",
        streetAddress: c.address,
        addressLocality: site.city,
        postalCode: c.postalCode,
        addressCountry: "RU",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
        ],
        opens: site.hours.opens,
        closes: site.hours.closes,
      },
    })),
    sameAs: site.socials.map((s) => s.href),
  };
}

export function physicianLd(name: string, role: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name,
    jobTitle: role,
    worksFor: { "@type": "MedicalClinic", name: site.fullName, url: SITE_URL },
    url: `${SITE_URL}${path}`,
  };
}

export function serviceLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@type": "MedicalClinic", name: site.fullName, url: SITE_URL },
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

export function faqLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
