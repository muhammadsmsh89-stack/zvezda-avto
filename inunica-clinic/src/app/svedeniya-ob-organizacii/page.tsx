import type { Metadata } from "next";
import Image from "next/image";
import { withBase } from "@/lib/basePath";
import { site } from "@/lib/site";
import { documents } from "@/data/clinic";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Сведения об организации",
  description:
    "ООО «АТМ»: реквизиты, лицензия на медицинскую деятельность, санитарно-эпидемиологическое заключение, контакты контролирующих органов и правила для пациентов.",
  alternates: { canonical: "/svedeniya-ob-organizacii/" },
};

/** Контролирующие органы — данные со страницы «Сведения об организации» inunica.ru. */
const authorities = [
  {
    role: "Орган, выдавший лицензию на медицинскую деятельность",
    name: "Министерство здравоохранения Белгородской области. Управление лицензирования и контроля качества деятельности медицинских учреждений",
    address: "308001, г. Белгород, Народный бульвар, д. 34 «А»",
    phone: "+7 (4722) 23-58-55",
    email: "zdrav@belregion.ru",
    site: "http://belzdrav.ru",
  },
  {
    role: "Орган исполнительной власти субъекта РФ в сфере охраны здоровья граждан",
    name: "Министерство здравоохранения Белгородской области",
    address: "308001, г. Белгород, Народный бульвар, д. 34 «А»",
    phone: "+7 (4722) 23-58-55, +7 (4722) 23-58-56 (доб. 200)",
    email: "zdrav@belregion.ru",
    site: "http://belzdrav.ru",
  },
  {
    role: "Территориальный орган Росздравнадзора",
    name: "Территориальный орган Росздравнадзора по Белгородской области",
    address: "308000, г. Белгород, ул. Мичурина, д. 56, этаж 5",
    phone: "+7 (4722) 31-05-11",
    email: "roszdravnadzor31@reg31.roszdravnadzor.ru",
    site: "http://31reg.roszdravnadzor.ru",
  },
  {
    role: "Территориальный орган Роспотребнадзора",
    name: "Управление Роспотребнадзора по Белгородской области",
    address: "308023, г. Белгород, ул. Железнякова, 2",
    phone: "+7 (4722) 34-03-16",
    email: "orgotd@31.rospotrebnadzor.ru",
    site: "https://31.rospotrebnadzor.ru",
  },
];

/** Правила приёма — дословно с сайта клиники. */
const patientRules = [
  "Каждая медицинская услуга в клинике имеет строго регламентированное время — от 30 до 180 минут, необходимое для качественной диагностики и лечения.",
  "Опоздание пациента сокращает время, необходимое врачу для сбора анамнеза и проведения манипуляций.",
  "Мы дорожим вашим здоровьем, поэтому не проводим «ускоренные» приёмы: это снижает качество медицинской помощи и нарушает требования безопасности.",
  "При опоздании более чем на 15 минут визит будет перенесён. Мы ценим пунктуальность пациентов и гарантируем своевременное начало приёма для тех, кто приходит вовремя.",
];

