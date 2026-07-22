import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { advantages } from "@/lib/content";

export function WhyUs() {
  return (
    <section className="border-b border-border bg-surface/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Почему выбирают «Звезду»"
          title="Сервис, которому доверяют"
          description="Работаем прозрачно и предсказуемо — клиент понимает, за что платит, на каждом этапе."
        />

        <Stagger className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, i) => (
            <StaggerItem key={item.title} className="group relative bg-surface p-8 transition-colors hover:bg-surface-2">
              <span className="font-sans text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-sans text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
