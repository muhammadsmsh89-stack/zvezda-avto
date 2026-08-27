"use client";

import { company, buildBookingHref } from "@/lib/content";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border-strong bg-surface/95 backdrop-blur-lg md:hidden">
      <a
        href={`tel:${company.phone.href}`}
        className="flex flex-1 flex-col items-center gap-1 py-3 text-foreground/90 active:bg-surface-2"
      >
        <PhoneIcon />
        <span className="text-[11px] font-medium">Позвонить</span>
      </a>
      <a
        href={buildBookingHref()}
        target={company.bookingUrl ? undefined : "_blank"}
        rel={company.bookingUrl ? undefined : "noopener noreferrer"}
        className="flex flex-[1.4] flex-col items-center gap-1 border-x border-border-strong bg-ink py-3 text-background active:opacity-90"
      >
        <BookIcon />
        <span className="text-[11px] font-semibold">Записаться</span>
      </a>
      <a
        href={company.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 flex-col items-center gap-1 py-3 text-foreground/90 active:bg-surface-2"
      >
        <WhatsappIcon />
        <span className="text-[11px] font-medium">WhatsApp</span>
      </a>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 8.5 8.5 0 0 0 2.66.42 1 1 0 0 1 1 1V19.5a1 1 0 0 1-1 1A16.5 16.5 0 0 1 3.5 4a1 1 0 0 1 1-1H7.1a1 1 0 0 1 1 1c0 .93.15 1.83.42 2.66a1 1 0 0 1-.25 1.02L6.6 10.8Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H16l4 4v13.5A1.5 1.5 0 0 1 18.5 22h-13A1.5 1.5 0 0 1 4 20.5v-16Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 13l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.34-1.14A8.5 8.5 0 1 0 12 3.5Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
      />
      <path
        d="M9.2 9.6c-.2.9.4 2.1 1.3 3.1 1 1 2.2 1.6 3.1 1.4.5-.1.9-.7 1-1.1.05-.2 0-.3-.1-.4l-1.2-.9c-.15-.1-.3-.1-.45.05l-.4.45a.25.25 0 0 1-.3.05 4.2 4.2 0 0 1-1.7-1.7.25.25 0 0 1 .05-.3l.45-.4c.15-.15.15-.3.05-.45l-.9-1.25c-.1-.1-.2-.15-.4-.1-.4.1-1 .5-1.1 1.05Z"
        fill="currentColor"
      />
    </svg>
  );
}
