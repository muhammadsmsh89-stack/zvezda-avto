"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

interface TypewriterProps {
  words: string[];
  speed?: number;
  delayBetweenWords?: number;
  cursor?: boolean;
  cursorChar?: string;
  className?: string;
}

/**
 * Печатающийся эффект, перебирающий список слов по кругу.
 *
 * Бесконечно обновляющийся текст без возможности остановить его — нарушение
 * WCAG 2.2.2. Решаем двумя вещами: под `prefers-reduced-motion: reduce`
 * анимация не запускается вообще (сразу показываем первое слово целиком),
 * а видимый бегущий текст скрыт от скринридера (`aria-hidden`) в пользу
 * статичного перечисления через запятую — его читает вспомогательная
 * технология один раз, а не бесконечно.
 */
export function Typewriter({
  words,
  speed = 100,
  delayBetweenWords = 2000,
  cursor = true,
  cursorChar = "|",
  className,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [reduceMotion, setReduceMotion] = useState(false);

  const currentWord = words[wordIndex]

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setDisplayText(currentWord);
      return;
    }

    const timeout = setTimeout(
      () => {
        // Typing logic
        if (!isDeleting) {
          if (charIndex < currentWord.length) {
            setDisplayText(currentWord.substring(0, charIndex + 1))
            setCharIndex(charIndex + 1)
          } else {
            // Word is complete, wait before deleting
            setTimeout(() => {
              setIsDeleting(true)
            }, delayBetweenWords)
          }
        } else {
          // Deleting logic
          if (charIndex > 0) {
            setDisplayText(currentWord.substring(0, charIndex - 1))
            setCharIndex(charIndex - 1)
          } else {
            // Word is deleted, move to next word
            setIsDeleting(false)
            setWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? speed / 2 : speed,
    )

    return () => clearTimeout(timeout)
  }, [charIndex, currentWord, isDeleting, speed, delayBetweenWords, wordIndex, words, reduceMotion])

  // Cursor blinking effect
  useEffect(() => {
    if (!cursor || reduceMotion) return

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [cursor, reduceMotion])

  return (
    <span className={clsx("inline-block", className)}>
      <span aria-hidden="true">
        {displayText}
        {cursor && !reduceMotion && (
          <span className="ml-1 transition-opacity duration-75" style={{ opacity: showCursor ? 1 : 0 }}>
            {cursorChar}
          </span>
        )}
      </span>
      <span className="sr-only">{words.join(", ")}</span>
    </span>
  )
}
