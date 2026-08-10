import { finalCtaMedia } from "@/data/media";
import { Container } from "@/components/ui/Container";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { Reveal } from "@/components/ui/Reveal";
import { SceneArt } from "@/components/media/SceneArt";
import { buttonClass } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section id="final-cta" className="relative overflow-hidden border-t border-line-dark bg-void py-32 sm:py-48">
      <div className="absolute inset-0">
        {finalCtaMedia.type === "scene" ? (
          <>
            <div className={`absolute inset-0 scene-${finalCtaMedia.variant}`} />
            <SceneArt
              variant={finalCtaMedia.variant}
              preserveAspectRatio="xMidYMax slice"
              className="absolute inset-0 h-full w-full text-paper"
            />
          </>
        ) : null}
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/45 to-void/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/70 via-transparent to-transparent" />
      </div>

      <Container size="wide" className="relative">
        <Reveal>
          <p className="text-balance max-w-2xl font-display text-[clamp(2.25rem,6vw,4.25rem)] font-bold leading-[1.03] text-paper">
            Есть идея для вашего автомобиля?
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-pretty mt-6 max-w-md text-[15px] leading-relaxed text-paper/70">
            Покажите машину. Обсудим, какой результат вы хотите получить.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <WhatsAppLink
            source="final_cta"
            className={buttonClass({ variant: "primary", tone: "dark", size: "lg", className: "mt-9" })}
          >
            Обсудить автомобиль в WhatsApp
          </WhatsAppLink>
          <p className="mt-4 text-xs text-paper/45">Можно сразу отправить фотографии автомобиля.</p>
        </Reveal>
      </Container>
    </section>
  );
}
