import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex min-h-[52px] items-center justify-center gap-2 px-6 text-body font-semibold tracking-[-0.01em] " +
  "rounded-[4px] transition-[transform,background-color,border-color,color] duration-[160ms] ease-out " +
  "active:scale-[0.975] disabled:pointer-events-none disabled:opacity-45 select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-on-gold hover:bg-gold-bright",
  secondary:
    "border border-line-strong text-fg hover:border-gold hover:text-gold-bright bg-transparent",
  ghost: "text-fg-dim hover:text-fg",
};

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...rest
}: { variant?: Variant; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={clsx(base, variants[variant], className)} {...rest}>
      {children}
    </a>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  ...rest
}: { variant?: Variant; children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={clsx(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}
