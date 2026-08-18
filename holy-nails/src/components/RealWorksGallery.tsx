"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Reveal, FrameReveal, Marker } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { Close } from "@/components/ui/Icons";
import { realAssets } from "@/lib/realAssets";
import { contacts } from "@/lib/contacts";

const works = [
  {
    slug: "milky",
    tag: "Молочный дизайн с блёстками",
    asset: realAssets.workMilkyFull,
    objectPosition: "center 30%",
  },
  {
    slug: "nude",
    tag: "Деталь — нюдовый маникюр",
    asset: realAssets.workNude,
    objectPosition: "center",
  },
] as const;

/**
 * Курируемая подборка реальных работ Holy Nails — одна статусная работа
 * крупным планом и деталь-акцент рядом, без заполнения раздела чужими/сток-
 * фото. Полная лента — в соцсетях студии.
 */
export function RealWorksGallery() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const openWork = works.find((w) => w.slug === openSlug);

  useEffect(() => {
    if (!openWork) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenSlug(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openWork]);

  return (
    <div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
        <div className="lg:col-span-7">
          <div className="relative">
            <FrameReveal delay={0}>
              <button
                onClick={() => setOpenSlug("milky")}
                className="group relative block aspect-[4/5] w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-4 lg:aspect-[4/3]"
                aria-label={`Открыть работу: ${works[0].tag}`}
              >
                <Image
                  src={works[0].asset.src}
                  width={works[0].asset.width}
                  height={works[0].asset.height}
                  alt={`Маникюр Holy Nails — ${works[0].tag.toLowerCase()}`}
                  style={{ objectPosition: works[0].objectPosition }}
                  sizes="(min-width: 1024px) 55vw, 90vw"
                  priority
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>
            </FrameReveal>

            <Marker delay={0.25} className="absolute -bottom-8 -right-3 w-32 sm:-right-6 sm:w-40 lg:-bottom-10 lg:-right-8 lg:w-44">
              <button
                onClick={() => setOpenSlug("nude")}
                className="group relative block aspect-square w-full overflow-hidden rounded-lg border-2 border-background shadow-[0_18px_36px_-16px_rgba(23,20,14,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4"
                aria-label={`Открыть работу: ${works[1].tag}`}
              >
                <Image
                  src={works[1].asset.src}
                  width={works[1].asset.width}
                  height={works[1].asset.height}
                  alt={`Маникюр Holy Nails — ${works[1].tag.toLowerCase()}`}
                  style={{ objectPosition: works[1].objectPosition }}
                  sizes="180px"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </button>
            </Marker>
          </div>

          <Reveal delay={0.1} className="mt-10 flex items-baseline gap-3 lg:mt-14">
            <span className="font-display text-sm text-muted">01</span>
            <span className="text-sm font-semibold uppercase tracking-[0.08em] text-foreground">{works[0].tag}</span>
          </Reveal>
        </div>

        <Reveal delay={0.18} className="flex flex-col justify-end gap-6 lg:col-span-5">
          <p className="text-pretty text-sm leading-relaxed text-muted lg:max-w-sm">
            Каждая работа — реальный результат студии Holy Nails.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="text-sm font-semibold text-foreground">Больше работ:</span>
            <TextLink href={contacts.instagramUrl}>Instagram</TextLink>
            <TextLink href={contacts.vkUrl}>VK</TextLink>
          </div>
        </Reveal>
      </div>

      {openWork && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={openWork.tag}
          className="animate-lightbox-in fixed inset-0 z-[70] flex items-center justify-center bg-deep/90 p-4 sm:p-8"
          onClick={() => setOpenSlug(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[88vh] w-full max-w-md overflow-hidden rounded-lg bg-surface"
          >
            <Image
              src={openWork.asset.src}
              width={openWork.asset.width}
              height={openWork.asset.height}
              alt={`Маникюр Holy Nails — ${openWork.tag.toLowerCase()}`}
              className="h-full w-full object-cover"
            />
            <button
              onClick={() => setOpenSlug(null)}
              aria-label="Закрыть"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-surface/90 text-foreground shadow-sm"
            >
              <Close className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
