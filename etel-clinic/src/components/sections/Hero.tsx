"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Star, Sparkles } from "lucide-react";
import { withBase } from "@/lib/basePath";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WordsReveal, FadeUp } from "@/components/ui/Motion";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { site } from "@/lib/site";
import { findDoctor } from "@/data/doctors";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const chief = findDoctor("aleshina-ekaterina-leonidovna");

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-shell pt-[7.5rem] pb-16 sm:pt-[8.5rem] sm:pb-24">
      {/* Живой фон: сетка + свечения + шум */}
      <motion.div className="absolute inset-0" style={{ y: bgY }} aria-hidden>
        <div className="bg-grid-fine absolute inset-0" />
        <div
          className="glow-blob animate-blob top-[-10%] right-[-8%] h-[42rem] w-[42rem] opacity-[0.45]"
          style={{ background: "radial-gradient(circle, var(--color-accent-bright) 0%, transparent 70%)" }}
        />
        <div
          className="glow-blob animate-blob-slow top-[20%] left-[-14%] h-[30rem] w-[30rem] opacity-[0.3]"
          style={{ background: "radial-gradient(circle, var(--color-accent-lift) 0%, transparent 70%)" }}
        />
      </motion.div>
      <div className="bg-noise absolute inset-0" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-shell" aria-hidden />

      <Container wide className="relative">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Текст */}
          <div className="flex flex-col justify-center">
            <FadeUp delay={0.05}>
              <p className="eyebrow flex items-center gap-2">
                <Sparkles size={13} strokeWidth={2.25} />
                Медицинская косметология · Брянск
              </p>
            </FadeUp>

            <h1 className="font-display mt-5 text-[2.9rem] leading-[1.02] text-ink sm:text-[4rem] lg:text-[4.75rem]">
              <WordsReveal text="Красота, которой" delay={0.15} />
              <br />
              <span className="text-accent">
                <WordsReveal text="доверяют 19 лет" delay={0.4} wordClassName="italic font-accent font-normal" />
              </span>
            </h1>

            <FadeUp delay={0.55}>
              <p className="mt-7 max-w-[32rem] text-[1.1875rem] leading-[1.6] font-medium text-ink-soft text-pretty">
                Три клиники медицинской косметологии в Брянске. Сначала
                консультация врача — потом технология, а не наоборот.
              </p>
            </FadeUp>

            <FadeUp delay={0.68}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button href="/concerns/" size="lg">
                  Подобрать решение
                </Button>
                <Button href="/doctors/" variant="secondary" size="lg">
                  Смотреть врачей
                </Button>
              </div>
            </FadeUp>

            <FadeUp delay={0.8}>
              <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-ink/10 pt-8 sm:grid-cols-4">
                <div>
                  <dt className="font-display flex items-baseline text-[2rem] text-ink">
                    <AnimatedNumber value={19} suffix=" лет" />
                  </dt>
                  <dd className="mt-1 text-[0.8125rem] leading-tight text-ink-mute">работы центра</dd>
                </div>
                <div>
                  <dt className="font-display text-[2rem] text-ink">
                    <AnimatedNumber value={3} />
                  </dt>
                  <dd className="mt-1 text-[0.8125rem] leading-tight text-ink-mute">клиники в Брянске</dd>
                </div>
                <div>
                  <dt className="font-display flex items-center gap-1.5 text-[2rem] text-ink">
                    <AnimatedNumber value={site.reviews.rating} decimals={1} />
                    <Star size={16} className="fill-accent text-accent" />
                  </dt>
                  <dd className="mt-1 text-[0.8125rem] leading-tight text-ink-mute">
                    {site.reviews.countLabel} отзывов на Яндексе
                  </dd>
                </div>
                <div>
                  <dt className="font-display flex items-center gap-1.5 text-[2rem] text-ink">
                    <ShieldCheck size={22} strokeWidth={2} className="text-accent" />
                  </dt>
                  <dd className="mt-1 text-[0.8125rem] leading-tight text-ink-mute">медицинская лицензия</dd>
                </div>
              </dl>
            </FadeUp>
          </div>

          {/* Визуальный якорь: интерьер клиники + floating cards */}
          <motion.div
            className="relative"
            style={{ y: imgY, opacity: fade }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-stone shadow-[0_40px_90px_-30px_rgba(28,17,15,0.45)] sm:aspect-[3/4] lg:aspect-[4/5]">
              <Image
                src={withBase("/clinic/about-general.webp")}
                alt="Стойка ресепшена клиники «Этель»"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/35 via-transparent to-transparent" />
            </div>

            <motion.div
              className="absolute -top-5 -right-4 flex items-center gap-3 rounded-2xl border border-white/40 bg-paper/90 p-4 shadow-[0_20px_50px_-18px_rgba(28,17,15,0.4)] backdrop-blur-md sm:-top-7 sm:-right-7"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.9 }}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Star size={18} className="fill-accent" strokeWidth={0} />
              </div>
              <div>
                <p className="font-display text-[1.25rem] leading-none text-ink">{site.reviews.rating.toFixed(1)}</p>
                <p className="mt-1 text-[0.75rem] text-ink-mute">{site.reviews.countLabel} отзывов</p>
              </div>
            </motion.div>

            {chief && (
              <motion.div
                className="absolute -bottom-7 -left-5 flex w-[14rem] items-center gap-3 rounded-2xl border border-white/40 bg-paper/90 p-3.5 shadow-[0_24px_60px_-20px_rgba(28,17,15,0.45)] backdrop-blur-md sm:-bottom-8 sm:-left-8 sm:w-[16.5rem]"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 1.05 }}
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-20">
                  <Image src={withBase(chief.photo)} alt={chief.name} fill sizes="80px" className="object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-[0.9375rem] font-semibold text-ink">{chief.name}</p>
                  <p className="mt-0.5 text-[0.8125rem] text-ink-mute">
                    {chief.role}{chief.experience ? ` · ${chief.experience}` : ""}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
