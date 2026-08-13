import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Menu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.85.5 3.58 1.36 5.07L2 22l5.08-1.33A9.94 9.94 0 0 0 12.02 22C17.54 22 22 17.52 22 12S17.54 2 12.02 2Zm0 18.1c-1.63 0-3.15-.44-4.46-1.22l-.32-.19-3.02.79.81-2.94-.21-.3A8.08 8.08 0 0 1 3.92 12c0-4.47 3.64-8.1 8.1-8.1s8.1 3.63 8.1 8.1-3.64 8.1-8.1 8.1Zm4.44-6.05c-.24-.12-1.43-.7-1.65-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.2-.72-.65-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.8-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3s-.85.83-.85 2.03.87 2.36.99 2.52c.12.16 1.71 2.6 4.14 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.56.2-1.04.14-1.15-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export function TelegramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.5 3.5 2.75 10.9c-.9.36-.88 1.65.03 1.98l4.53 1.63 1.75 5.62c.24.77 1.22.99 1.78.4l2.49-2.62 4.62 3.4c.7.52 1.7.14 1.88-.71l3.16-15.1c.19-.9-.72-1.62-1.5-1.4ZM8.9 14.1l9.7-6.06c.28-.17.55.19.3.4l-8.02 7.1a1.1 1.1 0 0 0-.35.63l-.28 1.98-1.35-4.05Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.3} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Star(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M10 1.5l2.47 5.62 6.03.6-4.56 4.05 1.32 5.93L10 14.77l-5.26 2.93 1.32-5.93L1.5 7.72l6.03-.6L10 1.5Z" />
    </svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

export function Clock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 2" />
    </svg>
  );
}

export function Play(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 4.5h3.2l1.3 4-2 1.4a11.5 11.5 0 0 0 5.1 5.1l1.4-2 4 1.3v3.2c0 1-.9 1.7-1.8 1.5C10.4 18.4 5.6 13.6 4 8.3c-.3-.9.4-1.8 1.4-1.8Z" />
    </svg>
  );
}

/* Category glyphs — one bespoke line-mark per direction, used once as
   functional wayfinding on nav cards, never repeated as decoration. */

export function HairIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 4c3 0 4 2.5 4 6v10M14 4c3 0 4 2.5 4 6v10M6 4c0 3.5-2 5-2 5M18 4c0 3.5 2 5 2 5" />
    </svg>
  );
}

export function MakeupIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 15 18.5 5.5a1.8 1.8 0 0 1 2.5 2.5L11.5 18M9 15l-2 5-2.5-1.5L6 16l3-1Z" />
      <circle cx="17" cy="7" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BrowsLashesIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 14c2.5-4 13.5-4 16 0" />
      <path d="M12 14c0 1.8-1.5 3.2-3.4 3.2S5.2 15.8 5.2 14" />
      <path d="M6 10.5V8M9 9.5V7M12 9.5V7M15 9.5V7M18 10.5V8" />
    </svg>
  );
}

export function EventIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c1.4 3.2 4 4.4 7 4.4-3 1.1-5 3.5-5 7.1 0-3.6-2-6-5-7.1 3 0 5.6-1.2 7-4.4H12Z" />
      <path d="M5 15.5c.9 1.9 2.5 2.7 4.3 2.7-1.9.7-3.1 2.1-3.1 4.3 0-2.2-1.2-3.6-3.1-4.3 1.8 0 3.4-.8 4.3-2.7H5Z" />
    </svg>
  );
}

export function SchoolIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 8 12 4l9.5 4-9.5 4-9.5-4Z" />
      <path d="M6.5 10.3V15c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-4.7" />
      <path d="M21.5 8v6" />
    </svg>
  );
}
