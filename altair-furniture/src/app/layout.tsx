import type { Metadata } from "next";
import { Unbounded, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { company } from "@/data/company";
import { SITE_URL } from "@/lib/seo";

const display = Unbounded({
  variable: "--font-display-face",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Альтаир — мебель на заказ в Махачкале. Кухни, шкафы, гардеробные",
    template: "%s — Альтаир",
  },
  description:
    "Альтаир — лаборатория мебели в Махачкале: кухни, шкафы, гардеробные и мебель для спальни по индивидуальному проекту. Замер, расчёт, производство, монтаж.",
  keywords: [
    "мебель на заказ Махачкала",
    "кухни на заказ Махачкала",
    "шкафы на заказ Махачкала",
    "гардеробные на заказ",
    "Альтаир мебель",
  ],
  openGraph: {
    title: "Альтаир — мебель на заказ в Махачкале",
    description:
      "Кухни, шкафы, гардеробные и мебель для спальни по индивидуальному проекту. Замер, расчёт, производство, монтаж.",
    url: SITE_URL,
    siteName: "Альтаир",
    locale: "ru_RU",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    name: company.name,
    alternateName: "Альтаир — Лаборатория мебели",
    "@id": SITE_URL,
    url: SITE_URL,
    telephone: company.phone.href.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.line,
      addressLocality: company.address.city,
      postalCode: company.address.postalCode,
      addressCountry: "RU",
    },
    sameAs: [company.instagram.url, company.yandexMaps.url],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: company.yandexMaps.rating,
      reviewCount: company.yandexMaps.reviewsCount,
    },
  };

  return (
    <html
      lang="ru"
      className={`${display.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
