"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { processSteps } from "@/data/process";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SceneFrame } from "@/components/media/SceneFrame";
import type { MediaAsset } from "@/data/media";

export function Process() {
  const [active, setActive] = useState(0);
  const activeStep = processSteps[active];
  const activeMedia: MediaAsset = { type: "blueprint", illustrationId: activeStep.illustrationId };

  return (
    <section id="process" className="bg-ink-2 py-20 text-paper sm:py-28">
      <Container size="wide">
        <Reveal>
          <SectionHeading
            index="§03"
            eyebrow="Процесс"
            title="Как устроена работа"
            lead="Общий порядок работы над проектом. Точные сроки по каждому этапу уточняются на замере."
            tone="light"
            className="mb-16"
          />
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <ol className="relative border-l border-paper/15 sm:ml-4 lg:col-span-7">
            {processSteps.map((step, i) => (
              <motion.li
                key={step.index}
                className="relative pb-12 pl-8 last:pb-0 sm:pl-12"
                onViewportEnter={() => setActive(i)}
                viewport={{ margin: "-45% 0px -45% 0px" }}
              >
                <span
                  className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-accent transition-opacity"
                  style={{ opacity: active === i ? 1 : 0.35 }}
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                  <span
                    className="font-mono-tag text-sm transition-colors"
                    style={{ color: active === i ? "var(--accent)" : "rgba(248,246,240,0.4)" }}
                  >
                    {step.index}
                  </span>
                  <h3
                    className="font-display text-xl font-medium transition-colors sm:w-48 sm:shrink-0"
                    style={{ color: active === i ? "var(--paper)" : "rgba(248,246,240,0.5)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-pretty max-w-md text-[15px] leading-relaxed text-paper/60">{step.description}</p>
                </div>
              </motion.li>
            ))}
          </ol>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <SceneFrame media={activeMedia} label={activeStep.title} tone="dark" sheet={`0${active + 1}/06`} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
