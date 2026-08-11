import type { Metadata } from "next";
import { Spectral, Mulish } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { company, isDemoMode, locations, ratings } from "@/data/company";
import { SITE_URL } from "@/lib/seo";

const heading = Spectral({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600"],
  display: "swap",
});

const body = Mulish({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// robots: noindex — сайт является демонстрационной концепцией (см. src/data/company.ts, isDemoMode),
// подготовленной на основе открытых данных, а не заказанным и утверждённым официальным сайтом.
// Переключить на index:true нужно осознанно, вместе с согласованием у владельца бизнеса.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Царь Дверей — двери в Махачкале",
    template: "%s — Царь Дверей",
  },
  description:
    "Межкомнатные, входные, скрытые и раздвижные двери в Махачкале. Подбор под интерьер, замер, монтаж. Рейтинг 4,9 на Яндекс Картах, 5,0 на 2ГИС.",
  robots: {
    index: !isDemoMode,
    follow: !isDemoMode,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: company.brand,
    title: "Царь Дверей — двери в Махачкале",
    description: "Подбор дверей под интерьер, замер и монтаж в Махачкале.",
  },
};

const localBusinessJsonLd = isDemoMode
  ? null
  : {
      "@context": "https://schema.org",
      "@type": "Store",
      name: company.brand,
      url: SITE_URL,
      telephone: company.phone.href.replace("tel:", ""),
      email: company.email,
      openingHours: "Mo-Su 09:00-18:30",
      address: locations.map((loc) => ({
        "@type": "PostalAddress",
        streetAddress: loc.address,
        addressLocality: company.city,
        addressCountry: "RU",
      }))[0],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: ratings[0].score.replace(",", "."),
        reviewCount: ratings[0].reviewCount,
      },
    };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${heading.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {localBusinessJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
          />
        )}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-accent-foreground focus:px-4 focus:py-2 focus:rounded-[3px]"
        >
          Перейти к содержимому
        </a>
        <Header />
        <main id="main" className="flex-1 pb-20 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
