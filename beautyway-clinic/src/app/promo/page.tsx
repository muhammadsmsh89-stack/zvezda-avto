import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { IconArrow } from "@/components/ui/Icons";
import { BookingButton } from "@/components/BookingButton";
import { activePromos, formatRuDate, promos } from "@/data/promos";
import { JsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";
import { pluralize } from "@/lib/plural";
import { VERIFIED_ON_HUMAN } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Акции клиники",
  description:
    "Действующие предложения BeautyWay Clinic: контурная пластика, увеличение губ, ботулинотерапия, мезотерапия, лазерная эпиляция. У каждой акции указан срок действия.",
  path: "/promo",
});

const crumbs = [
  { name: "Главная", path: "/" },
  { name: "Акции", path: "/promo" },
];

export default function PromoPage() {
  const active = activePromos();
  const expired = promos.length - active.length;

  return (
    <>
      <PageIntro
        eyebrow="Предложения"
        title="Акции"
        intro={`Условия сверены ${VERIFIED_ON_HUMAN}. Акция исчезает со страницы автоматически на следующий день после окончания срока действия.`}
        crumbs={crumbs}
      />

      <section className="bg-milk py-10 sm:py-14">
        <Container>
          {active.length === 0 ? (
            <div className="rounded-[12px] border border-line bg-porcelain p-6">
              <p className="text-[1rem] leading-relaxed text-graphite">
                Сейчас действующих акций нет. Актуальные цены есть в{" "}
                <Link href="/price" className="text-plum underline underline-offset-2">
                  прайсе клиники
                </Link>
                , а очная консультация врача-косметолога всегда бесплатная.
              </p>
              <BookingButton label="Записаться на консультацию" className="mt-4" />
            </div>
          ) : (
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {active.map((p) => (
                <li
                  key={p.id}
                  className="flex flex-col rounded-[12px] border border-line bg-porcelain p-5"
                >
                  <span className="eyebrow text-plum">Акция</span>
                  <h2 className="mt-2.5 font-display text-[1.375rem] leading-snug text-graphite">{p.title}</h2>
                  {p.note && <p className="mt-2 text-[0.9375rem] text-graphite-soft">{p.note}</p>}

                  {(p.oldPrice || p.newPrice) && (
                    <p className="mt-4 flex flex-wrap items-baseline gap-2.5">
                      {p.oldPrice && (
                        <span className="text-[1rem] text-graphite-soft line-through">{p.oldPrice}</span>
                      )}
                      {p.newPrice && (
                        <span className="text-[1.5rem] font-semibold text-plum-deep">{p.newPrice}</span>
                      )}
                      {p.unit && <span className="text-[0.875rem] text-graphite-soft">{p.unit}</span>}
                    </p>
                  )}

                  <p className="mt-4 border-t border-line pt-3.5 text-[0.8125rem] text-graphite-soft">
                    Действует до {formatRuDate(p.validUntil)} · проверено {formatRuDate(p.checkedOn)}
                  </p>

                  <div className="mt-4 flex flex-col gap-2">
                    <BookingButton label="Записаться по акции" service={p.title} />
                    {p.href && (
                      <Link
                        href={p.href}
                        className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[4px] border border-plum/45 px-4 text-[0.9375rem] font-medium text-plum-deep transition-colors hover:bg-plum-tint"
                      >
                        О процедуре
                        <IconArrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}

          {expired > 0 && (
            <p className="mt-6 text-[0.875rem] text-graphite-soft">
              Ещё {pluralize(expired, "предложение", "предложения", "предложений")} на сайте клиники завершились и здесь не показаны.
            </p>
          )}

          <div className="mt-10">
            <MedicalNotice />
          </div>
        </Container>
      </section>

      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
