"use client";

import clsx from "clsx";
import { IconWhatsapp } from "@/components/icons";
import { buildWhatsAppLink, whatsAppMessageForContext } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

type WhatsAppLinkProps = {
  context?: string;
  className?: string;
  children: React.ReactNode;
  showIcon?: boolean;
  source?: string;
};

export function WhatsAppLink({ context, className, children, showIcon = true, source }: WhatsAppLinkProps) {
  const href = buildWhatsAppLink(whatsAppMessageForContext(context));
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("contact_whatsapp_click", { context: context ?? "general", source })}
      className={clsx(className)}
    >
      {showIcon ? <IconWhatsapp className="h-[1.1em] w-[1.1em]" /> : null}
      {children}
    </a>
  );
}
