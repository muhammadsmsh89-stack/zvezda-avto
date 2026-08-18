import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { RealWorksGallery } from "@/components/RealWorksGallery";

export function WorksWallSection() {
  return (
    <section id="works" className="pt-20 pb-16 lg:pt-28 lg:pb-24">
      <Container>
        <Reveal className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Избранные работы</p>
          <h2 className="mt-3 text-pretty text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
            Маникюр, который хочется рассматривать
          </h2>
        </Reveal>

        <div className="mt-12">
          <RealWorksGallery />
        </div>
      </Container>
    </section>
  );
}
