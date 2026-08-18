import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { masters } from "@/lib/masters";
import { whatsappBookingLink } from "@/lib/contacts";
import { ctaLabels } from "@/lib/site";

export function MastersGrid() {
  return (
    <div className="divide-y divide-border border-y border-border">
      {masters.map((m, i) => (
        <Reveal key={m.slug} delay={i * 0.07}>
          <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-[3.5rem_1fr_auto] sm:items-center sm:gap-6 lg:py-10">
            <span className="font-display text-2xl text-muted sm:text-3xl">{String(i + 1).padStart(2, "0")}</span>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{m.role}</p>
              <h3 className="mt-1 text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
                {m.name}
              </h3>
              {m.note && (
                <p className="mt-3 max-w-xl text-pretty text-sm leading-relaxed text-muted sm:text-base">{m.note}</p>
              )}
            </div>

            <div className="sm:justify-self-end">
              <Button href={whatsappBookingLink(undefined, m.name)} variant="secondary" size="md">
                {ctaLabels.chooseMaster}
              </Button>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
