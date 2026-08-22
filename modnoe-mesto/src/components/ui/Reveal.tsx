"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import clsx from "clsx";

/**
 * Однократное появление при входе в вьюпорт. Никакого параллакса и scroll-scrub:
 * IntersectionObserver + CSS-переход, чтобы анимация шла вне основного потока.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;

    // Без IntersectionObserver показываем контент сразу после монтирования.
    if (!el || typeof IntersectionObserver === "undefined") {
      const immediate = window.setTimeout(() => setShown(true), 0);
      return () => window.clearTimeout(immediate);
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);

    // Страховка: если наблюдатель по какой-то причине не сработал
    // (фоновая вкладка, нестандартная среда) — контент всё равно показываем.
    const failsafe = window.setTimeout(() => setShown(true), 2000);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <Tag
      // @ts-expect-error — общий ref для допустимых тегов
      ref={ref}
      className={clsx("u-reveal", className)}
      data-shown={shown ? "true" : "false"}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
