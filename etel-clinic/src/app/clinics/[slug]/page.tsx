import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { withBase } from "@/lib/basePath";
import { clinics, findClinic } from "@/data/clinics";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ClinicCta } from "./ClinicCta";
import { JsonLd, breadcrumbLd } from "@/lib/seo";

export function generateStaticParams() {
  return clinics.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = findClinic(slug);
  if (!c) return {};
  return {
    title: c.name,
    description: `${c.address}. ${c.hours}. Телефон: ${c.phone.display}.`,
    alternates: { canonical: `/clinics/${c.slug}/` },
  };
}

export default async function ClinicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = findClinic(slug);
  if (!c) notFound();

  return (
    <>
      <PageIntro eyebrow={c.district} title={c.name} parent={{ label: "Клиники", href: "/clinics/" }}>
        <ClinicCta clinicName={c.name} />
      </PageIntro>

      <section className="pb-24">
        <Container wide>
          <div className="grid gap-14 border-t border-line pt-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
            <Reveal>
              <div className="relative aspect-4/3 overflow-hidden bg-line">
                <Image
                  src={withBase(c.photo)}
                  alt={c.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 55vw, 90vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={100} className="space-y-8">
              <div>
                <h2 className="eyebrow">Адрес</h2>
                <p className="mt-3 text-[1.25rem] text-ink">{c.address}</p>
                <Button href={c.mapUrl} variant="ghost" className="mt-2">
                  Открыть на карте →
                </Button>
              </div>
              <div className="rule pt-6">
                <h2 className="eyebrow">Телефон</h2>
                <a href={c.phone.href} className="mt-3 block text-[1.25rem] text-ink hover:text-accent">
                  {c.phone.display}
                </a>
              </div>
              <div className="rule pt-6">
                <h2 className="eyebrow">Часы работы</h2>
                <p className="mt-3 text-[1.25rem] text-ink">{c.hours}</p>
              </div>
              <div className="rule pt-6">
                <p className="text-[0.9375rem] leading-[1.6] text-ink-mute">
                  Команда врачей и полный спектр технологий «Этель» доступны
                  во всех трёх клиниках — эту клинику можно выбрать просто по
                  расположению или удобному времени записи.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <JsonLd
        data={breadcrumbLd([
          { name: "Главная", path: "/" },
          { name: "Клиники", path: "/clinics/" },
          { name: c.name, path: `/clinics/${c.slug}/` },
        ])}
      />
    </>
  );
}
