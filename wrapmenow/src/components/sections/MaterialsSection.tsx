import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { materials, materialParams, materialsIntro } from "@/lib/materials";

const columns = Object.keys(materialParams[0].values);

export function MaterialsSection() {
  return (
    <>
      <section className="bg-background pb-16 lg:pb-20">
        <Container>
          <Reveal>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-foreground/90">{materialsIntro}</p>
          </Reveal>

          <Reveal delay={0.08} className="mt-8 flex flex-wrap gap-2.5">
            {materials.map((m) => (
              <span
                key={m.name}
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-sm text-foreground/85"
                title={m.note}
              >
                {m.name}
                {!m.confirmed && <span className="text-[10px] uppercase tracking-[0.06em] text-muted">·требует подтверждения</span>}
              </span>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-2/50 py-16 lg:py-20">
        <Container>
          <Reveal>
            <h2 className="max-w-xl text-pretty text-display font-medium text-foreground">Как сравнивать плёнки</h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 overflow-x-auto rounded-[1.5rem] border border-border">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-surface">
                  <th className="sticky left-0 bg-surface p-4 text-left text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                    Параметр
                  </th>
                  {columns.map((c) => (
                    <th key={c} className="p-4 text-left text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {materialParams.map((row) => (
                  <tr key={row.label} className="border-t border-border">
                    <td className="sticky left-0 bg-background p-4 font-medium text-foreground">{row.label}</td>
                    {columns.map((c) => (
                      <td key={c} className="p-4 text-foreground/85">
                        {row.values[c]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
