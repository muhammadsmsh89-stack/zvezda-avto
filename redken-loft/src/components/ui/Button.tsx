import { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ink" | "ink-outline";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-300 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 whitespace-nowrap min-h-11";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-foreground hover:bg-accent-2",
  secondary:
    "bg-transparent text-foreground border border-border-strong hover:border-foreground hover:bg-surface",
  ink: "bg-ink text-paper hover:bg-ink/85",
  "ink-outline": "bg-transparent text-ink border border-ink/25 hover:border-ink hover:bg-ink/5",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-4 text-[0.95rem]",
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled,
  icon,
}: {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  icon?: ReactNode;
}) {
  const classes = clsx(base, variants[variant], sizes[size], disabled && "pointer-events-none opacity-60", className);
  const content = (
    <>
      <span>{children}</span>
      {icon}
    </>
  );

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={classes}>
          {content}
        </Link>
      );
    }
    const isExternal = /^https?:\/\//.test(href) || href.startsWith("viber:");
    return (
      <a href={href} className={classes} {...(isExternal && href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}

export function TextLink({
  children,
  href,
  className,
  tone = "light",
}: {
  children: ReactNode;
  href: string;
  className?: string;
  tone?: "light" | "ink";
}) {
  const classes = clsx(
    "group inline-flex items-center gap-2 text-sm font-semibold transition-colors",
    tone === "ink" ? "text-ink hover:text-accent-2" : "text-foreground hover:text-accent",
    className
  );
  const content = (
    <>
      <span className="border-b border-current pb-0.5">{children}</span>
      <ArrowIcon className="h-3 w-3 shrink-0 -rotate-45 transition-transform duration-300 ease-out group-hover:rotate-0" />
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  const isExternal = /^https?:\/\//.test(href);
  return (
    <a href={href} className={classes} {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {content}
    </a>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10H16" />
      <path d="M11 5L16 10L11 15" />
    </svg>
  );
}
