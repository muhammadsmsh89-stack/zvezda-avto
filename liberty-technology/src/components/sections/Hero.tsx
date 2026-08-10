"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { company } from "@/data/company";
import { heroMedia } from "@/data/media";
import { SceneArt } from "@/components/media/SceneArt";
import { Container } from "@/components/ui/Container";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { buttonClass } from "@/components/ui/Button";
import { IconArrowDown } from "@/components/icons";

const METADATA = ["DETAILING", "PROTECTION", "BODYWORK", "TUNING"];

const ease = [0.16, 1, 0.3, 1] as const;

// Правый прямоугольник — не декоративная рамка, а спроектированный слот под кадр
// автомобиля Liberty: crop-mark углы задают композицию заранее, чтобы фотография
// легла в неё без переверстки (см. DESIGN_DIRECTION.md и public/ASSETS_NEEDED.md).
function FrameMarks() {
  return (
    <div className="pointer-events-none absolute inset-y-[24%] right-[6%] hidden w-[38%] border border-paper/[0.06] sm:block lg:right-[8%] lg:w-[34%]">
      <span className="absolute -left-px -top-px h-8 w-8 border-l border-t border-accent-soft/80" />
      <span className="absolute -right-px -top-px h-8 w-8 border-r border-t border-accent-soft/80" />
      <span className="absolute -bottom-px -left-px h-8 w-8 border-b border-l border-accent-soft/80" />
      <span className="absolute -bottom-px -right-px h-8 w-8 border-b border-r border-accent-soft/80" />
      <span className="font-mono-tag absolute -top-8 left-0 text-[11px] uppercase tracking-[0.14em] text-paper/45">
        {company.name} — {company.city}
      </span>
      <span className="font-mono-tag absolute -bottom-8 right-0 text-[11px] text-paper/45">01</span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-void">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease }}
      >
        <div className={clsx("absolute inset-0", `scene-${heroMedia.type === "scene" ? heroMedia.variant : "sheen"}`)} />
        {heroMedia.type === "scene" ? (
          <SceneArt variant={heroMedia.variant} className="absolute inset-0 h-full w-full text-paper" />
        ) : null}
        <div className="absolute inset-0 bg-noise" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-void/75 via-void/15 to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <FrameMarks />
      </motion.div>

      <Container size="wide" className="relative flex min-h-[100svh] flex-col pb-10 pt-28 sm:pt-32">
        <div className="flex flex-1 flex-col justify-center py-10">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="font-mono-tag mb-5 text-xs uppercase tracking-[0.2em] text-accent-soft sm:text-sm"
          >
            Automotive Detailing &amp; Restoration
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease }}
            className="text-balance max-w-xl font-display text-[clamp(2.25rem,5.2vw,3.75rem)] font-bold leading-[1.1] text-paper"
          >
            Детейлинг, восстановление и индивидуализация автомобилей
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease }}
            className="font-mono-tag mt-6 text-sm uppercase tracking-[0.14em] text-paper/55"
          >
            {company.city}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <WhatsAppLink
              source="hero"
              className={buttonClass({ variant: "primary", tone: "dark", size: "lg" })}
            >
              Обсудить автомобиль
            </WhatsAppLink>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 text-sm text-paper/75 transition-colors hover:text-paper"
            >
              Смотреть проекты
              <IconArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="relative border-t border-line-dark"
        >
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 py-4">
            {METADATA.map((label, i) => (
              <span key={label} className="flex items-center gap-x-8">
                <span className="font-mono-tag text-[11px] uppercase tracking-[0.18em] text-paper/40">
                  {label}
                </span>
                {i < METADATA.length - 1 ? <span className="h-1 w-1 rounded-full bg-paper/20 sm:hidden" /> : null}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
