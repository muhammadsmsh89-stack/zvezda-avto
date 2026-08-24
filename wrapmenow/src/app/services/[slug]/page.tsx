import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal, FrameReveal } from "@/components/ui/Reveal";
import { Button, TextLink } from "@/components/ui/Button";
import { PhotoPanel } from "@/components/ui/PhotoPanel";
import { RealPhoto } from "@/components/ui/RealPhoto";
import { Check } from "@/components/ui/Icons";
import { services, getService } from "@/lib/services";
import { serviceImages } from "@/lib/media";
import { whatsappLink } from "@/lib/contacts";
import { ctaLabels } from "@/lib/site";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: `${service.short} WrapMeNow, Москва.`,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageIntro eyebrow={`Услуга ${service.number}`} title={service.title} description={service.description} />
      <section className="bg-background pb-20 lg:pb-28">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <FrameReveal className="aspect-[4/3] w-full rounded-[1.75rem] border border-border">
            {serviceImages[service.slug] ? (
              <RealPhoto image={serviceImages[service.slug]!} sizes="(min-width: 1024px) 45vw, 92vw" className="h-full w-full" />
            ) : (
              <PhotoPanel
                variant={service.slug === "tint" ? "tint" : "blackout"}
                label={`${service.title} — WrapMeNow`}
                className="h-full w-full"
              />
            )}
          </FrameReveal>

          <div>
            {service.fromPrice && (
              <Reveal>
                <p className="text-2xl font-semibold text-accent">{service.fromPrice}</p>
              </Reveal>
            )}
            <Reveal delay={0.06}>
              <ul className="mt-6 space-y-3">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-foreground/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1} className="mt-6 flex flex-wrap gap-2">
              {service.elements.map((el) => (
                <span key={el} className="rounded-full border border-border-strong px-3 py-1 text-xs text-muted">
                  {el}
                </span>
              ))}
            </Reveal>

            <Reveal delay={0.16} className="mt-8 flex flex-wrap gap-3">
              <Button href={whatsappLink(`Здравствуйте! Хочу узнать стоимость услуги «${service.title}» в WrapMeNow.`)} dataEvent="hero_calc_click">
                {ctaLabels.primary}
              </Button>
              <Button variant="secondary" href="/services">Все услуги</Button>
            </Reveal>
            <Reveal delay={0.22} className="mt-6">
              <TextLink href="/portfolio">Посмотреть работы WrapMeNow</TextLink>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
