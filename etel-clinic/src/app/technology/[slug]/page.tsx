import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { withBase } from "@/lib/basePath";
import { equipment, equipmentCategories, findEquipment } from "@/data/equipment";
import { concerns } from "@/data/concerns";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { TechnologyCta } from "./TechnologyCta";
import { JsonLd, breadcrumbLd } from "@/lib/seo";

export function generateStaticParams() {
  return equipment.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const e = findEquipment(slug);
  if (!e) return {};
  return {
    title: e.name,
    description: e.summary.slice(0, 155),
    alternates: { canonical: `/technology/${e.slug}/` },
  };
}

export default async function TechnologyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const e = findEquipment(slug);
  if (!e) notFound();

  const category = equipmentCategories.find((c) => c.id === e.category);
  const relatedConcerns = concerns.filter((c) => c.equipmentSlugs.includes(e.slug));

  return (
    <>
      <PageIntro
        eyebrow={category?.label ?? "Технология"}
        title={e.name}
        parent={{ label: "Технологии", href: "/technology/" }}
      >
        <TechnologyCta name={e.name} />
      </PageIntro>

      <Container wide>
        <div className="grid gap-14 pb-24 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-20">
          <Reveal>
            <div className="relative aspect-square max-w-[420px] overflow-hidden bg-stone">
              <Image
                src={withBase(e.photo)}
                alt={e.name}
                fill
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-contain p-10"
              />
            </div>
          </Reveal>

          <div className="space-y-12">
            <Reveal className="rule pt-6">
              <h2 className="eyebrow">Что это</h2>
              <p className="mt-4 max-w-[64ch] text-[1.0625rem] leading-[1.7] text-ink-soft">
                {e.summary}
              </p>
              <p className="mt-6 text-[0.9375rem] text-ink-mute">
                Источник описания — материалы клиники «Этель». Показания и
                ограничения определяет врач на очной консультации.
              </p>
            </Reveal>

            {relatedConcerns.length > 0 && (
              <Reveal className="rule pt-6">
                <h2 className="eyebrow">Может подойти при задачах</h2>
                <ul className="mt-4 space-y-2">
                  {relatedConcerns.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/concerns/${c.slug}/`}
                        className="text-[1.0625rem] text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>
        </div>
      </Container>

      <JsonLd
        data={breadcrumbLd([
          { name: "Главная", path: "/" },
          { name: "Технологии", path: "/technology/" },
          { name: e.name, path: `/technology/${e.slug}/` },
        ])}
      />
    </>
  );
}
