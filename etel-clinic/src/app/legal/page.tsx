import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Правовая информация",
  description: "Юридические реквизиты ООО «Этель» и сведения о медицинской лицензии.",
  alternates: { canonical: "/legal/" },
};

const rows: { label: string; value: string; needsVerification?: boolean }[] = [
  { label: "Полное наименование", value: site.legalName },
  { label: "ИНН", value: site.requisites.inn },
  { label: "ОГРН", value: site.requisites.ogrn },
  { label: "Дата регистрации", value: site.requisites.registeredAt },
  { label: "Юридический адрес", value: site.requisites.legalAddress, needsVerification: true },
  { label: "Генеральный директор", value: site.requisites.generalDirector },
  { label: "Медицинская лицензия", value: site.license.full, needsVerification: site.license.needsVerification },
];

export default function LegalPage() {
  return (
    <>
      <PageIntro
        eyebrow="Документы"
        title="Правовая информация"
        lead="Реквизиты юридического лица и сведения о медицинской лицензии центра «Этель»."
      />

      <section className="pb-24">
        <Container wide className="max-w-[64rem]">
          <dl className="rule divide-y divide-line border-b border-line">
            {rows.map((r) => (
              <Reveal as="div" key={r.label} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <dt className="eyebrow-mute shrink-0">{r.label}</dt>
                <dd className="text-[1.0625rem] text-ink sm:text-right">
                  {r.value}
                  {r.needsVerification && <span className="ml-2 text-ink-mute">(требует сверки)</span>}
                </dd>
              </Reveal>
            ))}
          </dl>

          <p className="mt-8 max-w-[70ch] text-[0.9375rem] leading-[1.7] text-ink-mute">
            Номер медицинской лицензии перед публикацией на боевом домене
            должен быть дополнительно сверен клиникой. {site.legalNotice}
          </p>
        </Container>
      </section>

      <JsonLd
        data={breadcrumbLd([
          { name: "Главная", path: "/" },
          { name: "Правовая информация", path: "/legal/" },
        ])}
      />
    </>
  );
}
