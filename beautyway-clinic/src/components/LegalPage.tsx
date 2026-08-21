import { Container } from "./ui/Container";
import { PageIntro } from "./ui/PageIntro";
import { ContentSections } from "./ContentSections";
import { staticPages, displayTitle } from "@/lib/content";
import { JsonLd, breadcrumbLd } from "@/lib/seo";
import { VERIFIED_ON_HUMAN } from "@/lib/site";

/** Единый шаблон для юридических и информационных страниц. */
export function LegalPage({
  path,
  title,
  eyebrow = "Документ",
  intro,
}: {
  path: string;
  title?: string;
  eyebrow?: string;
  intro?: string;
}) {
  const page = staticPages[path];
  const heading = title ?? (page ? displayTitle(page) : path);
  const crumbs = [
    { name: "Главная", path: "/" },
    { name: heading, path },
  ];

  return (
    <>
      <PageIntro eyebrow={eyebrow} title={heading} intro={intro} crumbs={crumbs} />
      <section className="bg-milk py-12 sm:py-16">
        <Container className="max-w-[820px]">
          {page && page.sections.length > 0 ? (
            <ContentSections sections={page.sections} />
          ) : (
            <p className="text-[1rem] leading-relaxed text-graphite-soft">
              Текст документа опубликован на официальном сайте клиники.
            </p>
          )}
          <p className="mt-10 border-t border-line pt-5 text-[0.8125rem] leading-relaxed text-graphite-soft">
            Текст перенесён с официального сайта клиники без изменений по существу. Сверено {VERIFIED_ON_HUMAN}.
          </p>
        </Container>
      </section>
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
