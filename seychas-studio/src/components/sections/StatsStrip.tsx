import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Star } from "@/components/ui/Icons";
import { TextLink } from "@/components/ui/Button";
import { rating } from "@/lib/site";
import { contacts } from "@/lib/contacts";

const stats = [
  { value: rating.value, label: "рейтинг" },
  { value: String(rating.ratingsCount), label: "оценок" },
  { value: String(rating.reviewsCount), label: "отзывов" },
] as const;

export function StatsStrip() {
  return (
    <section className="border-y border-border bg-surface">
      <Container className="flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between lg:py-12">
        <Reveal className="flex items-center gap-8 sm:gap-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="flex items-center justify-center gap-1.5 sm:justify-start">
                {s.label === "рейтинг" && <Star className="h-5 w-5 text-accent" />}
                <span className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">{s.value}</span>
              </div>
              <span className="text-xs uppercase tracking-[0.1em] text-muted">{s.label}</span>
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col items-center gap-1 sm:items-end">
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
