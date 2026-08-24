"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { withBase } from "@/lib/basePath";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";
import { concernGroups, concernsByGroup } from "@/data/concerns";
import { equipment } from "@/data/equipment";
import { findDoctor } from "@/data/doctors";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Сигнатурный блок сайта: пациент выбирает задачу, а не аппарат. При наведении
 * карточка раскрывает реальный маршрут — технологии и врача с совпадающей
 * специализацией (см. комментарий в data/concerns.ts).
 */
export function ConcernNavigator() {
  const [group, setGroup] = useState(concernGroups[0].id);
  const [hovered, setHovered] = useState<string | null>(null);
  const items = concernsByGroup(group);

  return (
    <section className="relative overflow-hidden bg-shell py-24 sm:py-32">
      <div
        className="glow-blob animate-blob-slow top-[10%] left-[-10%] h-[34rem] w-[34rem] opacity-[0.22]"
        style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
        aria-hidden
      />
      <Container wide className="relative">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <FadeUp>
            <p className="eyebrow">Маршрут пациента</p>
            <h2 className="font-display mt-4 max-w-[30rem] text-[2.5rem] leading-[1.02] text-ink text-balance sm:text-[3.25rem]">
              Что вас беспокоит?
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="max-w-[24rem] text-[1.0625rem] leading-[1.6] font-medium text-ink-soft">
              Мы не просим выбрать процедуру. Выберите задачу — дальше врач на
              консультации подберёт технологию и протокол под неё.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.15}>
          <div className="mt-11 flex flex-wrap gap-1.5 border-b border-ink/10 pb-6" role="tablist" aria-label="Группы задач">
            {concernGroups.map((g) => (
              <button
                key={g.id}
                type="button"
                role="tab"
                aria-selected={group === g.id}
                onClick={() => setGroup(g.id)}
                className="relative px-5 py-2.5 text-[0.9375rem] font-medium transition-colors"
              >
                {group === g.id && (
                  <motion.span
                    layoutId="concern-pill"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <span className={group === g.id ? "relative z-10 text-shell" : "relative z-10 text-ink-soft hover:text-ink"}>
                  {g.label}
                </span>
              </button>
            ))}
          </div>
        </FadeUp>

        <AnimatePresence mode="wait">
          <motion.div
            key={group}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {items.map((c, i) => {
              const techs = equipment.filter((e) => c.equipmentSlugs.includes(e.slug));
              const doctor = findDoctor(c.doctorSlug);
              const isHovered = hovered === c.slug;
              return (
                <motion.div
                  key={c.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: i * 0.06, ease: EASE }}
                  onMouseEnter={() => setHovered(c.slug)}
                  onMouseLeave={() => setHovered(null)}
                  className="group relative"
                >
                  <Link
                    href={`/concerns/${c.slug}/`}
                    className="relative flex h-full min-h-[15rem] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-ink/8 bg-paper p-7 shadow-[0_2px_0_0_rgba(34,26,23,0.04)] transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/25 hover:shadow-[0_28px_60px_-24px_rgba(34,26,23,0.28)]"
                  >
                    {/* Фоновое свечение при наведении */}
                    <div
                      className="pointer-events-none absolute -inset-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(320px circle at 85% -10%, color-mix(in srgb, var(--color-accent) 14%, transparent), transparent 70%)",
                      }}
                    />

                    <div className="relative">
                      <h3 className="font-display text-[1.5rem] text-ink">{c.label}</h3>
                      <p className="mt-2 text-[0.9375rem] leading-[1.55] text-ink-mute">{c.description}</p>
                    </div>

                    <div className="relative mt-6">
                      <AnimatePresence mode="wait">
                        {isHovered && (techs.length > 0 || doctor) ? (
                          <motion.div
                            key="detail"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: EASE }}
                            className="overflow-hidden"
                          >
                            {techs.length > 0 && (
                              <p className="mb-2.5 text-[0.8125rem] leading-[1.5] text-ink-soft">
                                {techs.map((t) => t.name).join(" · ")}
                              </p>
                            )}
                            {doctor && (
                              <p className="text-[0.8125rem] text-ink-mute">
                                Врач: <span className="text-ink">{doctor.name.split(" ").slice(0, 2).join(" ")}</span>
                              </p>
                            )}
                          </motion.div>
                        ) : null}
                      </AnimatePresence>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-2.5 text-[0.8125rem] text-ink-mute">
                          <span className="route-node" aria-hidden />
                          <span className="transition-colors group-hover:text-accent">
                            {techs.length > 0 ? `${techs.length} технологии подходят` : "Консультация врача"}
                          </span>
                        </div>
                        <ArrowUpRight
                          size={18}
                          strokeWidth={2}
                          className="text-ink-mute transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                        />
                      </div>
                    </div>
                  </Link>

                  {doctor && (
                    <div className="pointer-events-none absolute top-4 right-4 h-9 w-9 overflow-hidden rounded-full border-2 border-paper opacity-0 shadow-md transition-opacity duration-500 group-hover:opacity-100">
                      <Image src={withBase(doctor.photo)} alt="" fill sizes="36px" className="object-cover" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
