import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SceneFrame } from "@/components/media/SceneFrame";
import { philosophyMedia } from "@/data/media";

const principles = [
  {
    index: "01",
    title: "Проект под помещение",
    text: "Сначала замер, потом чертёж — корпус меняется под миллиметры вашей стены, а не наоборот.",
  },
  {
    index: "02",
    title: "Собственное производство",
    text: "Решение можно изменить в процессе без согласований с третьей стороной.",
  },
  {
    index: "03",
    title: "Прямая коммуникация",
    text: "С исполнителем напрямую, а не только с менеджером продаж.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="bg-stone py-20 sm:py-28">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              index="§01"
              eyebrow="Философия"
              title="Лаборатория, а не каталог"
              lead="В шоуруме вы выбираете из готового. В лаборатории — формулируете задачу: сколько места, как открывается дверь, куда падает свет. Мы измеряем помещение, проектируем корпус под него и производим сами."
            />
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <SceneFrame
              media={philosophyMedia}
              label="Узел открывания — фасад / корпус"
              scale="М 1:2"
              sheet="00/06"
            />
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-8 border-t border-border pt-10 sm:grid-cols-3">
          {principles.map((principle, i) => (
            <Reveal key={principle.index} delay={i * 0.08}>
              <span className="font-mono-tag text-sm text-accent">{principle.index}</span>
              <h3 className="font-display mt-2 text-lg font-medium text-ink">{principle.title}</h3>
              <p className="text-pretty mt-2 text-[15px] leading-relaxed text-muted">{principle.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
