import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-background pb-14 pt-32 lg:pb-20 lg:pt-40">
      <Container>
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-4 max-w-3xl text-pretty text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{description}</p>
          </Reveal>
        )}
        {action && (
          <Reveal delay={0.24} className="mt-8">
            {action}
          </Reveal>
        )}
      </Container>
    </section>
  );
}
