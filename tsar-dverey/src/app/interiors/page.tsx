import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { DoorTexturePanel } from "@/components/art/DoorTexturePanel";
import { styleDirections } from "@/lib/interiors";

export const metadata: Metadata = {
  title: "Интерьеры",
  description: "Стилевые направления «Царь Дверей» — по мотивам реальных инсталляций шоурума в Махачкале.",
};

// Композиция намеренно асимметричная (large + tall + wide), не сетка 2×2 — плоские свотчи
// в предыдущей версии читались как мудборд, а не как интерьеры (см. VISUAL_QA.md).
export default function InteriorsPage() {
  const [ivory, glass, classic, wood] = styleDirections;

  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Интерьеры" }]}
        eyebrow="Интерьеры"
        title="Стилевые направления, с которыми мы работаем"
        intro="По мотивам реальных инсталляций шоурума на ул. Ирчи Казака, 86 — тон, фактура и фурнитура подбираются под общий характер помещения, а не под одну универсальную модель."
      />

      <section className="py-16 sm:py-20">
        <div className="container-wide grid grid-cols-1 gap-4 lg:grid-cols-12 lg:auto-rows-[240px]">
          <Reveal variant="mask" className="lg:col-span-7 lg:row-span-2">
            <DoorTexturePanel
              tone={ivory.tone}
              crop={ivory.crop}
              variant={ivory.variant}
              className="h-full min-h-[420px]"
              slotId={`REAL_INTERIOR_IMAGE_REQUIRED:${ivory.id}`}
            >
              <p className="text-[26px] text-deep-foreground">{ivory.title}</p>
              <p className="mt-2 max-w-[40ch] text-[15px] leading-relaxed text-deep-foreground/75">{ivory.description}</p>
            </DoorTexturePanel>
          </Reveal>

          <Reveal variant="mask" delay={0.06} className="lg:col-span-5 lg:row-span-2">
            <DoorTexturePanel
              tone={glass.tone}
              crop={glass.crop}
              variant={glass.variant}
              className="h-full min-h-[300px]"
              slotId={`REAL_INTERIOR_IMAGE_REQUIRED:${glass.id}`}
            >
              <p className="text-[24px] text-deep-foreground">{glass.title}</p>
              <p className="mt-2 max-w-[36ch] text-[15px] leading-relaxed text-deep-foreground/75">{glass.description}</p>
            </DoorTexturePanel>
          </Reveal>

          <Reveal variant="mask" delay={0.1} className="lg:col-span-5">
            <DoorTexturePanel
              tone={classic.tone}
              crop={classic.crop}
              variant={classic.variant}
              className="h-full min-h-[240px]"
              slotId={`REAL_INTERIOR_IMAGE_REQUIRED:${classic.id}`}
            >
              <p className="text-[22px] text-deep-foreground">{classic.title}</p>
              <p className="mt-2 max-w-[34ch] text-[14px] leading-relaxed text-deep-foreground/75">{classic.description}</p>
            </DoorTexturePanel>
          </Reveal>

          <Reveal variant="mask" delay={0.14} className="lg:col-span-7">
            <DoorTexturePanel
              tone={wood.tone}
              crop={wood.crop}
              variant={wood.variant}
              className="h-full min-h-[240px]"
              slotId={`REAL_INTERIOR_IMAGE_REQUIRED:${wood.id}`}
            >
              <p className="text-[22px] text-deep-foreground">{wood.title}</p>
              <p className="mt-2 max-w-[34ch] text-[14px] leading-relaxed text-deep-foreground/75">{wood.description}</p>
            </DoorTexturePanel>
          </Reveal>
        </div>
      </section>
    </>
  );
}
