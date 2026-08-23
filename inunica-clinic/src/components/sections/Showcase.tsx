import Image from "next/image";
import { withBase } from "@/lib/basePath";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { GridGlow } from "../ui/backgrounds";

/**
 * Кабинет аппаратной косметологии — фото выпрямляется и приближается по скроллу.
 *
 * Первая из двух секций с фоновой сеткой: она встречает сразу после тёмного
 * первого экрана, и сетка помогает переходу — светлое поле не выглядит
 * пустым провалом после полноэкранного кадра.
 */
export function Showcase() {
  return (
    <section className="relative overflow-hidden">
      <GridGlow />
      <Container wide className="relative">
        <ContainerScroll
          titleComponent={
            <SectionHeading
              index="01"
              eyebrow="Внутри клиники"
              title={
                <>
                  Отдельные кабинеты.
                  <br className="hidden sm:block" /> Медицинское оборудование.
                </>
              }
              className="[&>div]:justify-center"
            />
          }
        >
          <Image
            src={withBase("/clinic/room-hardware.webp")}
            alt="Кабинет аппаратной косметологии в INUNICA clinic"
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />
        </ContainerScroll>
      </Container>
    </section>
  );
}
