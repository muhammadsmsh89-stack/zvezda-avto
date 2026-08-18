import { Container } from "@/components/ui/Container";
import { Reveal, FrameReveal } from "@/components/ui/Reveal";
import { RealPhoto } from "@/components/ui/RealPhoto";
import { CupIcon, WifiIcon, ParkingIcon, PawIcon } from "@/components/ui/Icons";
import { realAssets } from "@/lib/realAssets";

const details = [
  { icon: CupIcon, label: "Чай, кофе, шампанское с шоколадками" },
  { icon: WifiIcon, label: "Wi-Fi и фильм или сериал на выбор" },
  { icon: ParkingIcon, label: "Бесплатная парковка у входа" },
  { icon: PawIcon, label: "Можно прийти с питомцем" },
];

export function ExperienceSection() {
  return (
    <section className="pt-20 pb-14 lg:pt-28 lg:pb-20">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <FrameReveal className="aspect-[16/10] w-full lg:col-span-7" direction="right">
          <RealPhoto
            src={realAssets.interior.src}
            width={realAssets.interior.width}
            height={realAssets.interior.height}
            alt="Интерьер Holy Nails — рабочие места и зона отдыха"
            label="Интерьер студии"
            sizes="(min-width: 1024px) 55vw, 100vw"
            aspectClassName="h-full"
          />
        </FrameReveal>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-muted">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full" style={{ background: "#e8188c" }} />
              Атмосфера
            </p>
            <h2 className="mt-3 text-pretty text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
              Два часа для себя
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted">
              Маникюр — деталь необязательная, но как же она всё меняет. Пока мастер работает, можно
              выдохнуть: чай или кофе с шоколадками, фильм на выбор и спокойный ритм студии в центре Тулы.
            </p>
          </Reveal>

          <ul className="mt-8 flex flex-col gap-4">
            {details.map((d, i) => (
              <Reveal key={d.label} delay={0.08 + i * 0.05} as="li" className="flex items-center gap-3 text-sm text-foreground/85">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border text-foreground/70">
                  <d.icon className="h-4 w-4" />
                </span>
                {d.label}
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
