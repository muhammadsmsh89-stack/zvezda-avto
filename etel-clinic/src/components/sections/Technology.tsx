"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { withBase } from "@/lib/basePath";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";
import { Button } from "@/components/ui/Button";
import { equipment, equipmentCategories } from "@/data/equipment";

const EASE = [0.16, 1, 0.3, 1] as const;
const PREVIEW_COUNT = 6;

export function Technology() {
  const [category, setCategory] = useState(equipmentCategories[0].id);
  const all = equipment.filter((e) => e.category === category);
  const items = all.slice(0, PREVIEW_COUNT);

  return (
    <section className="bg-grid-fine relative bg-shell py-24 sm:py-32">
      <Container wide className="relative">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <FadeUp>
            <p className="eyebrow">Технологии</p>
            <h2 className="font-display mt-4 max-w-[32rem] text-[2.5rem] leading-[1.02] text-ink text-balance sm:text-[3.25rem]">
              40 технологий. Один вопрос: что подходит именно вам?
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="max-w-[22rem] text-[1rem] leading-[1.6] font-medium text-ink-soft">
              Технология подбирается под задачу, а не наоборот. Переключайте
              направления — состав аппаратной базы меняется под задачу.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.15}>
          <div className="mt-11 flex flex-wrap gap-1.5 border-b border-ink/10 pb-6">
            {equipmentCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategory(cat.id)}
                className="relative px-5 py-2.5 text-[0.9375rem] font-medium transition-colors"
              >
                {category === cat.id && (
                  <motion.span
                    layoutId="tech-pill"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <span className={category === cat.id ? "relative z-10 text-shell" : "relative z-10 text-ink-soft hover:text-ink"}>
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </FadeUp>

        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3"
          >
            {items.map((e, i) => (
              <motion.div
                key={e.slug}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
              >
                <Link href={`/technology/${e.slug}/`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink/8 bg-paper">
                    <Image
                      src={withBase(e.photo)}
                      alt={e.name}
                      fill
                      sizes="(min-width: 640px) 22vw, 44vw"
                      className="object-contain p-7 transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink/0 text-ink-mute opacity-0 transition-all duration-300 group-hover:bg-ink group-hover:text-shell group-hover:opacity-100">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                  <p className="mt-3 text-[0.9375rem] font-medium text-ink group-hover:text-accent">{e.name}</p>
                  <p className="mt-1 line-clamp-1 text-[0.8125rem] text-ink-mute">{e.summary}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <FadeUp delay={0.2}>
          <div className="mt-12">
            <Button href="/technology/" variant="secondary" size="lg">
              Все технологии
            </Button>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
