import Link from "next/link";
import clsx from "clsx";

type Variant = "solid" | "accent" | "outline" | "ghost" | "light";

/*
  Радиус 2px вместо «SaaS»-скруглений: клиника, а не приложение.
  Нажатие даёт мгновенную отдачу (scale .98, 200ms) — интерфейс должен
  ощущаться отзывчивым, а не «думающим».
  Высота ≥ 52px: палец попадает без прицеливания.
*/
const base =
  "inline-flex items-center justify-center gap-2 rounded-[2px] px-7 min-h-[52px] " +
  "text-[1rem] font-medium leading-none tracking-[0.01em] cursor-pointer " +
  "transition-[background-color,color,border-color,transform] duration-200 ease-out " +
  "active:scale-[0.98] select-none";

const variants: Record<Variant, string> = {
  /* Основное действие страницы. */
  solid: "bg-plum text-shell hover:bg-plum-soft",
  /* Единственное место, где фирменная фуксия работает заливкой. */
  accent: "bg-accent text-paper hover:bg-accent-deep",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink/[0.04]",
  ghost:
    "text-ink underline underline-offset-[6px] decoration-ink/30 hover:decoration-ink px-0 min-h-0",
  light: "bg-shell text-ink hover:bg-paper",
};

export function Button({
  href,
  children,
  variant = "solid",
  className,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link href={href} className={clsx(base, variants[variant], className)} {...rest}>
      {children}
    </Link>
  );
}

export function ButtonAction({
  children,
  variant = "solid",
  className,
  ...rest
}: {
  children: React.ReactNode;
  variant?: Variant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={clsx(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}
