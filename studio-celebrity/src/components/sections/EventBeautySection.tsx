"use client";

import { Container } from "@/components/ui/Container";
import { Reveal, FrameReveal } from "@/components/ui/Reveal";
import { Button, TextLink } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { useBooking } from "@/lib/booking";

const scenarios = ["Свадьба", "Мероприятие", "Фотосессия", "Вечерний выход"];

export function EventBeautySection() {
  const { openBooking } = useBooking();

  return (
    <section id="event-beauty" className="bg-deep py-20 text-background lg:py-28">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-nude">Event Beauty</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 text-pretty font-serif-accent text-4xl italic leading-[1.1] text-background sm:text-5xl">
              Макияж + причёска
              <br />в 4 руки
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-background/70">
              Два мастера работают одновременно, чтобы собрать законченный образ и
              сэкономить ваше время перед событием.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="mt-7 flex flex-wrap gap-2.5">
            {scenarios.map((s) => (
              <span
                key={s}
                className="rounded-full border border-background/20 px-4 py-1.5 text-xs font-medium text-background/80"
              >
                {s}
              </span>
            ))}
          </Reveal>

          <Reveal delay={0.32} className="mt-9 flex flex-wrap items-center gap-6">
            <Button variant="nude" onClick={() => openBooking("marina")}>
              Собрать образ →
            </Button>
            <TextLink href="/event-beauty" tone="dark">
              Узнать подробнее
            </TextLink>
          </Reveal>
        </div>

        <Reveal className="order-1 lg:order-2">
          <FrameReveal delay={0.15}>
            <PhotoPlaceholder
              shotNumber="4H"
              label="Событие в 4 руки"
              description="Два мастера одновременно работают над образом клиента"
              tone="charcoal"
              aspectClassName="aspect-[4/5]"
            />
          </FrameReveal>
        </Reveal>
      </Container>
    </section>
  );
}
