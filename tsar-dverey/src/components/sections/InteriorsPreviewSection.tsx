"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { DoorTexturePanel } from "@/components/art/DoorTexturePanel";
import { IconArrowRight } from "@/components/icons";
import { styleDirections } from "@/lib/interiors";
import { track } from "@/lib/analytics";

export function InteriorsPreviewSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Интерьеры"
            title="Стилевые направления, с которыми мы работаем"
            lead="По мотивам реальных инсталляций шоурума — тон, фактура и фурнитура подбираются под общий характер помещения."
            className="max-w-xl"
          />
          <Link
            href="/interiors"
            onClick={() => track("interior_open", { location: "homepage_preview" })}
            className="hidden sm:inline-flex items-center gap-1.5 text-[15px] text-foreground hover:text-accent transition-colors"
          >
            Все направления
            <IconArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[320px]">
          {styleDirections.map((s, i) => (
            <Reveal
              key={s.id}
              variant="rise"
              delay={(i % 4) * 0.05}
              className={i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""}
            >
              <Link href="/interiors" className="group block h-full min-h-[240px]">
                <DoorTexturePanel
                  tone={s.tone}
                  crop={s.crop}
                  variant={s.variant}
                  className="h-full min-h-[240px] transition-[filter] duration-500 group-hover:brightness-105"
                  slotId={`REAL_INTERIOR_IMAGE_REQUIRED:${s.id}`}
                >
                  <p className="text-[21px] text-deep-foreground">{s.title}</p>
                  <p className="mt-1 max-w-[30ch] text-[13px] leading-snug text-deep-foreground/75">
                    {s.description}
                  </p>
                </DoorTexturePanel>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
