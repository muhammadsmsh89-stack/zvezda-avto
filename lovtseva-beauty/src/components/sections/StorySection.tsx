import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { whatsappBookingLink } from "@/lib/contacts";
import { ctaLabels, rating } from "@/lib/site";
import { directions } from "@/lib/services";

const proof = [
  { value: "9", label: "направлений в одном центре" },
  { value: String(rating.reviewsCount), label: "отзывов на Яндекс Картах" },
  { value: "6", label: "мастеров, которых клиенты называют по именам" },
] as const;

export function StorySection() {
  return (
    <section className="bg-surface-2/60 py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Один центр, разные мастера</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 max-w-lg text-pretty font-serif text-3xl leading-[1.14] text-foreground sm:text-4xl lg:text-[2.6rem]">
                Волосы, ногти, косметология, лазер и ещё пять направлений — под одной крышей
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
                Не отдельная студия одного мастера, а центр, где можно закрыть несколько задач подряд:
                постричься и сделать биозавивку, дойти до косметолога, обновить маникюр — без поездок по
                городу и новых знакомств с мастерами каждый раз.
              </p>
            </Reveal>
            <Reveal delay={0.22} className="mt-8">
              <Button href={whatsappBookingLink()}>{ctaLabels.primary}</Button>
            </Reveal>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {proof.map((p, i) => (
                <Reveal key={p.label} delay={0.1 + i * 0.06}>
                  <p className="font-serif text-3xl text-foreground sm:text-4xl">{p.value}</p>
                  <p className="mt-1.5 text-xs leading-snug text-muted">{p.label}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.12} className="grid grid-cols-3 gap-x-2 gap-y-5 sm:grid-cols-3">
            {directions.map((d) => (
              <div key={d.slug}>
                <p className="font-serif text-lg text-foreground sm:text-xl">{d.title}</p>
                <p className="mt-1 text-xs leading-snug text-muted">{d.short}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
