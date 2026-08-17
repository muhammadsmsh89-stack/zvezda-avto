import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { MastersIndex } from "@/components/MastersIndex";

export function MastersSection() {
  return (
    <section id="masters" className="bg-background py-20 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Команда</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3 max-w-lg text-pretty font-serif text-3xl leading-[1.1] text-foreground sm:text-4xl">
                Мастера, которых клиенты называют по именам
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <TextLink href="/masters">Вся команда</TextLink>
          </Reveal>
        </div>

        <div className="mt-10">
          <MastersIndex />
        </div>
      </Container>
    </section>
  );
}