export default function OrgInfoPage() {
  return (
    <>
      <PageIntro
        eyebrow="Сведения об организации"
        title="Документы и реквизиты"
        lead="Всё, что медицинская организация обязана раскрывать: лицензия, санитарное заключение, реквизиты юрлица и контакты контролирующих органов."
      />

      <section className="pb-20 sm:pb-28">
        <Container wide>
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
            <div>
              <h2 className="font-display text-[1.75rem] text-ink sm:text-[2.125rem]">
                Реквизиты
              </h2>
              <dl className="mt-8 space-y-4 text-[1rem]">
                {[
                  ["Полное наименование", `Общество с ограниченной ответственностью «АТМ»`],
                  ["Сокращённое наименование", site.legalName],
                  ["Юридический адрес", site.address.postal],
                  ["ИНН", site.requisites.inn],
                  ["КПП", site.requisites.kpp],
                  ["ОГРН", site.requisites.ogrn],
                  ["ОКПО", site.requisites.okpo],
                  ["Телефон", site.phone.display],
                  ["E-mail", site.email],
                  ["Режим работы", site.hours.long],
                ].map(([term, value]) => (
                  <div key={term} className="rule grid gap-1 pt-3 sm:grid-cols-[14rem_1fr] sm:gap-6">
                    <dt className="text-ink-mute">{term}</dt>
                    <dd className="text-ink">{value}</dd>
                  </div>
                ))}
              </dl>

              <h2 className="font-display mt-16 text-[1.75rem] text-ink sm:text-[2.125rem]">
                Лицензия и заключения
              </h2>
              <div className="mt-8 space-y-6 text-[1rem] leading-[1.7] text-ink-soft">
                <p className="rule pt-4">
                  <span className="block text-ink">Лицензия на медицинскую деятельность</span>
                  № {site.license.number} от {site.license.date}, выдана Департаментом
                  здравоохранения Белгородской области — в соответствии с частью 5 статьи 14
                  Федерального закона «О лицензировании отдельных видов деятельности».
                </p>
                <p className="rule pt-4">
                  <span className="block text-ink">Санитарно-эпидемиологическое заключение</span>
                  № 31.БО.02.000.М.000423.05.21 от 24.05.2021, выдано Управлением
                  Роспотребнадзора по Белгородской области.
                </p>
                <p className="rule pt-4">
                  <span className="block text-ink">О правах и обязанностях граждан</span>
                  Федеральный закон от 21 ноября 2011 г. № 323-ФЗ «Об основах охраны
                  здоровья граждан в Российской Федерации» с изменениями и дополнениями.
                </p>
              </div>
            </div>

            <Reveal>
              <ul className="grid gap-6 sm:grid-cols-3 lg:sticky lg:top-28">
                {documents.map((doc) => (
                  <li key={doc.title}>
                    <div className="relative aspect-[3/4] overflow-hidden border border-line bg-paper">
                      <Image
                        src={withBase(doc.image)}
                        alt={doc.title}
                        fill
                        sizes="(min-width: 640px) 16vw, 90vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <p className="mt-3 text-[0.9375rem] leading-[1.5] text-ink">{doc.title}</p>
                    <p className="mt-1 text-[0.875rem] leading-[1.5] text-ink-mute">{doc.note}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-veil py-20 sm:py-28">
        <Container wide>
          <h2 className="font-display text-[2rem] text-ink sm:text-[2.5rem]">
            Правила для пациентов
          </h2>
          <ol className="mt-10 max-w-[70ch] space-y-4">
            {patientRules.map((rule, i) => (
              <li key={rule} className="flex gap-4 text-[1.0625rem] leading-[1.65] text-ink-soft">
                <span className="shrink-0 pt-[0.2em] text-[0.875rem] tabular-nums text-ink-mute">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{rule}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container wide>
          <h2 className="font-display text-[2rem] text-ink sm:text-[2.5rem]">
            Контролирующие органы
          </h2>
          <ul className="mt-10 grid gap-x-12 gap-y-10 lg:grid-cols-2">
            {authorities.map((a) => (
              <li key={a.role} className="rule pt-5">
                <p className="eyebrow">{a.role}</p>
                <p className="mt-4 text-[1.0625rem] leading-[1.55] text-ink">{a.name}</p>
                <p className="mt-3 text-[1rem] text-ink-soft">{a.address}</p>
                <p className="mt-1 text-[1rem] text-ink-soft">{a.phone}</p>
                <p className="mt-1 text-[1rem]">
                  <a
                    href={`mailto:${a.email}`}
                    className="text-ink-soft underline decoration-ink/20 underline-offset-4 hover:text-ink"
                  >
                    {a.email}
                  </a>
                </p>
                <p className="mt-1 text-[1rem]">
                  <a
                    href={a.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-soft underline decoration-ink/20 underline-offset-4 hover:text-ink"
                  >
                    {a.site}
                  </a>
                </p>
              </li>
            ))}
          </ul>

          <p className="rule mt-16 max-w-[70ch] pt-8 text-[1rem] leading-[1.7] text-ink-mute">
            {site.legalNotice}
          </p>
        </Container>
      </section>

      <JsonLd
        data={breadcrumbLd([
          { name: "Главная", path: "/" },
          { name: "Сведения об организации", path: "/svedeniya-ob-organizacii/" },
        ])}
      />
    </>
  );
}
