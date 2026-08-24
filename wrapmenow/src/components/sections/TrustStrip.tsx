import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Star } from "@/components/ui/Icons";
import { TextLink } from "@/components/ui/Button";
import { rating, studio } from "@/lib/site";
import { contacts } from "@/lib/contacts";

const stats: Array<{ value: string; label: string; star?: boolean }> = [
  { value: rating.value, label: "рейтинг на Яндексе", star: true },
  { value: String(rating.reviewsCount), label: "отзывов" },
  { value: String(studio.yearFounded), label: "работаем с" },
  { value: "5 000+", label: "клиентов*" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-surface">
      <Container className="flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between lg:py-12">
        <Reveal className="grid grid-cols-2 gap-x-8 gap-y-6 sm:flex sm:flex-wrap sm:items-center sm:gap-10">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="flex items-center gap-1.5">
                {s.star && <Star className="h-5 w-5 text-accent" />}
                <span className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{s.value}</span>
              </div>
              <span className="text-xs uppercase tracking-[0.1em] text-muted">{s.label}</span>
            </div>
          ))}
          <div className="col-span-2 flex items-center gap-1.5 rounded-full border border-border-strong px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-foreground sm:col-auto">
            {rating.award}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-1 lg:items-end">
          <TextLink href={contacts.yandexUrl}>{rating.source}</TextLink>
          <span className="text-xs text-muted">данные проверены {formatDate(rating.verifiedAt)}</span>
        </Reveal>
      </Container>
    </section>
  );
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  const months = [
    "января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря",
  ];
  return `${parseInt(d, 10)} ${months[parseInt(m, 10) - 1]} ${y}`;
}
