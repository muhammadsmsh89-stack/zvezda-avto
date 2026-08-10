"use client";

import { motion } from "framer-motion";

type DrawPathProps = {
  d: string;
  className?: string;
  opacity?: number;
  strokeDasharray?: string;
  delay?: number;
  duration?: number;
};

export function DrawPath({
  d,
  className,
  opacity,
  strokeDasharray,
  delay = 0,
  duration = 1.4,
}: DrawPathProps) {
  return (
    <motion.path
      d={d}
      className={className}
      opacity={opacity}
      strokeDasharray={strokeDasharray}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: opacity ?? 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
