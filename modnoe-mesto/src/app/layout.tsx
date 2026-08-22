import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { seo, site, facts } from "@/lib/site";
import { contacts } from "@/lib/contacts";

/** Одно семейство на весь сайт: спокойный современный гротеск с кириллицей. */
const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: seo.titleDefault, template: seo.titleTemplate },
  description: seo.description,
  keywords: [...seo.keywords],
  openGraph: {
    title: seo.titleDefault,
    description: seo.description,
    siteName: site.name,
    locale: "ru_RU",
    type: "website",
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b0b0c",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: site.name,
  alternateName: site.nameRu,
  description: seo.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: contacts.address,
    addressLocality: contacts.city,
    addressCountry: "RU",
  },
  telephone: contacts.phoneDisplay,
  email: contacts.email,
  url: site.url,
  sameAs: [contacts.telegram, contacts.vk, contacts.youtube, contacts.sourceSite],
  openingHours: "Mo-Su 10:00-21:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: facts.rating,
    bestRating: "5",
    reviewCount: 6,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[4px] focus:bg-gold focus:px-4 focus:py-3 focus:text-[15px] focus:font-semibold focus:text-on-gold"
        >
          Перейти к содержимому
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <MobileStickyCTA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
