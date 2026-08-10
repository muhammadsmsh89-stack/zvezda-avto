type IconProps = {
  className?: string;
};

const base = {
  fill: "none",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconArrowUpRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

export function IconArrowDown({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <path d="M12 4v15M6 13l6 6 6-6" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <path d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L15 12l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function IconWhatsapp({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.04 2c-5.5 0-10 4.5-10 10 0 1.77.46 3.44 1.27 4.9L2 22l5.25-1.28A10 10 0 0 0 12.04 22c5.5 0 10-4.5 10-10s-4.5-10-10-10Zm5.86 14.2c-.25.7-1.44 1.34-1.98 1.4-.5.06-1.14.09-1.84-.12-.42-.13-.97-.31-1.66-.62-2.93-1.27-4.84-4.23-4.99-4.43-.15-.2-1.19-1.58-1.19-3.02 0-1.44.75-2.14 1.02-2.44.27-.29.6-.36.8-.36h.57c.18 0 .43-.07.67.51.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.77 1.27 1.66 2.06 1.14 1.02 2.1 1.34 2.4 1.49.3.15.47.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.66-.15.27.1 1.7.8 1.99.95.3.15.5.22.57.35.07.13.07.75-.18 1.44Z" />
    </svg>
  );
}

export function IconInstagram({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M16.6 7.4h.01" />
    </svg>
  );
}

export function IconPin({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.2" />
    </svg>
  );
}

export function IconStar({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2.5l2.9 6.2 6.6.7-5 4.6 1.4 6.6L12 17.6 6.1 20.6l1.4-6.6-5-4.6 6.6-.7L12 2.5Z" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <path d="M4 12l5 5L20 6" />
    </svg>
  );
}

export function IconChevron({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconDrag({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <path d="M9 6l-4 6 4 6M15 6l4 6-4 6" />
    </svg>
  );
}
