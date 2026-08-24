import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { directions, findDirection } from "@/data/directions";
import { concerns } from "@/data/concerns";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd, breadcrumbLd, serviceLd } from "@/lib/seo";

export function generateStaticParams() {
  return directions.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = findDirection(slug);
  if (!d) return {};
  return {
    title: d.title,
    description: `${d.title} в центре «Этель», Брянск. ${d.lead}`,
    alternates: { canonical: `/services/${d.slug}/` },
  };
}

export default async function ServiceDirectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = findDirection(slug);
  if (!d) notFound();

  const related = concerns.filter((c) => d.concernSlugs.includes(c.slug));

  return (
    <>
      <PageIntro eyebrow="Направление" title={d.title} lead={d.lead} parent={{ label: "Услуги", href: "/services/" }} />

      <section className="pb-24">
        <Container wide>
          {related.length > 0 ? (
            <>
              <h2 className="eyebrow border-t border-line pt-8">Задачи в этом направлении</h2>
              <ul className="mt-8 grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((c, i) => (
                  <Reveal as="li" key={c.slug} delay={(i % 3) * 60} className="border-b border-line/70 py-5">
                    <Link href={`/concerns/${c.slug}/`} className="group flex items-start justify-between gap-4">
                      <div>
                        <p className="font-display text-[1.25rem] text-ink group-hover:text-accent">
                          {c.label}
                        </p>
                        <p className="mt-1.5 max-w-[34ch] text-[0.9375rem] leading-[1.5] text-ink-soft">
                          {c.lead}
                        </p>
                      </div>
                      <span className="mt-1 shrink-0 text-ink-mute group-hover:text-accent">→</span>
                    </Link>
                  </Reveal>
                ))}
              </ul>
            </>
          ) : (
            <p className="border-t border-line pt-8 text-[1.0625rem] leading-[1.7] text-ink-soft">
              Подробный план по этому направлению собирает администратор при
              записи — направление объединяет несколько услуг зала красоты.
            </p>
          )}
        </Container>
      </section>

      <JsonLd data={serviceLd(d.title, d.lead, `/services/${d.slug}/`)} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Главная", path: "/" },
          { name: "Услуги", path: "/services/" },
          { name: d.title, path: `/services/${d.slug}/` },
        ])}
      />
    </>
  );
}
