import Link from "next/link";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Media } from "../ui/Media";
import { IconArrow } from "../ui/Icons";
import { equipment, displayTitle } from "@/lib/content";

/**
 * Польза для пациента, а не характеристики аппарата.
 * Формулировки опираются на описания с bwclinic.ru и не добавляют
 * новых медицинских утверждений.
 */
const BENEFIT: Record<string, string> = {
  "lazer-alma-hybrid": "Шлифовка, работа с рубцами и доставка активных веществ — на одном аппарате за один визит.",
  "rf-liftinga-sylfirm-x": "Работа с сосудистой реакцией, пигментацией и тонусом кожи без длительного восстановления.",
  "harmony-xl-pro": "Одна платформа с разными насадками: пигментация, сосуды, текстура кожи.",
  "smas-lifting-ultraformer-mpt": "Подтяжка глубоких слоёв без разрезов — альтернатива для тех, кто не готов к хирургии.",
  "ultraformer-3": "Ультразвуковая подтяжка контуров лица и тела без операции.",
  "frakczionnyij-lazer": "Обновление кожи по фракционному принципу: рельеф, рубцы, возрастные изменения.",
  "radiovolnovoy-apparat-sensitec-esf-160": "Аккуратное удаление образований на лице и шее с прицельной точностью.",
  "heleo4": "Фотодинамическая методика для проблемной кожи и омоложения.",
  "lazer-motus-ax-moveo": "Эпиляция с длиной волны 755 нм и контактным охлаждением — включая чувствительные зоны.",
};

export function EquipmentRow() {
  return (
    <section className="border-b border-line bg-milk py-14 sm:py-20">
      <Container>
        <SectionHeading
          index="06"
          eyebrow="Технологии"
          title="Оборудование и что оно даёт вам"
          intro="Аппарат сам по себе ничего не решает. Важно, какую задачу он закрывает и кому подходит."
          link={{ href: "/oborudovanie", label: "Весь парк" }}
        />

        <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {equipment.map((e) => (
            <li key={e.slug}>
              <Link
                href={`/oborudovanie/${e.slug}`}
                className="group flex h-full gap-4 rounded-[10px] border border-line bg-porcelain p-4 transition-colors hover:border-plum/45"
              >
                <Media
                  name={`equipment/${e.slug}`}
                  widths={[420, 840]}
                  ratio="1 / 1"
                  alt={displayTitle(e)}
                  sizes="88px"
                  fit="contain"
                  className="h-[88px] w-[88px] shrink-0 rounded-[8px] bg-milk"
                />
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="text-[0.9375rem] font-semibold leading-snug text-graphite group-hover:text-plum-deep">
                    {displayTitle(e)}
                  </span>
                  <span className="mt-1.5 flex-1 text-[0.8125rem] leading-relaxed text-graphite-soft">
                    {BENEFIT[e.slug] ?? ""}
                  </span>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-plum">
                    Подробнее
                    <IconArrow className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
