import type { Metadata } from "next";
import { site, branches, VERIFIED_ON } from "./site";
import { basePath } from "./basePath";

/** Демоверсия: в индекс не отдаём. */
export const ROBOTS = { index: false, follow: false, nocache: true } as const;

export const SITE_URL = "https://muhammadsmsh89-stack.github.io/zvezda-avto/beautyway-clinic";

export function canonicalFor(path: string): string {
  const p = path === "/" ? "/" : `/${path.replace(/^\/|\/$/g, "")}/`;
  return SITE_URL + p;
}

export function pageMeta({
  title,
  description,
  path,
  image,
  canonicalPath,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  /** Если страница дублирует другую, canonical указывает на основную. */
  canonicalPath?: string;
}): Metadata {
  const url = canonicalFor(canonicalPath ?? path);
  const ogImage = image ?? `${basePath}/media/interior/clinic-poster-1440.webp`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: ROBOTS,
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "ru_RU",
      type: "website",
      images: [{ url: ogImage }],
    },
  };
}

/** Отсекаем «хвост» SEO-заголовков вида «… | BeautyWay Clinic». */
export function trimTitle(raw: string | null, fallback: string): string {
  if (!raw) return fallback;
  const t = raw.split("|")[0].trim();
  // Шаблон добавляет « | BeautyWay Clinic» (19 символов) — держимся в пределах 120.
  return (t.length > 8 ? t : raw).slice(0, 100).trim();
}

export function clampDescription(raw: string | null, fallback: string): string {
  const src = (raw || "").trim();
  // Описания короче 60 символов не несут пользы в выдаче — используем запасное.
  const d = src.length >= 60 ? src : fallback || src;
  return d.length > 300 ? d.slice(0, 297).replace(/[\s,;:—-]+$/, "") + "…" : d;
}

type Node = Record<string, unknown>;

export function organizationLd(): Node {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: site.name,
    legalName: site.legalName,
    url: SITE_URL,
    telephone: site.phone,
    email: site.email,
    medicalSpecialty: "Dermatology",
    priceRange: "₽₽",
    address: branches.map((b) => ({
      "@type": "PostalAddress",
      streetAddress: b.address,
      addressLocality: "Москва",
      addressCountry: "RU",
    })),
    location: branches.map((b) => ({
      "@type": "MedicalClinic",
      name: `${site.name} — ${b.name}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: b.address,
        addressLocality: "Москва",
        addressCountry: "RU",
      },
      geo: { "@type": "GeoCoordinates", latitude: b.geo.lat, longitude: b.geo.lng },
      openingHours: "Mo-Su 10:00-22:00",
      telephone: site.phone,
    })),
    /* AggregateRating намеренно не публикуется: рейтинги принадлежат внешним
       площадкам и показываются с указанием источника и прямой ссылкой. */
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]): Node {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: canonicalFor(it.path),
    })),
  };
}

export function procedureLd(name: string, description: string, path: string): Node {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    url: canonicalFor(path),
    procedureType: "https://schema.org/NoninvasiveProcedure",
    provider: { "@type": "MedicalClinic", name: site.name, url: SITE_URL },
  };
}

export function physicianLd(d: {
  name: string;
  post?: string | null;
  path: string;
  image?: string | null;
}): Node {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: d.name,
    jobTitle: d.post ?? undefined,
    url: canonicalFor(d.path),
    image: d.image ?? undefined,
    medicalSpecialty: "Dermatology",
    worksFor: { "@type": "MedicalClinic", name: site.name, url: SITE_URL },
    address: branches.map((b) => ({
      "@type": "PostalAddress",
      streetAddress: b.address,
      addressLocality: "Москва",
      addressCountry: "RU",
    })),
  };
}

/** FAQPage выводим только когда FAQ реально отрисован на странице. */
export function faqLd(items: { q: string; a: string }[]): Node | null {
  if (!items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleLd(a: { name: string; description: string; path: string }): Node {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.name,
    description: a.description,
    url: canonicalFor(a.path),
    inLanguage: "ru-RU",
    dateModified: VERIFIED_ON,
    publisher: { "@type": "MedicalClinic", name: site.name, url: SITE_URL },
  };
}

export function JsonLd({ data }: { data: Node | Node[] | null }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
