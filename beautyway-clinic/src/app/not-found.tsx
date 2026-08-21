import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { IconArrow } from "@/components/ui/Icons";
import { site } from "@/lib/site";

const LINKS = [
  { href: "/uslugi", label: "Каталог услуг" },
  { href: "/problem", label: "Проблемы и зоны" },
  { href: "/vrachi", label: "Врачи" },
  { href: "/price", label: "Цены" },
  { href: "/contacts", label: "Контакты" },
];

export default function NotFound() {
  return (
    <section className="bg-milk py-20 sm:py-28">
      <Container className="max-w-[680px]">
        <p className="eyebrow text-plum">Ошибка 404</p>
        <h1 className="mt-4 font-display text-[2rem] leading-tight text-graphite sm:text-[2.75rem]">
          Такой страницы нет
        </h1>
        <p className="mt-4 text-[1.0625rem] leading-relaxed text-graphite-soft">
          Возможно, адрес изменился. Начните с каталога процедур или позвоните — подскажем по телефону{" "}
          <a href={site.phoneHref} className="text-plum underline underline-offset-2">
            {site.phone}
          </a>
          .
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group flex min-h-[56px] items-center justify-between gap-3 rounded-[10px] border border-line bg-porcelain px-4 text-[0.9375rem] font-medium text-graphite transition-colors hover:border-plum/45 hover:bg-plum-tint hover:text-plum-deep"
              >
                {l.label}
                <IconArrow className="h-4 w-4 shrink-0 text-plum transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
