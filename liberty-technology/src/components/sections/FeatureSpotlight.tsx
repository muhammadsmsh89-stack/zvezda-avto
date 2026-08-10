import clsx from "clsx";
import type { MediaAsset } from "@/data/media";
import { Container } from "@/components/ui/Container";
import { SceneFrame } from "@/components/media/SceneFrame";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { Reveal } from "@/components/ui/Reveal";
import { IconArrowUpRight } from "@/components/icons";

type FeatureSpotlightProps = {
  id?: string;
  index: string;
  eyebrow: string;
  title: string;
  body: string[];
  detail?: string[];
  media: MediaAsset;
  whatsappContext: string;
  reversed?: boolean;
};

export function FeatureSpotlight({
  id,
  index,
  eyebrow,
  title,
  body,
  detail,
  media,
  whatsappContext,
  reversed = false,
}: FeatureSpotlightProps) {
  return (
    <section id={id} className="border-t border-line-dark bg-void py-20 sm:py-28">
      <Container size="wide">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className={clsx("lg:col-span-6", reversed && "lg:order-2")}>
            <SceneFrame media={media} caption={eyebrow} index={index} aspect="aspect-[4/5] sm:aspect-[4/3]" />
          </Reveal>

          <Reveal delay={0.1} className={clsx("lg:col-span-6", reversed && "lg:order-1")}>
            <span className="font-mono-tag text-xs uppercase tracking-[0.16em] text-paper/45">{eyebrow}</span>
            <h2 className="text-balance mt-4 font-display text-[clamp(2rem,3.6vw,3rem)] font-bold leading-[1.06] text-paper">
              {title}
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {body.map((paragraph, i) => (
                <p key={i} className="text-pretty max-w-lg text-[15px] leading-relaxed text-paper/65">
                  {paragraph}
                </p>
              ))}
            </div>
            {detail ? (
              <ul className="mt-6 flex flex-col gap-2">
                {detail.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-paper/55">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
            <WhatsAppLink
              context={whatsappContext}
              source={`feature_${id ?? index}`}
              className="group mt-8 inline-flex items-center gap-1.5 text-sm text-paper transition-colors hover:text-accent-soft"
            >
              Обсудить
              <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </WhatsAppLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
