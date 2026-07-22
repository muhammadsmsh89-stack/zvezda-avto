"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { company } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-background">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-2.jpg"
          alt="Автотехцентр «Звезда» — ремонтная зона с подъёмниками в Махачкале"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="absolute inset-0 bg-noise" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-40 md:px-8 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/60 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-muted backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Автотехцентр в Махачкале
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
          className="max-w-3xl text-balance font-sans text-4xl font-extrabold leading-[1.08] text-foreground sm:text-5xl md:text-6xl"
        >
          {company.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
          className="mt-6 max-w-xl text-balance text-base leading-relaxed text-foreground/75 md:text-lg"
        >
          {company.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="#booking"
            className="rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110 active:scale-[0.97] accent-glow"
          >
            Записаться на сервис
          </Link>
          <a
            href={`tel:${company.phones[0].href}`}
            className="rounded-full border border-border-strong bg-surface/50 px-7 py-4 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent"
          >
            Позвонить: {company.phones[0].value}
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
            {company.address}
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
