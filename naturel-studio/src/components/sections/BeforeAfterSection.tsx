"use client";

import { useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

const cases = [
  {
    title: "Окрашивание и уход",
    beforeGradient: "linear-gradient(135deg, #7d715c 0%, #4a4136 100%)",
    afterGradient: "linear-gradient(135deg, #e8c98a 0%, #b08d57 100%)",
  },
  {
    title: "Комплексный маникюр",
    beforeGradient: "linear-gradient(135deg, #a89c86 0%, #6f6659 100%)",
    afterGradient: "linear-gradient(135deg, #f3e3c8 0%, #c9a765 100%)",
  },
  {
    title: "Уход и косметология",
    beforeGradient: "linear-gradient(135deg, #93876f 0%, #5a5245 100%)",
    afterGradient: "linear-gradient(135deg, #ecd9b3 0%, #bd9860 100%)",
  },
];

function BeforeAfterSlider({
  title,
  beforeGradient,
  afterGradient,
}: {
  title: string;
  beforeGradient: string;
  afterGradient: string;
}) {
  const [position, setPosition] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[4/5] w-full select-none overflow-hidden rounded-3xl border border-border"
      onMouseDown={(e) => {
        dragging.current = true;
        updateFromClientX(e.clientX);
      }}
      onMouseMove={(e) => dragging.current && updateFromClientX(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => updateFromClientX(e.touches[0].clientX)}
      onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
    >
      <div className="absolute inset-0" style={{ background: afterGradient }}>
        <span className="absolute bottom-4 right-4 rounded-full bg-black/25 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          После
        </span>
      </div>
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%`, background: beforeGradient }}
      >
        <span className="absolute bottom-4 left-4 rounded-full bg-black/25 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          До
        </span>
      </div>
      <div
        className="absolute top-0 bottom-0 w-1 -translate-x-1/2 cursor-ew-resize bg-white/90"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M8 6l-5 6 5 6M16 6l5 6-5 6" stroke="#241f19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <p className="absolute top-4 left-1/2 -translate-x-1/2 rounded-full bg-surface/90 px-4 py-1.5 text-xs font-semibold text-foreground backdrop-blur">
        {title}
      </p>
    </div>
  );
}

export function BeforeAfterSection() {
  return (
    <section id="before-after" className="bg-surface py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Результат"
          title="До / После"
          description="Потяните за разделитель, чтобы увидеть эффект. Замените плейсхолдеры на реальные фото работ мастеров перед публикацией."
          align="center"
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <StaggerItem key={c.title}>
              <BeforeAfterSlider {...c} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
