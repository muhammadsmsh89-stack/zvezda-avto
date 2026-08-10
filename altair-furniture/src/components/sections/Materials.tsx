import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { NumberTag } from "@/components/ui/NumberTag";

const layers = [
  { label: "Корпус", note: "несущая основа, толщина под нагрузку" },
  { label: "Фасад", note: "видимая поверхность, толщина и кромка под задачу" },
  { label: "Фурнитура", note: "петли, направляющие, механизмы открывания" },
];

export function Materials() {
  return (
    <section className="border-y border-border bg-stone py-16 sm:py-20">
      <Container size="content">
        <Reveal className="grid grid-cols-1 gap-10 sm:grid-cols-12 sm:gap-8">
          <div className="sm:col-span-5">
            <NumberTag value="§07 Материалы" className="text-sm" />
            <p className="text-pretty mt-4 max-w-md text-[clamp(1.05rem,1.6vw,1.375rem)] leading-relaxed text-ink">
              Материал выбирается под задачу и бюджет на этапе проекта — состав фиксируем в
              смете, чтобы вы точно знали, из чего сделана ваша мебель.
            </p>
          </div>

          <div className="sm:col-span-7">
            <div className="border-t border-border">
              {layers.map((layer, i) => (
                <div
                  key={layer.label}
                  className="flex flex-col gap-1 border-b border-border py-5 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <span className="font-mono-tag w-10 shrink-0 text-2xl text-accent">0{i + 1}</span>
                  <span className="font-display w-32 shrink-0 text-lg font-medium text-ink">{layer.label}</span>
                  <span className="text-sm leading-relaxed text-muted">{layer.note}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
