"use client";

import { ReactNode } from "react";
import clsx from "clsx";

/**
 * Ссылка на калькулятор, которая заодно предвыбирает цель.
 * Остаётся обычным якорем: работает и без JS.
 */
export function GoalLink({
  goal,
  className,
  children,
  ariaLabel,
}: {
  goal: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a
      href="#calculator"
      aria-label={ariaLabel}
      className={clsx(className)}
      onClick={() => {
        window.dispatchEvent(new CustomEvent("mm:goal", { detail: goal }));
      }}
    >
      {children}
    </a>
  );
}
