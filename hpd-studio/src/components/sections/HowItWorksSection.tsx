import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Свяжитесь с HPD",
    text: "По телефону, в WhatsApp или Telegram — как удобнее.",
  },
  {
    number: "02",
    title: "Расскажите, что хотите сделать",
    text: "Опишите автомобиль и задачу — подберём подходящие услуги.",
  },
  {
    number: "03",
    title: "Согласуйте запись",
    text: "Договоритесь об удобном времени и приезжайте на Пушкинскую, 8.",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section className="bg-surface-2/50 py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Как записаться</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 max-w-xl text-pretty text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
            Три шага до записи
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08} className="relative">
              <span className="font-[var(--font-display)] text-5xl font-semibold text-accent/30">{step.number}</span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
