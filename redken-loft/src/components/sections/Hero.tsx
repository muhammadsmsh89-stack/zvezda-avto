import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { FrameReveal } from "@/components/ui/Reveal";
import { studio, ctaLabels } from "@/lib/site";
import { whatsappBookingLink } from "@/lib/contacts";
import { colorTechniques } from "@/lib/services";

const filmStrip = [
  { id: "01", label: "Airtouch", tone: "copper" as const, subject: "portrait" as const, ratio: "aspect-[3/4]", grow: "lg:basis-[19%]" },
  { id: "02", label: "Balayage", tone: "espresso" as const, subject: "wide" as const, ratio: "aspect-[4/3]", grow: "lg:basis-[26%]" },
  { id: "03", label: "Shatush", tone: "charcoal" as const, subject: "detail" as const, ratio: "aspect-square", grow: "lg:basis-[15%]" },
  { id: "04", label: "Блонд", tone: "copper" as const, subject: "portrait" as const, ratio: "aspect-[3/4]", grow: "lg:basis-[19%]" },
  { id: "05", label: "Стрижки", tone: "charcoal" as const, subject: "wide" as const, ratio: "aspect-[4/3]", grow: "lg:basis-[21%]" },
];

export function Hero() {
  return (
    <>
      <section
        id="hero"
        className="relative mx-auto w-full overflow-hidden px-6 pt-32 text-center
        min-h-[calc(100vh-64px)] md:px-8
        bg-[linear-gradient(to_bottom,var(--surface),var(--background)_50%,var(--surface-3)_92%)]"
      >
        {/* Grid background */}
        <div
          aria-hidden
          className="absolute -z-10 inset-0 h-[640px] w-full opacity-70
          bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)]
          bg-[size:6rem_5rem]
          [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_65%,transparent_105%)]"
        />

        {/* Radial accent */}
        <div
          aria-hidden
          className="animate-fade-up absolute left-1/2 top-[calc(100%-120px)] -z-10 -translate-x-1/2
          h-[520px] w-[130%] rounded-[100%]
          bg-[radial-gradient(closest-side,var(--background)_78%,var(--accent)_100%)] opacity-[0.14]
          md:h-[600px] lg:h-[720px]"
        />

        <a href="#works" className="group inline-block">
          <span
            className="animate-fade-in mx-auto flex w-fit items-center justify-center gap-1 rounded-full
            border-2 border-border bg-surface/70 px-5 py-2 text-sm uppercase tracking-tight text-muted"
          >
            {studio.name} · {studio.city}
            <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </a>

        <h1 className="animate-fade-in mx-auto mt-8 max-w-4xl text-balance font-display text-5xl font-medium leading-[1.04] tracking-tight text-foreground opacity-0 [animation-delay:0.1s] sm:text-6xl md:text-7xl lg:text-8xl">
          Цвет и форма,
          <br />
          которые <em className="italic text-accent">действительно</em>
          <br />
          вам подходят
        </h1>

        <p className="animate-fade-in mx-auto mb-10 mt-6 max-w-xl text-balance text-lg tracking-tight text-muted opacity-0 [animation-delay:0.2s] md:text-xl">
          Авторские стрижки, сложные окрашивания и профессиональный уход в
          центре Краснодара. Сначала изучаем волосы и пожелания — затем
          создаём индивидуальный образ.
        </p>

        <div className="animate-fade-in flex flex-col items-center gap-4 opacity-0 [animation-delay:0.3s]">
          <Button size="lg" href={whatsappBookingLink()} className="w-fit text-lg">
            {ctaLabels.primary}
          </Button>
          <p className="text-xs uppercase tracking-[0.14em] text-muted">
            {colorTechniques.map((t) => t.name).join(" · ")}
          </p>
        </div>

        <div
          aria-hidden
          className="animate-fade-up relative mt-16 h-24 opacity-0
          after:absolute after:inset-0 after:[background:linear-gradient(to_top,var(--background)_15%,transparent)]"
        />
      </section>

      <Container className="pb-16 lg:pb-24">
        <div className="flex gap-3 overflow-x-auto pb-2 sm:gap-4 lg:overflow-visible">
          {filmStrip.map((item, i) => (
            <FrameReveal
              key={item.id}
              delay={0.1 + i * 0.07}
              className={`w-[62vw] shrink-0 overflow-hidden border border-border sm:w-[38vw] lg:w-auto lg:shrink lg:grow ${item.grow} ${item.ratio}`}
            >
              <PhotoPlaceholder
                shotNumber={item.id}
                label={item.label}
                description={`${item.label} — реальная работа стилиста, не фотосток`}
                tone={item.tone}
                subject={item.subject}
                aspectClassName="h-full"
                className="h-full"
              />
            </FrameReveal>
          ))}
        </div>
      </Container>
    </>
  );
}
