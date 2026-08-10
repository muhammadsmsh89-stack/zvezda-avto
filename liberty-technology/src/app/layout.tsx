import type { Metadata } from "next";
import { Golos_Text, Onest, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { company } from "@/data/company";
import { SITE_URL } from "@/lib/seo";

const display = Golos_Text({
  variable: "--font-display-face",
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700", "900"],
  display: "swap",
});

const body = Onest({
  variable: "--font-body-face",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-face",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Liberty Technology — детейлинг и восстановление автомобилей в Махачкале",
    template: "%s — Liberty Technology",
  },
  description:
    "Liberty Technology — детейлинг, защита кузова плёнкой, кузовной ремонт и тюнинг в Махачкале. Один центр, несколько направлений работы, один согласованный результат.",
  keywords: [
    "детейлинг Махачкала",
    "кузовной ремонт Махачкала",
    "защитная плёнка Махачкала",
    "оклейка автомобиля Махачкала",
    "тюнинг автомобилей Махачкала",
    "Liberty Technology",
  ],
  openGraph: {
    title: "Liberty Technology — детейлинг и восстановление автомобилей",
    description:
      "Детейлинг, защита кузова плёнкой, кузовной ремонт и тюнинг в Махачкале. Обсудите автомобиль в WhatsApp.",
    url: SITE_URL,
    siteName: "Liberty Technology",
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
    "@type": "AutoRepair",
    name: company.name,
    "@id": SITE_URL,
    url: SITE_URL,
    telephone: company.phone.href.replace("tel:", ""),
    email: company.email.display,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.line,
      addressLocality: company.address.city,
      postalCode: company.address.postalCode,
      addressCountry: "RU",
    },
    sameAs: [company.instagram.url, company.yandexMaps.url, company.twoGis.url],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: company.yandexMaps.rating,
      reviewCount: company.yandexMaps.reviewsCount,
    },
  };

  return (
    <html
      lang="ru"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-void text-paper">
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
