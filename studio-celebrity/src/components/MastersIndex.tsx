"use client";

import Link from "next/link";
import { Reveal, FrameReveal } from "@/components/ui/Reveal";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Button, TextLink } from "@/components/ui/Button";
import { masters } from "@/lib/masters";
import { ctaLabels } from "@/lib/studio";
import { useBooking } from "@/lib/booking";

export function MastersIndex() {
  const { openBooking } = useBooking();

  return (
    <div className="divide-y divide-border border-y border-border">
      {masters.map((m, i) => (
        <Reveal key={m.slug} delay={i * 0.06}>
          <div
            className={`flex flex-col gap-8 py-12 sm:py-16 lg:flex-row lg:items-center lg:gap-16 ${
              i % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <Link href={`/masters/${m.slug}`} className="group block shrink-0 lg:w-[34%]">
              <FrameReveal>
                <PhotoPlaceholder
                  shotNumber={String(i + 1).padStart(2, "0")}
                  label={m.role}
                  description={m.role}
                  tone={i % 2 === 0 ? "ivory" : "espresso"}
                  subject="portrait"
                  aspectClassName="aspect-[4/5]"
                  className="overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </FrameReveal>
            </Link>

            <div className="lg:w-[66%]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{m.role}</p>
              <h2 className="mt-3 text-4xl leading-[1.05] text-foreground sm:text-5xl">
                <Link href={`/masters/${m.slug}`} className="hover:text-accent-2">
                  {m.name}
                </Link>
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-foreground/75">{m.specialty}</p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button onClick={() => openBooking(m.slug)}>{ctaLabels.primary}</Button>
                <TextLink href={`/masters/${m.slug}`}>Смотреть работы</TextLink>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
