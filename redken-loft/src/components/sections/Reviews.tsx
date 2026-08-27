import { reviewPatterns, reputation } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Reviews() {
  return (
    <section className="border-t border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <SectionHeading index="07" eyebrow="Отзывы" title="Что говорят клиенты" />
            <div className="mt-10 flex items-baseline gap-3">
              <span className="font-editorial text-6xl text-ink">{reputation.yandex.rating}</span>
              <span className="text-sm text-muted">
                {reputation.yandex.reviews} отзывов на Яндексе
              </span>
            </div>
            <a
              href="https://yandex.ru/search/?text=Redken%20Loft%20Краснодар%20отзывы"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block border-b border-ink pb-1 text-sm font-medium text-ink"
            >
              Смотреть отзывы
            </a>
          </div>

          <Stagger className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
              {reviewPatterns.map((pattern) => (
                <StaggerItem key={pattern.id}>
                  <div className="h-full bg-surface p-7">
                    <h3 className="text-base font-semibold text-ink">{pattern.theme}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{pattern.summary}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
