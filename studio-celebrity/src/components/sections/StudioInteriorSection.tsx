import { Container } from "@/components/ui/Container";
import { Reveal, FrameReveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { studio } from "@/lib/studio";

export function StudioInteriorSection() {
  const mapsSearch = `https://yandex.ru/maps/?text=${encodeURIComponent(studio.addressFull)}`;

  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">О студии</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 text-pretty text-3xl leading-[1.1] text-foreground sm:text-4xl">
                Пространство Celebrity
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <TextLink href={mapsSearch}>Построить маршрут</TextLink>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mt-10">
          <FrameReveal>
            <PhotoPlaceholder
              shotNumber="Interior"
              label="Интерьер студии"
              description="Общий план пространства студии — зона приёма или рабочее место мастера"
              tone="ivory"
              aspectClassName="aspect-[16/8]"
            />
          </FrameReveal>
        </Reveal>

        <div className="mt-4 grid grid-cols-3 gap-4">
          {["Зона окрашивания", "Ресепшн", "Brow-кабинет"].map((label, i) => (
            <Reveal key={label} delay={0.18 + i * 0.06}>
              <PhotoPlaceholder
                shotNumber={String(i + 2).padStart(2, "0")}
                label={label}
                description="Деталь интерьера студии"
                tone={i % 2 === 0 ? "ivory" : "espresso"}
                aspectClassName="aspect-square"
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-muted">
          <span>{studio.addressFull}</span>
          <span>{studio.landmark}</span>
        </Reveal>
      </Container>
    </section>
  );
}
