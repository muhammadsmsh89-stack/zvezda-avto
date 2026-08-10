import { aboutMedia } from "@/data/media";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SceneFrame } from "@/components/media/SceneFrame";

const PRINCIPLES = [
  "Один автомобиль.",
  "Один согласованный результат.",
  "Несколько направлений работы в одном центре.",
];

export function About() {
  return (
    <section id="about" className="bg-paper-2 py-24 text-ink sm:py-32">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionHeading eyebrow="О центре" title="Один центр, несколько направлений" tone="light" />
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-8 flex flex-col gap-3">
                {PRINCIPLES.map((line) => (
                  <li
                    key={line}
                    className="font-display text-xl font-semibold leading-snug text-ink sm:text-2xl"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="text-pretty mt-8 max-w-md text-[15px] leading-relaxed text-ink-muted">
                Центр работает на Жемчужной, 12 в Махачкале. Клиенты в отзывах отдельно
                отмечают личное присутствие владельца Ильяса на объекте и то, что заявленные
                сроки выдерживаются — это повторяется в независимых отзывах на Яндекс Картах
                и в 2ГИС, а не в единичном случае.
              </p>
              <p className="text-pretty mt-4 max-w-md text-[15px] leading-relaxed text-ink-muted">
                Ещё одна деталь, которую называют разные клиенты в разное время, — гостей
                встречают чаем. Мелочь, но она повторяется достаточно часто, чтобы быть частью
                того, как здесь принято работать с людьми, а не разовым случаем.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.14}>
              <SceneFrame media={aboutMedia} caption="Liberty Technology — Жемчужная, 12" tone="light" aspect="aspect-[4/5] sm:aspect-[4/3]" />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
