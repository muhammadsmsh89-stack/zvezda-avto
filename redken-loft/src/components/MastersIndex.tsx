import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { masters } from "@/lib/masters";

const tones = ["espresso", "charcoal", "copper", "espresso", "charcoal"] as const;

export function MastersIndex() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {masters.map((master, i) => (
        <Reveal key={master.slug} delay={i * 0.06}>
          <Link href={`/masters/${master.slug}`} className="group block h-full">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
              <PhotoPlaceholder
                shotNumber={String(i + 1).padStart(2, "0")}
                label={master.name}
                description={`Портрет стилиста ${master.name}, ${master.role}`}
                tone={tones[i % tones.length]}
                subject="portrait"
                aspectClassName="h-full"
                className="transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <h2 className="mt-4 font-display text-xl text-foreground">{master.name}</h2>
            <p className="mt-1 text-sm text-muted">{master.role}</p>
            <p className="mt-3 flex flex-wrap gap-1.5">
              {master.specialties.map((s) => (
                <span key={s} className="rounded-full border border-border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.04em] text-foreground/70">
                  {s}
                </span>
              ))}
            </p>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
