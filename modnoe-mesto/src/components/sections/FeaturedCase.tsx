import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { ButtonLink } from "../ui/Button";
import { IconArrow } from "../ui/Icons";
import { featuredCase } from "@/lib/projects";
import { withBase } from "@/lib/basePath";

function Frame({
  label,
  src,
  alt,
  priority,
}: {
  label: string;
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <figure className="relative">
      <img
        src={withBase(src)}
        alt={alt}
        loading="lazy"
        decoding="async"
        width={1100}
        height={825}
        className="aspect-[4/3] w-full object-cover"
      />
      <figcaption
        className={
          "absolute left-0 top-0 bg-bg-deep/85 px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] backdrop-blur-[2px] " +
          (priority ? "text-gold" : "text-fg-dim")
        }
      >
        {label}
      </figcaption>
    </figure>
  );
}

export function FeaturedCase() {
  return (
    <section
      aria-labelledby="case-title"
      className="border-t border-line bg-bg-deep py-16 sm:py-24 lg:py-32"
    >
      <Container>
        <Reveal>
          <p className="u-eyebrow flex items-center gap-3">
            <span className="text-fg-faint">03</span>
            <span>Кейс</span>
          </p>
          <h2
            id="case-title"
            className="mt-4 max-w-[16ch] text-[30px] font-bold leading-[1.06] sm:text-[42px] lg:text-[56px]"
          >
            {featuredCase.car}
          </h2>
          <p className="mt-3 text-[16px] font-medium text-gold sm:text-[18px]">
            {featuredCase.work}
          </p>
        </Reveal>
      </Container>

      {/* Изображения — во всю ширину экрана: это визуальный пик страницы */}
      <Reveal className="mt-8 sm:mt-12">
        <div className="grid gap-1 sm:grid-cols-2 sm:gap-1.5">
          <Frame
            label="До"
            src={featuredCase.before.src.replace(".webp", "-wide.webp")}
            alt={featuredCase.before.alt}
          />
          <Frame
            label="После"
            src={featuredCase.after.src.replace(".webp", "-wide.webp")}
            alt={featuredCase.after.alt}
            priority
          />
        </div>
      </Reveal>

      <Container>
        <Reveal className="mt-8 grid gap-6 sm:mt-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div className="max-w-[62ch]">
            <p className="text-[17px] font-medium leading-[1.45] sm:text-[20px]">
              {featuredCase.lead}
            </p>
            <p className="mt-4 text-[15px] leading-[1.6] text-fg-dim sm:text-[16px]">
              {featuredCase.body}
            </p>
            <p className="mt-5 text-[12.5px] text-fg-faint">{featuredCase.note}</p>
          </div>

          <ButtonLink href="#calculator" variant="secondary" className="w-full lg:w-auto">
            Рассчитать оклейку
            <IconArrow className="size-[18px]" />
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
