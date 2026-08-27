"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { FrameReveal, EASE } from "@/components/ui/Reveal";
import { Star } from "@/components/ui/Icons";
import { studio, ctaLabels, rating } from "@/lib/site";
import { contacts, whatsappBookingLink } from "@/lib/contacts";
import { colorTechniques } from "@/lib/services";

const filmStrip = [
  { id: "01", label: "Airtouch", tone: "copper" as const, subject: "portrait" as const, ratio: "aspect-[3/4]", grow: "lg:basis-[19%]" },
  { id: "02", label: "Balayage", tone: "espresso" as const, subject: "wide" as const, ratio: "aspect-[4/3]", grow: "lg:basis-[26%]" },
  { id: "03", label: "Shatush", tone: "charcoal" as const, subject: "detail" as const, ratio: "aspect-square", grow: "lg:basis-[15%]" },
  { id: "04", label: "Блонд", tone: "copper" as const, subject: "portrait" as const, ratio: "aspect-[3/4]", grow: "lg:basis-[19%]" },
  { id: "05", label: "Стрижки", tone: "charcoal" as const, subject: "wide" as const, ratio: "aspect-[4/3]", grow: "lg:basis-[21%]" },
];

export function Hero() {
  return (
    <section id="top" className="relative bg-background">
      <Container className="pb-14 pt-10 sm:pt-14 lg:pb-20 lg:pt-20">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-xs font-semibold uppercase tracking-[0.22em] text-muted"
        >
          Redken Loft · Краснодар · Авторская колористика
        </motion.p>

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: EASE }}
            className="max-w-3xl text-pretty font-display text-[2.6rem] font-medium leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-[4.4rem]"
          >
            Цвет и форма,
            <br />
            которые <em className="font-medium italic text-accent">действительно</em>
            <br />
            вам подходят
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="flex items-end gap-3 lg:pb-2"
          >
            <span className="font-display text-6xl leading-none text-foreground sm:text-7xl">{rating.yandex.value}</span>
            <div className="pb-1">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 text-accent" />
                ))}
              </div>
              <p className="mt-1 text-[0.7rem] uppercase tracking-[0.08em] text-muted">
                {rating.yandex.reviewsCount} отзывов
                <br />
                на Яндексе
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 border-t border-border pt-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="max-w-md text-pretty text-base leading-relaxed text-foreground/75"
          >
            Авторские стрижки, сложные окрашивания и профессиональный уход в центре
            Краснодара. Сначала изучаем волосы, стиль и пожелания — затем создаём
            индивидуальный образ.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38, ease: EASE }}
            className="flex flex-col gap-6 lg:items-end"
          >
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <Button size="lg" href={whatsappBookingLink()}>
                {ctaLabels.primary}
              </Button>
              <Button size="lg" variant="secondary" href="/works">
                {ctaLabels.works}
              </Button>
            </div>
            <p className="text-xs uppercase tracking-[0.1em] text-muted lg:text-right">
              {colorTechniques.map((t) => t.name).join(" · ")}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-5 text-xs text-muted"
        >
          <span>{studio.yearsNote}</span>
          <span className="h-1 w-1 rounded-full bg-border-strong" />
          <span>Redken · Kevin Murphy · La Biosthetique</span>
          <span className="h-1 w-1 rounded-full bg-border-strong" />
          <span>{contacts.city}, {contacts.address}</span>
        </motion.div>
      </Container>

      <div className="mt-2 overflow-x-auto pb-2 lg:overflow-visible">
        <div className="flex w-max gap-3 px-5 sm:gap-4 sm:px-8 lg:w-full lg:px-12">
          {filmStrip.map((item, i) => (
            <FrameReveal
              key={item.id}
              delay={0.1 + i * 0.07}
              className={`w-[62vw] shrink-0 overflow-hidden border border-border sm:w-[38vw] lg:w-auto lg:shrink lg:grow ${item.grow} ${item.ratio}`}
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
      </div>
    </section>
  );
}
