import type { Metadata } from "next";
import Link from "next/link";
import { directions } from "@/data/directions";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Услуги",
  description:
    "Направления центра «Этель»: косметология лица и тела, трихология, гинекология, подология, салон красоты.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Услуги"
        title="Направления клиники"
        lead="Если не уверены, с чего начать, откройте «Что вас беспокоит» — там навигация построена по задаче, а не по названию услуги."
      >
        <Link
          href="/concerns/"
          className="mt-6 inline-block text-[1rem] text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
        >
          Перейти к навигатору по задачам →
        </Link>
      </PageIntro>

      <section className="pb-24">
        <Container wide>
          <ul className="grid gap-x-8 gap-y-14 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-3">
            {directions.map((d, i) => (
              <Reveal as="li" key={d.slug} delay={(i % 3) * 80} className="rule pt-6">
                <Link href={`/services/${d.slug}/`} className="group block">
                  <h2 className="font-display text-[1.5rem] text-ink group-hover:text-accent">
                    {d.title}
                  </h2>
                  <p className="mt-3 text-[1rem] leading-[1.6] text-ink-soft">{d.lead}</p>
                  <span className="mt-4 inline-block text-[0.9375rem] text-ink-mute">
                    Подробнее →
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <JsonLd
        data={breadcrumbLd([
          { name: "Главная", path: "/" },
          { name: "Услуги", path: "/services/" },
        ])}
      />
    </>
  );
}
