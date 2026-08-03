"use client";

import { motion } from "framer-motion";
import { company } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-mesh scroll-mt-20">
      <div className="absolute inset-0 bg-noise" />
      <div className="relative z-10 mx-auto flex min-h-[88svh] w-full max-w-7xl flex-col justify-center px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-surface/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-muted backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {company.salonsCount} салонов в Москве · с {company.foundedYear} года
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
          className="max-w-3xl text-balance text-5xl font-semibold leading-[1.06] text-foreground sm:text-6xl md:text-7xl"
        >
          {company.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
          className="mt-6 max-w-xl text-balance font-sans text-base leading-relaxed text-foreground/70 md:text-lg"
        >
          {company.description} Волосы, ногти, визаж, косметология и массаж — под одной крышей,
          в 7 салонах по Москве.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#booking"
            className="rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground transition-all hover:brightness-105 active:scale-[0.97] accent-glow"
          >
            Записаться онлайн за 30 секунд
          </a>
          <a
            href={company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border-strong bg-surface/60 px-7 py-4 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent"
          >
            Написать в WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.46, ease: EASE }}
          className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-6 text-sm text-foreground/70"
        >
          <div className="flex items-center gap-2">
            <ClockIcon />
            {company.hours}
          </div>
          <div className="flex items-center gap-2">
            <PinIcon />
            Москва-Сити, Белорусская, Комсомольская, Тульская, Академическая, Раменки и ещё 1 салон
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-accent shrink-0">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-accent shrink-0">
      <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
