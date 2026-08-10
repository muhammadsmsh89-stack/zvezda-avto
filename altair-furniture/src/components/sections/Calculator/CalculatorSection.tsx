import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BriefForm } from "./BriefForm";

export function CalculatorSection() {
  return (
    <section id="calculator" className="bg-stone py-20 sm:py-28">
      <Container size="content">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              index="§05"
              eyebrow="Заявка"
              title="Рассчитать проект"
              lead="Три коротких шага — дальше свяжемся, чтобы уточнить детали и назначить замер."
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <BriefForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
