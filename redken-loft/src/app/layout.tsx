import type { Metadata } from "next";
import { Noto_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { company, reputation } from "@/lib/content";

const instrument = Noto_Serif_Display({
  variable: "--font-instrument",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://redken-loft.ru";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Redken Loft — авторские окрашивания и стрижки в Краснодаре",
    template: "%s — Redken Loft",
  },
  description:
    "Redken Loft — студия авторских стрижек и сложной колористики в центре Краснодара, Кубанская Набережная 37. 5,0 на Яндексе, 209 отзывов. Запись к стилисту по телефону и в WhatsApp.",
  keywords: [
    "Redken Loft Краснодар",
    "окрашивание волос Краснодар",
    "Airtouch Краснодар",
    "стрижка Краснодар",
    "салон колористики Краснодар",
    "Кубанская Набережная 37",
  ],
  openGraph: {
    title: "Redken Loft — авторские окрашивания и стрижки в Краснодаре",
    description:
      "Студия авторских стрижек и сложной колористики в центре Краснодара. 5,0 на Яндексе, 209 отзывов.",
    url: siteUrl,
    siteName: "Redken Loft",
    locale: "ru_RU",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Redken Loft",
    "@id": siteUrl,
    url: siteUrl,
    telephone: company.phone.href,
    priceRange: "₽₽₽",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: company.city,
      addressCountry: "RU",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
    sameAs: [company.instagram.url, company.vk.url],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reputation.yandex.rating.replace(",", "."),
      reviewCount: reputation.yandex.reviews,
    },
  };

  return (
    <html lang="ru" className={`${instrument.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
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
