import { Media } from "../ui/Media";
import { Container } from "../ui/Container";
import { BookingButton } from "../BookingButton";
import { IconCheck } from "../ui/Icons";
import { doctorBySlug } from "@/lib/content";
import { MEDICAL_DISCLAIMER } from "@/lib/site";

const POINTS = [
  "Врач осматривает кожу и разбирает вашу задачу",
  "Объясняет, какие методы подходят, а какие нет",
  "Составляет план процедур с понятным бюджетом",
];

/** Серверный компонент: данные врача не уезжают в клиентский бандл. */
export function ConsultationBand() {
  const chief = doctorBySlug.get("solopenkova-evgeniya");

  return (
    <section className="border-b border-line bg-milk py-14 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 rounded-[16px] border border-line bg-porcelain p-6 sm:p-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:gap-12">
          <div>
            <p className="eyebrow text-plum">Бесплатно</p>
            <h2 className="mt-3 font-display text-[1.75rem] leading-tight text-graphite sm:text-[2.25rem]">
              Не знаете, что выбрать?
            </h2>
            <p className="mt-4 max-w-[56ch] text-[1.0625rem] leading-relaxed text-graphite-soft">
              Очная консультация врача-косметолога в BeautyWay бесплатная. Врач смотрит кожу и говорит,
              что нужно сейчас, а что можно отложить.
            </p>

            <ul className="mt-6 space-y-2.5">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[0.9375rem] leading-snug text-graphite">
                  <IconCheck className="mt-0.5 h-[18px] w-[18px] shrink-0 text-plum" />
                  {p}
                </li>
              ))}
            </ul>

            <BookingButton
              label="Записаться на бесплатную консультацию"
              service="Не знаю, нужна консультация"
              className="mt-7 w-full sm:w-auto"
            />

            <p className="mt-4 text-[0.8125rem] leading-snug text-graphite-soft">{MEDICAL_DISCLAIMER}</p>
          </div>

          {chief?.photo && (
            <figure className="order-first lg:order-none">
              <Media
                name="doctors/solopenkova-evgeniya"
                widths={[400, 800]}
                ratio="3 / 4"
                alt={`${chief.name} — ${chief.post}`}
                sizes="(min-width: 1024px) 320px, 100vw"
                className="rounded-[12px]"
                objectPosition="center 20%"
              />
              <figcaption className="mt-3 text-[0.875rem] leading-snug text-graphite-soft">
                <span className="block font-semibold text-graphite">{chief.name}</span>
                {chief.post}
                {chief.experienceText && <span className="mt-0.5 block">{chief.experienceText}</span>}
              </figcaption>
            </figure>
          )}
        </div>
      </Container>
    </section>
  );
}
