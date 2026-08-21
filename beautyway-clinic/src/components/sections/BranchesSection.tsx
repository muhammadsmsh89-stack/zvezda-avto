import Link from "next/link";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Media } from "../ui/Media";
import { IconPin, IconClock, IconArrow } from "../ui/Icons";
import { branches, site } from "@/lib/site";

export function BranchesSection() {
  return (
    <section className="border-b border-line bg-milk py-14 sm:py-20">
      <Container>
        <SectionHeading
          index="09"
          eyebrow="Где нас найти"
          title="Две клиники в центре Москвы"
          intro="Оба адреса в пешей доступности от метро. Выберите филиал, и мы запишем вас именно туда."
          link={{ href: "/contacts", label: "Контакты и схема проезда" }}
        />

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {branches.map((b) => (
            <li
              key={b.slug}
              className="flex flex-col overflow-hidden rounded-[12px] border border-line bg-porcelain"
            >
              <Media
                name={b.photo}
                widths={[640, 1280]}
                ratio="4 / 3"
                alt={`Клиника BeautyWay — ${b.name}`}
                sizes="(min-width: 640px) 50vw, 100vw"
              />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[1.375rem] leading-snug text-graphite">{b.name}</h3>
                <p className="mt-2.5 flex items-start gap-2.5 text-[0.9375rem] leading-snug text-graphite">
                  <IconPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-plum" />
                  {b.address}
                </p>
                <p className="mt-2 pl-[28px] text-[0.875rem] text-graphite-soft">м. {b.metro.join(", ")}</p>
                <p className="mt-2.5 flex items-center gap-2.5 text-[0.875rem] text-graphite-soft">
                  <IconClock className="h-[18px] w-[18px] shrink-0 text-plum" />
                  {site.hours}
                </p>

                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <Link
                    href={`/contacts/${b.slug}`}
                    className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-[4px] bg-plum px-4 text-[0.9375rem] font-medium text-white transition-colors hover:bg-plum-deep"
                  >
                    Записаться сюда
                  </Link>
                  <a
                    href={b.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-[4px] border border-plum/45 px-4 text-[0.9375rem] font-medium text-plum-deep transition-colors hover:bg-plum-tint"
                  >
                    Открыть в Яндекс Картах
                    <IconArrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
