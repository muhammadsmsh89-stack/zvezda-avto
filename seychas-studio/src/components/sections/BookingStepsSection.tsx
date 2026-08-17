import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { contacts } from "@/lib/contacts";
import { ctaLabels } from "@/lib/site";

const steps = [
  {
    n: "01",
    title: "Выберите услугу",
    text: "Определитесь с направлением и посмотрите примеры работ мастеров.",
  },
  {
    n: "02",
    title: "Выберите мастера",
    text: "Познакомьтесь с командой студии, специализацией и загруженностью.",
  },
  {
    n: "03",
    title: "Выберите время",
    text: "Перейдите в DIKIDI — там видно расписание и доступное время каждого специалиста.",
  },
] as const;

export function BookingStepsSection() {
  return (
    <section className="border-y border-border bg-surface py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Как записаться</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3 max-w-xl text-pretty text-3xl leading-[1.1] text-foreground sm:text-4xl">
            Записаться — просто
          </h2>
        </Reveal>

        <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          <div aria-hidden className="absolute left-0 right-0 top-6 hidden h-px bg-border sm:block" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1} className="relative">
              <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent bg-surface text-sm font-bold text-accent">
                {s.n}
              </span>
              <h3 className="mt-5 text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{s.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-12">
          <Button size="lg" href={contacts.dikidiUrl}>
            {ctaLabels.primary}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
