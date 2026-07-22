"use client";

import Link from "next/link";
import { company } from "@/lib/content";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border-strong bg-surface/95 backdrop-blur-lg md:hidden">
      <a
        href={`tel:${company.phones[0].href}`}
        className="flex flex-1 flex-col items-center gap-1 py-3 text-foreground/90 active:bg-surface-2"
      >
        <PhoneIcon />
        <span className="text-[11px] font-medium">Позвонить</span>
      </a>
      <Link
        href="/#booking"
        className="flex flex-[1.3] flex-col items-center gap-1 border-x border-border-strong bg-accent py-3 text-accent-foreground active:brightness-95"
      >
        <BookIcon />
        <span className="text-[11px] font-semibold">Записаться</span>
      </Link>
      <a
        href={company.routeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 flex-col items-center gap-1 py-3 text-foreground/90 active:bg-surface-2"
      >
        <RouteIcon />
        <span className="text-[11px] font-medium">Маршрут</span>
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

function RouteIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
