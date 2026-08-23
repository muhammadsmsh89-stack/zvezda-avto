import type { Metadata } from "next";
import { promos } from "@/data/promos";
import { formatPrice } from "@/lib/format";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { PromoCta } from "@/components/DirectionCta";
import { JsonLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Акции и абонементы",
  description:
    "Скидка на первое посещение лазерной эпиляции и абонементы на 6 и 10 процедур с выгодой от 10 до 30 % — INUNICA clinic, Белгород.",
  alternates: { canonical: "/akcii/" },
};

export default function PromoPage() {
  return (
    <>
      <PageIntro
        eyebrow="Акции"
        title="Акции и абонементы"
        lead="Два предложения, которые работают постоянно: скидка на первый визит и абонементы на курс. Разовых распродаж клиника не устраивает."
      />

      <section className="pb-24 sm:pb-32">
        <Container wide>
          <ul className="space-y-14">
            {promos.map((p) => (
              <Reveal as="li" key={p.title} className="rule pt-8">
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16">
                  <div>
                    <h2 className="font-display text-[2rem] text-ink sm:text-[2.75rem]">
                      {p.title}
                    </h2>
                    <p className="mt-6 max-w-[56ch] text-[1.125rem] leading-[1.7] text-ink-soft">
                      {p.body}
                    </p>
                    <p className="mt-5 text-[1rem] leading-[1.6] text-ink-mute">
                      {p.note}
                    </p>
                  </div>

                  <div className="lg:self-center">
                    {p.price && (
                      <p className="flex items-baseline gap-4">
                        <span className="font-display text-[3rem] tabular-nums text-accent">
                          {formatPrice(p.price)}
                        </span>
                        {p.oldPrice && (
                          <span className="text-[1.125rem] tabular-nums text-ink-mute line-through">
                            {formatPrice(p.oldPrice)}
                          </span>
                        )}
                      </p>
                    )}
                    <PromoCta title={p.title} />
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>

          <p className="rule mt-16 max-w-[70ch] pt-8 text-[1rem] leading-[1.7] text-ink-mute">
            {site.offerNotice} {site.legalNotice}
          </p>
        </Container>
      </section>

      <JsonLd
        data={breadcrumbLd([
          { name: "Главная", path: "/" },
          { name: "Акции", path: "/akcii/" },
        ])}
      />
    </>
  );
}
