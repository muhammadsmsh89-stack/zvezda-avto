"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight, ArrowLeft } from "lucide-react";
import { withBase } from "@/lib/basePath";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";
import { Button } from "@/components/ui/Button";
import { doctors } from "@/data/doctors";

const EASE = [0.16, 1, 0.3, 1] as const;

const FEATURED_SLUGS = [
  "aleshina-ekaterina-leonidovna",
  "cevmenkova-irina-alekseevna",
  "leonova-anastasiya-evgenevna",
  "demurcheva-elena-borisovna",
  "danchina-karina-alekseevna",
  "remez-olga-aleksandrovna",
];

export function FeaturedDoctors() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start 0.8", "start 0.2"] });
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.15, 0.55]);

  const featured = FEATURED_SLUGS.map((slug) => doctors.find((d) => d.slug === slug)).filter(
    (d): d is NonNullable<typeof d> => Boolean(d),
  );
  const [chief, ...rest] = featured;
  if (!chief) return null;

  function scrollBy(dir: 1 | -1) {
    scrollerRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  }

  return (
    <section className="bg-noise relative overflow-hidden bg-wine py-24 text-shell sm:py-32">
      <Container wide className="relative">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <FadeUp>
            <p className="eyebrow-mute text-accent-lift">Команда</p>
            <h2 className="font-display mt-4 max-w-[30rem] text-[2.5rem] leading-[1.02] text-shell text-balance sm:text-[3.25rem]">
              Врач — главный элемент доверия
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <Button href="/doctors/" variant="dark">
              Вся команда
            </Button>
          </FadeUp>
        </div>

        <div ref={heroRef} className="relative mt-14">
          <motion.div
            className="glow-blob absolute top-1/2 left-[18%] h-[26rem] w-[26rem] -translate-y-1/2"
            style={{
              opacity: glowOpacity,
              background: "radial-gradient(circle, var(--color-accent-bright) 0%, transparent 70%)",
            }}
            aria-hidden
          />
          <FadeUp>
            <Link href={`/doctors/${chief.slug}/`} className="group relative grid gap-8 sm:grid-cols-[16rem_1fr] lg:gap-14">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-graphite-soft sm:w-64">
                <Image
                  src={withBase(chief.photo)}
                  alt={chief.name}
                  fill
                  sizes="(min-width: 640px) 16rem, 60vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine/80 via-transparent to-transparent opacity-60" />
              </div>
              <div className="relative flex flex-col justify-center">
                <p className="eyebrow-mute text-accent-lift">{chief.role}</p>
                <h3 className="font-display mt-3 text-[2.25rem] leading-[1.05] text-shell sm:text-[2.75rem]">{chief.name}</h3>
                {chief.experience && (
                  <p className="mt-2 text-[1rem] font-medium text-shell/60">Стаж {chief.experience}</p>
                )}
                {chief.specialization.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {chief.specialization.slice(0, 4).map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-shell/15 px-3.5 py-1.5 text-[0.8125rem] text-shell/75 transition-colors group-hover:border-accent-lift/40"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
                <span className="mt-6 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-shell/60 transition-colors group-hover:text-accent-lift">
                  Профиль врача
                  <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </FadeUp>
        </div>

        {/* Горизонтальная лента остальной команды */}
        <FadeUp delay={0.12}>
          <div className="mt-14 flex items-center justify-between">
            <h3 className="text-[1rem] font-medium text-shell/50">Ещё врачи центра</h3>
            <div className="hidden gap-2 sm:flex">
              <button
                type="button"
                onClick={() => scrollBy(-1)}
                aria-label="Прокрутить влево"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-shell/20 text-shell/70 transition-colors hover:border-shell hover:text-shell"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                aria-label="Прокрутить вправо"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-shell/20 text-shell/70 transition-colors hover:border-shell hover:text-shell"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </FadeUp>

        <div
          ref={scrollerRef}
          className="mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {rest.map((d, i) => (
            <motion.div
              key={d.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
              className="w-[13.5rem] shrink-0 snap-start sm:w-[15rem]"
            >
              <Link href={`/doctors/${d.slug}/`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.25rem] bg-graphite-soft">
                  <Image
                    src={withBase(d.photo)}
                    alt={d.name}
                    fill
                    sizes="240px"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wine/90 via-wine/0 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-[0.9375rem] font-semibold text-shell">{d.name}</p>
                    <p className="mt-0.5 text-[0.8125rem] text-shell/60">
                      {d.experience ? `Стаж ${d.experience}` : d.role}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
