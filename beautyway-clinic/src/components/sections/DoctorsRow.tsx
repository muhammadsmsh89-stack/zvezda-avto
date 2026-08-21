import Link from "next/link";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Media } from "../ui/Media";
import { IconArrow } from "../ui/Icons";
import { doctors } from "@/lib/content";

export function DoctorsRow({ limit = 6 }: { limit?: number }) {
  const list = [...doctors]
    .sort((a, b) => (b.experienceYears ?? 0) - (a.experienceYears ?? 0))
    .slice(0, limit);

  return (
    <section className="border-b border-line bg-porcelain py-14 sm:py-20">
      <Container>
        <SectionHeading
          index="04"
          eyebrow="Команда"
          title="Врачи, которые вас примут"
          intro="Все процедуры выполняют врачи с профильным медицинским образованием. Стаж указан по данным клиники."
          link={{ href: "/vrachi", label: `Все врачи (${doctors.length})` }}
        />

        <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
          {list.map((d) => (
            <li key={d.slug}>
              <Link
                href={`/vrachi/${d.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[10px] border border-line bg-milk transition-colors hover:border-plum/45"
              >
                <Media
                  name={`doctors/${d.slug}`}
                  widths={[400, 800]}
                  ratio="3 / 4"
                  alt={`${d.name} — ${d.post}`}
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                  objectPosition="center 18%"
                />
                <div className="flex flex-1 flex-col p-3.5">
                  <p className="text-[0.9375rem] font-semibold leading-snug text-graphite group-hover:text-plum-deep">
                    {d.name}
                  </p>
                  <p className="mt-1.5 flex-1 text-[0.75rem] leading-snug text-graphite-soft">{d.post}</p>
                  {d.experienceText && (
                    <p className="mt-2.5 flex items-center gap-1.5 border-t border-line pt-2.5 text-[0.75rem] font-medium text-plum">
                      {d.experienceText}
                      <IconArrow className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
