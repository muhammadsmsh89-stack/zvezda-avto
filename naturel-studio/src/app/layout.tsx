import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { company, salons } from "@/lib/content";
import { BookingProvider } from "@/lib/booking-context";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://naturel-studio.ru"),
  title: {
    default: "Naturel Studio — премиальный салон красоты в Москве. Онлайн-запись",
    template: "%s — Naturel Studio",
  },
  description:
    "Naturel Studio — сеть из 7 премиальных салонов красоты в Москве: волосы, ногти, визаж, косметология, массаж. 16 лет опыта. Запись онлайн за 30 секунд.",
  keywords: [
    "салон красоты Москва",
    "Naturel Studio",
    "маникюр Москва",
    "косметология Москва",
    "запись в салон красоты онлайн",
    "парикмахерская Москва-Сити",
  ],
  openGraph: {
    title: "Naturel Studio — премиальный салон красоты в Москве",
    description:
      "7 салонов в Москве, 16 лет опыта, все бьюти-услуги под одной крышей. Запишитесь онлайн за 30 секунд.",
    url: "https://naturel-studio.ru",
    siteName: "Naturel Studio",
    locale: "ru_RU",
    type: "website",
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
    "@type": "BeautySalon",
    name: company.fullName,
    "@id": "https://naturel-studio.ru",
    url: "https://naturel-studio.ru",
    telephone: company.phone.href,
    priceRange: "₽₽₽",
    areaServed: "Москва",
    department: salons.map((s) => ({
      "@type": "BeautySalon",
      name: `Naturel Studio — ${s.metro}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: s.address,
        addressLocality: "Москва",
        addressCountry: "RU",
      },
      telephone: s.phone.href,
      openingHours: "Mo-Su 10:00-22:00",
    })),
  };

  return (
    <html
      lang="ru"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BookingProvider>
          <Header />
          <main className="flex-1 pb-20 md:pb-0">{children}</main>
          <Footer />
          <MobileCta />
        </BookingProvider>
      </body>
    </html>
  );
}
