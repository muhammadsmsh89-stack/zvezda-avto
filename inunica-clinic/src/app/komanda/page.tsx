import type { Metadata } from "next";
import Image from "next/image";
import { withBase } from "@/lib/basePath";
import { doctors } from "@/data/doctors";
import { equipment } from "@/data/equipment";
import { years } from "@/lib/format";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Команда",
  description:
    "Врачи и специалисты INUNICA clinic в Белгороде: дерматовенеролог-косметолог, косметолог-эстетист, массажист. Медицинское образование и регулярное повышение квалификации.",
  alternates: { canonical: "/komanda/" },
};

export default function TeamPage() {
  return (
    <>
      <PageIntro
        eyebrow="Команда"
        title="Кто работает в клинике"
        lead="Каждый сотрудник до приёма на работу проходит дополнительное обучение и дважды в год — курсы повышения квалификации по работе с аппаратами."
      />

      <section className="pb-20 sm:pb-28">
        <Container wide>
          <ul className="space-y-16 sm:space-y-24">
            {doctors.map((d, i) => (
              <Reveal as="li" key={d.slug}>
                <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
                  <div
                    className={`img-zoom relative aspect-[3/4] overflow-hidden bg-veil ${
                      i % 2 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={withBase(d.photo)}
                      alt={`${d.name} — ${d.role.toLowerCase()}, INUNICA clinic`}
                      fill
                      sizes="(min-width: 1024px) 35vw, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="lg:self-center">
                    <span className="eyebrow tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display mt-5 text-[2rem] text-ink sm:text-[2.5rem]">
                      {d.name}
                    </h2>
                    <p className="mt-4 text-[1.125rem] text-ink-soft">{d.role}</p>
                    <p className="mt-1 text-[1rem] text-ink-mute">
                      Медицинский стаж {years(d.experience)}
                    </p>

                    <div className="rule mt-8 pt-5">
                      <p className="eyebrow">Направления</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {d.focus.map((f) => (
                          <li
                            key={f}
                            className="border border-line px-3 py-1.5 text-[0.9375rem] text-ink-soft"
                          >
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-veil py-20 sm:py-28">
        <Container wide>
          <h2 className="font-display text-[2rem] text-ink sm:text-[2.75rem]">
            На чём работает команда
          </h2>
          <ul className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.map((e) => (
              <li key={e.name} className="rule pt-4">
                <h3 className="text-[1.0625rem] font-medium text-ink">{e.name}</h3>
                <p className="mt-2 text-[1rem] leading-[1.55] text-ink-soft">
                  {e.purpose}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <JsonLd
        data={breadcrumbLd([
          { name: "Главная", path: "/" },
          { name: "Команда", path: "/komanda/" },
        ])}
      />
    </>
  );
}
