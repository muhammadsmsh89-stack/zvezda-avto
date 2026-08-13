"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { EASE } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { directions } from "@/lib/services";
import { masters } from "@/lib/masters";
import { studio } from "@/lib/studio";

const interestOptions = directions.filter((d) => d.slug !== "education");

export function BookingPageContent() {
  const [interest, setInterest] = useState<string | null>(null);
  const [masterChoice, setMasterChoice] = useState<string | null>(null);

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
    <>
      <PageIntro eyebrow="Запись" title="Записаться в Studio Celebrity" description="Три шага — направление, мастер, способ связи." />
      <section className="bg-background pb-20 lg:pb-28">
        <Container className="max-w-2xl">
          <p className="text-sm font-semibold text-foreground">1. Что вас интересует?</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {interestOptions.map((d) => (
              <button
                key={d.slug}
                onClick={() => {
                  setInterest(d.slug);
                  if (masterChoice && masters.find((m) => m.slug === masterChoice)?.categorySlug !== d.slug) {
                    setMasterChoice(null);
                  }
                }}
                className={`rounded-2xl border px-5 py-4 text-left text-sm font-medium transition-colors ${
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
                <p className="mt-10 text-sm font-semibold text-foreground">2. Выбрать мастера</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <button
                    onClick={() => setMasterChoice(null)}
                    className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
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
                      className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
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

          <div className="mt-12 space-y-3 border-t border-border pt-8">
            <p className="text-sm font-semibold text-foreground">3. Способ связи</p>
            <Button href={waLink} className="w-full justify-center" icon={<WhatsAppIcon className="h-4 w-4" />}>
              Записаться в WhatsApp
            </Button>
            <Button href={`tel:${studio.phone.href}`} variant="secondary" className="w-full justify-center">
              Позвонить {studio.phone.value}
            </Button>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-muted">
            Заявка передаётся администратору в WhatsApp — с вами свяжутся для подтверждения времени.
          </p>
        </Container>
      </section>
    </>
  );
}
