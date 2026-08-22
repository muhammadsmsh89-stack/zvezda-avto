import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { facts } from "@/lib/site";
import { contacts } from "@/lib/contacts";
import { withBase } from "@/lib/basePath";

const numbers = [
  { value: facts.clients, label: "довольных клиентов" },
  { value: facts.specialists, label: "профильных специалистов" },
  { value: facts.rating, label: `рейтинг на ${facts.ratingSource}` },
  { value: "Гарантия", label: "на работы и материалы" },
];

export function WhyUs() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-16 sm:py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="О компании"
            title="Почему MODNOE MESTO"
            lead="Без обещаний — только то, что можно проверить."
            id="about-title"
          />
        </Reveal>

        <Reveal className="mt-9 sm:mt-12">
          <ul className="grid grid-cols-2 border-t border-line lg:grid-cols-4">
            {numbers.map((n) => (
              <li
                key={n.label}
                className="border-b border-line py-6 pr-4 [&:nth-child(even)]:border-l [&:nth-child(even)]:border-l-line [&:nth-child(even)]:pl-4 lg:border-l lg:border-l-line lg:pl-5 lg:first:border-l-0 lg:first:pl-0"
              >
                <p className="text-[28px] font-bold leading-none tracking-[-0.03em] text-gold sm:text-[34px] lg:text-[40px]">
                  {n.value}
                </p>
                <p className="mt-2.5 text-[13px] leading-[1.35] text-fg-dim sm:text-[14px]">
                  {n.label}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:mt-14 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal>
            <img
              src={withBase("/media/studio-lounge.webp")}
              alt="Зона ожидания клиентов в детейлинг-центре MODNOE MESTO с фирменной эмблемой на стене"
              loading="lazy"
              decoding="async"
              width={1100}
              height={733}
              className="aspect-[16/11] w-full rounded-[6px] object-cover"
            />
          </Reveal>

          <Reveal delay={70}>
            <h3 className="text-[21px] font-bold leading-tight sm:text-[26px]">
              Один адрес вместо пяти подрядчиков
            </h3>
            <p className="mt-4 text-[15px] leading-[1.6] text-fg-dim sm:text-[16px]">
              Оклейка, полировка, керамика, химчистка, реставрация салона,
              шумоизоляция, дооснащение, кузовные и малярные работы — всё в
              одном центре, одной командой и с одной ответственностью за
              результат.
            </p>
            <dl className="mt-6 space-y-4 border-t border-line pt-6 text-[14.5px]">
              <div className="flex gap-4">
                <dt className="w-[104px] shrink-0 text-fg-faint">Адрес</dt>
                <dd className="font-medium">{contacts.addressFull}</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-[104px] shrink-0 text-fg-faint">Режим</dt>
                <dd className="font-medium">{contacts.hours}</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-[104px] shrink-0 text-fg-faint">Классы</dt>
                <dd className="font-medium">
                  Работаем с автомобилями любого класса — от массового сегмента
                  до люкса
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
