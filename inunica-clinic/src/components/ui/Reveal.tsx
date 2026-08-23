"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

/**
 * Мягкое появление секции при скролле.
 *
 * Стартовое «скрытое» состояние задаётся классом `.js .reveal` — без JS
 * контент виден сразу, поэтому текст доступен поисковику и читателю
 * с отключённым скриптом. Если IntersectionObserver недоступен,
 * показываем сразу.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={clsx("reveal", className)}
      data-shown={shown ? "true" : undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
