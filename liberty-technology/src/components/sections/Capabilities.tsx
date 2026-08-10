import clsx from "clsx";
import { capabilities, secondaryServices } from "@/data/services";
import { capabilityMedia } from "@/data/media";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SceneFrame } from "@/components/media/SceneFrame";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { IconArrowUpRight } from "@/components/icons";

export function Capabilities() {
  return (
    <section id="capabilities" className="bg-void py-24 sm:py-32">
      <Container size="wide">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="Четыре направления в одном центре"
            lead="Кузовной ремонт, защита кузова, детейлинг и тюнинг — под одной крышей на Жемчужной, 12."
          />
        </Reveal>
      </Container>

      <div className="mt-16 flex flex-col">
        {capabilities.map((capability, i) => {
          const media = capabilityMedia[capability.id];
          const reversed = i % 2 === 1;
          return (
            <Reveal key={capability.id}>
              <div className="border-t border-line-dark py-10 last:border-b sm:py-14">
                <Container size="wide">
                  <div
                    className={clsx(
                      "grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12",
                    )}
                  >
                    <div
                      className={clsx(
                        "lg:col-span-7",
                        reversed && "lg:order-2",
                      )}
                    >
                      <SceneFrame
                        media={media}
                        caption={capability.eyebrow}
                        index={capability.index}
                        aspect="aspect-[16/10]"
                      />
                    </div>
                    <div className={clsx("lg:col-span-5", reversed && "lg:order-1")}>
                      <span className="font-mono-tag text-sm text-accent">{capability.index}</span>
                      <h3 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight text-paper">
                        {capability.name}
                      </h3>
                      <p className="text-pretty mt-4 max-w-md text-[15px] leading-relaxed text-paper/65">
                        {capability.description}
                      </p>
                      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                        {capability.details.map((detail) => (
                          <li key={detail} className="font-mono-tag text-xs uppercase tracking-[0.08em] text-paper/45">
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <WhatsAppLink
                        context={capability.whatsappContext}
                        source={`capability_${capability.id}`}
                        className="group mt-7 inline-flex items-center gap-1.5 text-sm text-paper transition-colors hover:text-accent-soft"
                      >
                        Обсудить
                        <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </WhatsAppLink>
                    </div>
                  </div>
                </Container>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Container size="wide" className="mt-14">
        <Reveal>
          <p className="font-mono-tag text-xs uppercase tracking-[0.14em] text-paper/40">Дополнительно</p>
          <p className="text-pretty mt-3 max-w-2xl text-[15px] leading-relaxed text-paper/60">
            {secondaryServices.map((service, i) => (
              <span key={service.name}>
                {service.name}
                {service.verified === false ? "*" : ""}
                {i < secondaryServices.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
          {secondaryServices.some((s) => !s.verified) ? (
            <p className="mt-2 text-xs text-paper/35">* уточняется у центра при обращении</p>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
