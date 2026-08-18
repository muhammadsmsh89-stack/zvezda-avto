import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SafetyIcon, Check } from "@/components/ui/Icons";

const points = [
  "Работаем по требованиям СанПиН",
  "Выравнивание ногтевой пластины включено в стоимость",
  "Гарантия на покрытие — 2 недели",
];

export function SafetySection() {
  return (
    <section className="bg-deep py-16 text-background lg:py-20">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <Reveal className="flex items-start gap-4 lg:max-w-sm">
          <SafetyIcon className="mt-1 h-8 w-8 shrink-0 text-accent" />
          <h2 className="text-pretty text-2xl leading-tight text-background sm:text-3xl">
            Красота начинается с безопасности
          </h2>
        </Reveal>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8 lg:flex-1 lg:max-w-2xl">
          {points.map((p, i) => (
            <Reveal key={p} delay={0.08 + i * 0.06} as="li" className="flex items-start gap-2.5 text-sm leading-relaxed text-background/80">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {p}
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
