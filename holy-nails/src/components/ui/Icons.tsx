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
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
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
      <path d="M13.2 17.4c-5.2 0-8.4-3.55-8.5-9.4h2.63c.08 4.28 1.97 6.1 3.44 6.47V8h2.47v3.72c1.45-.16 2.98-1.85 3.5-3.72h2.47c-.4 2.3-2.08 3.98-3.27 4.68 1.2.56 3.1 2.03 3.83 4.72h-2.72c-.57-1.78-1.96-3.16-3.81-3.34v3.34H13.2Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
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

export function Mail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="14" rx="2" />
      <path d="M4 6.5l8 6 8-6" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12.5l4.5 4.5L19.5 6.5" />
    </svg>
  );
}

/* Сервисные пиктограммы — авторские, без библиотек. */

export function ManicureIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 4c1.6 1.7 1.6 4.6 0 6.5C7.4 8.6 7.4 5.7 9 4Z" />
      <path d="M9 10.5V20M4.8 20h8.4" />
      <path d="M9 15c2.4-.5 4.6-2.2 5.6-4.6" />
    </svg>
  );
}

export function PedicureIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 5c-2.4 0-4 2.6-4 6.5S5.6 19 8 19c2.8 0 5.5-1.4 8-3.2 1.7-1.2 3.2-.3 3.2-2.1 0-1.6-1.7-2-3-2.2-2-.3-3-.7-3.6-2.6C11.9 6.6 10.3 5 8 5Z" />
      <path d="M6.5 8.2v1.4M8.6 7.4v1.6M10.7 7.8v1.6" />
    </svg>
  );
}

export function ExtensionIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 3.2c1.7 2 1.7 5.4 0 7.6-1.7-2.2-1.7-5.6 0-7.6Z" />
      <path d="M8 10.8v9.6" />
      <path d="M4.5 20.4h7M14 6.5l2.2 1.3M15.4 4l1 2.4" />
    </svg>
  );
}

export function DesignIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 19c3-.4 5-2.4 5.4-5.4L18 6l1 1-7.6 7.6c-3 .4-5 2.4-5.4 5.4H5Z" />
      <circle cx="17" cy="7" r="2" />
    </svg>
  );
}

export function BrowsLashesIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 14c2.6-4.2 13.4-4.2 16 0" />
      <path d="M7 10.8 6.1 8.3M11 10 10.7 7.3M13.3 10l.3-2.7M17 10.8l.9-2.5" />
    </svg>
  );
}

export function SafetyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 19 6v6c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6l7-2.5Z" />
      <path d="M9 12l2 2 4-4.5" />
    </svg>
  );
}

export function CupIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 8h11v6a5.5 5.5 0 0 1-11 0V8Z" />
      <path d="M16 9.5h1.5a2.2 2.2 0 0 1 0 4.4H16" />
      <path d="M8 4.5c-.6.7-.6 1.4 0 2M11 4.5c-.6.7-.6 1.4 0 2" />
    </svg>
  );
}

export function WifiIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 9.8a11 11 0 0 1 15 0" />
      <path d="M7.5 13a7 7 0 0 1 9 0" />
      <path d="M10.5 16.2a3 3 0 0 1 3 0" />
      <circle cx="12" cy="19" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ParkingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
      <path d="M9.5 16V8h3a2.6 2.6 0 0 1 0 5.2h-3" />
    </svg>
  );
}

export function GiftIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="9.5" width="16" height="10.5" rx="1.2" />
      <path d="M4 13h16M12 9.5V20" />
      <path d="M12 9.5c0-2.6-1.6-4.5-3.4-4.5-1.3 0-2.1.9-2.1 2 0 1.7 1.9 2.5 5.5 2.5Zm0 0c0-2.6 1.6-4.5 3.4-4.5 1.3 0 2.1.9 2.1 2 0 1.7-1.9 2.5-5.5 2.5Z" />
    </svg>
  );
}

export function PawIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="15.2" r="3.4" />
      <circle cx="6.2" cy="9.4" r="1.7" />
      <circle cx="10.6" cy="6.6" r="1.7" />
      <circle cx="15.4" cy="6.6" r="1.7" />
      <circle cx="19.4" cy="9.4" r="1.7" />
    </svg>
  );
}
