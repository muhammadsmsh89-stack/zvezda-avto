import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { withBase } from "@/lib/basePath";
import { doctors, findDoctor } from "@/data/doctors";
import { toList } from "@/lib/format";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { DoctorCta } from "./DoctorCta";
import { JsonLd, breadcrumbLd, physicianLd } from "@/lib/seo";

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = findDoctor(slug);
  if (!d) return {};
  return {
    title: d.name,
    description: `${d.name} — ${d.role} в центре «Этель», Брянск.${d.experience ? ` Опыт: ${d.experience}.` : ""}`,
    alternates: { canonical: `/doctors/${d.slug}/` },
  };
}

export default async function DoctorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = findDoctor(slug);
  if (!d) notFound();

  const education = toList(d.education);
  const internship = toList(d.internship);
  const accreditation = toList(d.accreditation);

  return (
    <>
      <PageIntro eyebrow={d.name} title={d.name} parent={{ label: "Врачи", href: "/doctors/" }}>
        <p className="mt-5 text-[1.0625rem] text-ink-soft">
          {d.role}
          {d.experience && ` · ${d.experience} практики`}
        </p>
        <DoctorCta name={d.name} />
      </PageIntro>

      <Container wide>
        <div className="grid gap-14 pb-24 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-20">
          <Reveal>
            <div className="relative aspect-[2/3] max-w-[420px] overflow-hidden bg-line">
              <Image
                src={withBase(d.photo)}
                alt={d.name}
                fill
                priority
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="space-y-12">
            {education.length > 0 && (
              <Reveal className="rule pt-6">
                <h2 className="eyebrow">Образование</h2>
                <ul className="mt-4 space-y-2">
                  {education.map((e) => (
                    <li key={e} className="text-[1.0625rem] leading-[1.6] text-ink-soft">
                      {e}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {internship.length > 0 && (
              <Reveal className="rule pt-6">
                <h2 className="eyebrow">Интернатура и переподготовка</h2>
                <ul className="mt-4 space-y-2">
                  {internship.map((e) => (
                    <li key={e} className="text-[1.0625rem] leading-[1.6] text-ink-soft">
                      {e}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {d.specialization.length > 0 && (
              <Reveal className="rule pt-6">
                <h2 className="eyebrow">Специализация</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {d.specialization.map((s) => (
                    <li
                      key={s}
                      className="text-[0.9375rem] text-ink-soft before:mr-2 before:text-accent before:content-['·']"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {accreditation.length > 0 && (
              <Reveal className="rule pt-6">
                <h2 className="eyebrow">Аккредитация</h2>
                <p className="tabular mt-4 text-[1rem] text-ink-mute">
                  {accreditation.join(" · ")}
                </p>
              </Reveal>
            )}
          </div>
        </div>
      </Container>

      <JsonLd data={physicianLd(d.name, d.role, `/doctors/${d.slug}/`)} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Главная", path: "/" },
          { name: "Врачи", path: "/doctors/" },
          { name: d.name, path: `/doctors/${d.slug}/` },
        ])}
      />
    </>
  );
}
