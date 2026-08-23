import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";
import { BookingProvider } from "@/components/BookingSheet";
import { JsonLd, clinicLd, ROBOTS, SITE_URL } from "@/lib/seo";
import { site } from "@/lib/site";

/* Шрифты self-hosted, только кириллица и латиница — никаких внешних запросов. */
const cormorant = localFont({
  src: [
    { path: "../fonts/cormorant-cyrillic.woff2", weight: "300 600", style: "normal" },
    { path: "../fonts/cormorant-latin.woff2", weight: "300 600", style: "normal" },
  ],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
  fallback: ["Times New Roman", "Georgia", "serif"],
  adjustFontFallback: false,
});

const inter = localFont({
  src: [
    { path: "../fonts/inter-cyrillic.woff2", weight: "300 700", style: "normal" },
    { path: "../fonts/inter-latin.woff2", weight: "300 700", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
  adjustFontFallback: false,
});

/*
 * Golos Text — акцентный гротеск для печатающегося эффекта в Hero.
 * Открытый шрифт с сильной кириллицей (SIL OFL, Google Fonts), взят как
 * ближайшая свободная замена «Союз Гротеска»: тот коммерческий, лицензии
 * на него нет. Не preload — используется в одном некритичном для первой
 * отрисовки месте, а не по всему сайту.
 */
const golos = localFont({
  src: [
    { path: "../fonts/golos-cyrillic.woff2", weight: "400 700", style: "normal" },
    { path: "../fonts/golos-latin.woff2", weight: "400 700", style: "normal" },
  ],
  variable: "--font-golos",
  display: "swap",
  preload: false,
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
  adjustFontFallback: false,
});

export const viewport: Viewport = {
  themeColor: "#f7f4f1",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "INUNICA clinic — клиника косметологии в Белгороде",
    template: "%s | INUNICA clinic",
  },
  description:
    "Клиника косметологии INUNICA на ул. Белгородского полка, 49. Медицинская лицензия, врачи-косметологи, лазерная эпиляция In-Motion D2, Sylfirm X, ClearLight, инъекции, уходы и массаж.",
  robots: ROBOTS,
  applicationName: site.name,
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: site.name,
    title: "INUNICA clinic — клиника косметологии в Белгороде",
    description:
      "Медицинская лицензия, врачи-косметологи и современное оборудование. Протокол подбирается после осмотра.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning — инлайн-скрипт ниже добавляет класс .js на <html>
    // до гидратации, поэтому className намеренно расходится с серверным.
    <html
      lang="ru"
      className={`${cormorant.variable} ${inter.variable} ${golos.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/*
          Класс .js ставится до первой отрисовки: только при нём включается
          скрытое стартовое состояние reveal-анимаций. Без JS страница
          отрисуется полностью видимой, без «мигания» при загрузке.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[2px] focus:bg-plum focus:px-5 focus:py-3 focus:text-shell"
        >
          Перейти к основному содержанию
        </a>

        <BookingProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <StickyCta />
        </BookingProvider>

        <JsonLd data={clinicLd()} />
      </body>
    </html>
  );
}
