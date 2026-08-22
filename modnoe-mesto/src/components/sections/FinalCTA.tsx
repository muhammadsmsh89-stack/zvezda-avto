import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { ButtonLink } from "../ui/Button";
import { IconPhone, IconTelegram } from "../ui/Icons";
import { contacts } from "@/lib/contacts";
import { facts } from "@/lib/site";

export function FinalCTA() {
  return (
    <>
      {/* Действующая акция компании: 5% за подписку на Telegram-канал */}
      <div className="border-t border-line bg-surface">
        <Container className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-small text-fg-dim">
            <span className="font-semibold text-fg">
              Скидка {facts.telegramDiscount}
            </span>{" "}
            каждому, кто подпишется на Telegram-канал студии.
          </p>
          <a
            href={contacts.telegram}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex min-h-[44px] items-center gap-2 self-start text-small font-semibold text-gold transition-colors hover:text-gold-bright sm:self-auto"
          >
            <IconTelegram className="size-[18px]" />
            Подписаться
          </a>
        </Container>
      </div>

      <section
        aria-labelledby="final-title"
        className="border-t border-line bg-bg-deep py-16 sm:py-24 lg:py-28"
      >
        <Container>
          <Reveal>
            <h2
              id="final-title"
              className="max-w-[22ch] text-[30px] font-bold leading-[1.06] sm:text-[42px] lg:text-[54px]"
            >
              Расскажите, что хотите сделать с автомобилем
            </h2>
            <p className="mt-4 max-w-[44ch] text-lead text-fg-dim sm:text-lead-lg">
              Подберём решение и рассчитаем стоимость. Если не знаете, что нужно
              — тоже пишите: подскажем.
            </p>

            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
              <ButtonLink href="#calculator" className="sm:px-8">
                Получить консультацию
              </ButtonLink>
              <ButtonLink href={contacts.phoneHref} variant="secondary" className="sm:px-8">
                <IconPhone className="size-[18px]" />
                {contacts.phoneDisplay}
              </ButtonLink>
            </div>

            <p className="mt-5 text-micro text-fg-faint">{contacts.hours}</p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
