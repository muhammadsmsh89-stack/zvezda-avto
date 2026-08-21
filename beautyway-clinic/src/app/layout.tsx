import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";
import { BookingProvider } from "@/components/BookingSheet";
import { JsonLd, organizationLd, ROBOTS, SITE_URL } from "@/lib/seo";
import { site } from "@/lib/site";

/* Шрифты self-hosted, только нужные подмножества (кириллица + латиница). */
const prata = localFont({
  src: [
    { path: "../fonts/prata-cyrillic.woff2", weight: "400", style: "normal" },
    { path: "../fonts/prata-latin.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-prata",
  display: "swap",
  preload: true,
  fallback: ["Times New Roman", "Georgia", "serif"],
});

const inter = localFont({
  src: [
    { path: "../fonts/inter-cyrillic.woff2", weight: "400 700", style: "normal" },
    { path: "../fonts/inter-latin.woff2", weight: "400 700", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
});

export const viewport: Viewport = {
  themeColor: "#1e1726",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BeautyWay Clinic — эстетическая медицина в центре Москвы",
    template: "%s | BeautyWay Clinic",
  },
  description:
    "Клиника эстетической медицины и косметологии BeautyWay: врачи со средним стажем более 10 лет, оригинальное оборудование, две клиники в центре Москвы.",
  robots: ROBOTS,
  applicationName: site.name,
  formatDetection: { telephone: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${prata.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[4px] focus:bg-plum focus:px-4 focus:py-3 focus:text-white"
        >
          Перейти к основному содержанию
        </a>
        <BookingProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <StickyCta />
        </BookingProvider>
        <JsonLd data={organizationLd()} />
      </body>
    </html>
  );
}
