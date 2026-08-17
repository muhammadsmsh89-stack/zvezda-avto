"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon, Phone } from "@/components/ui/Icons";
import { directions } from "@/lib/services";
import { getMastersByDirection } from "@/lib/masters";
import { contacts, whatsappBookingLink } from "@/lib/contacts";

export function BookingFlow() {
  const [directionSlug, setDirectionSlug] = useState<string | null>(null);
  const [serviceName, setServiceName] = useState<string | null>(null);
  const [masterName, setMasterName] = useState<string | null>(null);

  const direction = directions.find((d) => d.slug === directionSlug) ?? null;
  const directionMasters = directionSlug ? getMastersByDirection(directionSlug) : [];

  const link = useMemo(
    () => whatsappBookingLink(serviceName ?? direction?.title, masterName ?? undefined),
    [serviceName, direction, masterName]
  );

  return (
    <div className="space-y-12">
      <Step n="01" title="Выберите направление">
        <div className="flex flex-wrap gap-2.5">
          {directions.map((d) => (
            <button
              key={d.slug}
              onClick={() => {
                setDirectionSlug(d.slug);
                setServiceName(null);
                setMasterName(null);
              }}
              className={clsx(
                "min-h-11 rounded-full border px-5 text-sm font-medium transition-colors",
                directionSlug === d.slug
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-foreground hover:border-border-strong"
              )}
            >
              {d.title}
            </button>
          ))}
        </div>
      </Step>

      {direction && (
        <Step n="02" title="Выберите услугу">
          <div className="flex flex-wrap gap-2.5">
            {direction.items.map((item) => (
              <button
                key={item.name}
                onClick={() => setServiceName(item.name)}
                className={clsx(
                  "min-h-11 rounded-full border px-5 text-left text-sm font-medium transition-colors",
                  serviceName === item.name
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border text-foreground hover:border-border-strong"
                )}
              >
                {item.name}
                {item.price && <span className="ml-2 opacity-70">{item.price}</span>}
              </button>
            ))}
          </div>
        </Step>
      )}

      {direction && directionMasters.length > 0 && (
        <Step n="03" title="Выберите мастера" optional>
          <div className="flex flex-wrap gap-2.5">
            {directionMasters.map((m) => (
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
      )}

      <div className="border-t border-border pt-10">
        <p className="text-sm text-muted">
          Онлайн-запись подтверждает администратор центра — нажмите «Записаться», сообщение
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
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-accent font-serif text-xs text-accent">
          {n}
        </span>
        {title}
        {optional && <span className="normal-case text-muted/70">(необязательно)</span>}
      </p>
      <div className="mt-5">{children}</div>
    </div>
  );
}
