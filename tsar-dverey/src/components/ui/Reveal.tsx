"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeVariants, riseVariants, revealMaskVariants } from "@/lib/motion";

type RevealVariant = "fade" | "rise" | "mask";

const variantMap: Record<RevealVariant, Variants> = {
  fade: fadeVariants,
  rise: riseVariants,
  mask: revealMaskVariants,
};

export function Reveal({
  children,
  variant = "rise",
  delay = 0,
  className,
}: {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variantMap[variant]}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
