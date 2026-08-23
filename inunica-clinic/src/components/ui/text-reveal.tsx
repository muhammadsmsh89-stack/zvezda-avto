"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import clsx from "clsx";

/**
 * Пословное проявление текста при попадании в экран: слова всплывают
 * из размытия с небольшим сдвигом друг за другом.
 *
 * Из подборки текстовых эффектов выбран самый тихий: он не переставляет
 * буквы, не печатает и не крутит слова по кругу — просто задерживает
 * появление на полсекунды. На фразе про лицензию это работает как пауза
 * перед важным, а не как аттракцион.
 *
 * Механика намеренно та же, что у `Reveal`: скрытое стартовое состояние
 * включается только классом `.js` на <html>, поэтому без JS и в выдаче
 * поисковику текст виден целиком и сразу. Разметка — <span>, потому что
 * компонент вставляется внутрь существующего <p>.
 */
export function TextReveal({
  text,
  className,
  step = 34,
}: {
  text: string;
  className?: string;
  /** Задержка между соседними словами, мс. */
  step?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
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
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <span
      ref={ref}
      className={clsx("word-rise", className)}
      data-shown={shown ? "true" : undefined}
    >
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          {/* inline-block нужен, чтобы к слову применялся transform.
              Пробел между словами — обычный текстовый узел, иначе строка
              перестанет переноситься. */}
          <span className="inline-block" style={{ transitionDelay: `${i * step}ms` }}>
            {word}
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </span>
  );
}
