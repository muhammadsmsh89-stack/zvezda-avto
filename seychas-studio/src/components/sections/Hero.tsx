"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FrameReveal, Marker, EASE } from "@/components/ui/Reveal";
import { studio, ctaLabels, rating } from "@/lib/site";
import { contacts } from "@/lib/contacts";
import { heroImage } from "@/lib/media";

export function Hero() {
  return (
    <section className="relative bg-background">
      <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] lg:hidden">
        <FrameReveal className="h-full w-full">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </FrameReveal>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-deep/70 to-transparent" />
      </div>

      <div className="relative flex min-h-0 flex-col lg:min-h-[88vh]">
        <div className="absolute right-0 hidden w-[48%] lg:top-0 lg:bottom-0 lg:block">
          <FrameReveal className="h-full w-full" delay={0.1}>
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="48vw"
              className="object-cover"
            />
          </FrameReveal>
          <div className="absolute inset-y-0 left-0 w-[26%] bg-gradient-to-r from-background via-background/45 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep/55 to-transparent" />

          <Marker delay={0.9} className="absolute bottom-10 right-8 text-right xl:bottom-14 xl:right-14">
            <p className="text-xs uppercase tracking-[0.14em] text-background/80">Рейтинг студии</p>
            <p className="mt-1.5 text-2xl font-extrabold tracking-tight text-background">
              {rating.value} · {rating.reviewsCount} отзывов
            </p>
          </Marker>
        </div>

        <Container className="relative z-10 flex flex-1 flex-col justify-center py-10 lg:py-24">
          <div className="max-w-xl lg:max-w-lg">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="text-pretty text-[3.2rem] font-extrabold uppercase leading-[0.94] tracking-tight text-foreground sm:text-7xl lg:text-[4.2rem] xl:text-[4.8rem]"
            >
              {studio.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
              className="mt-4 text-pretty text-xl font-bold uppercase tracking-[0.02em] text-accent sm:text-2xl"
            >
              {studio.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
              className="mt-5 max-w-sm text-pretty text-base leading-relaxed text-foreground/70"
            >
              Студия красоты в Туле, где можно выбрать услугу, посмотреть работы мастеров и записаться онлайн.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button size="lg" href={contacts.dikidiUrl}>
                {ctaLabels.primary}
              </Button>
              <Button size="lg" variant="secondary" href="/works">
                {ctaLabels.works}
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-muted"
            >
              Nails · Brows · Lashes · Beauty
            </motion.p>
          </div>
        </Container>
      </div>
    </section>
  );
}
