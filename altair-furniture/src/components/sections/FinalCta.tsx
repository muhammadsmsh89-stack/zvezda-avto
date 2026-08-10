"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { track } from "@/lib/analytics";

export function FinalCta() {
  return (
    <section className="bg-ink-2 py-20 text-paper sm:py-28">
      <Container size="content">
        <Reveal className="text-center">
          <p className="font-mono-tag text-xs uppercase tracking-[0.16em] text-paper/50">§09 Заявка</p>
          <h2 className="text-balance font-display mx-auto mt-5 max-w-xl text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.15] text-paper">
            Опишите пространство. Мы предложим решение.
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <a
              href="#calculator"
              onClick={() => track("hero_cta_click", { source: "final_cta" })}
              className="inline-flex items-center justify-center bg-paper px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-paper/90"
            >
              Рассчитать проект
            </a>
            <WhatsAppLink className="text-sm text-paper underline decoration-paper/30 underline-offset-4 hover:decoration-paper">
              Написать в WhatsApp
            </WhatsAppLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
