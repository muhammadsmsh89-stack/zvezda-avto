import Image from "next/image";
import { withBase } from "@/lib/basePath";
import { spaces } from "@/data/clinic";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

/** Кабинеты клиники — настоящие фотографии, а не стоковый «интерьер спа». */
export function Space() {
  return (
    <section className="py-20 sm:py-28 lg:py-36">
      <Container wide>
        <SectionHeading
          index="04"
          eyebrow="Клиника"
          title={<>Всё, что видно на фотографиях, — наши кабинеты</>}
          lead="Отдельные закрытые кабинеты, бесплатная парковка у входа и детский уголок, если ребёнка не с кем оставить."
          className="max-w-[46rem]"
        />

        {/*
          Первый кадр крупнее остальных: без иерархии галерея из шести
          одинаковых плиток читается как каталог, а не как пространство.
        */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {spaces.map((s, i) => (
            <Reveal
              key={s.image}
              delay={(i % 4) * 80}
              className={i === 0 ? "sm:col-span-2 lg:row-span-2" : undefined}
            >
              <div
                className={`img-zoom relative overflow-hidden bg-veil ${
                  i === 0 ? "aspect-[4/3] lg:h-full" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={withBase(s.image)}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
