"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { clsx } from "clsx";

/**
 * Нить маршрута — сигнатурный элемент «Этели»: тонкая линия с узлом,
 * прочерчивающаяся на скролле. Визуализирует связь «беспокоит → врач →
 * технология → клиника» в навигаторе, таймлайне и карточках направлений.
 */
export function ThreadLine({
  orientation = "vertical",
  className,
  nodeAt = "end",
}: {
  orientation?: "vertical" | "horizontal";
  className?: string;
  nodeAt?: "start" | "end" | "none";
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const reduceMotion = useReducedMotion();
  const shown = inView || reduceMotion;

  const isVertical = orientation === "vertical";

  return (
    <svg
      ref={ref}
      className={clsx(isVertical ? "h-full w-3" : "h-3 w-full", className)}
      viewBox={isVertical ? "0 0 12 100" : "0 0 100 12"}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.line
        x1={isVertical ? 6 : 0}
        y1={isVertical ? 0 : 6}
        x2={isVertical ? 6 : 100}
        y2={isVertical ? 100 : 6}
        className="thread-line"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={shown ? { pathLength: 1, opacity: 1 } : {}}
        transition={reduceMotion ? { duration: 0 } : { duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />
      {nodeAt !== "none" && (
        <motion.circle
          cx={isVertical ? 6 : nodeAt === "start" ? 0 : 100}
          cy={isVertical ? (nodeAt === "start" ? 0 : 100) : 6}
          r={3}
          className="fill-accent"
          initial={{ scale: 0, opacity: 0 }}
          animate={shown ? { scale: 1, opacity: 1 } : {}}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.4, delay: 0.9, ease: "easeOut" }}
        />
      )}
    </svg>
  );
}
