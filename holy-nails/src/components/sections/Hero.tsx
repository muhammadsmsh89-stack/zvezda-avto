"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button, TextLink } from "@/components/ui/Button";
import { RealPhoto } from "@/components/ui/RealPhoto";
import { FrameReveal, Marker, EASE } from "@/components/ui/Reveal";
import { ctaLabels } from "@/lib/site";
import { contacts, whatsappBookingLink } from "@/lib/contacts";
import { directions } from "@/lib/services";
import { realAssets } from "@/lib/realAssets";
import { MapPin } from "@/components/ui/Icons";

export function Hero() {
  return (
    <section className="relative bg-background">
      <Container className="relative grid grid-cols-1 gap-10 pb-12 pt-8 lg:grid-cols-12 lg:gap-6 lg:pb-16 lg:pt-14">
        <div className="order-1 lg:order-1 lg:col-span-7 lg:pt-6 xl:col-span-6">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="text-pretty text-[2.6rem] leading-[1.05] text-foreground sm:text-6xl lg:text-[3.4rem] xl:text-[3.9rem]"
          >
            Забота о вас
            <br />
            в каждой детали
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
            className="mt-6 max-w-md text-pretty text-base leading-relaxed text-foreground/70"
          >
            Ногтевая студия в центре Тулы: маникюр, педикюр, наращивание и дизайн — от нюда до самого
            смелого маникюра из Pinterest.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted"
          >
            {directions.slice(0, 4).map((d) => d.title).join(" · ")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: EASE }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button size="lg" href={contacts.yclientsUrl}>
              {ctaLabels.primary}
            </Button>
            <Button size="lg" variant="secondary" href={whatsappBookingLink()}>
              {ctaLabels.whatsapp}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.46 }}
            className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3"
          >
            <TextLink href="/works">{ctaLabels.works}</TextLink>
            <span className="flex items-center gap-1.5 text-sm text-muted">
              <MapPin className="h-4 w-4" />
              {contacts.city} · {contacts.address}
            </span>
          </motion.div>
        </div>

        <div className="order-2 lg:order-2 lg:col-span-5 xl:col-span-6">
          <div className="relative mx-auto max-w-sm lg:ml-auto lg:mr-0 lg:mt-2 lg:max-w-none">
            <FrameReveal className="aspect-[4/5] w-full lg:aspect-[3/4] lg:w-[88%]" delay={0.1}>
              <RealPhoto
                src={realAssets.workMilky.src}
                width={realAssets.workMilky.width}
                height={realAssets.workMilky.height}
                alt="Маникюр Holy Nails — молочный дизайн с блёстками"
                label="Holy Nails, Тула"
                objectPosition="center 38%"
                priority
                sizes="(min-width: 1024px) 46vw, 90vw"
                aspectClassName="h-full"
              />
            </FrameReveal>

            <Marker delay={0.55} className="absolute right-0 top-2 rounded-lg border border-border-strong bg-surface/95 px-4 py-3 shadow-[0_18px_40px_-24px_rgba(23,20,14,0.35)] backdrop-blur sm:right-4 lg:right-8">
              <p className="text-xs uppercase tracking-[0.12em] text-muted">Рейтинг студии</p>
              <p className="mt-1 text-xl font-semibold tracking-tight text-foreground">5.0 · 186 отзывов</p>
            </Marker>
          </div>
        </div>
      </Container>
    </section>
  );
}
