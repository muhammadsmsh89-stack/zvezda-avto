import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { trustStats } from "@/lib/content";

export function TrustStats() {
  return (
    <section className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <Stagger className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {trustStats.map((stat) => (
            <StaggerItem key={stat.label} className="border-l border-border pl-5">
              <div className="font-sans text-4xl font-extrabold text-foreground md:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm leading-snug text-muted">{stat.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
