import Link from "next/link";
import clsx from "clsx";

type Variant = "primary" | "outline" | "ghost" | "onInk";

const styles: Record<Variant, string> = {
  primary:
    "bg-plum text-white hover:bg-plum-deep active:bg-plum-deep border border-transparent",
  outline:
    "border border-plum/45 text-plum-deep hover:border-plum hover:bg-plum-tint",
  ghost: "border border-line text-graphite hover:border-plum/50 hover:text-plum-deep",
  onInk: "border border-lilac/45 text-milk hover:border-orchid-soft hover:bg-white/8",
};

/**
 * Все интерактивные цели — минимум 48px по высоте (требование 44×44).
 * Скругление умеренное: кнопка не превращается в pill.
 */
const shared =
  "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[4px] px-5 text-[0.9375rem] font-medium leading-tight transition-colors duration-200 cursor-pointer disabled:opacity-50";

export function Button({
  children,
  variant = "primary",
  className,
  type = "button",
  onClick,
  ...rest
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} onClick={onClick} className={clsx(shared, styles[variant], className)} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  href,
  variant = "primary",
  className,
  external = false,
  ...rest
}: {
  children: React.ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
  external?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const cls = clsx(shared, styles[variant], className);
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
