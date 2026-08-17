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

export function VkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.4 17.3c-4.9 0-7.8-3.35-7.9-8.93a.5.5 0 0 1 .5-.52H8a.5.5 0 0 1 .49.41c.45 2.4 1.53 3.6 2.38 3.98v-3.87a.5.5 0 0 1 .5-.5h1.85a.5.5 0 0 1 .5.5v2.5c.84-.09 1.72-1.19 2.02-2.9a.5.5 0 0 1 .49-.4h1.98a.5.5 0 0 1 .49.6c-.31 1.5-1.02 2.66-1.5 3.24-.13.16-.18.24-.18.36 0 .13.06.24.19.4.63.75 1.09 1.63 1.44 2.6a.5.5 0 0 1-.47.66h-2.05a.5.5 0 0 1-.47-.32c-.4-1-1.04-1.85-1.44-2.16v2a.5.5 0 0 1-.5.5h-.28Z" />
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

export function Phone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 4.5h3.2l1.3 4-2 1.4a11.5 11.5 0 0 0 5.1 5.1l1.4-2 4 1.3v3.2c0 1-.9 1.7-1.8 1.5C10.4 18.4 5.6 13.6 4 8.3c-.3-.9.4-1.8 1.4-1.8Z" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </svg>
  );
}

/* Один графичный line-mark на направление — функциональная навигация, не декор. */

export function NailsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 3.5c1.3 1.6 1.3 4.2 0 6.5-1.3-2.3-1.3-4.9 0-6.5Z" />
      <path d="M9 10v10.5M4.5 21h9" />
      <path d="M9 14.5c2-.6 4-2 5-4" />
    </svg>
  );
}

export function BrowsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 10.5c2-3.2 6.5-4 9-1.7" />
      <path d="M11.5 10c2.5-2.3 7-1.5 9 1.7" />
    </svg>
  );
}

export function LashesIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 13.5c2.7-4.3 14.6-4.3 16 0" />
      <path d="M7 10.2 6 7.5M11 9.3l-.4-2.8M13.4 9.3l.4-2.8M17 10.2l1-2.7" />
    </svg>
  );
}

export function BeautyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v4.7l3 2" />
    </svg>
  );
}

export const directionIcons = {
  nails: NailsIcon,
  brows: BrowsIcon,
  lashes: LashesIcon,
  beauty: BeautyIcon,
} as const;
