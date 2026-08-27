"use client";

import { CSSProperties, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Segment {
  text: string;
  className?: string;
}

/** Word-by-word stagger reveal, all words sharing one className. */
export function WordsPullUp({
  text,
  className = "",
  style,
}: {
  text: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <WordsPullUpMultiStyle segments={[{ text }]} className={className} style={style} />
  );
}

/** Word-by-word stagger reveal where each segment can carry its own className (e.g. an accent-colored word). */
export function WordsPullUpMultiStyle({
  segments,
  className = "",
  style,
}: {
  segments: Segment[];
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  const words: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-block ${w.className ?? ""}`}
          style={{ marginRight: "0.22em" }}
        >
          {w.word}
        </motion.span>
      ))}
    </div>
  );
}
