/**
 * Минимальный набор линейных иконок. Только SVG — эмодзи в интерфейсе нет.
 * Все иконки декоративные (aria-hidden): смысл несёт текст рядом.
 */
type P = { className?: string };
const base = (className?: string) => ({
  className: className ?? "h-5 w-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false as const,
});

export const IconPhone = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
  </svg>
);

export const IconTelegram = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M21 4.5 2.8 11.3c-.7.3-.7 1.3.1 1.5l4.6 1.4 1.8 5.1c.2.6 1 .8 1.4.3l2.5-2.6 4.6 3.4c.5.4 1.3.1 1.4-.6L21.9 5.4c.1-.7-.5-1.2-1.1-.9Z" />
    <path d="m7.5 14.2 9.8-6.6-7.9 7.6" />
  </svg>
);

export const IconPin = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const IconClock = ({ className }: P) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 1.8" />
  </svg>
);

export const IconChevron = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="m9 5 7 7-7 7" />
  </svg>
);

export const IconArrow = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const IconClose = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const IconSearch = ({ className }: P) => (
  <svg {...base(className)}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4 4" />
  </svg>
);

export const IconCheck = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
);

export const IconShield = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M12 3 5 6v6c0 4.4 3 7.7 7 9 4-1.3 7-4.6 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4.5" />
  </svg>
);

export const IconDoc = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M6 3h7l5 5v13H6z" />
    <path d="M13 3v5h5M9 13h6M9 17h4" />
  </svg>
);

export const IconPlay = ({ className }: P) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10.2 9.2 15 12l-4.8 2.8z" fill="currentColor" stroke="none" />
  </svg>
);

export const IconMenu = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconSparkle = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M12 3.5c.9 4.3 2.3 5.7 6.5 6.5-4.2.8-5.6 2.2-6.5 6.5-.9-4.3-2.3-5.7-6.5-6.5 4.2-.8 5.6-2.2 6.5-6.5Z" />
    <path d="M18 16.5c.4 1.9 1 2.5 2.9 2.9-1.9.4-2.5 1-2.9 2.9-.4-1.9-1-2.5-2.9-2.9 1.9-.4 2.5-1 2.9-2.9Z" />
  </svg>
);

export const IconUser = ({ className }: P) => (
  <svg {...base(className)}>
    <circle cx="12" cy="8.5" r="3.8" />
    <path d="M4.8 20a7.4 7.4 0 0 1 14.4 0" />
  </svg>
);

export const IconDevice = ({ className }: P) => (
  <svg {...base(className)}>
    <rect x="3.5" y="4.5" width="17" height="11" rx="1.6" />
    <path d="M8 19.5h8M12 15.5v4M7.5 8.5h4M7.5 11.5h7" />
  </svg>
);
