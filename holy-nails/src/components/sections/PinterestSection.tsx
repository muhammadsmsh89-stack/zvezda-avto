import { Container } from "@/components/ui/Container";
import { Reveal, Marker } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { whatsappLink } from "@/lib/contacts";
import { ctaLabels } from "@/lib/site";

const steps = [
  "Сделайте или сохраните скрин дизайна",
  "Отправьте его в WhatsApp",
  "Мастер подскажет услугу и поможет с записью",
];

export function PinterestSection() {
  return (
    <section className="bg-deep py-20 text-background lg:py-24">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-6 xl:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-background/50">Есть референс?</p>
          <h2 className="mt-3 text-pretty text-3xl leading-tight text-background sm:text-4xl">
            Уже нашли дизайн?
          </h2>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-background/70">
            Отправьте скрин дизайна — поможем подобрать услугу и запись. От нюда до самого смелого
            маникюра из Pinterest — мастер оценит сложность и подскажет ближайшее свободное время.
          </p>
          <div className="mt-8">
            <Button
              href={whatsappLink("Здравствуйте! Нашла референс дизайна маникюра, хочу показать и подобрать услугу.")}
              variant="ghost-light"
            >
              {ctaLabels.reference}
            </Button>
          </div>
        </Reveal>

        <div className="relative lg:col-span-6 lg:col-start-7 xl:col-span-6 xl:col-start-7">
          <div className="relative mx-auto w-full max-w-sm rounded-lg border border-background/15 bg-background/[0.04] p-6 sm:max-w-md sm:p-8">
            <div className="flex items-center justify-between border-b border-background/15 pb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-background/60">Как это работает</p>
              <WhatsAppIcon className="h-4 w-4 text-background/50" />
            </div>

            <ol className="mt-6 flex flex-col gap-5">
              {steps.map((step, i) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-background/25 font-display text-xs text-background/70">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 text-sm leading-relaxed text-background/85">{step}</span>
                </li>
              ))}
            </ol>

            <a
              href={whatsappLink("Здравствуйте! Нашла референс дизайна маникюра, хочу показать и подобрать услугу.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-2 border-t border-background/15 pt-5 text-sm font-semibold text-background transition-colors hover:text-background/70"
            >
              Написать в WhatsApp →
            </a>
          </div>

          <Marker delay={0.3} className="absolute -right-2 -top-4 hidden rotate-3 rounded-lg bg-surface px-3 py-2 text-foreground shadow-lg sm:block">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">Ваш скрин</p>
            <p className="text-sm font-semibold">→ WhatsApp</p>
          </Marker>
        </div>
      </Container>
    </section>
  );
}
