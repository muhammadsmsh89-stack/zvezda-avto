import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { GoalLink } from "../ui/GoalLink";
import { IconArrow } from "../ui/Icons";
import { serviceGroups, explainer } from "@/lib/services";

const goalByGroup: Record<string, string> = {
  zashchita: "protect",
  "vneshniy-vid": "look",
  salon: "interior",
  dooborudovanie: "comfort",
  kuzov: "look",
};

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="border-t border-line bg-bg-deep py-16 sm:py-24 lg:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Услуги"
            title="Всё необходимое для вашего автомобиля"
            lead="Пять направлений вместо длинного списка. Выберите то, что ближе к вашей задаче — расчёт подстроится."
            id="services-title"
          />
        </Reveal>

        <ul className="mt-9 sm:mt-12 lg:grid lg:grid-cols-2 lg:gap-x-10">
          {serviceGroups.map((g, i) => (
            <Reveal as="li" key={g.id} delay={(i % 2) * 60} className="border-t border-line">
              <GoalLink
                goal={goalByGroup[g.id] ?? "unknown"}
                ariaLabel={`${g.title} — перейти к расчёту стоимости`}
                className="group flex flex-col py-7 transition-colors duration-200 sm:py-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[21px] font-bold leading-tight sm:text-[24px]">
                    {g.title}
                  </h3>
                  <span className="mt-0.5 shrink-0 text-right">
                    <span className="block text-[10.5px] uppercase tracking-[0.14em] text-fg-faint">
                      от
                    </span>
                    <span className="block text-[15px] font-semibold tabular-nums text-gold sm:text-[16px]">
                      {g.priceFrom}
                    </span>
                  </span>
                </div>

                <p className="mt-2.5 max-w-[42ch] text-[14.5px] leading-[1.5] text-fg-dim sm:text-[15px]">
                  {g.benefit}
                </p>

                <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-line px-3 py-1.5 text-[12.5px] leading-none text-fg-dim"
                    >
                      {it}
                    </li>
                  ))}
                </ul>

                <span className="mt-5 inline-flex min-h-[24px] items-center gap-2 text-[13.5px] font-semibold text-fg transition-colors duration-200 group-hover:text-gold-bright">
                  Рассчитать стоимость
                  <IconArrow className="size-4 text-gold" />
                </span>
              </GoalLink>
            </Reveal>
          ))}
        </ul>

        <p className="mt-6 border-t border-line pt-5 text-[12.5px] leading-relaxed text-fg-faint">
          Цены указаны как минимальные и зависят от класса автомобиля, состояния
          кузова и объёма работ. Точная стоимость — после осмотра и сметы.
        </p>

        {/* Для тех, кто впервые выбирает между плёнкой, керамикой и винилом */}
        <Reveal className="mt-12 sm:mt-16">
          <h3 className="text-[19px] font-bold sm:text-[22px]">
            Плёнка, керамика или винил — в чём разница
          </h3>
          <div className="mt-5 border-t border-line">
            {explainer.map((e) => (
              <details key={e.term} className="group border-b border-line">
                <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15.5px] font-semibold marker:hidden sm:text-[16px]">
                  {e.term}
                  <span
                    aria-hidden="true"
                    className="relative grid size-6 shrink-0 place-items-center text-gold"
                  >
                    <span className="absolute h-px w-3.5 bg-current" />
                    <span className="absolute h-3.5 w-px bg-current transition-transform duration-200 ease-out group-open:rotate-90 group-open:opacity-0" />
                  </span>
                </summary>
                <p className="max-w-[60ch] pb-5 pr-8 text-[14.5px] leading-[1.6] text-fg-dim">
                  {e.text}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
