import Link from "next/link";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { IconArrow } from "../ui/Icons";
import { popularServices } from "@/data/concerns";
import { serviceBySlug, displayTitle, priceFromLabel, lede } from "@/lib/content";
import { VERIFIED_ON_HUMAN } from "@/lib/site";

export function PopularServices() {
  const items = popularServices
    .map((s) => serviceBySlug.get(s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <section className="border-b border-line bg-porcelain py-14 sm:py-20">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Направления"
          title="Популярные процедуры"
          intro={`Цены «от» перенесены из прайса клиники и сверены ${VERIFIED_ON_HUMAN}. Точную стоимость врач называет на консультации.`}
          link={{ href: "/uslugi", label: "Весь каталог" }}
        />

        <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s) => {
            const price = priceFromLabel(s);
            return (
              <li key={s.slug}>
                <Link
                  href={`/uslugi/${s.slug}`}
                  className="group flex h-full flex-col rounded-[10px] border border-line bg-milk p-5 transition-colors hover:border-plum/45 hover:bg-plum-tint"
                >
                  <h3 className="font-display text-[1.25rem] leading-snug text-graphite group-hover:text-plum-deep">
                    {displayTitle(s)}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[0.875rem] leading-relaxed text-graphite-soft">
                    {lede(s, 110)}
                  </p>
                  <p className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-3.5">
                    <span className="text-[1.0625rem] font-semibold leading-snug text-plum-deep">
                      {price ?? "Цена по консультации"}
                    </span>
                    <IconArrow className="h-4 w-4 shrink-0 text-plum transition-transform duration-200 group-hover:translate-x-1" />
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
