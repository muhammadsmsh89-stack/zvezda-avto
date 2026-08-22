import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { processSteps } from "@/lib/calculator";

export function Process() {
  return (
    <section
      aria-labelledby="process-title"
      className="border-t border-line bg-bg-deep py-16 sm:py-24 lg:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="Как это работает"
            title="Пять шагов от заявки до выдачи"
            id="process-title"
          />
        </Reveal>

        <ol className="mt-9 border-t border-line sm:mt-12 lg:grid lg:grid-cols-2 lg:gap-x-14">
          {processSteps.map((s, i) => (
            <Reveal
              as="li"
              key={s.n}
              delay={(i % 2) * 60}
              className="flex gap-5 border-b border-line py-6 sm:gap-7 sm:py-7"
            >
              <span
                aria-hidden="true"
                className="w-[26px] shrink-0 pt-1 text-[14px] font-semibold tabular-nums text-gold sm:text-[15px]"
              >
                {s.n}
              </span>
              <div>
                <h3 className="text-[18px] font-semibold leading-tight sm:text-[20px]">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-[52ch] text-body text-fg-dim">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
