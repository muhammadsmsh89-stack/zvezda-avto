import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { trustStats } from "@/lib/content";

export function TrustStats() {
  return (
    <section className="border-y border-border bg-surface py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-8">
        {trustStats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="text-center md:text-left">
            <Counter
              value={stat.value}
              suffix={stat.suffix}
              className="font-display text-4xl font-semibold text-accent md:text-5xl"
            />
            <p className="mt-2 text-sm leading-snug text-muted">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
