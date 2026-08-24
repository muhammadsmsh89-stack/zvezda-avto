import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { withBase } from "@/lib/basePath";
import { equipment, equipmentCategories, equipmentNamesOnly } from "@/data/equipment";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Технологии и оборудование",
  description:
    "Около 40 единиц оборудования клиники «Этель»: лифтинг, лазерные технологии, коррекция фигуры, диагностика. Технологии подбираются врачом под задачу пациента.",
  alternates: { canonical: "/technology/" },
};

export default function TechnologyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Технологии"
        title="Технологии подбираются под задачу"
        lead="Не аппарат выбирает процедуру — врач выбирает аппарат под вашу задачу. Ниже — действующее оборудование клиники по направлениям."
      />

      {equipmentCategories.map((cat) => {
        const items = equipment.filter((e) => e.category === cat.id);
        if (items.length === 0) return null;
        return (
          <section key={cat.id} className="pb-20">
            <Container wide>
              <h2 className="font-display border-t border-line pt-8 text-[1.75rem] text-ink">
                {cat.label}
              </h2>
              <ul className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((e, i) => (
                  <Reveal as="li" key={e.slug} delay={(i % 4) * 60}>
                    <Link href={`/technology/${e.slug}/`} className="group block">
                      <div className="img-zoom relative aspect-4/3 overflow-hidden bg-line">
                        <Image
                          src={withBase(e.photo)}
                          alt={e.name}
                          fill
                          sizes="(min-width: 1024px) 22vw, 45vw"
                          className="object-contain p-6"
                        />
                      </div>
                      <p className="font-display mt-4 text-[1.125rem] text-ink group-hover:text-accent">
                        {e.name}
                      </p>
                    </Link>
                  </Reveal>
                ))}
              </ul>
            </Container>
          </section>
        );
      })}

      <section className="pb-24">
        <Container wide>
          <h2 className="font-display border-t border-line pt-8 text-[1.75rem] text-ink">
            Также в клинике
          </h2>
          <p className="mt-4 max-w-[60ch] text-[1rem] leading-[1.6] text-ink-mute">
            Оборудование, для которого подробная карточка ещё готовится.
            Уточнить, подходит ли конкретная технология вашей задаче, можно на консультации.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {equipmentNamesOnly.map((name) => (
              <li
                key={name}
                className="font-mono border border-line px-3 py-1.5 text-[0.8125rem] text-ink-soft"
              >
                {name}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <JsonLd
        data={breadcrumbLd([
          { name: "Главная", path: "/" },
          { name: "Технологии", path: "/technology/" },
        ])}
      />
    </>
  );
}
