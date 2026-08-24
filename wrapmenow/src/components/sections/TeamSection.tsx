import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { team } from "@/lib/team";

export function TeamSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Команда</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 max-w-xl text-pretty text-display font-medium text-foreground">
            За каждым этапом отвечает свой специалист
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[1.5rem] border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.04} className="flex flex-col items-center gap-3 bg-surface p-6 text-center sm:p-7">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 font-[var(--font-display)] text-lg font-medium text-accent">
                {member.name[0]}
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">{member.name}</p>
                <p className="text-xs text-muted">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
