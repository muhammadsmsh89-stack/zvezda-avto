"use client";

import { motion } from "framer-motion";
import { company } from "@/data/company";
import { heroMedia } from "@/data/media";
import { Container } from "@/components/ui/Container";
import { SceneFrame } from "@/components/media/SceneFrame";
import { track } from "@/lib/analytics";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-stone pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-40">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden="true" />

      <Container size="wide" className="relative">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono-tag text-xs uppercase tracking-[0.16em] text-muted"
          >
            {company.city} · Мебель на заказ
          </motion.p>
          <p className="font-mono-tag hidden text-xs uppercase tracking-[0.14em] text-muted sm:block">
            Лист 01/06 · М 1:20
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-balance font-display text-[clamp(2rem,3.6vw,2.75rem)] font-semibold leading-[1.12] text-ink"
            >
              Мебель по размерам вашей квартиры — не витрины
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-pretty mt-6 max-w-md text-[clamp(1rem,1.3vw,1.125rem)] leading-relaxed text-muted"
            >
              Альтаир проектирует и производит кухни, шкафы, гардеробные и мебель для спальни
              под конкретное помещение — от замера до монтажа, в Махачкале.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <a
                href="#calculator"
                onClick={() => track("hero_cta_click", { source: "hero" })}
                className="inline-flex items-center justify-center bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-ink/85"
              >
                Рассчитать проект
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 text-sm text-ink underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
              >
                Смотреть подход к проектированию
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <SceneFrame
              media={heroMedia}
              label="Кухня — фрагмент, вентканал в нише"
              scale="М 1:20"
              sheet="01/06"
              priority
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
