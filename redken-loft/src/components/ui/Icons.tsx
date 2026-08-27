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

export function ViberIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.1 2C7 2 3.3 5.2 3.3 9.9c0 2.6 1.2 4.9 3.2 6.4-.1.9-.4 2.4-1.3 4.1 1.7-.3 3.2-1.1 4.1-1.7.9.2 1.8.4 2.8.4 5.1 0 8.8-3.2 8.8-7.9C21 5.2 17.2 2 12.1 2Zm4.8 10.9c-.2.5-1.1 1-1.6 1-.4 0-.9-.1-3-1-2.5-1.1-4.2-3.5-4.3-3.7-.1-.2-1-1.3-1-2.5 0-1.2.6-1.7.8-2 .2-.2.5-.3.7-.3h.5c.2 0 .4 0 .5.4.2.5.7 1.8.8 1.9.1.1.1.3 0 .5-.1.2-.1.3-.3.5-.1.2-.3.3-.4.5-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.5 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.5.7 1.8.8.3.1.5.2.5.3.1.2.1.6-.1 1.1Z" />
      <path d="M12.1 4.4c4.1 0 6.9 2.6 6.9 6.6 0 .3-.2.5-.5.5s-.5-.2-.5-.5c0-3.4-2.3-5.6-5.9-5.6-.3 0-.5-.2-.5-.5s.2-.5.5-.5Z" />
      <path d="M12.1 6.5c2.7 0 4.6 1.7 4.7 4.6 0 .3-.2.5-.5.5s-.5-.2-.5-.5c-.1-2.3-1.5-3.6-3.7-3.6-.3 0-.5-.2-.5-.5s.2-.5.5-.5Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function VkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.2 17.6c-5.4 0-8.5-3.7-8.6-9.9h2.7c.1 4.6 2.1 6.5 3.7 6.9V7.7h2.6v3.9c1.5-.2 3.1-2 3.7-3.9h2.5c-.4 2.3-2.1 4.1-3.3 4.9 1.2.6 3.2 2.2 3.9 4.9h-2.9c-.6-1.8-2-3.2-3.9-3.4v3.4h-.3Z" />
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

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12.5 9 17l10.5-11" />
    </svg>
  );
}

export function ColorDropIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c3.4 3.6 6 7.6 6 10.8a6 6 0 1 1-12 0C6 10.6 8.6 6.6 12 3Z" />
    </svg>
  );
}

export function ScissorsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="6" r="2.3" />
      <circle cx="6" cy="18" r="2.3" />
      <path d="M20 5 7.7 12 20 19M9 12H4" />
    </svg>
  );
}

export function CareIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 12c0-4 2.5-7 6-7s6 3 6 7" />
      <path d="M4.5 13c2 3 4.5 5 7.5 5s5.5-2 7.5-5" />
    </svg>
  );
}

export function NailsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 3.5c1.3 1.6 1.3 4.2 0 6.5-1.3-2.3-1.3-4.9 0-6.5Z" />
      <path d="M9 10v10.5M4.5 21h9" />
      <path d="M9 14.5c2-.6 4-2 5-4" />
    </svg>
  );
}
