import Image from "next/image";
import Link from "next/link";
import { withBase } from "@/lib/basePath";
import { advantages, documents } from "@/data/clinic";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { TextReveal } from "../ui/text-reveal";
import { DotField } from "../ui/backgrounds";

/**
 * Доверие через документы, а не через прилагательные. Сканы лежат локально
 * и открываются на странице сведений об организации — там же их полный список.
 *
 * Здесь единственное на сайте пословное проявление текста: фраза про то, что
 * даёт лицензия, — самый весомый аргумент клиники, и короткая пауза перед её
 * появлением заставляет её прочитать, а не проскроллить.
 */
export function Trust() {
  return (
    <section className="relative overflow-hidden bg-veil py-20 sm:py-28 lg:py-36">
      <DotField />
      <Container wide className="relative">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <SectionHeading
              index="07"
              eyebrow="Почему клиника"
              title={<>Медицинский статус — не формальность</>}
              lead={
                <TextReveal text="Лицензия означает проверенное помещение, дипломированный персонал и сертифицированное оборудование. Это то, чего нет у косметологического салона." />
              }
            />

            <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {advantages.map((a) => (
                <li key={a.title} className="rule pt-4">
                  <h3 className="text-[1.0625rem] font-medium text-ink">{a.title}</h3>
                  <p className="mt-2 text-[1rem] leading-[1.6] text-ink-soft">
                    {a.body}
                  </p>
                </li>
              ))}
            </ul>
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

            <Link
              href="/svedeniya-ob-organizacii/"
              className="mt-8 inline-block text-[1rem] text-ink underline decoration-ink/25 underline-offset-[7px] transition-colors duration-200 hover:decoration-ink"
            >
              Все сведения об организации
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
