type P = { className?: string };

const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const IconArrow = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...s}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconPhone = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...s}>
    <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5L17 13l4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 3 5.2 2 2 0 0 1 5 3h1.5Z" />
  </svg>
);

export const IconStar = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
    <path d="m12 2.6 2.7 5.9 6.3.7-4.7 4.4 1.3 6.4L12 16.8 6.4 20l1.3-6.4L3 9.2l6.3-.7L12 2.6Z" />
  </svg>
);

export const IconMenu = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...s}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconClose = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...s}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const IconCheck = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...s}>
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
);

export const IconPin = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...s}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const IconClock = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...s}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.2l3.2 2" />
  </svg>
);

export const IconMail = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...s}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.6 6.5 8.4 6 8.4-6" />
  </svg>
);

export const IconTelegram = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
    <path d="M21.7 3.6 2.9 10.8c-1 .4-1 1.8.1 2.1l4.6 1.4 1.8 5.5c.3.8 1.3 1 1.9.4l2.5-2.4 4.6 3.4c.7.5 1.7.1 1.9-.7l3.3-15c.2-1-.8-1.8-1.9-1.4ZM8.9 14 18 8.1c.3-.2.6.2.4.4l-7.2 6.8-.3 3.2L8.9 14Z" />
  </svg>
);

export const IconVk = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
    <path d="M12.8 17c-5.1 0-8.4-3.6-8.5-9.6h2.6c.1 4.5 2.2 6.4 3.7 6.8V7.4h2.5v3.8c1.5-.2 3.1-1.9 3.6-3.8h2.4c-.4 2.3-2 4-3.2 4.7 1.2.6 3 2.1 3.7 4.9h-2.7c-.5-1.8-1.9-3.2-3.8-3.4V17h-.3Z" />
  </svg>
);
