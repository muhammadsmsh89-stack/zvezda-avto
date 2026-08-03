"use client";

import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { masters, salons, type Master } from "@/lib/content";
import { useBooking } from "@/lib/booking-context";

const filters: { label: string; icon: Master["specialtyIcon"] | "all" }[] = [
  { label: "Все мастера", icon: "all" },
  { label: "Волосы", icon: "hair" },
  { label: "Ногти", icon: "nails" },
  { label: "Визаж", icon: "makeup" },
  { label: "Косметология", icon: "cosmetology" },
  { label: "Массаж", icon: "massage" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TeamSection() {
  const [active, setActive] = useState<(typeof filters)[number]["icon"]>("all");
  const { jumpToBooking } = useBooking();

  const visible = useMemo(
    () => (active === "all" ? masters : masters.filter((m) => m.specialtyIcon === active)),
    [active]
  );

  return (
    <section id="team" className="bg-background py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Команда"
          title="Мастера, которым доверяют"
          description="Каждый специалист регулярно проходит обучение и сертификацию — выбирайте по направлению и записывайтесь напрямую."
          align="center"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.label}
              onClick={() => setActive(f.icon)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                active === f.icon
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border-strong text-foreground/70 hover:border-accent hover:text-accent"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((master) => {
            const salon = salons.find((s) => s.slug === master.salonSlug);
            return (
              <StaggerItem key={master.name}>
                <div className="flex h-full flex-col items-center rounded-3xl border border-border bg-surface p-7 text-center transition-colors hover:border-accent/50">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent/40 bg-accent/10">
                    <span className="font-display text-2xl font-semibold text-accent">
                      {initials(master.name)}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{master.name}</h3>
                  <p className="mt-1 text-sm text-accent">{master.role}</p>
                  <p className="mt-1 text-xs text-muted">Салон на м. {salon?.metro}</p>

                  <button
                    onClick={() =>
                      jumpToBooking({ masterName: master.name, salonSlug: master.salonSlug })
                    }
                    className="mt-5 w-full rounded-full border border-accent/50 px-4 py-2.5 text-xs font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Записаться
                  </button>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
