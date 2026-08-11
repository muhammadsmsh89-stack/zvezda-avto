import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

type Variant = "primary" | "secondary" | "ghost-dark" | "ghost-light";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary: "bg-foreground text-background hover:bg-accent hover:text-accent-foreground",
  secondary: "border border-border-strong text-foreground hover:border-accent hover:text-accent",
  "ghost-dark": "border border-deep-border text-deep-foreground hover:border-accent hover:text-accent",
  "ghost-light": "border border-border-strong text-foreground hover:border-accent hover:text-accent",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-3 text-[15px]",
  lg: "px-7 py-4 text-[16px]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[3px] transition-colors duration-200 leading-none";

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const classes = clsx(base, variantClasses[variant], sizeClasses[size], className);

  if (isExternal) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={classes}>
      {children}
    </Link>
  );
}

export function ButtonAsButton({
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={clsx(base, variantClasses[variant], sizeClasses[size], className)} {...rest}>
      {children}
    </button>
  );
}
