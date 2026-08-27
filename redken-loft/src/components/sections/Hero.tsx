"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { FrameReveal } from "@/components/ui/Reveal";
import { WordsPullUpMultiStyle } from "@/components/ui/WordsPullUp";
import { ctaLabels } from "@/lib/site";
import { whatsappBookingLink } from "@/lib/contacts";
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
    <>
      <section className="px-3 pt-3 sm:px-5 sm:pt-5">
        <div className="relative h-[88vh] min-h-[560px] w-full overflow-hidden rounded-2xl bg-noir md:rounded-[2rem]">
          {/* Background photo — a real interior/portrait shot replaces this once the salon supplies one */}
          <PhotoPlaceholder
            shotNumber="HERO"
            label="Redken Loft"
            description="Интерьер студии Redken Loft, широкий кадр во весь экран"
            tone="espresso"
            subject="wide"
            aspectClassName="h-full"
            className="absolute inset-0"
            hideCaption
          />

          {/* Legibility gradient for the bottom-anchored content */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-noir/10 via-transparent to-noir/85" />

          <div className="absolute inset-x-0 bottom-0 px-5 pb-6 sm:px-8 md:px-10 md:pb-8">
            <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-4">
              <div className="lg:col-span-8">
                <h1
                  className="font-sans font-bold uppercase leading-[0.86] tracking-[-0.03em] text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[8.4vw]"
                >
                  <WordsPullUpMultiStyle
                    segments={[
                      { text: "Redken", className: "text-cream" },
                      { text: "Loft", className: "text-accent" },
                    ]}
                  />
                </h1>
              </div>

              <div className="flex flex-col gap-5 pb-2 lg:col-span-4 lg:pb-4">
                <motion.p
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-sm leading-[1.35] text-cream/75 sm:text-base"
                >
                  Команда стилистов Краснодара, объединённая любовью к цвету и форме —
                  авторские окрашивания, стрижки и уход, подобранные под вас.
                </motion.p>

                <motion.a
                  href={whatsappBookingLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="group inline-flex w-fit items-center gap-2 self-start rounded-full bg-accent py-1 pl-5 pr-1 text-sm font-medium text-accent-foreground transition-all hover:gap-3 sm:text-base"
                >
                  {ctaLabels.primary}
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-noir transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                    <ArrowRight className="h-4 w-4 text-cream" />
                  </span>
                </motion.a>

                <p className="text-[0.68rem] uppercase tracking-[0.12em] text-cream-muted">
                  {colorTechniques.map((t) => t.name).join(" · ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Container className="pb-16 pt-8 lg:pb-24 lg:pt-10">
        <div className="flex gap-3 overflow-x-auto pb-2 sm:gap-4 lg:overflow-visible">
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
      </Container>
    </>
  );
}
