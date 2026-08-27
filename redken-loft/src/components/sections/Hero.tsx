"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button, TextLink } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { FrameReveal, Marker, EASE } from "@/components/ui/Reveal";
import { Star, MapPin, WhatsAppIcon } from "@/components/ui/Icons";
import { studio, ctaLabels, rating } from "@/lib/site";
import { contacts, whatsappBookingLink } from "@/lib/contacts";
import { colorTechniques } from "@/lib/services";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-[-10%] h-[560px] w-[560px] rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
      />

      <div className="lg:hidden">
        <FrameReveal>
          <PhotoPlaceholder
            shotNumber="01 / HERO"
            label="Redken Loft"
            description="Крупный портрет клиентки после сложного окрашивания — реальная работа стилиста, не фотосток"
            tone="copper"
            subject="portrait"
            aspectClassName="aspect-[4/5]"
          />
        </FrameReveal>
      </div>

      <div className="relative flex min-h-0 flex-col lg:min-h-[94vh]">
        <div className="absolute right-0 hidden w-[50%] lg:top-0 lg:bottom-0 lg:block">
          <FrameReveal className="h-full w-full" delay={0.1}>
            <PhotoPlaceholder
              shotNumber="01 / HERO"
              label="Redken Loft"
              description="Крупный портрет клиентки после сложного окрашивания — реальная работа стилиста, не фотосток"
              tone="copper"
              subject="portrait"
              aspectClassName="h-full"
              className="h-full"
            />
          </FrameReveal>
          <div className="absolute inset-y-0 left-0 w-[26%] bg-gradient-to-r from-background via-background/55 to-transparent" />

          <Marker delay={0.85} className="absolute bottom-8 right-8 xl:bottom-12 xl:right-12">
            <div className="rounded-2xl border border-background/15 bg-background/40 px-5 py-4 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 text-accent" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-background">{rating.yandex.value}</span>
              </div>
              <p className="mt-1.5 text-xs uppercase tracking-[0.1em] text-background/70">
                {rating.yandex.reviewsCount} отзывов · Яндекс Карты
              </p>
            </div>
          </Marker>
        </div>

        <Container className="relative z-10 flex flex-1 flex-col justify-center py-14 lg:py-28">
          <div className="max-w-xl lg:max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex flex-wrap items-center gap-2"
            >
              {colorTechniques.map((t) => (
                <span
                  key={t.name}
                  className="rounded-full border border-border-strong px-3 py-1 text-xs font-semibold uppercase tracking-[0.06em] text-foreground/75"
                >
                  {t.name}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.14, ease: EASE }}
              className="mt-6 text-pretty font-display text-[2.3rem] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[2.85rem] xl:text-[3.3rem]"
            >
              Цвет и форма,
              <br />
              которые <span className="whitespace-nowrap text-accent">действительно</span>
              <br />
              вам подходят
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
              className="mt-6 max-w-sm text-pretty text-base leading-relaxed text-foreground/70"
            >
              Авторские стрижки, сложные окрашивания и профессиональный уход в центре
              Краснодара. Сначала изучаем волосы, стиль и пожелания — затем создаём
              индивидуальный образ.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-3"
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
              transition={{ duration: 0.7, delay: 0.56 }}
              className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted"
            >
              <span className="flex items-center gap-1.5 font-semibold text-foreground">
                <Star className="h-4 w-4 text-accent" />
                {rating.yandex.value} на Яндексе
              </span>
              <span className="h-1 w-1 rounded-full bg-border-strong" />
              <span>{rating.yandex.reviewsCount} отзывов</span>
              <span className="h-1 w-1 rounded-full bg-border-strong" />
              <span>{studio.yearsNote}</span>
              <span className="h-1 w-1 rounded-full bg-border-strong" />
              <span>Премиальные материалы</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.68 }}
              className="mt-6"
            >
              <TextLink href={contacts.yandexUrl} className="text-sm">
                <MapPin className="mr-1 inline h-3.5 w-3.5" />
                {contacts.city} · {contacts.address}
              </TextLink>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}
