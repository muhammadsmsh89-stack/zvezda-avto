"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";
import { site } from "@/lib/site";

/**
 * Демо-сайт статический, без бэкенда. Форма показывает состояние успеха
 * локально и НЕ отправляет данные никуда — перед реальным запуском нужно
 * подключить приём заявок (CRM клиники, почта или форма-сервис).
 */
export function FinalCta() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <section className="bg-noise relative overflow-hidden bg-graphite py-24 text-shell sm:py-32">
      <div
        className="glow-blob animate-blob top-[-20%] right-[5%] h-[36rem] w-[36rem] opacity-[0.4]"
        style={{ background: "radial-gradient(circle, var(--color-accent-bright) 0%, transparent 70%)" }}
        aria-hidden
      />
      <Container className="relative max-w-[46rem]">
        <FadeUp>
          <p className="eyebrow-mute text-accent-lift">Записаться</p>
          <h2 className="font-display mt-4 text-[2.5rem] leading-[1.03] text-shell text-balance sm:text-[3.5rem]">
            Оставьте заявку — подберём врача и время приёма
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          {sent ? (
            <div className="mt-10 flex items-center gap-4 rounded-2xl border border-accent-lift/30 bg-shell/5 p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-lift/15 text-accent-lift">
                <Check size={20} />
              </span>
              <p className="text-[1.0625rem] text-shell">
                Заявка принята. Администратор свяжется с вами, чтобы уточнить
                удобную клинику и время.
              </p>
            </div>
          ) : (
            <form
              className="mt-10 flex flex-col gap-4 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ваше имя"
                aria-label="Ваше имя"
                className="min-w-0 flex-1 rounded-full border border-shell/25 bg-transparent px-5 py-4 text-[1rem] text-shell placeholder:text-shell/40 focus:border-accent-lift focus:outline-none"
              />
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Телефон"
                aria-label="Телефон"
                className="min-w-0 flex-1 rounded-full border border-shell/25 bg-transparent px-5 py-4 text-[1rem] text-shell placeholder:text-shell/40 focus:border-accent-lift focus:outline-none"
              />
              <button
                type="submit"
                className="btn shrink-0 bg-accent px-7 py-4 text-[0.9375rem] text-shell hover:bg-accent-bright"
              >
                Отправить
                <ArrowUpRight className="btn-icon" size={17} />
              </button>
            </form>
          )}
          <p className="mt-6 text-[0.9375rem] text-shell/50">
            Или позвоните:{" "}
            <a href={site.phone.href} className="text-shell underline decoration-shell/30 underline-offset-4 hover:text-accent-lift">
              {site.phone.display}
            </a>
          </p>
        </FadeUp>
      </Container>
    </section>
  );
}
