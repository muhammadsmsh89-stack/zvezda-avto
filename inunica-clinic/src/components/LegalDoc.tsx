import legal from "@/data/generated/legal.json";
import { Container } from "./ui/Container";
import { PageIntro } from "./ui/PageIntro";

type Block = { kind: string; text: string };
type Doc = { slug: string; title: string; blocks: Block[] };

const docs = legal as Doc[];

export function findLegalDoc(slug: string): Doc | undefined {
  return docs.find((d) => d.slug === slug);
}

/**
 * Правовой документ страницей. Текст перенесён с inunica.ru дословно —
 * менялась только разметка: заголовки разделов отделены от абзацев,
 * ширина колонки ограничена, чтобы строка не расползалась на весь экран.
 */
export function LegalDoc({ slug, lead }: { slug: string; lead?: string }) {
  const doc = findLegalDoc(slug);
  if (!doc) return null;

  return (
    <>
      <PageIntro eyebrow="Документы" title={doc.title} lead={lead} />

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="max-w-[74ch]">
            {doc.blocks.map((b, i) =>
              b.kind === "h2" ? (
                <h2
                  key={i}
                  className="font-display rule mt-14 pt-6 text-[1.5rem] text-ink first:mt-0 sm:text-[1.875rem]"
                >
                  {b.text}
                </h2>
              ) : (
                <p key={i} className="mt-4 text-[1rem] leading-[1.75] text-ink-soft">
                  {b.text}
                </p>
              ),
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
