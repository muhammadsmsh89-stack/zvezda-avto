"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { history } from "@/data/history";

export function History() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start 0.75", "end 0.4"] });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-noise relative overflow-hidden bg-wine py-24 text-shell sm:py-32">
      <Container wide>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <FadeUp>
              <p className="eyebrow-mute text-accent-lift">С 2007 года</p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="font-display mt-4 text-[6rem] leading-[0.9] text-shell sm:text-[8rem]">
                <AnimatedNumber value={19} />
              </h2>
              <p className="font-display mt-2 text-[1.75rem] leading-[1.1] text-shell/85 sm:text-[2.25rem]">
                лет рядом с вами
              </p>
            </FadeUp>
          </div>

          <div ref={trackRef} className="relative pl-8 sm:pl-10">
            <div className="absolute top-1 bottom-1 left-0 w-px bg-shell/12" aria-hidden />
            <motion.div
              className="absolute top-1 left-0 w-px bg-gradient-to-b from-accent-lift to-accent"
              style={{ height: fillHeight }}
              aria-hidden
            />

            <ol className="space-y-14">
              {history.map((h, i) => (
                <motion.li
                  key={h.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  <span className="route-node route-node--lift absolute top-[0.4rem] -left-[2.15rem] sm:-left-[2.65rem]" aria-hidden />
                  <p className="font-display text-[1.75rem] text-accent-lift">{h.year}</p>
                  <h3 className="mt-2 text-[1.1875rem] font-semibold text-shell">{h.title}</h3>
                  <p className="mt-2 max-w-[34rem] text-[1rem] leading-[1.6] text-shell/65">{h.body}</p>
                  {h.needsVerification && (
                    <p className="mt-2 text-[0.75rem] text-shell/40 italic">Требует подтверждения клиникой</p>
                  )}
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
