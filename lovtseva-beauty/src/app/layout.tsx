import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { studio, seo, rating } from "@/lib/site";
import { contacts } from "@/lib/contacts";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadsmsh89-stack.github.io/zvezda-avto/lovtseva-beauty/"),
  title: {
    default: seo.titleDefault,
    template: seo.titleTemplate,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  openGraph: {
    title: seo.titleDefault,
    description: seo.description,
    siteName: studio.name,
    locale: "ru_RU",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6efe3",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: studio.name,
  address: {
    "@type": "PostalAddress",
    streetAddress: contacts.address,
    addressLocality: contacts.city,
    addressCountry: "RU",
  },
  telephone: contacts.phone.value,
  email: contacts.email,
  url: contacts.clientsSiteUrl,
  sameAs: [contacts.yandexUrl, contacts.twoGisUrl],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: rating.value,
    reviewCount: rating.reviewsCount,
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-accent-foreground"
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
