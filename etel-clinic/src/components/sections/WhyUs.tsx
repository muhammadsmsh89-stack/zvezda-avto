"use client";

import type { ReactNode, MouseEvent } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Stethoscope, Cpu, MapPin, Star } from "lucide-react";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { site, clinics } from "@/lib/site";

function SpotCard({ children, className }: { children: ReactNode; className?: string }) {
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const bg = useMotionTemplate`radial-gradient(360px circle at ${mx}% ${my}%, color-mix(in srgb, var(--color-accent-lift) 16%, transparent), transparent 72%)`;

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <div
      onMouseMove={onMove}
      className={clsx(
        "group relative overflow-hidden rounded-[1.75rem] border border-shell/10 bg-graphite-soft p-8",
        className,
      )}
    >
      <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: bg }} />
      <div className="relative flex h-full flex-col">{children}</div>
    </div>
  );
}

export function WhyUs() {
  return (
    <section className="bg-noise relative overflow-hidden bg-graphite py-24 text-shell sm:py-32">
      <div
        className="glow-blob top-[-15%] right-[10%] h-[38rem] w-[38rem] opacity-[0.35]"
        style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
        aria-hidden
      />
      <Container wide className="relative">
        <div className="max-w-[34rem]">
          <FadeUp>
            <p className="eyebrow-mute text-accent-lift">Почему «Этель»</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="font-display mt-4 text-[2.5rem] leading-[1.02] text-shell text-balance sm:text-[3.25rem]">
              Здесь не продают процедуру наугад
            </h2>
          </FadeUp>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:grid-rows-2">
          <FadeUp delay={0.1} className="col-span-2 row-span-2">
            <SpotCard className="h-full justify-between">
              <Stethoscope size={26} strokeWidth={1.75} className="text-accent-lift" />
              <div>
                <p className="font-display flex items-baseline text-[4rem] leading-none text-shell sm:text-[5.5rem]">
                  <AnimatedNumber value={19} />
                </p>
                <p className="mt-3 max-w-[16rem] text-[1.0625rem] leading-[1.5] font-medium text-shell/70">
                  лет медицинской косметологии — центр вырос из одного кабинета в сеть из трёх клиник.
                </p>
              </div>
            </SpotCard>
          </FadeUp>

          <FadeUp delay={0.16} className="col-span-2">
            <SpotCard>
              <div className="flex items-start justify-between">
                <Cpu size={24} strokeWidth={1.75} className="text-accent-lift" />
                <p className="font-display text-[2.25rem] leading-none text-shell">
                  <AnimatedNumber value={40} suffix="+" />
                </p>
              </div>
              <p className="mt-4 text-[0.9375rem] leading-[1.5] font-medium text-shell/70">
                единиц аппаратной базы. Технология подбирается под задачу пациента — не наоборот.
              </p>
            </SpotCard>
          </FadeUp>

          <FadeUp delay={0.22}>
            <SpotCard className="h-full">
              <MapPin size={22} strokeWidth={1.75} className="text-accent-lift" />
              <p className="font-display mt-4 text-[2.25rem] leading-none text-shell">
                <AnimatedNumber value={3} />
              </p>
              <p className="mt-2 text-[0.875rem] leading-[1.45] font-medium text-shell/70">
                клиники в Брянске, один стандарт приёма
              </p>
              <div className="mt-4 flex -space-x-1.5">
                {clinics.map((c) => (
                  <span key={c.slug} className="route-node route-node--lift" aria-hidden />
                ))}
              </div>
            </SpotCard>
          </FadeUp>

          <FadeUp delay={0.28}>
            <SpotCard className="h-full">
              <div className="flex gap-0.5 text-accent-lift" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} className="fill-accent-lift" strokeWidth={0} />
                ))}
              </div>
              <p className="font-display mt-4 text-[2.25rem] leading-none text-shell">
                <AnimatedNumber value={site.reviews.rating} decimals={1} />
              </p>
              <p className="mt-2 text-[0.875rem] leading-[1.45] font-medium text-shell/70">
                {site.reviews.countLabel} отзывов на Яндексе
              </p>
            </SpotCard>
          </FadeUp>
        </div>

        <FadeUp delay={0.34}>
          <div className="mt-4 rounded-[1.75rem] border border-shell/10 bg-gradient-to-r from-wine to-wine-soft p-8 sm:p-10">
            <p className="font-display max-w-[38rem] text-[1.5rem] leading-[1.25] text-shell sm:text-[1.875rem]">
              Сначала врач. Потом процедура. Протокол складывается на
              консультации: осмотр, разговор о задаче, и только затем — выбор
              технологии.
            </p>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
