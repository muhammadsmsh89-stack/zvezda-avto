"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { RealPhoto } from "@/components/ui/RealPhoto";
import { WhatsAppIcon, TelegramIcon } from "@/components/ui/Icons";
import { contacts } from "@/lib/contacts";
import { finalCtaImage } from "@/lib/media";

export function FinalCtaSection() {
  const [model, setModel] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = `Здравствуйте! Автомобиль: ${model || "не указан"}. Телефон: ${phone || "не указан"}. Хочу узнать, какой вариант оклейки подойдёт и рассчитать стоимость.`;
    window.open(`${contacts.whatsappUrl}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="relative overflow-hidden bg-deep py-24 text-foreground lg:py-32">
      <RealPhoto image={finalCtaImage} sizes="100vw" className="absolute inset-0 h-full w-full opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep via-deep/90 to-deep/60" />
      <Container className="relative">
        <div className="mx-auto max-w-xl text-center">
          <Reveal>
            <h2 className="text-balance text-display font-medium text-foreground">
              Начнём с автомобиля, а не с продажи услуги
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-foreground/70">
              Напишите модель автомобиля и задачу. Специалист предложит подходящий вариант оклейки и рассчитает стоимость.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-9">
            <form onSubmit={handleSubmit} className="mx-auto grid max-w-md grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Марка и модель автомобиля"
                className="min-h-12 w-full rounded-xl border border-foreground/20 bg-background/40 px-4 py-3 text-base text-foreground outline-none backdrop-blur-sm placeholder:text-foreground/50 focus-visible:border-accent sm:col-span-2"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                required
                placeholder="Телефон"
                className="min-h-12 w-full rounded-xl border border-foreground/20 bg-background/40 px-4 py-3 text-base text-foreground outline-none backdrop-blur-sm placeholder:text-foreground/50 focus-visible:border-accent sm:col-span-2"
              />
              <Button type="submit" size="lg" icon={<WhatsAppIcon className="h-4 w-4" />} dataEvent="final_calc_click" className="justify-center sm:col-span-2">
                Рассчитать стоимость
              </Button>
              <a
                href={contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-event="whatsapp_click"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-foreground/30 px-6 text-sm font-semibold text-foreground transition-colors hover:border-foreground hover:bg-foreground/10 sm:col-span-1"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={contacts.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-foreground/30 px-6 text-sm font-semibold text-foreground transition-colors hover:border-foreground hover:bg-foreground/10 sm:col-span-1"
              >
                <TelegramIcon className="h-4 w-4" /> Telegram
              </a>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
