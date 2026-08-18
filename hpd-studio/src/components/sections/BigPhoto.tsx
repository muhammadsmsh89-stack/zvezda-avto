import { Container } from "@/components/ui/Container";
import { FrameReveal } from "@/components/ui/Reveal";
import { PhotoPanel } from "@/components/ui/PhotoPanel";

export function BigPhoto() {
  return (
    <section className="bg-background py-14 lg:py-20">
      <Container>
        <FrameReveal className="aspect-[16/10] w-full rounded-[1.75rem] border border-border sm:aspect-[21/9]">
          <PhotoPanel
            variant="wash"
            sweepFrom="right"
            label="Работа детейлера HPD над кузовом автомобиля"
            className="h-full w-full rounded-[1.75rem]"
          />
        </FrameReveal>
      </Container>
    </section>
  );
}
