import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { company } from "@/lib/content";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tc-zvezda.ru"),
  title: {
    default: "Автотехцентр «Звезда» в Махачкале — ремонт и обслуживание авто",
    template: "%s — Автотехцентр «Звезда»",
  },
  description:
    "Автотехцентр «Звезда» в Махачкале: слесарный ремонт, автоэлектрика, кузовной ремонт. Гарантия до 12 месяцев, 25 000+ запчастей в наличии, опыт мастеров более 10 лет. Работаем ежедневно с 9:00 до 21:00.",
  keywords: [
    "автосервис Махачкала",
    "автотехцентр Звезда",
    "ремонт авто Махачкала",
    "автоэлектрика Махачкала",
    "кузовной ремонт Махачкала",
    "СТО Махачкала",
  ],
  openGraph: {
    title: "Автотехцентр «Звезда» в Махачкале",
    description:
      "Слесарный ремонт, автоэлектрика и кузовной ремонт. Гарантия до 12 месяцев, 25 000+ запчастей в наличии.",
    url: "https://tc-zvezda.ru",
    siteName: "Автотехцентр «Звезда»",
    locale: "ru_RU",
    type: "website",
    images: ["/images/hero/hero-1.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: company.fullName,
    image: "https://tc-zvezda.ru/images/site/facade.jpg",
    "@id": "https://tc-zvezda.ru",
    url: "https://tc-zvezda.ru",
    telephone: company.phones[0].value,
    priceRange: "₽₽",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: "Махачкала",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.4",
      reviewCount: "213",
    },
  };

  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
