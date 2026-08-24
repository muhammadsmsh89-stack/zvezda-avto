import { SVGProps } from "react";
import {
  Menu,
  X,
  MapPin,
  Clock,
  Phone,
  Star,
  ShieldCheck,
  Sparkles,
  Droplet,
  Layers,
  SquareStack,
  Wind,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  FileCheck2,
  CalendarCheck2,
  ClipboardCheck,
  ShieldAlert,
  Sparkle,
  PaintBucket,
  Gem,
  Car,
  Bike,
  Truck,
  Mail,
  Camera,
} from "lucide-react";

export {
  Menu,
  X as Close,
  MapPin,
  Clock,
  Phone,
  Star,
  ShieldCheck,
  Sparkles,
  Droplet,
  Layers,
  SquareStack as WindowIcon,
  Wind as WaveIcon,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  FileCheck2,
  CalendarCheck2,
  ClipboardCheck,
  ShieldAlert,
  Sparkle,
  PaintBucket,
  Gem,
  Car,
  Bike,
  Truck,
  Mail,
  Camera,
};

type IconProps = SVGProps<SVGSVGElement>;

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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12s0-3.2-.4-4.7a2.8 2.8 0 0 0-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.8 2.8 0 0 0-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.8 2.8 0 0 0 2 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.8 2.8 0 0 0 2-2C22 15.2 22 12 22 12Zm-12.1 3.3V8.7L15.3 12l-5.4 3.3Z" />
    </svg>
  );
}

export const needIcons = {
  ppf: ShieldCheck,
  "color-wrap": PaintBucket,
  blackout: Gem,
  tint: SquareStack,
  branding: Truck,
} as const;
