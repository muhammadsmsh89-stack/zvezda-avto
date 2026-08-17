"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RealPhoto } from "@/components/ui/RealPhoto";
import { Marker, EASE } from "@/components/ui/Reveal";
import { MapPin } from "@/components/ui/Icons";
import { studio, ctaLabels, rating } from "@/lib/site";
import { whatsappLink } from "@/lib/contacts";
import { heroImage } from "@/lib/media";

export function Hero() {
  return (
    <section className="relative bg-background">
      <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] lg:hidden">
        <RealPhoto image={heroImage} priority sizes="100vw" className="h-full w-full" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      <div className="relative flex min-h-0 flex-col lg:min-h-[86vh]">
        <div className="absolute right-0 hidden w-[46%] lg:top-0 lg:bottom-0 lg:block">
          <RealPhoto image={heroImage} priority sizes="48vw" className="h-full w-full" />
          <div className="absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-background via-background/50 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background/70 to-transparent" />

          <Marker delay={0.9} className="absolute bottom-10 right-8 text-right xl:bottom-14 xl:right-14">
            <p className="text-xs uppercase tracking-[0.14em] text-foreground/70">Рейтинг студии</p>
            <p className="mt-1.5 text-2xl font-extrabold tracking-tight text-foreground">
              {rating.value} · {rating.reviewsCount} отзывов
            </p>
          </Marker>
        </div>

        <Container className="relative z-10 flex flex-1 flex-col justify-center py-10 lg:py-24">
          <div className="max-w-xl lg:max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted"
            >
              <MapPin className="h-3.5 w-3.5 text-accent" />
              {studio.city} · Пушкинская, 8
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="mt-6 text-pretty text-[3.1rem] font-semibold uppercase leading-[0.96] tracking-tight text-foreground sm:text-6xl lg:text-[4rem] xl:text-[4.5rem]"
            >
              {studio.name}
              <span className="mt-2 block text-[1.7rem] font-medium tracking-[0.02em] text-foreground/85 sm:text-3xl lg:text-4xl">
                Detailing Studio
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
              className="mt-4 text-pretty text-lg font-semibold text-accent sm:text-xl"
            >
              {studio.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
              className="mt-5 max-w-sm text-pretty text-base leading-relaxed text-muted"
            >
              Уход за автомобилем в центре Воронежа: мойка, полировка, защита кузова, химчистка салона, тонировка и шумоизоляция.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button size="lg" href={whatsappLink()} dataEvent="hero_booking_click">
                {ctaLabels.primary}
              </Button>
              <Button size="lg" variant="secondary" href="/works" dataEvent="hero_works_click">
                {ctaLabels.works}
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-muted"
            >
              Полировка · Защита · Химчистка · Тонировка
            </motion.p>
          </div>
        </Container>
      </div>
    </section>
  );
}
