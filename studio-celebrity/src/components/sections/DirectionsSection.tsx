import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { directions } from "@/lib/services";
import {
  HairIcon,
  MakeupIcon,
  BrowsLashesIcon,
  EventIcon,
  SchoolIcon,
} from "@/components/ui/Icons";

const icons = {
  hair: HairIcon,
  makeup: MakeupIcon,
  "brows-lashes": BrowsLashesIcon,
  "event-beauty": EventIcon,
  education: SchoolIcon,
} as const;

export function DirectionsSection() {
  return (
    <section id="services" className="border-y border-border bg-background py-20 lg:py-28">
      <Container>
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            Наши направления
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {directions.map((d, i) => {
            const Icon = icons[d.slug as keyof typeof icons];
            return (
              <Reveal key={d.slug} delay={i * 0.06} className="bg-surface">
                <Link
                  href={`/${d.slug}`}
                  className="group flex h-full flex-col justify-between gap-8 p-7 transition-colors hover:bg-surface-2"
                >
                  <Icon className="h-7 w-7 text-foreground" />
                  <div>
                    <h3 className="text-base font-bold uppercase tracking-[0.04em] text-foreground">
                      {d.code}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{d.short}</p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3} className="mt-8 flex justify-center">
          <TextLink href="/prices">Смотреть все услуги</TextLink>
        </Reveal>
      </Container>
    </section>
  );
}
