"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Motion vocabulary — used deliberately, sparingly:
 *   Reveal      neutral fade+rise, ordinary body copy and cards
 *   TextClip    headline lines unmask upward, row by row
 *   FrameReveal a panel slides off a photo, like a curtain lifting
 *   Marker      a small label/stat that appears just after its subject
 */

export function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span";
}) {
  const Comp = motion[as];
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.65, delay, ease: EASE }}
      className={className}
    >
      {children}
    </Comp>
  );
}

export function TextClip({
  lines,
  className,
  lineClassName,
  delay = 0,
}: {
  lines: readonly string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
}) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden">
          <motion.span
            className={clsxJoin(lineClassName, "block")}
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.75, delay: delay + i * 0.08, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function FrameReveal({
  children,
  className,
  delay = 0,
  direction = "left",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right" | "bottom";
}) {
  const panelInitial = direction === "bottom" ? { scaleY: 1 } : { scaleX: 1 };
  const panelOrigin = direction === "left" ? "right" : direction === "right" ? "left" : "top";

  return (
    <div className={clsxJoin("relative overflow-hidden", className)}>
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.9, delay: delay + 0.1, ease: EASE }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
      <motion.div
        aria-hidden
        initial={panelInitial}
        whileInView={{ scaleX: 0, scaleY: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.7, delay, ease: EASE }}
        style={{ transformOrigin: panelOrigin }}
        className="pointer-events-none absolute inset-0 z-10 bg-deep"
      />
    </div>
  );
}

export function Marker({
  children,
  delay = 0.4,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function clsxJoin(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
