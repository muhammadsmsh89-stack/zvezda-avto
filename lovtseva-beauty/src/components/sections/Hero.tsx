"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button, TextLink } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { FrameReveal, Marker, EASE } from "@/components/ui/Reveal";
import { ctaLabels, rating } from "@/lib/site";
import { contacts, whatsappBookingLink } from "@/lib/contacts";
import { MapPin } from "@/components/ui/Icons";

export function Hero() {
  return (
    <section className="relative bg-background">
      <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] lg:hidden">
        <FrameReveal className="h-full w-full">
          <PhotoPlaceholder
            shotNumber="01 / HERO"
            label="Центр красоты Натальи Ловцевой"
            description="Интерьер центра красоты Натальи Ловцевой"
            tone="espresso"
            subject="wide"
            aspectClassName="h-full"
          />
        </FrameReveal>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-deep/70 to-transparent" />
      </div>

      <div className="relative flex min-h-0 flex-col lg:min-h-[86vh]">
        <div className="absolute right-0 hidden w-[52%] lg:top-0 lg:bottom-0 lg:block">
          <FrameReveal className="h-full w-full" delay={0.1}>
            <PhotoPlaceholder
              shotNumber="01 / HERO"
              label="Центр красоты Натальи Ловцевой"
              description="Интерьер центра красоты Натальи Ловцевой"
              tone="espresso"
              subject="wide"
              aspectClassName="h-full"
            />
          </FrameReveal>
          <div className="absolute inset-y-0 left-0 w-[22%] bg-gradient-to-r from-background via-background/40 to-transparent" />

          <Marker delay={0.9} className="absolute bottom-10 right-8 text-right xl:bottom-14 xl:right-14">
            <p className="text-xs uppercase tracking-[0.14em] text-background/80">Рейтинг центра</p>
            <p className="mt-1.5 text-2xl font-semibold tracking-tight text-background">
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
              className="text-pretty text-[2.75rem] leading-[1.04] text-foreground sm:text-6xl lg:text-[3.6rem] xl:text-[4rem]"
            >
              Центр красоты
              <br />
              <span className="text-accent">Натальи Ловцевой</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
              className="mt-6 max-w-sm text-pretty text-base leading-relaxed text-foreground/70"
            >
              Многопрофильный центр красоты в Рязани — команда специалистов разных направлений в одном месте.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
              className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted"
            >
              Волосы · Ногти · Косметология · Лазер · Перманент — и ещё 4 направления
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button size="lg" href={whatsappBookingLink()}>
                {ctaLabels.primary}
              </Button>
              <Button size="lg" variant="secondary" href="/services">
                {ctaLabels.chooseService}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.46 }}
              className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3"
            >
              <TextLink href={whatsappBookingLink()}>{ctaLabels.whatsapp}</TextLink>
              <span className="flex items-center gap-1.5 text-sm text-muted">
                <MapPin className="h-4 w-4" />
                {contacts.city} · {contacts.address}
              </span>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}
