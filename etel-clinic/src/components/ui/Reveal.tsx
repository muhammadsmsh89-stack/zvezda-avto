"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

/**
 * Мягкое появление секции при скролле.
 *
 * Стартовое «скрытое» состояние задаётся классом `.js .reveal` в globals.css —
 * без JS контент виден сразу, значит текст доступен и без клиентского скрипта.
 * Если IntersectionObserver недоступен, показываем сразу.
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
  as?: "div" | "section" | "li" | "article" | "span";
}) {
  const ref = useRef<HTMLElement>(null);
  // Стартуем с false и на сервере, и на клиенте — иначе на клиенте, где
  // IntersectionObserver уже есть, ленивая инициализация даст другое
  // значение, чем на SSR (там глобала нет), и React пожалуется на
  // hydration mismatch. Настоящее показывающее setState всегда идёт из
  // эффекта — как подписка на внешнюю систему (IO-колбэк или rAF-фолбэк),
  // а не как синхронный вызов в теле эффекта.
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const raf = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(raf);
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
      className={clsx("reveal", shown && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
