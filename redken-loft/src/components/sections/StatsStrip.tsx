import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Star, MapPin } from "@/components/ui/Icons";
import { TextLink } from "@/components/ui/Button";
import { rating } from "@/lib/site";
import { contacts } from "@/lib/contacts";

export function StatsStrip() {
  return (
    <section className="pb-6">
      <Container>
        <div className="glass-card flex flex-col gap-8 rounded-3xl px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-12">
        <Reveal className="flex flex-wrap items-baseline gap-x-8 gap-y-4">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-6xl leading-none text-foreground sm:text-7xl">{rating.yandex.value}</span>
            <div>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 text-accent" />
                ))}
              </div>
              <TextLink href={contacts.yandexUrl} className="mt-1">{rating.yandex.source}</TextLink>
            </div>
          </div>

          <div className="hidden h-10 w-px bg-border sm:block" />

          <div className="flex items-baseline gap-6 text-sm">
            <span>
              <span className="mr-1.5 font-semibold text-foreground">{rating.yandex.reviewsCount}</span>
              <span className="text-muted">отзывов</span>
            </span>
            <span>
              <span className="mr-1.5 font-semibold text-foreground">{rating.yandex.photosCount}</span>
              <span className="text-muted">фото и видео</span>
            </span>
            <span>
              <span className="mr-1.5 font-semibold text-foreground">{rating.twoGis.value}</span>
              <span className="text-muted">на 2ГИС</span>
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-1 lg:items-end">
          <span className="flex items-center gap-1.5 text-sm text-foreground/80 lg:justify-end">
            <MapPin className="h-4 w-4 text-muted" />
            {contacts.city} · {contacts.address}
          </span>
          <span className="text-xs text-muted">данные проверены {formatDate(rating.verifiedAt)}</span>
        </Reveal>
        </div>
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
