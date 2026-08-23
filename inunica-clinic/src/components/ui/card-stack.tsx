"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import { withBase } from "@/lib/basePath";

/**
 * Веерная стопка карточек с драгом/свайпом.
 *
 * Адаптация под сайт клиники — сильно урезанная версия исходного
 * card-stack.tsx: убраны неиспользуемые режимы (autoplay, кастомный
 * renderCard, внешняя иконка-ссылка lucide) — этот компонент используется
 * ровно в одном месте, тащить на сайт целую библиотеку иконок ради одной
 * стрелки незачем, остальной сайт везде рисует значки инлайн-SVG.
 *
 * Четыре вещи, которых не было в исходнике и которые здесь обязательны:
 * 1. Размер карточек считается от ширины экрана, а не фиксирован в пикселях —
 *    иначе на 375px карточка 520px просто не поместится.
 * 2. Каждая карточка — настоящий <a href>, а не <div onClick> или <button>:
 *    в исходнике фоновые карточки кликались как div, а переход по активной
 *    шёл через JS-роутер. В статической выгрузке (output: "export") это
 *    значит, что в HTML остаётся только одна рабочая ссылка на направление
 *    (та, что активна при первой отрисовке) — пять остальных пропадают и
 *    для поисковика, и для пользователя без JS. Здесь у всех шести — свой
 *    настоящий href, JS лишь перехватывает клик по неактивной карточке,
 *    чтобы вынести её вперёд вместо перехода.
 * 3. Клик по активной карточке ведёт по ссылке, но только если это
 *    действительно клик, а не отпущенный свайп — framer-motion сам не
 *    гасит click после drag.
 * 4. Клавиатура: стрелки листают стопку, Tab уводит на следующую
 *    фокусируемую карточку — обычная последовательность ссылок, ничего
 *    специального настраивать не пришлось.
 */

