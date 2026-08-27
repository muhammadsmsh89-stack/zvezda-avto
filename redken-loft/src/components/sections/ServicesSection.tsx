import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { serviceGroups } from "@/lib/services";
import { CheckIcon } from "@/components/ui/Icons";

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <Container>
        <Reveal className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Услуги</p>
          <h2 className="mt-4 text-pretty font-display text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-[2.75rem]">
            Волосы — главное направление. Ногти и брови — для полного образа
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {serviceGroups.map((group, i) => (
            <Reveal key={group.id} delay={i * 0.07} className="glass-card rounded-3xl p-8 transition-colors lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-xl text-foreground sm:text-2xl">{group.title}</h3>
              <p className="mt-2 text-sm text-muted">{group.description}</p>
              <ul className="mt-6 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-8">
          <TextLink href="/prices">Полный прайс на все услуги</TextLink>
        </Reveal>
      </Container>
    </section>
  );
}
