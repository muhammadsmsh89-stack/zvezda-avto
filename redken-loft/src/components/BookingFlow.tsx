"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon, Phone } from "@/components/ui/Icons";
import { serviceGroups } from "@/lib/services";
import { masters } from "@/lib/masters";
import { contacts, whatsappBookingLink } from "@/lib/contacts";

export function BookingFlow() {
  const [groupId, setGroupId] = useState<string | null>(null);
  const [serviceName, setServiceName] = useState<string | null>(null);
  const [masterName, setMasterName] = useState<string | null>(null);

  const group = serviceGroups.find((g) => g.id === groupId) ?? null;

  const link = useMemo(
    () => whatsappBookingLink(serviceName ?? group?.title, masterName ?? undefined),
    [serviceName, group, masterName]
  );

  return (
    <div className="space-y-12">
      <Step n="01" title="Выберите направление">
        <div className="flex flex-wrap gap-2.5">
          {serviceGroups.map((g) => (
            <button
              key={g.id}
              onClick={() => {
                setGroupId(g.id);
                setServiceName(null);
              }}
              className={clsx(
                "min-h-11 rounded-full border px-5 text-sm font-medium transition-colors",
                groupId === g.id
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-foreground hover:border-border-strong"
              )}
            >
              {g.title}
            </button>
          ))}
        </div>
      </Step>

      {group && (
        <Step n="02" title="Выберите услугу">
          <div className="flex flex-wrap gap-2.5">
            {group.items.map((item) => (
              <button
                key={item}
                onClick={() => setServiceName(item)}
                className={clsx(
                  "min-h-11 rounded-full border px-5 text-left text-sm font-medium transition-colors",
                  serviceName === item
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border text-foreground hover:border-border-strong"
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </Step>
      )}

      <Step n="03" title="Выберите стилиста" optional>
        <div className="flex flex-wrap gap-2.5">
          {masters.map((m) => (
            <button
              key={m.slug}
              onClick={() => setMasterName(masterName === m.name ? null : m.name)}
              className={clsx(
                "min-h-11 rounded-full border px-5 text-sm font-medium transition-colors",
                masterName === m.name
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-foreground hover:border-border-strong"
              )}
            >
              {m.name}
            </button>
          ))}
        </div>
      </Step>

      <div className="border-t border-border pt-10">
        <p className="text-sm text-muted">
          Запись подтверждает администратор студии — нажмите «Записаться», сообщение
          сформируется автоматически, отправить его нужно будет самостоятельно.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button size="lg" href={link} icon={<WhatsAppIcon className="h-4 w-4" />}>
            Записаться в WhatsApp
          </Button>
          <Button size="lg" variant="secondary" href={`tel:+${contacts.phone.href}`} icon={<Phone className="h-4 w-4" />}>
            {contacts.phone.value}
          </Button>
        </div>
      </div>
    </div>
  );
}

function Step({
  n,
  title,
  optional,
  children,
}: {
  n: string;
  title: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-accent font-display text-xs text-accent">
          {n}
        </span>
        {title}
        {optional && <span className="normal-case text-muted/70">(необязательно)</span>}
      </p>
      <div className="mt-5">{children}</div>
    </div>
  );
}
