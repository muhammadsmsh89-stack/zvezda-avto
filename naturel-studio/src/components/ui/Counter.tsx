"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";

export function Counter({
  value,
  suffix = "",
  className,
}: {
  value: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const numeric = parseFloat(value.replace(/[^\d.]/g, ""));
  const hasSpace = /\s/.test(value);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => {
    const n = Math.round(v);
    return hasSpace ? n.toLocaleString("ru-RU") : String(n);
  });

  useEffect(() => {
    if (!inView || Number.isNaN(numeric)) return;
    const controls = animate(motionValue, numeric, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, numeric, motionValue]);

  if (Number.isNaN(numeric)) {
    return (
      <span className={className}>
        {value}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
