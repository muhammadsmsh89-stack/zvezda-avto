"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode, ElementType } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Плавное появление снизу — рабочая лошадка для секций и карточек. */
export function FadeUp({
  children,
  className,
  delay = 0,
  y = 22,
  as = "div",
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: ElementType;
  once?: boolean;
}) {
  const MotionTag = motion[as as "div"] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/** Blur → чёткость — для крупных заголовков, ощущается «дороже» простого fade. */
export function BlurIn({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const MotionTag = motion[as as "div"] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/** Заголовок появляется словами — stagger по words, каждое слово blur→чёткость. */
export function WordsReveal({
  text,
  className,
  wordClassName,
  delay = 0,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.055, delayChildren: delay },
    },
  };
  const word: Variants = {
    hidden: { opacity: 0, y: "0.4em", filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: "0em",
      filter: "blur(0px)",
      transition: { duration: 0.65, ease: EASE },
    },
  };
  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      style={{ display: "inline" }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          className={wordClassName}
          style={{ display: "inline-block", willChange: "transform, filter" }}
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}

/** Стаггер-контейнер для сеток карточек. */
export function StaggerGrid({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 26,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}
