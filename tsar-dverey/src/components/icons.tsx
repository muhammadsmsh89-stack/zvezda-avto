// Кастомный набор инлайн-SVG. Толщина линии 1.5px, единая на весь набор. Никаких общедоступных
// icon-паков — каждая иконка нарисована под дизайн-систему «Царь Дверей», включая пять иконок
// типов дверей (не декоративные пиктограммы «из коробки», а собственная система линий).

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

export function IconPhone({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <path d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L15 12l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function IconWhatsApp({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.5 14.4c-.3-.15-1.7-.85-2-.94-.27-.1-.46-.15-.66.15-.2.3-.76.94-.93 1.13-.17.2-.34.22-.63.08-.3-.15-1.24-.46-2.37-1.47-.87-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.19-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.3-1.02 1-1.02 2.44s1.05 2.83 1.2 3.03c.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.37-.07-.12-.27-.2-.56-.34Z" />
      <path d="M12 3.5a8.5 8.5 0 0 0-7.35 12.76L3.5 20.5l4.4-1.15A8.5 8.5 0 1 0 12 3.5Z" />
    </svg>
  );
}

export function IconTelegram({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <path d="M21 4L3 11.5l5.5 2M21 4L15.5 20l-7-6.5M21 4L8.5 13.5" />
    </svg>
  );
}

export function IconInstagram({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
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

export function IconClock({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
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

export function IconClose({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <path d="M5 5l14 14M19 5L5 19" />
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

export function IconUpload({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <path d="M12 16V4M7 9l5-5 5 5M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}

// --- Типы дверей: единая система линий, не заимствованная из готовых наборов ---

export function IconDoorPanel({ className }: IconProps) {
  // Межкомнатная остеклённая — полотно с раскладкой стекла.
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <rect x="5" y="2.5" width="14" height="19" rx="0.5" />
      <path d="M5 10h14M12 2.5v7" />
      <path d="M15.3 15.5h.01" />
    </svg>
  );
}

export function IconDoorHidden({ className }: IconProps) {
  // Скрытая — полотно вровень со стеной, без видимого наличника (штриховая граница).
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <path d="M4 2.5v19M20 2.5v19" strokeDasharray="0.5 3.5" />
      <rect x="7.5" y="2.5" width="9" height="19" />
      <path d="M14.7 12.2v.01" />
    </svg>
  );
}

export function IconDoorEntry({ className }: IconProps) {
  // Входная — усиленное полотно с несколькими точками запирания.
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <rect x="4.5" y="2.5" width="15" height="19" rx="0.5" />
      <path d="M8 2.5v19M16 2.5v19" />
      <path d="M6.3 9.5h.01M6.3 14.5h.01" />
    </svg>
  );
}

export function IconDoorSliding({ className }: IconProps) {
  // Раздвижная — полотно со стрелкой хода и верхним рельсом.
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <path d="M3 3h18" />
      <rect x="8" y="4.5" width="11" height="17" />
      <path d="M4.5 13l-2 2 2 2" />
    </svg>
  );
}

export function IconDoorMassif({ className }: IconProps) {
  // Из массива — полотно с фактурой волокна дерева.
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <rect x="5" y="2.5" width="14" height="19" rx="0.5" />
      <path d="M7.5 6c2 1.2 2 2.8 0 4s-2 2.8 0 4 2 2.8 0 4M12.5 6c2 1.2 2 2.8 0 4s-2 2.8 0 4 2 2.8 0 4" opacity="0.6" />
    </svg>
  );
}

export const categoryIcons = {
  mezhkomnatnye: IconDoorPanel,
  skrytye: IconDoorHidden,
  vkhodnye: IconDoorEntry,
  razdvizhnye: IconDoorSliding,
  "iz-massiva": IconDoorMassif,
} as const;
