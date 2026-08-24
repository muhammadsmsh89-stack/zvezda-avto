import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FileCheck2, ClipboardCheck, CalendarCheck2, ShieldCheck } from "@/components/ui/Icons";

const points = [
  {
    icon: FileCheck2,
    title: "Договор",
    text: "Работы оформляются официально, с указанием состава работ и материала.",
  },
  {
    icon: ClipboardCheck,
    title: "Фиксированная стоимость",
    text: "После согласования цена фиксируется и не меняется в процессе работ.",
  },
  {
    icon: CalendarCheck2,
    title: "Акт приёма-передачи",
    text: "Состояние автомобиля фиксируется документально при приёмке и выдаче.",
  },
  {
    icon: ShieldCheck,
    title: "Гарантия",
    text: "Гарантия на выполненные работы — по условиям договора.",
  },
] as const;

export function ContractBenefits() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Ответственность</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 text-pretty text-display font-medium text-foreground">
              Всё, о чём договорились, остаётся не только в переписке
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[1.5rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="bg-surface p-6 sm:p-7">
              <p.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-4 text-base font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
