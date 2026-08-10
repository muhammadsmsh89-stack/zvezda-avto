"use client";

import { useState } from "react";
import { beforeAfterMedia } from "@/data/media";
import { SceneArt } from "@/components/media/SceneArt";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconDrag } from "@/components/icons";
import { track } from "@/lib/analytics";

export function BeforeAfter() {
  const entry = beforeAfterMedia[0];
  const [percent, setPercent] = useState(50);
  const [tracked, setTracked] = useState(false);

  const markInteracted = () => {
    if (!tracked) {
      track("before_after_interaction", { label: entry.label });
      setTracked(true);
    }
  };

  return (
    <section id="before-after" className="border-t border-line-dark bg-void py-24 sm:py-32">
      <Container size="wide">
        <Reveal>
          <SectionHeading eyebrow="Before / After" title="До и после" lead={entry.label} />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-10 aspect-[16/10] w-full select-none overflow-hidden bg-carbon sm:aspect-[21/9]">
            <div className="absolute inset-0">
              {entry.after.type === "scene" ? (
                <>
                  <div className={`absolute inset-0 scene-${entry.after.variant}`} />
                  <SceneArt variant={entry.after.variant} className="absolute inset-0 h-full w-full text-paper" />
                </>
              ) : null}
            </div>

            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}>
              {entry.before.type === "scene" ? (
                <>
                  <div className={`absolute inset-0 scene-${entry.before.variant}`} />
                  <SceneArt variant={entry.before.variant} className="absolute inset-0 h-full w-full text-paper/70" />
                </>
              ) : null}
            </div>

            <span className="font-mono-tag pointer-events-none absolute left-5 top-5 text-xs uppercase tracking-[0.14em] text-paper/70">
              До
            </span>
            <span className="font-mono-tag pointer-events-none absolute right-5 top-5 text-xs uppercase tracking-[0.14em] text-paper/70">
              После
            </span>

            <div
              className="pointer-events-none absolute inset-y-0 w-px bg-paper/80"
              style={{ left: `${percent}%` }}
            />
            <div
              className="pointer-events-none absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-paper/70 bg-void/70 text-paper backdrop-blur-sm"
              style={{ left: `${percent}%` }}
            >
              <IconDrag className="h-4 w-4" />
            </div>

            <input
              type="range"
              min={0}
              max={100}
              value={percent}
              onChange={(e) => {
                setPercent(Number(e.target.value));
                markInteracted();
              }}
              aria-label="Сравнение до и после"
              className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
