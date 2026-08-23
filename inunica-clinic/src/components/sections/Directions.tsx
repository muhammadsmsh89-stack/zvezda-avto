import { directions } from "@/data/directions";
import { minPrice } from "@/lib/prices";
import { formatFrom } from "@/lib/format";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { GradientHeading } from "../ui/gradient-heading";
import { CardStack } from "../ui/card-stack";
import { GridGlow } from "../ui/backgrounds";

/**
 * Шесть направлений — веерная стопка со свайпом вместо плоской сетки.
 * Перетаскивание переключает карточку, клик по задней карточке выносит её
 * вперёд, клик по передней или «Подробнее о направлении» ведёт на её
 * страницу. Данные те же, что раньше шли в грид: фото, заголовок, короткое
 * описание, цена «от» и ссылка на /uslugi/{slug}/.
 *
 * Единственный на сайте градиентный заголовок стоит здесь: это центральная
 * секция главной, и переход чернил в фирменную фуксию отмечает её как
 * главную, не добавляя ни одной лишней плашки.
 */
export function Directions() {
  const items = directions.map((d) => {
    const from = minPrice(d.priceSlug);
    return {
      id: d.slug,
      title: d.title,
      description: d.short,
      priceFrom: from ? formatFrom(from) : undefined,
      imageSrc: d.image,
      imageAlt: d.imageAlt,
      href: `/uslugi/${d.slug}/`,
    };
  });

  return (
    <section
      id="napravleniya"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-36"
    >
      <GridGlow />
      <Container wide className="relative">
        <SectionHeading
          index="02"
          eyebrow="Направления"
          title={
            <GradientHeading>
              Лицо, тело и всё,
              <br className="hidden sm:block" /> что между ними
            </GradientHeading>
          }
          lead="Шесть направлений в одной клинике: не нужно ездить по городу ради лазера, инъекций и ухода. Перетащите карточку или нажмите на боковую."
          className="max-w-[46rem]"
        />

        <div className="mt-14 lg:mt-20">
          <CardStack items={items} />
        </div>
      </Container>
    </section>
  );
}
