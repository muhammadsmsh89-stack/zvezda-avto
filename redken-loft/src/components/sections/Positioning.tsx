import { positioning } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Positioning() {
  return (
    <section className="border-t border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              {positioning.eyebrow}
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-balance mt-4 max-w-md text-3xl leading-[1.12] text-ink md:text-4xl">
                {positioning.title}
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-balance mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
                {positioning.lead}
              </p>
            </Reveal>
          </div>

          <Stagger className="lg:col-span-7 lg:col-start-6">
            <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
              {positioning.chain.map((step, i) => (
                <StaggerItem key={step.label} className={i % 2 === 1 ? "sm:border-l sm:pl-8" : ""}>
                  <div className="border-t border-border py-6 sm:py-7">
                    <span className="font-editorial text-xs text-muted">0{i + 1}</span>
                    <h3 className="mt-2 text-lg text-ink">{step.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.detail}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
