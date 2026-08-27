"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { FrameReveal, EASE } from "@/components/ui/Reveal";
import { Star, WhatsAppIcon } from "@/components/ui/Icons";
import { studio, ctaLabels, rating } from "@/lib/site";
import { contacts, whatsappBookingLink } from "@/lib/contacts";

const trustPills = [
  { label: `${rating.yandex.value} на Яндексе`, icon: "star" as const },
  { label: `${rating.yandex.reviewsCount} отзывов` },
  { label: studio.yearsNote },
  { label: "Redken · Kevin Murphy · La Biosthetique" },
];

const bento = [
  { id: "01", label: "Airtouch", tone: "copper" as const, subject: "portrait" as const, span: "lg:row-span-2" },
  { id: "02", label: "Balayage", tone: "espresso" as const, subject: "detail" as const, span: "" },
  { id: "03", label: "Shatush", tone: "charcoal" as const, subject: "portrait" as const, span: "" },
  { id: "04", label: "Блонд", tone: "copper" as const, subject: "portrait" as const, span: "" },
  { id: "05", label: "Стрижки", tone: "charcoal" as const, subject: "detail" as const, span: "" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background pt-8 sm:pt-10">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-20%] h-[720px] w-[1100px] -translate-x-1/2 opacity-40 blur-[100px]"
        style={{
          background:
            "radial-gradient(38% 45% at 25% 40%, var(--accent) 0%, transparent 70%), radial-gradient(35% 40% at 70% 25%, var(--rose) 0%, transparent 70%), radial-gradient(30% 40% at 55% 65%, var(--violet) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10 pb-16 pt-8 text-center sm:pb-20 sm:pt-12 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-4 py-1.5 backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-xs font-medium uppercase tracking-[0.1em] text-foreground/75">
            Авторская колористика · Краснодар
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="mx-auto mt-7 max-w-3xl text-pretty font-display text-[2.5rem] font-bold leading-[1.06] tracking-tight text-foreground sm:text-6xl lg:text-[4rem]"
        >
          Цвет и форма,
          <br />
          которые <span className="text-gradient">действительно</span>
          <br />
          вам подходят
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: EASE }}
          className="mx-auto mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted"
        >
          Авторские стрижки, сложные окрашивания и профессиональный уход в центре
          Краснодара. Сначала изучаем волосы, стиль и пожелания — затем создаём
          индивидуальный образ.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.36, ease: EASE }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Button size="lg" href={whatsappBookingLink()}>
            {ctaLabels.primary}
          </Button>
          <Button size="lg" variant="secondary" href="/works">
            {ctaLabels.works}
          </Button>
          <a
            href={contacts.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ctaLabels.whatsapp}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-2.5"
        >
          {trustPills.map((p) => (
            <span
              key={p.label}
              className="glass-card inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium text-foreground/80 transition-colors"
            >
              {p.icon === "star" && <Star className="h-3 w-3 text-accent" />}
              {p.label}
            </span>
          ))}
        </motion.div>
      </Container>

      <Container className="relative z-10 pb-20 lg:pb-28">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:auto-rows-[260px]">
          {bento.map((item, i) => (
            <FrameReveal
              key={item.id}
              delay={0.1 + i * 0.08}
              className={`aspect-square overflow-hidden rounded-2xl border border-border lg:aspect-auto lg:h-full ${item.span}`}
            >
              <PhotoPlaceholder
                shotNumber={item.id}
                label={item.label}
                description={`${item.label} — реальная работа стилиста, не фотосток`}
                tone={item.tone}
                subject={item.subject}
                aspectClassName="h-full"
                className="h-full"
              />
            </FrameReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
