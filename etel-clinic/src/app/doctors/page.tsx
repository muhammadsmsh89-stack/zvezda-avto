import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { withBase } from "@/lib/basePath";
import { doctors } from "@/data/doctors";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Врачи и специалисты",
  description:
    "Команда центра «Этель» в Брянске: врачи-косметологи, главный врач, акушер-гинеколог, подологи, массажисты. Реальный опыт и специализация каждого специалиста.",
  alternates: { canonical: "/doctors/" },
};

const groups: { id: (typeof doctors)[number]["roleGroup"]; title: string }[] = [
  { id: "leadership", title: "Руководство" },
  { id: "doctors", title: "Врачи" },
  { id: "nurses", title: "Медсёстры по косметологии" },
  { id: "massage", title: "Массаж" },
  { id: "podology", title: "Подология" },
  { id: "other", title: "Диетология" },
  { id: "salon", title: "Парикмахерский зал" },
  { id: "admin", title: "Администраторы" },
];

export default function DoctorsPage() {
  const chief = doctors.find((d) => d.role === "Главный врач");

  return (
    <>
      <PageIntro
        eyebrow="Команда"
        title="Врачи и специалисты «Этель»"
        lead="Медицинское ядро центра — врачи-косметологи и дерматовенерологи с профильным образованием. Ниже — полная команда по направлениям."
      />

      {chief && (
        <section className="pb-20">
          <Container wide>
            <Reveal className="grid gap-10 border-t border-line pt-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)] lg:items-center">
              <Link href={`/doctors/${chief.slug}/`} className="group block">
                <div className="img-zoom relative aspect-[2/3] max-w-[380px] overflow-hidden bg-line">
                  <Image
                    src={withBase(chief.photo)}
                    alt={chief.name}
                    fill
                    sizes="380px"
                    className="object-cover"
                  />
                </div>
              </Link>
              <div>
                <p className="eyebrow">Главный врач</p>
                <Link href={`/doctors/${chief.slug}/`}>
                  <h2 className="font-display mt-4 text-[2.25rem] text-ink hover:text-accent sm:text-[2.75rem]">
                    {chief.name}
                  </h2>
                </Link>
                <p className="mt-3 text-[1.125rem] text-ink-soft">
                  {chief.experience} практики в косметологии
                </p>
                {chief.specialization.length > 0 && (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {chief.specialization.slice(0, 6).map((s) => (
                      <li
                        key={s}
                        className="font-mono border border-line px-3 py-1.5 text-[0.75rem] text-ink-soft"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  href={`/doctors/${chief.slug}/`}
                  className="mt-6 inline-block text-[1rem] text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
                >
                  Профиль врача →
                </Link>
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      {groups.map((group) => {
        const list = doctors.filter(
          (d) => d.roleGroup === group.id && d.slug !== chief?.slug,
        );
        if (list.length === 0) return null;
        return (
          <section key={group.id} className="pb-20">
            <Container wide>
              <h2 className="eyebrow border-t border-line pt-8">{group.title}</h2>
              <ul className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
                {list.map((d, i) => (
                  <Reveal as="li" key={d.slug} delay={(i % 5) * 60}>
                    <Link href={`/doctors/${d.slug}/`} className="group block">
                      <div className="img-zoom relative aspect-[2/3] overflow-hidden bg-line">
                        <Image
                          src={withBase(d.photo)}
                          alt={d.name}
                          fill
                          sizes="(min-width: 1024px) 18vw, 45vw"
                          className="object-cover"
                        />
                      </div>
                      <p className="font-display mt-3 text-[1.0625rem] text-ink group-hover:text-accent">
                        {d.name}
                      </p>
                      <p className="mt-1 text-[0.875rem] text-ink-soft">
                        {d.experience ? `${d.role} · ${d.experience}` : d.role}
                      </p>
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
          { name: "Врачи", path: "/doctors/" },
        ])}
      />
    </>
  );
}
