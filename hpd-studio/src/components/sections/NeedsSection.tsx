import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/Button";
import { needIcons } from "@/components/ui/Icons";
import { needs, getService } from "@/lib/services";
import Link from "next/link";

export function NeedsSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">С чего начать</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 max-w-xl text-pretty text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
            Что нужно вашему автомобилю?
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[1.5rem] border border-border bg-border sm:grid-cols-2">
          {needs.map((n, i) => {
            const service = getService(n.href.replace("/services/", ""));
            const Icon = service ? needIcons[service.slug as keyof typeof needIcons] : undefined;
            return (
              <Reveal key={n.problem} delay={i * 0.05}>
                <Link
                  href={n.href}
                  data-event="service_click"
                  className="group flex h-full items-center gap-4 bg-surface p-6 transition-colors hover:bg-surface-2 sm:p-7"
                >
                  {Icon && (
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-strong text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                  )}
                  <span className="flex-1">
                    <span className="block text-base text-foreground">{n.problem}</span>
                    <span className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold text-accent">
                      {n.action}
                      <ArrowIcon className="h-3 w-3 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                    </span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
