import Image from "next/image";
import Link from "next/link";
import { withBase } from "@/lib/basePath";
import { doctors } from "@/data/doctors";
import { years } from "@/lib/format";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Doctors() {
  return (
    <section className="py-20 sm:py-28 lg:py-36">
      <Container wide>
        <SectionHeading
          index="05"
          eyebrow="Команда"
          title={<>Те, кто будет с вами работать</>}
          lead="Процедуры проводят специалисты с медицинским образованием — на этом и держится разница между клиникой и салоном."
          className="max-w-[46rem]"
        />

        <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {doctors.map((d, i) => (
            <Reveal as="li" key={d.slug} delay={i * 90}>
              <div className="img-zoom relative aspect-[3/4] overflow-hidden bg-veil">
                <Image
                  src={withBase(d.photo)}
                  alt={`${d.name} — ${d.role.toLowerCase()}, INUNICA clinic`}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>

              <div className="rule mt-6 pt-4">
                <h3 className="font-display text-[1.375rem] text-ink">{d.name}</h3>
                <p className="mt-2 text-[1rem] text-ink-soft">{d.role}</p>
                <p className="mt-1 text-[1rem] text-ink-mute">
                  Медицинский стаж {years(d.experience)}
                </p>

                <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
                  {d.focus.map((f) => (
                    <li
                      key={f}
                      className="border border-line px-3 py-1 text-[0.875rem] text-ink-mute"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12">
          <Link
            href="/komanda/"
            className="text-[1rem] text-ink underline decoration-ink/25 underline-offset-[7px] transition-colors duration-200 hover:decoration-ink"
          >
            Подробнее о команде
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
