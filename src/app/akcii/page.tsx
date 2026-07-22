import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { promotions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Акции",
  description: "Актуальные акции автотехцентра «Звезда» в Махачкале: бесплатная диагностика ходовой и программа лояльности.",
};

export default function AkciiPage() {
  return (
    <>
      <PageHero eyebrow="Акции" breadcrumb="Акции" title="Актуальные акции и предложения" />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Stagger className="grid gap-6 md:grid-cols-2">
            {promotions.map((promo) => (
              <StaggerItem key={promo.title}>
                <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface to-surface-2 p-10">
                  <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
                  <h2 className="relative font-sans text-2xl font-extrabold text-foreground md:text-3xl">
                    {promo.title}
                  </h2>
                  <p className="relative mt-5 text-sm leading-relaxed text-muted">{promo.description}</p>
                  <Link
                    href="/#booking"
                    className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
                  >
                    {promo.cta}
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <p className="mt-10 text-center text-xs text-muted">
            Акции не суммируются с другими предложениями. Уточняйте актуальные условия по телефону перед визитом.
          </p>
        </div>
      </section>
    </>
  );
}
