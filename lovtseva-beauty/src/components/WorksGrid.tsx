"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Button } from "@/components/ui/Button";
import { Close } from "@/components/ui/Icons";
import { directions } from "@/lib/services";
import { getWorksByDirection, Work } from "@/lib/works";
import { whatsappBookingLink } from "@/lib/contacts";
import { ctaLabels } from "@/lib/site";

const filters = [{ slug: null, code: "ВСЕ" }, ...directions.map((d) => ({ slug: d.slug, code: d.code }))];

export function WorksGrid({
  limit,
  initialFilter,
  hideFilters,
  hideCta,
}: {
  limit?: number;
  initialFilter?: string | null;
  hideFilters?: boolean;
  hideCta?: boolean;
}) {
  const [filter, setFilter] = useState<string | null>(initialFilter ?? null);
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const filtered = getWorksByDirection(filter);
  const visible = limit ? filtered.slice(0, limit) : filtered;
  const featured = visible.find((w) => w.featured) ?? visible[0];
  const rest = visible.filter((w) => w.slug !== featured?.slug);
  const openWork = visible.find((w) => w.slug === openSlug);

  return (
    <div>
      {!hideFilters && (
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.slug ?? "all"}
              onClick={() => setFilter(f.slug)}
              className={`min-h-11 rounded-full border px-5 text-sm font-semibold tracking-[0.02em] transition-colors ${
                filter === f.slug
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-foreground hover:border-border-strong"
              }`}
            >
              {f.code}
            </button>
          ))}
        </div>
      )}

      {visible.length === 0 ? (
        <p className="mt-10 text-sm text-muted">В этом направлении работы скоро появятся.</p>
      ) : (
        <div className={hideFilters ? "" : "mt-8"}>
          {featured && <WorkTile work={featured} onOpen={setOpenSlug} className="mb-4 aspect-[16/10] sm:mb-5" />}
          <div className="columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3">
            {rest.map((w) => (
              <WorkTile key={w.slug} work={w} onOpen={setOpenSlug} className={`mb-4 break-inside-avoid sm:mb-5 ${w.aspect}`} />
            ))}
          </div>
        </div>
      )}

      {!hideCta && (
        <div className="mt-10">
          <Button href={whatsappBookingLink()}>{ctaLabels.primary}</Button>
        </div>
      )}

      <WorkLightbox work={openWork} onClose={() => setOpenSlug(null)} />
    </div>
  );
}

function WorkTile({ work, onOpen, className }: { work: Work; onOpen: (slug: string) => void; className?: string }) {
  const direction = directions.find((d) => d.slug === work.directionSlug);

  return (
    <Reveal className={className}>
      <button
        onClick={() => onOpen(work.slug)}
        className="group relative block h-full w-full overflow-hidden rounded-2xl border border-border text-left focus-visible:outline-2 focus-visible:outline-offset-4"
        aria-label={`Открыть работу: ${work.title}`}
      >
        <PhotoPlaceholder
          shotNumber={direction?.code ?? ""}
          label={work.title}
          description={work.title}
          tone={work.tone}
          subject={work.subject}
          aspectClassName="h-full"
          className="transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-background/70">{direction?.code}</p>
          <p className="mt-1 text-sm font-semibold text-background">{work.title}</p>
        </div>
      </button>
    </Reveal>
  );
}

function WorkLightbox({ work, onClose }: { work: Work | undefined; onClose: () => void }) {
  useEffect(() => {
    if (!work) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [work, onClose]);

  const direction = work ? directions.find((d) => d.slug === work.directionSlug) : undefined;

  if (!work) return null;

  return (
    <div
      key={work.slug}
      role="dialog"
      aria-modal="true"
      aria-label={work.title}
      className="animate-lightbox-in fixed inset-0 z-[70] flex items-center justify-center bg-deep/90 p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-surface sm:flex-row"
      >
        <div className="relative aspect-[4/5] w-full shrink-0 sm:aspect-auto sm:w-1/2">
          <PhotoPlaceholder
            shotNumber={direction?.code ?? ""}
            label={work.title}
            description={work.title}
            tone={work.tone}
            subject={work.subject}
            aspectClassName="h-full"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{direction?.code}</p>
            <h3 className="mt-3 font-serif text-2xl text-foreground">{work.title}</h3>
            {direction && <p className="mt-3 text-sm leading-relaxed text-muted">{direction.short}</p>}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={whatsappBookingLink(work.title)}>{ctaLabels.primary}</Button>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-surface/90 text-foreground shadow-sm"
        >
          <Close className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
