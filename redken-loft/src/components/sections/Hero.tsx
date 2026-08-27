"use client";

import { motion } from "framer-motion";
import { company, heroCopy, reputation, buildBookingHref } from "@/lib/content";
import { ColorField } from "@/components/ui/ColorField";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background scroll-mt-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16 lg:grid-cols-12 lg:gap-6">
        <div className="flex flex-col justify-center lg:col-span-7 lg:pr-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent"
          >
            <span className="h-px w-8 bg-accent" />
            Краснодар · Кубанская Набережная 37
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="text-balance mt-6 max-w-xl text-[2.6rem] leading-[1.05] text-ink sm:text-6xl md:text-[4rem]"
          >
            {heroCopy.h1}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: EASE }}
            className="text-balance mt-7 max-w-md text-base leading-relaxed text-muted md:text-lg"
          >
            {heroCopy.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={buildBookingHref()}
              target={company.bookingUrl ? undefined : "_blank"}
              rel={company.bookingUrl ? undefined : "noopener noreferrer"}
              className="bg-ink px-7 py-4 text-sm font-medium text-background transition-transform active:scale-[0.98]"
            >
              {heroCopy.ctaPrimary}
            </a>
            <a
              href="#works"
              className="border border-ink px-7 py-4 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-background"
            >
              {heroCopy.ctaSecondary}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
            className="mt-10 border-t border-border pt-5 text-sm text-foreground/70"
          >
            {reputation.heroTrustLine}
          </motion.div>
        </div>

        <div className="relative lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE }}
            className="relative aspect-[4/5] w-full overflow-hidden"
          >
            <ColorField swatch={["#efe0c4", "#7a2e2e"]} className="absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-background/90">
              <span className="font-editorial text-sm">Color / Cut / Form</span>
              <span className="caption-vertical text-[10px] uppercase tracking-[0.3em]">
                Redken Loft
              </span>
            </div>
          </motion.div>
          <p className="mt-3 text-xs text-muted">
            Место для реального портрета клиента Redken Loft — фото заменяется перед публикацией.
          </p>
        </div>
      </div>
    </section>
  );
}
