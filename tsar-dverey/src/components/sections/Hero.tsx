"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { quizHref } from "@/lib/content";
import { EASE_EDITORIAL } from "@/lib/motion";
import { DoorScene } from "@/components/art/DoorScene";
import { PhotoSlot } from "@/components/art/PhotoSlot";
import { track } from "@/lib/analytics";

// Hero headline — сравнение вариантов (PHASE 5 брифа):
// 1. «Двери, которые становятся частью интерьера» — выбран: явно называет продукт (двери),
//    несёт эмоциональную ценность (интерьер), без рекламных превосходных степеней, понятен за 5 сек.
// 2. «Двери для интерьера, а не только для проёма» — отклонён: «проём» звучит технически, снижает
//    мгновенную понятность.
// 3. «Дверь — это первое, что видно в комнате» — отклонён: инсайт интересный, но не сразу понятно,
//    что это магазин/шоурум, а не блог о дизайне.
// 4. «Двери Махачкалы, подобранные под ваш интерьер» — отклонён как заголовок: максимально ясен,
//    но плоский, без эмоции; используется как географическая подсказка в eyebrow вместо этого.
// 5. «Найдите дверь, которая будто всегда здесь стояла» — отклонён: красиво, но слишком косвенно
//    для первого экрана — оставлен как возможная фраза для раздела «Интерьеры».
//
// Eyebrow — сравнение вариантов (Iteration 2):
// 1. «Интерьерные двери · Махачкала» — выбран: позиционирует категорию товара как дизайнерскую
//    (не просто «двери»), сохраняет локальность, короче и увереннее по ритму, чем альтернативы.
// 2. «Двери для интерьера · Махачкала» — отклонён: грамматически тяжелее, дублирует смысл H1.
// 3. Просто «Махачкала» — отклонён: H1 и так начинается со слова «Двери», но eyebrow без категории
//    теряет шанс сразу зафиксировать премиальное позиционирование «интерьерные», а не «стройтовары».

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="container-wide grid items-stretch gap-10 py-10 sm:py-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-4 lg:py-0">
        <div className="flex flex-col justify-center lg:min-h-[86vh] lg:py-16">
          <motion.p
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
            className="text-[13px] uppercase tracking-[0.16em] text-muted"
          >
            Интерьерные двери · Махачкала
          </motion.p>

          <motion.h1
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: EASE_EDITORIAL }}
            className="text-balance mt-4 text-[38px] leading-[1.1] sm:text-[46px] lg:text-[58px]"
          >
            Двери, которые становятся частью интерьера
          </motion.h1>

          <motion.p
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: EASE_EDITORIAL }}
            className="mt-5 max-w-md text-[17px] leading-relaxed text-muted sm:text-[18px]"
          >
            Подбираем модель под ваш интерьер, приезжаем на замер и устанавливаем — от выбора до готовой двери на месте.
          </motion.p>

          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: EASE_EDITORIAL }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              href={quizHref}
              onClick={() => track("hero_cta_click", { location: "hero_primary" })}
              className="inline-flex items-center justify-center rounded-[3px] bg-foreground px-7 py-4 text-[16px] text-background transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Подобрать двери
            </Link>
            <Link
              href="/interiors"
              onClick={() => track("interior_open", { location: "hero_secondary" })}
              className="inline-flex items-center justify-center rounded-[3px] border border-border-strong px-7 py-4 text-[16px] text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Смотреть интерьеры
            </Link>
          </motion.div>

          <motion.p
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-8 text-[14px] tracking-[0.02em] text-muted"
          >
            Махачкала · Замер · Монтаж
          </motion.p>
        </div>

        <div className="relative h-[52vh] sm:h-[60vh] lg:h-auto lg:min-h-[86vh]">
          <motion.div
            initial={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE_EDITORIAL }}
            className="absolute inset-0"
          >
            {/* REAL_HERO_IMAGE_REQUIRED — как только клиент предоставит фото реального интерьера,
                достаточно передать src в PhotoSlot: слот, object-position и fallback уже готовы. */}
            <PhotoSlot
              id="REAL_HERO_IMAGE_REQUIRED"
              alt="Остеклённая межкомнатная дверь тёплого айвори с латунной фурнитурой в интерьере — «Царь Дверей», Махачкала"
              objectPositionClassName="object-[60%_35%] lg:object-[70%_45%]"
              className="h-full w-full"
              priority
              fallback={<DoorScene className="h-full w-full" />}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
