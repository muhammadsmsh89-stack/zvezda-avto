import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { ServiceIndexList } from "@/components/ServiceIndexList";
import { ctaLabels } from "@/lib/site";

export function ServicesIndexSection() {
  return (
    <section id="services" className="pt-20 pb-14 lg:pt-28 lg:pb-20">
      <Container>
        <Reveal className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Услуги</p>
          <h2 className="mt-3 text-pretty text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
            Пять направлений, один результат
          </h2>
        </Reveal>

        <div className="mt-10">
          <ServiceIndexList linkTo="anchor" />
        </div>

        <Reveal delay={0.1} className="mt-8">
          <TextLink href="/prices">{ctaLabels.allServices}</TextLink>
        </Reveal>
      </Container>
    </section>
  );
}
