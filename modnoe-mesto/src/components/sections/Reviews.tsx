import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { IconStar } from "../ui/Icons";
import { reviews } from "@/lib/reviews";
import { facts } from "@/lib/site";
import { contacts } from "@/lib/contacts";

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="border-t border-line bg-bg-deep py-16 sm:py-24 lg:py-32"
    >
      <Container>
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            index="07"
            eyebrow="Отзывы"
            title="О нас говорят"
            id="reviews-title"
          />
          <p className="flex shrink-0 items-center gap-2 text-small text-fg-dim">
            <IconStar className="size-4 text-gold" />
            <span>
              <span className="font-semibold text-fg">{facts.rating}</span> — рейтинг на{" "}
              {facts.ratingSourceIn}
            </span>
          </p>
        </Reveal>

        <ul className="mt-9 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal
              as="li"
              key={r.name + r.date}
              delay={(i % 3) * 60}
              className="flex flex-col rounded-[6px] border border-line bg-surface p-5 sm:p-6"
            >
              <blockquote className="flex-1 text-body text-fg-dim">
                «{r.quote}»
              </blockquote>
              <footer className="mt-5 border-t border-line pt-4">
                <p className="text-[17px] font-semibold">{r.name}</p>
                {r.context && (
                  <p className="mt-1 text-micro text-gold">{r.context}</p>
                )}
                <p className="mt-1.5 text-micro tabular-nums text-fg-faint">{r.date}</p>
              </footer>
            </Reveal>
          ))}
        </ul>

        <p className="mt-6 text-micro text-fg-faint">
          Отзывы опубликованы на официальном сайте компании{" "}
          <a
            href={contacts.sourceSite}
            className="underline underline-offset-4 transition-colors hover:text-fg-dim"
            target="_blank"
            rel="noreferrer noopener"
          >
            modnoe-mesto.com
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
