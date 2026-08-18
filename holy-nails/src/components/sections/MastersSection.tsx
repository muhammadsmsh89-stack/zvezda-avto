import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { MastersGrid } from "@/components/MastersGrid";

export function MastersSection() {
  return (
    <section id="masters" className="pt-14 pb-20 lg:pt-20 lg:pb-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Мастера</p>
            <h2 className="mt-3 text-pretty text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
              Руки, которым доверяют
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <TextLink href="/masters">Вся команда</TextLink>
          </Reveal>
        </div>

        <div className="mt-12">
          <MastersGrid />
        </div>
      </Container>
    </section>
  );
}
