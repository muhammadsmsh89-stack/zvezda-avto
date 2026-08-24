import Link from "next/link";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "secondary" | "dark" | "ghost";
type Size = "md" | "lg";

type Common = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  icon?: boolean;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-shell shadow-[0_10px_30px_-10px_rgba(122,29,63,0.55)] hover:bg-accent-bright hover:shadow-[0_14px_38px_-8px_rgba(165,42,84,0.6)] hover:-translate-y-0.5",
  secondary:
    "border border-ink/20 text-ink bg-transparent hover:border-ink hover:bg-ink hover:text-shell hover:-translate-y-0.5",
  dark:
    "bg-shell text-graphite hover:bg-accent-lift hover:-translate-y-0.5",
  ghost:
    "text-ink underline decoration-ink/30 underline-offset-[6px] hover:decoration-accent hover:text-accent",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3.5 text-[0.9375rem]",
  lg: "px-8 py-4.5 text-[1rem]",
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  icon = true,
  href,
  target,
  onClick,
  type = "button",
}: Common & {
  href?: string;
  target?: "_blank";
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const cls = clsx("btn", variants[variant], variant !== "ghost" && sizes[size], className);
  const content = (
    <>
      <span>{children}</span>
      {icon && variant !== "ghost" && (
        <ArrowUpRight className="btn-icon" size={size === "lg" ? 19 : 17} strokeWidth={2.25} />
      )}
    </>
  );
  if (href) {
    return (
      <Link href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} className={cls}>
        {content}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {content}
    </button>
  );
}

/**
 * Совместимая обёртка для страниц, собранных на старом API (`variant="accent"`).
 * Рендерит ту же утверждённую Button — старая визуальная система кнопок
 * (прямоугольные, без стрелки) не возвращается, здесь только маппинг имени.
 */
export function ButtonAction({
  variant = "accent",
  ...props
}: Omit<Common, "variant"> & {
  variant?: Variant | "accent";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  return <Button variant={variant === "accent" ? "primary" : variant} {...props} />;
}
