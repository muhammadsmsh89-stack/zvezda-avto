import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { advantages } from "@/lib/content";

export function WhyUs() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Почему выбирают нас"
          title="Атмосфера уюта и заботы в каждой детали"
          description="Мы создаём пространство, в котором хочется остаться дольше, чем планировали — и вернуться снова."
          align="center"
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <StaggerItem key={item.title}>
              <div className="h-full rounded-3xl border border-border bg-surface p-7 transition-colors hover:border-accent/50">
                <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
