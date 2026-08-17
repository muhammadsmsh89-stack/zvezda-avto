import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { masters } from "@/lib/masters";
import { getDirectionBySlug } from "@/lib/services";

export function MastersIndex() {
  const featured = masters.find((m) => m.featured) ?? masters[0];
  const rest = masters.filter((m) => m.slug !== featured.slug);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1.4fr]">
      <Reveal>
        <MasterCard master={featured} large />
      </Reveal>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
        {rest.map((m, i) => (
          <Reveal key={m.slug} delay={0.06 + i * 0.06}>
            <MasterCard master={m} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function MasterCard({ master, large }: { master: (typeof masters)[number]; large?: boolean }) {
  const direction = getDirectionBySlug(master.categorySlug);
  return (
    <Link href={`/masters/${master.slug}`} className="group block h-full">
      <div className={`relative overflow-hidden rounded-2xl border border-border ${large ? "aspect-[4/5]" : "aspect-[3/4]"}`}>
        <PhotoPlaceholder
          shotNumber={direction?.code ?? ""}
          label={master.name}
          description={`Портрет мастера — ${master.name}, ${master.role}`}
          tone={large ? "espresso" : "ivory"}
          subject="portrait"
          aspectClassName="h-full"
          className="transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <h3 className={large ? "mt-4 font-serif text-2xl text-foreground" : "mt-4 text-base font-semibold text-foreground"}>{master.name}</h3>
      <p className="mt-1 text-sm text-muted">{master.role}</p>
    </Link>
  );
}
