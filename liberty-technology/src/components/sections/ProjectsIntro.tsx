import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectsIntro() {
  return (
    <section id="projects" className="bg-void pt-24 sm:pt-32">
      <Container size="wide">
        <Reveal>
          <SectionHeading
            eyebrow="Selected Projects"
            title="Проекты Liberty"
            lead="Работы, которые подтверждаются реальными отзывами клиентов — без додуманных подробностей."
          />
        </Reveal>
      </Container>
    </section>
  );
}
