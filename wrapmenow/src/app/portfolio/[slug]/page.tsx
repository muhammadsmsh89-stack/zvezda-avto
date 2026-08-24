import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal, FrameReveal } from "@/components/ui/Reveal";
import { Button, TextLink } from "@/components/ui/Button";
import { RealPhoto } from "@/components/ui/RealPhoto";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowUpRight } from "@/components/ui/Icons";
import { projects, getProject, categoryLabels } from "@/lib/projects";
import { whatsappLink } from "@/lib/contacts";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.vehicle} — ${project.title}`,
    description: `${project.summary} Реальный проект студии WrapMeNow, Москва.`,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <PageIntro
        eyebrow={`${categoryLabels[project.category]} · ${project.brand}`}
        title={project.vehicle}
        description={project.title}
        action={
          <TextLink href={project.sourceUrl}>
            Источник: страница проекта на wrapmenow.ru
          </TextLink>
        }
      />

      <section className="bg-background pb-16 lg:pb-20">
        <Container>
          <FrameReveal className="aspect-[16/10] w-full rounded-[1.75rem] border border-border sm:aspect-[21/9]">
            <RealPhoto image={project.images[0]} priority sizes="100vw" className="h-full w-full" />
          </FrameReveal>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-2/40 py-16 lg:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="text-pretty text-display font-medium text-foreground">Что сделали</h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">{project.summary}</p>
            </Reveal>

            <dl className="mt-8 space-y-5">
              <div className="border-t border-border pt-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Автомобиль</dt>
                <dd className="mt-1.5 text-sm text-foreground/90">{project.vehicle}</dd>
              </div>
              {project.material && (
                <div className="border-t border-border pt-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Материал</dt>
                  <dd className="mt-1.5 text-sm text-foreground/90">{project.material}</dd>
                </div>
              )}
              <div className="border-t border-border pt-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Работы</dt>
                <dd className="mt-1.5 flex flex-wrap gap-1.5">
                  {project.work.map((w) => (
                    <span key={w} className="rounded-full border border-border-strong px-3 py-1 text-xs text-muted">
                      {w}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            <Reveal delay={0.16} className="mt-9">
              <Button href={whatsappLink(`Здравствуйте! Понравился проект «${project.vehicle}» — хочу рассчитать похожую работу для своего автомобиля.`)} icon={<ArrowUpRight className="h-4 w-4" />} dataEvent="project_detail_cta_click">
                Рассчитать такую работу для моего автомобиля
              </Button>
            </Reveal>
          </div>

          {project.images.length > 1 && (
            <div className="grid grid-cols-2 gap-4">
              {project.images.slice(1).map((img, i) => (
                <Reveal key={i} delay={0.06 + i * 0.05} className="aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                  <RealPhoto image={img} sizes="(min-width: 1024px) 24vw, 45vw" className="h-full w-full" />
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>

      {others.length > 0 && (
        <section className="bg-background py-16 lg:py-20">
          <Container>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Другие проекты</p>
            </Reveal>
            <div className="mt-8 columns-1 gap-6 sm:columns-2 lg:columns-3">
              {others.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
