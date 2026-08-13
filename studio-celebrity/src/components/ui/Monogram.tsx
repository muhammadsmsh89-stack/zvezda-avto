import clsx from "clsx";

/** Studio Celebrity brand mark — an "SC" monogram in a soft-cornered square. */
export function Monogram({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={clsx("shrink-0", className)}
      aria-hidden
    >
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="10"
        className={dark ? "fill-background" : "fill-accent"}
      />
      <text
        x="20"
        y="26.5"
        textAnchor="middle"
        fontFamily="var(--font-sans), Arial, sans-serif"
        fontSize="15"
        fontWeight="700"
        letterSpacing="0.5"
        className={dark ? "fill-accent" : "fill-background"}
      >
        SC
      </text>
    </svg>
  );
}
