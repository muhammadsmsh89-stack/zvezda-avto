import type { Metadata, Viewport } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { BookingDrawer } from "@/components/BookingDrawer";
import { PresentationProvider } from "@/lib/presentation";
import { BookingProvider } from "@/lib/booking";
import { studio, seo } from "@/lib/studio";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studio-celebrity.example"),
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
  themeColor: "#f6f2ec",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: studio.name,
  image: undefined,
  address: {
    "@type": "PostalAddress",
    streetAddress: studio.address,
    addressLocality: studio.city,
    addressCountry: "RU",
  },
  telephone: studio.phone.value,
  url: studio.instagramUrl,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: studio.rating,
    reviewCount: studio.reviewsCount,
    bestRating: "5",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "10:00",
    closes: "20:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <PresentationProvider>
          <BookingProvider>
            <Header />
            <main className="flex-1 pb-20 md:pb-0">{children}</main>
            <Footer />
            <MobileCta />
            <BookingDrawer />
          </BookingProvider>
        </PresentationProvider>
      </body>
    </html>
  );
}
