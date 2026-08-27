import { Container } from "@/components/ui/Container";
import { Reveal, FrameReveal } from "@/components/ui/Reveal";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { CheckIcon } from "@/components/ui/Icons";
import { brands } from "@/lib/services";

const principles = [
  "Сначала консультация — изучаем структуру и историю окрашивания волос",
  "Честные рекомендации без навязанных процедур",
  "Индивидуальный подбор формы и цвета под тип лица и образ жизни",
  "Стойкий результат и укладка, которую легко повторить дома",
];

export function StorySection() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Подход</p>
          <h2 className="mt-4 text-pretty font-display text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-[2.75rem]">
            Не салон полного цикла — команда стилистов с именем
          </h2>
          <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-foreground/70">
            Redken Loft в Краснодаре уже более 10 лет. Мы намеренно не гонимся за
            широким списком процедур — сила студии в авторской колористике и
            стрижках, которые под силу не каждому мастеру в городе.
          </p>

          <ul className="mt-8 space-y-4">
            {principles.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/80">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-10 border-t border-border pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Работаем на профессиональных материалах</p>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
              {brands.map((b) => (
                <div key={b.name}>
                  <p className="font-display text-lg text-foreground">{b.name}</p>
                  <p className="text-xs text-muted">{b.note}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <FrameReveal delay={0.15} direction="right">
          <PhotoPlaceholder
            shotNumber="02 / STUDIO"
            label="Интерьер Redken Loft"
            description="Интерьер студии — лофт-пространство, рабочие места стилистов"
            tone="charcoal"
            subject="wide"
            aspectClassName="aspect-[4/5] lg:aspect-[3/4]"
            className="rounded-3xl"
          />
        </FrameReveal>
      </Container>
    </section>
  );
}
