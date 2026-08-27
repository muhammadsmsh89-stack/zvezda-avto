import { process, materials } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section id="process" className="border-t border-border bg-surface py-20 scroll-mt-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="06"
          eyebrow="О салоне"
          title="Как устроена работа над цветом"
          description="Каждое сложное окрашивание проходит один и тот же путь — это и объясняет стоимость."
        />

        <Stagger className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {process.map((step) => (
            <StaggerItem key={step.number}>
              <div className="border-t border-accent/40 pt-5">
                <span className="font-editorial text-3xl text-accent">{step.number}</span>
                <h3 className="mt-3 text-lg text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-16 border-t border-border pt-6 text-sm text-muted">{materials.caption}</p>
      </div>
    </section>
  );
}
