import Link from "next/link";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { IconArrow } from "../ui/Icons";
import { activePromos, formatRuDate } from "@/data/promos";
import { abonements } from "@/data/abonements";
import { pluralize } from "@/lib/plural";
import { MEDICAL_DISCLAIMER, VERIFIED_ON_HUMAN } from "@/lib/site";

export function Promos() {
  const list = activePromos();
  if (!list.length) return null;

  return (
    <section className="border-b border-line bg-porcelain py-14 sm:py-20">
      <Container>
        <SectionHeading
          index="08"
          eyebrow="Действующие предложения"
          title="Акции и абонементы"
          intro={`Условия сверены ${VERIFIED_ON_HUMAN}. У каждой акции указан срок действия, и после него она перестаёт показываться.`}
          link={{ href: "/promo", label: "Все акции" }}
        />

        <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <li key={p.id}>
              <Link
                href={p.href ?? "/promo"}
                className="group flex h-full flex-col rounded-[10px] border border-line bg-milk p-5 transition-colors hover:border-plum/45 hover:bg-plum-tint"
              >
                <span className="eyebrow text-plum">Акция</span>
                <h3 className="mt-2.5 font-display text-[1.25rem] leading-snug text-graphite group-hover:text-plum-deep">
                  {p.title}
                </h3>
                {p.note && <p className="mt-2 text-[0.875rem] text-graphite-soft">{p.note}</p>}

                {(p.oldPrice || p.newPrice) && (
                  <p className="mt-4 flex flex-wrap items-baseline gap-2.5">
                    {p.oldPrice && (
                      <span className="text-[0.9375rem] text-graphite-soft line-through">{p.oldPrice}</span>
                    )}
                    {p.newPrice && (
                      <span className="text-[1.25rem] font-semibold text-plum-deep">{p.newPrice}</span>
                    )}
                    {p.unit && <span className="text-[0.8125rem] text-graphite-soft">{p.unit}</span>}
                  </p>
                )}

                <p className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-3.5 text-[0.8125rem] text-graphite-soft">
                  <span>Действует до {formatRuDate(p.validUntil)}</span>
                  <IconArrow className="h-4 w-4 shrink-0 text-plum transition-transform duration-200 group-hover:translate-x-1" />
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-[12px] border border-line bg-milk p-5 sm:p-7">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-plum">Курсовые программы</p>
              <h3 className="mt-2 font-display text-[1.5rem] leading-snug text-graphite">Абонементы</h3>
            </div>
            <Link
              href="/abonementy"
              className="group inline-flex min-h-[44px] items-center gap-2 text-[0.9375rem] font-medium text-plum"
            >
              Все абонементы и условия
              <IconArrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
          <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
            {abonements.map((g) => (
              <li key={g.group} className="rounded-[8px] border border-line bg-porcelain p-4">
                <p className="text-[0.9375rem] font-semibold leading-snug text-graphite">{g.group}</p>
                <p className="mt-2 text-[0.875rem] text-graphite-soft">
                  {g.rows.length === 1
                    ? `${pluralize(g.rows[0].sessions, "процедура", "процедуры", "процедур")} — ${g.rows[0].price}`
                    : `${pluralize(g.rows.length, "программа", "программы", "программ")}, от ${g.rows[0].price}`}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-5 text-[0.8125rem] leading-snug text-graphite-soft">{MEDICAL_DISCLAIMER}</p>
      </Container>
    </section>
  );
}
