import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { promotions } from "@/lib/content";

export function PromotionsSection() {
  return (
    <section id="akcii" className="border-b border-border bg-background py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Акции" title="Актуальные предложения" />

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
          {promotions.map((promo) => (
            <StaggerItem key={promo.title}>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface to-surface-2 p-8">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
                <h3 className="relative font-sans text-2xl font-extrabold text-foreground">
                  {promo.title}
                </h3>
                <p className="relative mt-4 max-w-md text-sm leading-relaxed text-muted">
                  {promo.description}
                </p>
                <Link
                  href="/#booking"
                  className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:opacity-80"
                >
                  {promo.cta} →
                </Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
