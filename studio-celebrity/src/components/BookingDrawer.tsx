"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useBooking } from "@/lib/booking";
import { EASE } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Close, WhatsAppIcon } from "@/components/ui/Icons";
import { directions } from "@/lib/services";
import { masters } from "@/lib/masters";
import { studio } from "@/lib/studio";

const interestOptions = directions.filter((d) => d.slug !== "education");

export function BookingDrawer() {
  const { isOpen, closeBooking, presetMasterSlug } = useBooking();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeBooking}
            className="fixed inset-0 z-[60] bg-deep/55 backdrop-blur-sm"
          />
          <BookingPanel presetMasterSlug={presetMasterSlug} onClose={closeBooking} />
        </>
      )}
    </AnimatePresence>
  );
}

function BookingPanel({
  presetMasterSlug,
  onClose,
}: {
  presetMasterSlug?: string;
  onClose: () => void;
}) {
  const [interest, setInterest] = useState<string | null>(
    () => masters.find((m) => m.slug === presetMasterSlug)?.categorySlug ?? null
  );
  const [masterChoice, setMasterChoice] = useState<string | null>(() => presetMasterSlug ?? null);

  const relevantMasters = interest ? masters.filter((m) => m.categorySlug === interest) : masters;
  const selectedDirection = interestOptions.find((d) => d.slug === interest);
  const selectedMaster = masters.find((m) => m.slug === masterChoice);

  const waMessage = encodeURIComponent(
    `Здравствуйте! Хочу записаться в Studio Celebrity.${
      selectedDirection ? ` Услуга: ${selectedDirection.title}.` : ""
    }${selectedMaster ? ` Мастер: ${selectedMaster.name}.` : ""}`
  );
  const waLink = `${studio.whatsappUrl}?text=${waMessage}`;

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Запись в Studio Celebrity"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.45, ease: EASE }}
      className="fixed inset-x-0 bottom-0 z-[61] max-h-[88vh] overflow-y-auto rounded-t-3xl bg-surface px-5 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-6 shadow-2xl sm:left-1/2 sm:right-auto sm:bottom-8 sm:w-[30rem] sm:-translate-x-1/2 sm:rounded-3xl sm:px-8 sm:pb-8"
    >
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Запись</p>
        <button
          aria-label="Закрыть"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground"
        >
          <Close className="h-4 w-4" />
        </button>
      </div>

      <h2 className="mt-3 text-2xl font-semibold text-foreground">Что вас интересует?</h2>

      <div className="mt-5 grid grid-cols-2 gap-2.5">
        {interestOptions.map((d) => (
          <button
            key={d.slug}
            onClick={() => {
              setInterest(d.slug);
              if (masterChoice && masters.find((m) => m.slug === masterChoice)?.categorySlug !== d.slug) {
                setMasterChoice(null);
              }
            }}
            className={`rounded-2xl border px-4 py-3.5 text-left text-sm font-medium transition-colors ${
              interest === d.slug
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border text-foreground hover:border-border-strong"
            }`}
          >
            {d.title}
          </button>
        ))}
      </div>

      <AnimatePresence initial={false}>
        {interest && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="mt-7 text-sm font-semibold text-foreground">Выбрать мастера</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                onClick={() => setMasterChoice(null)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                  masterChoice === null
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border text-muted hover:border-border-strong"
                }`}
              >
                Не знаю — помогите выбрать
              </button>
              {relevantMasters.map((m) => (
                <button
                  key={m.slug}
                  onClick={() => setMasterChoice(m.slug)}
                  className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                    masterChoice === m.slug
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border text-foreground hover:border-border-strong"
                  }`}
                >
                  {m.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-8 space-y-2.5 border-t border-border pt-6">
        <Button href={waLink} className="w-full" icon={<WhatsAppIcon className="h-4 w-4" />}>
          Записаться в WhatsApp
        </Button>
        <Button href={`tel:${studio.phone.href}`} variant="secondary" className="w-full">
          Позвонить {studio.phone.value}
        </Button>
      </div>
      <p className="mt-4 text-center text-[11px] leading-relaxed text-muted">
        Заявка передаётся администратору в WhatsApp — с вами свяжутся для подтверждения времени.
      </p>
    </motion.div>
  );
}
