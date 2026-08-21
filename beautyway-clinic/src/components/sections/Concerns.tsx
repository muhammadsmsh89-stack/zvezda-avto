import Link from "next/link";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { IconArrow } from "../ui/Icons";
import { concerns } from "@/data/concerns";
import { serviceBySlug, displayTitle } from "@/lib/content";

export function Concerns() {
  return (
    <section className="border-b border-line bg-milk py-14 sm:py-20">
      <Container>
        <SectionHeading
          index="01"
          eyebrow="С чего начать"
          title="С каким запросом вы пришли?"
          intro="Выберите то, что беспокоит. Дальше покажем подходящие процедуры и врачей, которые их выполняют."
          link={{ href: "/problem", label: "Все проблемы и зоны" }}
        />

        <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-3">
          {concerns.map((c) => {
            const svc = serviceBySlug.get(c.service);
            return (
              <li key={c.slug}>
                <Link
                  href={`/uslugi/${c.service}`}
                  className="group flex h-full min-h-[104px] flex-col justify-between gap-2 rounded-[10px] border border-line bg-porcelain p-4 transition-colors hover:border-plum/45 hover:bg-plum-tint"
                >
                  <span>
                    <span className="block text-[1rem] font-semibold leading-snug text-graphite group-hover:text-plum-deep">
                      {c.label}
                    </span>
                    <span className="mt-1 block text-[0.8125rem] leading-snug text-graphite-soft">
                      {c.hint}
                    </span>
                  </span>
                  <span className="flex items-start gap-1.5 text-[0.8125rem] font-medium leading-snug text-plum">
                    <span className="line-clamp-2">{svc ? displayTitle(svc) : "Смотреть"}</span>
                    <IconArrow className="mt-0.5 h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
