import clsx from "clsx";

type ButtonVisualProps = {
  variant?: "primary" | "secondary" | "ghost";
  tone?: "dark" | "light";
  size?: "md" | "lg";
  className?: string;
};

const sizeClass: Record<NonNullable<ButtonVisualProps["size"]>, string> = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-[15px]",
};

export function buttonClass({ variant = "primary", tone = "dark", size = "md", className }: ButtonVisualProps) {
  const base = "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-300";
  const variants: Record<NonNullable<ButtonVisualProps["variant"]>, string> = {
    primary:
      tone === "dark"
        ? "bg-paper text-void hover:bg-paper/85"
        : "bg-ink text-paper hover:bg-ink/85",
    secondary:
      tone === "dark"
        ? "border border-line-dark-strong text-paper hover:border-paper/60"
        : "border border-line-light-strong text-ink hover:border-ink/50",
    ghost:
      tone === "dark"
        ? "text-paper/80 hover:text-paper"
        : "text-ink/80 hover:text-ink",
  };
  return clsx(base, sizeClass[size], variants[variant], className);
}
