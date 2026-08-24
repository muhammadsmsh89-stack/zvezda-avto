"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RealPhoto } from "@/components/ui/RealPhoto";
import { Marker, EASE } from "@/components/ui/Reveal";
import { MapPin, Star } from "@/components/ui/Icons";
import { studio, ctaLabels, rating, trustLine } from "@/lib/site";
import { heroImage } from "@/lib/media";

export function Hero() {
  return (
    <section className="relative bg-background">
      <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] lg:hidden">
        <RealPhoto image={heroImage} priority sizes="100vw" className="h-full w-full" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/85 to-transparent" />
      </div>

      <div className="relative flex min-h-0 flex-col lg:min-h-[92vh]">
        <div className="absolute right-0 hidden w-[48%] lg:top-0 lg:bottom-0 lg:block">
          <motion.div
            initial={{ scale: 1.02, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: EASE }}
            className="h-full w-full"
          >
            <RealPhoto image={heroImage} priority sizes="50vw" className="h-full w-full" />
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-[32%] bg-gradient-to-r from-background via-background/45 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background/70 to-transparent" />

          <Marker delay={0.9} className="absolute bottom-10 right-8 xl:bottom-14 xl:right-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/55 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-foreground/85 backdrop-blur-sm">
              Range Rover Sport · Полная защита кузова
            </span>
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
              {studio.city} · Ташкентская, 28с8
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="mt-6 text-balance text-hero font-medium tracking-[-0.01em] text-foreground"
            >
              Оклейка автомобиля,
              <br />
              за которую отвечаем
              <br />
              по договору
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26, ease: EASE }}
              className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted"
            >
              Защитная и цветная оклейка кузова, антихром и стайлинг в Москве. Работаем с {studio.yearFounded} года и
              сопровождаем автомобиль после выдачи.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button size="lg" href="#calculator" dataEvent="hero_calc_click">
                {ctaLabels.primary}
              </Button>
              <Button size="lg" variant="secondary" href="/portfolio" dataEvent="hero_works_click">
                {ctaLabels.works}
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-9 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm text-muted"
            >
              <span className="inline-flex items-center gap-1 font-semibold text-foreground">
                <Star className="h-3.5 w-3.5 text-accent" /> {rating.value}
              </span>
              <span aria-hidden>·</span>
              <span>{trustLine.split(" · ").slice(1).join(" · ")}</span>
            </motion.p>
          </div>
        </Container>
      </div>
    </section>
  );
}
