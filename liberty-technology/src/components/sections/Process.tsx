import { processSteps } from "@/data/process";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section id="process" className="border-t border-line-dark bg-void py-24 sm:py-32">
      <Container size="wide">
        <Reveal>
          <SectionHeading eyebrow="Process" title="Как строится работа" />
        </Reveal>

        <div className="relative mt-16 max-w-2xl">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-line-dark-strong sm:left-[23px]" aria-hidden="true" />
          <ol className="flex flex-col gap-10 sm:gap-12">
            {processSteps.map((step, i) => (
              <Reveal key={step.index} delay={i * 0.06} as="li">
                <div className="relative flex gap-6 pl-0 sm:gap-8">
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center border border-line-dark-strong bg-void font-mono-tag text-sm text-accent sm:h-12 sm:w-12">
                    {step.index}
                  </span>
                  <div className="pt-1.5 sm:pt-2.5">
                    <h3 className="font-display text-lg font-semibold text-paper sm:text-xl">{step.title}</h3>
                    <p className="text-pretty mt-2 max-w-md text-sm leading-relaxed text-paper/60">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
