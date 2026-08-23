import Image from "next/image";
import { withBase } from "@/lib/basePath";
import { equipment } from "@/data/equipment";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

/**
 * Оборудование списком, а не плиткой логотипов. Пациенту важно не «сколько
 * у вас аппаратов», а какой из них решает его задачу — поэтому у каждой
 * строки назначение, а у ключевых ещё и номер регистрационного удостоверения.
 */
export function Technology() {
  return (
    <section className="bg-plum py-20 text-shell sm:py-28 lg:py-36">
      <Container wide>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
          <div>
            <SectionHeading
              index="03"
              eyebrow="Оборудование"
              title={<>Семь аппаратов под семь разных задач</>}
              lead="Каждый сотрудник проходит курсы повышения квалификации по работе с аппаратами дважды в год — это условие приёма на работу, а не бонус."
              invert
            />

            <Reveal className="mt-12 hidden lg:block">
              <div className="img-zoom relative aspect-[4/3] overflow-hidden">
                <Image
                  src={withBase("/equipment/plasma.webp")}
                  alt="Аппарат для процедур в кабинете INUNICA clinic"
                  fill
                  sizes="45vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <Reveal>
            <ul>
              {equipment.map((e) => (
                <li key={e.name} className="rule-dark py-6 first:border-t-0 first:pt-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="text-[1.125rem] font-medium text-shell">{e.name}</h3>
                    {e.registration && (
                      <span className="text-[0.875rem] tabular-nums text-shell/45">
                        {e.registration}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 max-w-[46ch] text-[1rem] leading-[1.6] text-shell/70">
                    {e.purpose}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
