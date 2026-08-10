"use client";

import clsx from "clsx";
import { IconWhatsapp } from "@/components/icons";
import { buildWhatsAppLink, whatsAppMessageForCategory } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

type WhatsAppLinkProps = {
  context?: string;
  className?: string;
  children: React.ReactNode;
  showIcon?: boolean;
};

export function WhatsAppLink({ context, className, children, showIcon = true }: WhatsAppLinkProps) {
  const href = buildWhatsAppLink(whatsAppMessageForCategory(context));
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { context: context ?? "general" })}
      className={clsx("inline-flex items-center gap-2", className)}
    >
      {showIcon ? <IconWhatsapp className="h-[1.1em] w-[1.1em]" /> : null}
      {children}
    </a>
  );
}
