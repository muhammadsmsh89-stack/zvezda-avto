import type { Metadata, Viewport } from "next";
import { Spectral, Manrope, IBM_Plex_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { BookingProvider } from "@/components/BookingSheet";
import { JsonLd, clinicLd, ROBOTS, SITE_URL } from "@/lib/seo";
import { site } from "@/lib/site";

const spectral = Spectral({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f7f2ec",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Этель — центр красоты и медицинской косметологии в Брянске",
    template: "%s | Этель",
  },
  description:
    "«Этель» — три клиники медицинской косметологии в Брянске с 2007 года. Врачебная, аппаратная и инъекционная косметология, трихология, гинекология, подология. Медицинская лицензия.",
  robots: ROBOTS,
  applicationName: site.name,
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: site.fullName,
    title: "Этель — центр красоты и медицинской косметологии в Брянске",
    description: "Врачебная экспертиза, современные технологии, три клиники в Брянске с 2007 года.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ru"
      className={`${spectral.variable} ${manrope.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[2px] focus:bg-graphite focus:px-5 focus:py-3 focus:text-shell"
        >
          Перейти к основному содержанию
        </a>

        {/* reducedMotion="user" — Framer Motion сам глушит transform/scale-анимации
            для посетителей с prefers-reduced-motion, без изменений в компонентах. */}
        <MotionConfig reducedMotion="user">
          <BookingProvider>
            <Header />
            <main id="main">{children}</main>
            <Footer />
            <MobileCta />
          </BookingProvider>
        </MotionConfig>

        <JsonLd data={clinicLd()} />
      </body>
    </html>
  );
}
