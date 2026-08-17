"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoPanel } from "@/components/ui/PhotoPanel";

export function BeforeAfterSection() {
  const [pos, setPos] = useState(50);

  return (
    <section className="bg-background py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">До / После</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 max-w-xl text-pretty text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
            Наглядный результат работы
          </h2>
        </Reveal>

        <Reveal delay={0.12} className="mt-10">
          <div className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-[1.75rem] border border-border sm:aspect-[16/8]">
            <PhotoPanel
              variant="after"
              label="Автомобиль после работы HPD — реальное фото появится после согласования с владельцем"
              className="absolute inset-0 h-full w-full"
              showMark={false}
            />
            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
              <PhotoPanel
                variant="before"
                label="Автомобиль до работы HPD — реальное фото появится после согласования с владельцем"
                className="h-full w-full"
                sweepFrom="right"
                showMark={false}
              />
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 w-px bg-background/70"
              style={{ left: `${pos}%` }}
            />

            <span className="pointer-events-none absolute left-5 top-5 rounded-full bg-background/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-foreground backdrop-blur">
              До
            </span>
            <span className="pointer-events-none absolute right-5 top-5 rounded-full bg-background/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-foreground backdrop-blur">
              После
            </span>

            <input
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="Ползунок сравнения до и после"
              className="absolute inset-x-0 bottom-0 h-11 w-full cursor-ew-resize appearance-none bg-transparent [&::-webkit-slider-thumb]:h-9 [&::-webkit-slider-thumb]:w-9 [&::-webkit-slider-thumb]:-translate-y-1 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-background [&::-webkit-slider-thumb]:bg-accent"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            />
          </div>
          <p className="mt-4 text-sm text-muted">
            Здесь появятся реальные пары «до / после» с работ HPD — сравнение станет активным, как только студия передаст фотографии.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
