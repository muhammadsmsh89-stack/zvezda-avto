import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { withBase } from "@/lib/basePath";
import { concerns, findConcern, areas } from "@/data/concerns";
import { equipment } from "@/data/equipment";
import { findDoctor } from "@/data/doctors";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { ThreadLine } from "@/components/ui/ThreadLine";
import { ConcernCta } from "./ConcernCta";
import { JsonLd, breadcrumbLd } from "@/lib/seo";

export function generateStaticParams() {
  return concerns.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = findConcern(slug);
  if (!c) return {};
  return {
    title: c.label,
    description: `${c.lead} Врач подберёт технологии и план на консультации в клинике «Этель».`,
    alternates: { canonical: `/concerns/${c.slug}/` },
  };
}

export default async function ConcernPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = findConcern(slug);
  if (!c) notFound();

  const area = areas.find((a) => a.id === c.area);
  const relatedTech = equipment.filter((e) => c.equipmentSlugs.includes(e.slug));
  const relatedDoctor = findDoctor(c.doctorSlug);
  const relatedDoctors = relatedDoctor ? [relatedDoctor] : [];

  return (
    <>
      <PageIntro
        eyebrow={area?.label ?? "Задача"}
        title={c.label}
        lead={c.lead}
        parent={{ label: "Что вас беспокоит", href: "/concerns/" }}
      >
        <ConcernCta label={c.label} />
      </PageIntro>

      {/* Нить маршрута: беспокоит → врач → технология. */}
      <section className="pb-24">
        <Container wide>
          <div className="relative grid gap-12 border-t border-line pt-12 lg:grid-cols-3">
            <div className="pointer-events-none absolute top-12 right-0 left-0 hidden h-px lg:block">
              <ThreadLine orientation="horizontal" nodeAt="none" className="opacity-50" />
            </div>

            <Reveal>
              <span className="font-mono text-[0.8125rem] text-accent">01 — беспокоит</span>
              <h2 className="font-display mt-3 text-[1.5rem] text-ink">{c.label}</h2>
              <p className="mt-2 text-[0.9375rem] leading-[1.6] text-ink-soft">{c.lead}</p>
            </Reveal>

            <Reveal delay={100}>
              <span className="font-mono text-[0.8125rem] text-accent">02 — врач</span>
              {relatedDoctors.length > 0 ? (
                <ul className="mt-3 space-y-4">
                  {relatedDoctors.map((d) => (
                    <li key={d.slug}>
                      <Link href={`/doctors/${d.slug}/`} className="group flex items-center gap-3">
                        <span className="relative h-12 w-12 shrink-0 overflow-hidden bg-line">
                          <Image src={withBase(d.photo)} alt={d.name} fill sizes="48px" className="object-cover" />
                        </span>
                        <span>
                          <span className="block text-[1rem] text-ink group-hover:text-accent">{d.name}</span>
                          <span className="block text-[0.8125rem] text-ink-mute">{d.role}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-[0.9375rem] text-ink-soft">
                  Специалиста определит администратор при записи.
                </p>
              )}
            </Reveal>

            <Reveal delay={200}>
              <span className="font-mono text-[0.8125rem] text-accent">03 — технология</span>
              {relatedTech.length > 0 ? (
                <ul className="mt-3 space-y-2">
                  {relatedTech.map((e) => (
                    <li key={e.slug}>
                      <Link
                        href={`/technology/${e.slug}/`}
                        className="text-[1rem] text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
                      >
                        {e.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-[0.9375rem] text-ink-soft">
                  Метод подбирается индивидуально на консультации.
                </p>
              )}
            </Reveal>
          </div>
        </Container>
      </section>

      <JsonLd
        data={breadcrumbLd([
          { name: "Главная", path: "/" },
          { name: "Что вас беспокоит", path: "/concerns/" },
          { name: c.label, path: `/concerns/${c.slug}/` },
        ])}
      />
    </>
  );
}
