"use client";

import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { categories } from "@/data/categories";
import { company } from "@/data/company";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { IconAlert, IconCheck, IconWhatsapp } from "@/components/icons";

type Status = "idle" | "submitting" | "success" | "error";

const TYPE_OPTIONS = [...categories.map((c) => c.name), "Другое"];

function buildLeadMessage(type: string, space: string, name: string, phone: string) {
  return [
    "Здравствуйте! Хочу рассчитать проект мебели.",
    `Тип: ${type}`,
    `Помещение: ${space}`,
    `Имя: ${name}`,
    `Телефон: ${phone}`,
  ].join("\n");
}

export function BriefForm() {
  const [step, setStep] = useState(1);
  const [type, setType] = useState<string | null>(null);
  const [space, setSpace] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [touchedStep, setTouchedStep] = useState(false);

  const totalSteps = 3;

  function goNext() {
    setTouchedStep(true);
    if (step === 1 && !type) return;
    if (step === 2 && space.trim().length < 3) return;
    if (step === 1) track("calculator_start", { type });
    setTouchedStep(false);
    setStep((s) => Math.min(totalSteps, s + 1));
  }

  function goBack() {
    setTouchedStep(false);
    setStep((s) => Math.max(1, s - 1));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouchedStep(true);
    if (!name.trim() || phone.trim().length < 5) return;

    track("form_submit", { type });

    // window.open must run synchronously inside the click handler — any deferral
    // (setTimeout, await) loses the user-gesture context and browsers silently
    // block the popup, which would make the primary conversion path fail for
    // real users almost every time.
    const message = buildLeadMessage(type ?? "Другое", space, name, phone);
    const opened = window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");

    if (opened) {
      setStatus("success");
      track("form_success", { type });
      track("calculator_complete", { type });
    } else {
      setStatus("error");
      track("form_error", { type, reason: "popup_blocked" });
    }
  }

  if (status === "success") {
    return (
      <div className="border border-border bg-paper p-8 sm:p-10">
        <IconCheck className="h-8 w-8 text-accent" />
        <h3 className="font-display mt-4 text-2xl font-medium text-ink">Заявка сформирована</h3>
        <p className="text-pretty mt-3 max-w-md leading-relaxed text-muted">
          Мы открыли WhatsApp с готовым сообщением — отправьте его, и мы свяжемся с вами по
          указанному номеру.
        </p>
        <a
          href={buildWhatsAppLink(buildLeadMessage(type ?? "Другое", space, name, phone))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink/85"
        >
          <IconWhatsapp className="h-4 w-4" />
          Открыть WhatsApp ещё раз
        </a>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="border border-border bg-paper p-8 sm:p-10">
        <IconAlert className="h-8 w-8 text-error" />
        <h3 className="font-display mt-4 text-2xl font-medium text-ink">Не получилось открыть WhatsApp</h3>
        <p className="text-pretty mt-3 max-w-md leading-relaxed text-muted">
          Возможно, браузер заблокировал всплывающее окно. Напишите нам напрямую — так быстрее.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={buildWhatsAppLink(buildLeadMessage(type ?? "Другое", space, name, phone))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink/85"
          >
            <IconWhatsapp className="h-4 w-4" />
            Написать в WhatsApp
          </a>
          <a href={company.phone.href} className="inline-flex items-center px-6 py-3 text-sm text-ink underline decoration-border underline-offset-4">
            Позвонить {company.phone.display}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-border bg-paper p-8 sm:p-10">
      <div className="mb-8 flex items-center justify-between">
        <span className="font-mono-tag text-xs uppercase tracking-[0.12em] text-muted">
          Шаг {step}/{totalSteps}
        </span>
        <div className="flex gap-1.5">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <span
              key={i}
              className={clsx("h-1 w-8 transition-colors", i < step ? "bg-accent" : "bg-surface-2")}
            />
          ))}
        </div>
      </div>

      <motion.div
        key={step}
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
          {step === 1 && (
            <>
              <h3 className="font-display text-2xl font-medium text-ink">Что нужно изготовить?</h3>
              <div className="mt-6 flex flex-wrap gap-2.5" role="radiogroup" aria-label="Тип мебели">
                {TYPE_OPTIONS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    role="radio"
                    aria-checked={type === option}
                    onClick={() => setType(option)}
                    className={clsx(
                      "border px-4 py-3 text-sm transition-colors",
                      type === option
                        ? "border-ink bg-ink text-paper"
                        : "border-border text-ink hover:border-ink/40",
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {touchedStep && !type && <p className="mt-3 text-sm text-error">Выберите тип мебели</p>}
            </>
          )}

          {step === 2 && (
            <>
              <h3 className="font-display text-2xl font-medium text-ink">Опишите помещение</h3>
              <p className="mt-2 text-sm text-muted">Примерная площадь или размеры, особенности стен/ниш — как удобно.</p>
              <textarea
                value={space}
                onChange={(e) => setSpace(e.target.value)}
                rows={4}
                placeholder="Например: кухня 3×4 м, ниша под вентканал справа от окна"
                className="mt-4 w-full border border-border bg-stone px-4 py-3 text-[15px] text-ink placeholder:text-muted focus:border-ink"
              />
              {touchedStep && space.trim().length < 3 && (
                <p className="mt-3 text-sm text-error">Опишите помещение — хотя бы пару слов</p>
              )}
            </>
          )}

          {step === 3 && (
            <>
              <h3 className="font-display text-2xl font-medium text-ink">Как с вами связаться?</h3>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="lead-name" className="text-sm text-muted">
                    Имя
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    className="mt-1.5 w-full border border-border bg-stone px-4 py-3 text-[15px] text-ink focus:border-ink"
                  />
                </div>
                <div>
                  <label htmlFor="lead-phone" className="text-sm text-muted">
                    Телефон / WhatsApp
                  </label>
                  <input
                    id="lead-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                    placeholder="+7 900 000-00-00"
                    className="mt-1.5 w-full border border-border bg-stone px-4 py-3 text-[15px] text-ink focus:border-ink"
                  />
                </div>
              </div>
              {touchedStep && (!name.trim() || phone.trim().length < 5) && (
                <p className="mt-3 text-sm text-error">Укажите имя и телефон</p>
              )}
              <p className="mt-4 text-xs leading-relaxed text-muted">
                Отправляя заявку, вы соглашаетесь на обработку персональных данных.
              </p>
            </>
          )}
        </motion.div>

      <div className="mt-8 flex items-center gap-4">
        {step > 1 && (
          <button type="button" onClick={goBack} className="text-sm text-muted underline decoration-border underline-offset-4 hover:text-ink">
            Назад
          </button>
        )}
        <div className="flex-1" />
        {step < totalSteps ? (
          <button
            type="button"
            onClick={goNext}
            className="inline-flex items-center bg-ink px-7 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink/85"
          >
            {step === 1 ? "Указать помещение" : "Указать контакты"}
          </button>
        ) : (
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center bg-ink px-7 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink/85 disabled:opacity-60"
          >
            {status === "submitting" ? "Отправляем…" : "Получить расчёт"}
          </button>
        )}
      </div>
    </form>
  );
}
