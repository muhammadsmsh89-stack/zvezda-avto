import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { contacts } from "@/lib/contacts";
import { ctaLabels } from "@/lib/site";

const points = [
  {
    title: "Аккуратность и внимание к деталям",
    text: "«Максимально нежно, всё вдумчиво и чисто» — по отзывам клиентов о работе мастеров.",
  },
  {
    title: "Любая задумка воплощается",
    text: "«Любая задумка по дизайну исполняется, и не нужно переживать, что будет что-то не так».",
  },
  {
    title: "Уютная атмосфера и интерьер",
    text: "Клиенты отдельно отмечают приятную атмосферу и красивый интерьер студии.",
  },
  {
    title: "Чай, кофе и вода",
    text: "Перед процедурой гостям предлагают напитки на выбор.",
  },
  {
    title: "Удобная запись онлайн",
    text: "Выбрать мастера и свободное время можно самостоятельно, без звонков — через DIKIDI.",
  },
] as const;

export function WhySection() {
  return (
    <section className="bg-surface-2/60 py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Почему SEYCHAS</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 text-pretty text-3xl leading-[1.12] text-foreground sm:text-4xl">
                То, что клиенты ценят на деле
              </h2>
            </Reveal>
            <Reveal delay={0.16} className="mt-7">
              <Button href={contacts.dikidiUrl}>{ctaLabels.primary}</Button>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={0.1 + i * 0.06}>
                <h3 className="text-base font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
