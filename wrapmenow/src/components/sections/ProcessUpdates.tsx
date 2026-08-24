import { Container } from "@/components/ui/Container";
import { Reveal, FrameReveal } from "@/components/ui/Reveal";
import { RealPhoto } from "@/components/ui/RealPhoto";
import { Camera } from "@/components/ui/Icons";
import { projectImage } from "@/lib/media";

const processPhoto = projectImage("jeep-wrangler", 2, "Оклейка кузова крупным планом — процесс работы WrapMeNow");

export function ProcessUpdates() {
  return (
    <section className="border-y border-border bg-surface-2/40 py-20 lg:py-28">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Прозрачность процесса</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 text-pretty text-display font-medium text-foreground">
              Вы знаете, что происходит с машиной
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              По возможности команда показывает этапы работы и может отправлять фотографии процесса — так вы видите
              состояние автомобиля, не приезжая в студию.
            </p>
          </Reveal>

          <Reveal delay={0.18} className="mt-8 max-w-sm rounded-[1.5rem] border border-border bg-surface p-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
              <Camera className="h-3.5 w-3.5 text-accent" />
              14:32
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-foreground/90">
              «Передняя часть готова. Переходим к дверям.»
            </p>
          </Reveal>
        </div>

        <FrameReveal delay={0.1} className="aspect-[4/3] w-full rounded-[1.75rem] border border-border">
          <RealPhoto image={processPhoto} sizes="(min-width: 1024px) 45vw, 92vw" className="h-full w-full" />
        </FrameReveal>
      </Container>
    </section>
  );
}
