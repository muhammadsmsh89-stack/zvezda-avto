import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { materials } from "@/lib/calculator";
import { withBase } from "@/lib/basePath";

const photos = [
  {
    src: "/media/process-strip.webp",
    alt: "Разобранный автомобиль в светлом боксе MODNOE MESTO: мастера работают с снятыми кузовными элементами",
    caption: "Оклейка со снятием элементов — плёнка заводится под кромки",
  },
  {
    src: "/media/process-polish.webp",
    alt: "Мастер полирует кузов тёмного автомобиля профессиональной машинкой",
    caption: "Полировка под профессиональным светом",
  },
  {
    src: "/media/studio-boxes.webp",
    alt: "Ряд оборудованных боксов детейлинг-центра MODNOE MESTO с автомобилями внутри",
    caption: "Отдельные боксы под каждый этап работ",
  },
];

export function Materials() {
  return (
    <section aria-labelledby="materials-title" className="py-16 sm:py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            index="06"
            eyebrow="Технология"
            title="Почему это стоит своих денег"
            lead="Цена премиального детейлинга — это подготовка, условия и материалы, а не наценка за вывеску."
            id="materials-title"
          />
        </Reveal>

        <div className="mt-9 grid gap-8 sm:mt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
          <Reveal>
            <dl className="border-t border-line">
              {materials.map((m) => (
                <div key={m.title} className="border-b border-line py-6">
                  <dt className="text-[18px] font-semibold leading-tight sm:text-[20px]">
                    {m.title}
                  </dt>
                  <dd className="mt-2 max-w-[52ch] text-body text-fg-dim">
                    {m.text}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={70} className="grid grid-cols-2 gap-3 lg:grid-cols-1">
            {photos.map((p) => (
              <figure key={p.src} className="first:col-span-2 lg:first:col-span-1">
                <img
                  src={withBase(p.src)}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                  width={1100}
                  height={733}
                  className="aspect-[16/10] w-full rounded-[6px] object-cover"
                />
                <figcaption className="mt-2.5 text-micro text-fg-faint">
                  {p.caption}
                </figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
