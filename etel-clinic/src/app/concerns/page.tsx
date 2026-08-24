import type { Metadata } from "next";
import Link from "next/link";
import { areas, concernsByArea } from "@/data/concerns";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Что вас беспокоит",
  description:
    "Выберите задачу, а не название процедуры: лицо, тело, волосы, женское здоровье, стопы. Врач подберёт план на консультации.",
  alternates: { canonical: "/concerns/" },
};

export default function ConcernsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Навигатор"
        title="Что вас беспокоит?"
        lead="Выберите задачу — а не аппарат или название процедуры. План соберёт врач на консультации."
      />

      {areas.map((a) => {
        const list = concernsByArea(a.id);
        return (
          <section key={a.id} className="pb-20">
            <Container wide>
              <h2 className="font-display border-t border-line pt-8 text-[1.75rem] text-ink">
                <span className="font-mono mr-3 text-[1rem] text-ink-mute">{a.eyebrow}</span>
                {a.label}
              </h2>
              <ul className="mt-8 grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((c) => (
                  <Reveal as="li" key={c.slug} className="border-b border-line/70 py-5">
                    <Link href={`/concerns/${c.slug}/`} className="group flex items-start justify-between gap-4">
                      <div>
                        <p className="font-display text-[1.25rem] text-ink group-hover:text-accent">
                          {c.label}
                        </p>
                        <p className="mt-1.5 max-w-[34ch] text-[0.9375rem] leading-[1.5] text-ink-soft">
                          {c.lead}
                        </p>
                      </div>
                      <span className="mt-1 shrink-0 text-ink-mute transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent">
                        →
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </ul>
            </Container>
          </section>
        );
      })}

      <JsonLd
        data={breadcrumbLd([
          { name: "Главная", path: "/" },
          { name: "Что вас беспокоит", path: "/concerns/" },
        ])}
      />
    </>
  );
}
