import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { ButtonLink } from "../ui/Button";
import { IconArrow } from "../ui/Icons";
import { projects } from "@/lib/projects";
import { withBase } from "@/lib/basePath";
import clsx from "clsx";

export function SelectedProjects() {
  return (
    <section id="works" aria-labelledby="works-title" className="py-16 sm:py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="Работы"
            title="Работы говорят лучше слов"
            lead="Фотографии из архива студии на ул. Подвойского."
            id="works-title"
          />
        </Reveal>

        <ul className="mt-9 grid gap-8 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <Reveal
              as="li"
              key={p.id}
              delay={i % 2 === 1 ? 70 : 0}
              className={clsx(
                // портретные кадры на десктопе занимают одну колонку и тянутся выше
                p.ratio === "341 / 631" ? "sm:row-span-2" : "",
              )}
            >
              <figure>
                <div className="overflow-hidden rounded-[6px] bg-surface">
                  <img
                    src={withBase(p.src)}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    className={clsx(
                      "w-full object-cover",
                      p.ratio === "341 / 631"
                        ? "aspect-[4/5] sm:aspect-[3/4]"
                        : "aspect-[16/11]",
                    )}
                  />
                </div>
                <figcaption className="mt-3.5 flex items-baseline justify-between gap-4 border-t border-line pt-3.5">
                  <div>
                    <p className="text-[17px] font-semibold leading-tight sm:text-[19px]">
                      {p.car}
                    </p>
                    <p className="mt-1 text-small text-fg-dim">
                      {p.work}
                    </p>
                  </div>
                  <span className="shrink-0 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-gold">
                    {p.tag}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-9 sm:mt-12">
          <ButtonLink href="#calculator" variant="secondary" className="w-full sm:w-auto">
            Хочу так же — рассчитать стоимость
            <IconArrow className="size-[18px]" />
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
