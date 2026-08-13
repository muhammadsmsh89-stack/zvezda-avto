"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { FrameReveal, Marker, EASE } from "@/components/ui/Reveal";
import { Star, MapPin, Clock, WhatsAppIcon } from "@/components/ui/Icons";
import { studio, ctaLabels } from "@/lib/studio";
import { useBooking } from "@/lib/booking";

export function Hero() {
  const { openBooking } = useBooking();

  return (
    <section id="top" className="relative bg-background">
      <div className="lg:hidden">
        <FrameReveal>
          <PhotoPlaceholder
            shotNumber="01"
            label="Hero portrait"
            description="Сильный beauty-портрет: макияж + причёска, реальная работа студии"
            tone="ivory"
            subject="portrait"
            aspectClassName="aspect-[4/5]"
          />
        </FrameReveal>
      </div>

      <div className="relative flex min-h-0 flex-col lg:min-h-[92vh]">
        <div className="absolute right-0 hidden w-[52%] lg:top-0 lg:bottom-0 lg:block">
          <FrameReveal className="h-full w-full" delay={0.1}>
            <PhotoPlaceholder
              shotNumber="01"
              label="Hero portrait"
              description="Сильный beauty-портрет: макияж + причёска, реальная работа студии, не в камеру"
              tone="ivory"
              subject="portrait"
              aspectClassName="h-full"
              className="h-full"
            />
          </FrameReveal>
          <div className="absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-background via-background/50 to-transparent" />

          <Marker delay={0.9} className="absolute bottom-10 right-8 text-right xl:bottom-14 xl:right-14">
            <p className="text-xs uppercase tracking-[0.14em] text-foreground/60">Yandex Карты</p>
            <p className="mt-1.5 text-2xl font-extrabold tracking-tight text-foreground">
              {studio.rating} · {studio.reviewsCount} отзыва
            </p>
          </Marker>
        </div>

        <Container className="relative z-10 flex flex-1 flex-col justify-center py-14 lg:py-28">
          <div className="max-w-xl lg:max-w-lg">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full bg-nude px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-foreground"
            >
              {studio.award}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
              className="mt-6 text-pretty text-[3.1rem] font-extrabold uppercase leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-[3.6rem] xl:text-[4rem]"
            >
              Studio
              <br />
              Celebrity
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
              className="mt-6 text-pretty text-lg leading-relaxed text-foreground/85"
            >
              Место, где создают ваш идеальный образ
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
              className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-muted"
            >
              Hair · Makeup · Brows · Lashes
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button size="lg" onClick={() => openBooking()}>
                {ctaLabels.primaryOnline}
              </Button>
              <Button
                size="lg"
                variant="secondary"
                href={studio.whatsappUrl}
                icon={<WhatsAppIcon className="h-4 w-4" />}
              >
                {ctaLabels.whatsapp}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3"
            >
              <div className="flex items-center gap-1.5">
                <Star className="h-4 w-4 text-foreground" />
                <span className="text-base font-bold text-foreground">{studio.rating}</span>
                <span className="text-xs text-muted">рейтинг</span>
              </div>
              <div>
                <span className="text-base font-bold text-foreground">{studio.ratingsCount}</span>{" "}
                <span className="text-xs text-muted">оценки</span>
              </div>
              <div>
                <span className="text-base font-bold text-foreground">{studio.reviewsCount}</span>{" "}
                <span className="text-xs text-muted">отзыва</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="mt-7 flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:gap-6"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {studio.addressFull}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {studio.hours} · {studio.hoursNote}
              </span>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}
