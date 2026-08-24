import Link from "next/link";
import { Container } from "./Container";

/** Шапка внутренней страницы: хлебные крошки + крупный заголовок + лид. */
export function PageIntro({
  eyebrow,
  title,
  lead,
  parent,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: React.ReactNode;
  parent?: { label: string; href: string };
  children?: React.ReactNode;
}) {
  return (
    <section className="pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-40">
      <Container wide>
        <nav aria-label="Хлебные крошки" className="text-[0.9375rem] text-ink-mute">
          <Link href="/" className="underline underline-offset-4 hover:text-ink">
            Главная
          </Link>
          {parent && (
            <>
              <span aria-hidden="true" className="px-2">
                /
              </span>
              <Link href={parent.href} className="underline underline-offset-4 hover:text-ink">
                {parent.label}
              </Link>
            </>
          )}
          <span aria-hidden="true" className="px-2">
            /
          </span>
          <span className="text-ink-soft">{eyebrow}</span>
        </nav>

        <h1 className="font-display mt-8 max-w-[20ch] text-[2.5rem] text-ink sm:text-[3.5rem] lg:text-[4.5rem]">
          {title}
        </h1>

        {lead && (
          <div className="mt-7 max-w-[58ch] text-[1.125rem] leading-[1.7] text-ink-soft sm:text-[1.1875rem]">
            {lead}
          </div>
        )}

        {children}
      </Container>
    </section>
  );
}