export type CardStackItem = {
  id: string;
  title: string;
  description?: string;
  /** Строка вида «от 3 300 ₽» — необязательна, не у всех наборов есть цена. */
  priceFrom?: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

export type CardStackProps = {
  items: CardStackItem[];
  className?: string;
};

function wrapIndex(n: number, len: number) {
  return ((n % len) + len) % len;
}

/** Кратчайшее подписанное расстояние от active до i с учётом закольцовки. */
function signedOffset(i: number, active: number, len: number) {
  const raw = i - active;
  const alt = raw > 0 ? raw - len : raw + len;
  return Math.abs(alt) < Math.abs(raw) ? alt : raw;
}

const MAX_CARD_WIDTH = 420;
const CARD_RATIO = 3 / 4; // height / width

export function CardStack({ items, className }: CardStackProps) {
  const reduceMotion = useReducedMotion();
  const len = items.length;

  const [active, setActive] = React.useState(0);
  const [viewportW, setViewportW] = React.useState(1200);
  const justDragged = React.useRef(false);

  React.useEffect(() => {
    const onResize = () => setViewportW(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const cardWidth = Math.max(220, Math.min(MAX_CARD_WIDTH, viewportW - 96));
  const cardHeight = Math.round(cardWidth * CARD_RATIO);
  const compact = viewportW < 640;

  const maxOffset = compact ? 1 : 2;
  const overlap = compact ? 0.62 : 0.5;
  const cardSpacing = Math.max(10, Math.round(cardWidth * (1 - overlap)));
  const spreadDeg = compact ? 14 : 26;
  const stepDeg = spreadDeg / maxOffset;

  const prev = React.useCallback(() => setActive((a) => wrapIndex(a - 1, len)), [len]);
  const next = React.useCallback(() => setActive((a) => wrapIndex(a + 1, len)), [len]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  if (!len) return null;
  const activeItem = items[active]!;

  return (
    <div className={clsx("w-full", className)}>
      <div
        className="relative w-full"
        style={{ height: cardHeight + 64 }}
        tabIndex={0}
        role="group"
        aria-roledescription="карусель"
        aria-label="Направления клиники"
        onKeyDown={onKeyDown}
      >
        <div className="absolute inset-0 flex items-end justify-center" style={{ perspective: 1100 }}>
          <AnimatePresence initial={false}>
            {items.map((item, i) => {
              const off = signedOffset(i, active, len);
              const abs = Math.abs(off);
              if (abs > maxOffset) return null;

              const isActive = off === 0;
              const rotateZ = off * stepDeg;
              const x = off * cardSpacing;
              const y = abs * 8;
              const scale = isActive ? 1 : 0.92;
              const lift = isActive ? -18 : 0;
              const rotateX = isActive ? 0 : 8;
              const zIndex = 100 - abs;

              const dragProps = isActive
                ? {
                    drag: "x" as const,
                    dragConstraints: { left: 0, right: 0 },
                    dragElastic: 0.18,
                    onDragEnd: (
                      _e: unknown,
                      info: { offset: { x: number }; velocity: { x: number } },
                    ) => {
                      if (reduceMotion) return;
                      const threshold = Math.min(120, cardWidth * 0.22);
                      if (info.offset.x > threshold || info.velocity.x > 650) {
                        justDragged.current = true;
                        prev();
                      } else if (info.offset.x < -threshold || info.velocity.x < -650) {
                        justDragged.current = true;
                        next();
                      }
                    },
                  }
                : {};

              return (
                <motion.a
                  key={item.id}
                  href={withBase(item.href)}
                  aria-current={isActive ? "true" : undefined}
                  aria-label={isActive ? undefined : `Показать: ${item.title}`}
                  className={clsx(
                    "absolute bottom-0 block overflow-hidden rounded-[4px] border border-line bg-paper p-1.5",
                    "will-change-transform select-none",
                    isActive ? "cursor-grab active:cursor-grabbing" : "cursor-pointer",
                  )}
                  style={{
                    width: cardWidth,
                    height: cardHeight,
                    zIndex,
                    boxShadow: isActive
                      ? "0 30px 60px -28px rgba(36,28,33,.32), 0 12px 26px -14px rgba(36,28,33,.2)"
                      : "0 14px 30px -18px rgba(36,28,33,.22)",
                  }}
                  initial={
                    reduceMotion ? false : { opacity: 0, y: y + 30, x, rotateZ, rotateX, scale }
                  }
                  animate={{ opacity: 1, x, y: y + lift, rotateZ, rotateX, scale }}
                  transition={{ type: "spring", stiffness: 280, damping: 28 }}
                  onClick={(e) => {
                    if (justDragged.current) {
                      justDragged.current = false;
                      e.preventDefault();
                      return;
                    }
                    // Настоящий переход — только с активной карточки.
                    // У остальных клик просто выносит их вперёд.
                    if (!isActive) {
                      e.preventDefault();
                      setActive(i);
                    }
                  }}
                  {...dragProps}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-[2px] bg-veil">
                    <Image
                      src={withBase(item.imageSrc)}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 640px) 40vw, 80vw"
                      className="object-cover"
                      draggable={false}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-plum/80 via-plum/5 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                      <p className="font-display text-[1.125rem] text-shell sm:text-[1.375rem]">
                        {item.title}
                      </p>
                      {item.priceFrom && (
                        <span className="shrink-0 pb-1 text-[0.8125rem] tabular-nums text-shell/75">
                          {item.priceFrom}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Активная карточка описана текстом ниже — то же самое, что было бы
          у неё под фото на статичной сетке, только для одной, текущей. */}
      <div className="mt-8 flex flex-col items-center gap-4 text-center">
        {activeItem.description && (
          <p className="max-w-[42ch] text-[1rem] leading-[1.6] text-ink-soft">
            {activeItem.description}
            {activeItem.priceFrom && (
              <>
                {" "}
                <span className="tabular-nums text-ink-mute">{activeItem.priceFrom}</span>
              </>
            )}
          </p>
        )}

        <Link
          href={activeItem.href}
          className="inline-flex items-center gap-2 text-[0.9375rem] text-ink underline decoration-ink/25 underline-offset-[6px] transition-colors duration-200 hover:decoration-ink"
        >
          Подробнее о направлении
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </Link>

        <div className="flex items-center gap-2 pt-1">
          {items.map((it, idx) => (
            <button
              key={it.id}
              type="button"
              onClick={() => setActive(idx)}
              aria-label={`Показать: ${it.title}`}
              aria-current={idx === active ? "true" : undefined}
              className={clsx(
                "h-2 w-2 rounded-full transition-colors duration-200",
                idx === active ? "bg-ink" : "bg-ink/25 hover:bg-ink/45",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
