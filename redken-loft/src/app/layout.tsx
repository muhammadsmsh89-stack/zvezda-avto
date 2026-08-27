import type { Metadata, Viewport } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { studio, seo, rating } from "@/lib/site";
import { contacts } from "@/lib/contacts";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const unbounded = Unbounded({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://redken-loft.example"),
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
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0b09",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: studio.name,
  address: {
    "@type": "PostalAddress",
    streetAddress: contacts.address,
    addressLocality: contacts.city,
    addressCountry: "RU",
  },
  telephone: contacts.phone.value,
  url: contacts.instagramUrl,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: rating.yandex.value.replace(",", "."),
    reviewCount: rating.yandex.reviewsCount,
    bestRating: "5",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "21:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${unbounded.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1 pb-20 lg:pb-0">{children}</main>
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
