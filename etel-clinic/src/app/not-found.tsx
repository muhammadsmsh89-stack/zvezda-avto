import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { nav } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center py-32">
      <Container wide>
        <p className="eyebrow">Ошибка 404</p>
        <h1 className="font-display mt-7 max-w-[18ch] text-[2.5rem] text-ink sm:text-[3.5rem] lg:text-[4rem]">
          Такой страницы у нас нет
        </h1>
        <p className="mt-6 max-w-[46ch] text-[1.125rem] leading-[1.65] text-ink-soft">
          Возможно, адрес устарел. Вот куда стоит заглянуть:
        </p>

        <ul className="rule mt-10 flex flex-wrap gap-x-8 gap-y-3 pt-6">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-[1.0625rem] text-ink underline decoration-ink/25 underline-offset-[7px] transition-colors duration-200 hover:decoration-ink"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
