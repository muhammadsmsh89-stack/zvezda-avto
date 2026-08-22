"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Button, ButtonLink } from "../ui/Button";
import { IconCheck, IconPhone, IconTelegram, IconMail } from "../ui/Icons";
import { carBrands, goals } from "@/lib/calculator";
import { contacts } from "@/lib/contacts";

const step = "text-[11px] font-semibold uppercase tracking-[0.16em] text-gold";
const field =
  "min-h-[52px] w-full rounded-[4px] border border-line-strong bg-surface px-4 text-[16px] text-fg " +
  "placeholder:text-fg-faint transition-colors duration-200 focus:border-gold focus:outline-none " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-bright";

export function Calculator() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [goal, setGoal] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const phoneRef = useRef<HTMLInputElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);

  // Категория услуг из блока «Услуги» предвыбирает цель в калькуляторе
  useEffect(() => {
    const onGoal = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (goals.some((g) => g.id === detail)) setGoal(detail);
    };
    window.addEventListener("mm:goal", onGoal);
    return () => window.removeEventListener("mm:goal", onGoal);
  }, []);

  const summary = [
    `Заявка с сайта MODNOE MESTO`,
    `Автомобиль: ${[brand, model].filter(Boolean).join(" ") || "не указан"}`,
    `Задача: ${goals.find((g) => g.id === goal)?.label ?? "не указана"}`,
    `Имя: ${name || "не указано"}`,
    `Телефон: ${phone}`,
  ].join("\n");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) {
      setError("Укажите номер телефона — не меньше 10 цифр.");
      phoneRef.current?.focus();
      return;
    }
    if (!agree) {
      setError("Нужно согласие на обработку персональных данных.");
      return;
    }
    setError(null);
    setSent(true);
    navigator.clipboard?.writeText(summary).then(
      () => setCopied(true),
      () => setCopied(false),
    );
    requestAnimationFrame(() => doneRef.current?.focus());
  }

  return (
    <section
      id="calculator"
      aria-labelledby="calc-title"
      className="border-t border-line bg-bg py-16 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="grid gap-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal>
            <p className="u-eyebrow flex items-center gap-3">
              <span className="text-fg-faint">08</span>
              <span>Расчёт</span>
            </p>
            <h2
              id="calc-title"
              className="mt-4 max-w-[16ch] text-[30px] font-bold leading-[1.06] sm:text-[40px] lg:text-[50px]"
            >
              Узнайте стоимость работ для вашего автомобиля
            </h2>
            <p className="mt-4 max-w-[44ch] text-[15px] leading-[1.6] text-fg-dim sm:text-[16px]">
              Три коротких шага. Специалист перезвонит, уточнит детали и назовёт
              вилку цен — до визита в студию.
            </p>
            <ul className="mt-6 space-y-2.5 text-[14px] text-fg-dim">
              {[
                "Расчёт бесплатный и ни к чему не обязывает",
                "Точная смета — после осмотра автомобиля",
                "Можно просто спросить, что вашей машине действительно нужно",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <IconCheck className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={70}>
            {!sent ? (
              <form
                onSubmit={onSubmit}
                noValidate
                className="rounded-[8px] border border-line bg-surface p-5 sm:p-7"
              >
                {/* Шаг 1 */}
                <fieldset className="border-0 p-0">
                  <legend className={step}>Шаг 1 — Автомобиль</legend>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div>
                      <label htmlFor="calc-brand" className="mb-2 block text-[13.5px] text-fg-dim">
                        Марка
                      </label>
                      <select
                        id="calc-brand"
                        name="brand"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        className={clsx(field, "appearance-none bg-[length:10px] pr-10")}
                        style={{
                          backgroundImage:
                            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 6'><path d='M1 1l4 4 4-4' fill='none' stroke='%23a9a7a1' stroke-width='1.4' stroke-linecap='round'/></svg>\")",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 16px center",
                        }}
                      >
                        <option value="">Выберите марку</option>
                        {carBrands.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="calc-model" className="mb-2 block text-[13.5px] text-fg-dim">
                        Модель <span className="text-fg-faint">— необязательно</span>
                      </label>
                      <input
                        id="calc-model"
                        name="model"
                        type="text"
                        autoComplete="off"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        placeholder="Например, Cayenne"
                        className={field}
                      />
                    </div>
                  </div>
                </fieldset>

                {/* Шаг 2 */}
                <fieldset className="mt-8 border-0 p-0">
                  <legend className={step}>Шаг 2 — Что требуется</legend>
                  <div className="mt-4 grid gap-2">
                    {goals.map((g) => (
                      <label
                        key={g.id}
                        className={clsx(
                          "flex min-h-[56px] cursor-pointer items-center gap-3 rounded-[4px] border px-4 py-3 transition-colors duration-200",
                          goal === g.id
                            ? "border-gold bg-gold-soft"
                            : "border-line-strong bg-transparent hover:border-fg-faint",
                        )}
                      >
                        <input
                          type="radio"
                          name="goal"
                          value={g.id}
                          checked={goal === g.id}
                          onChange={() => setGoal(g.id)}
                          className="sr-only"
                        />
                        <span
                          aria-hidden="true"
                          className={clsx(
                            "grid size-[18px] shrink-0 place-items-center rounded-full border transition-colors",
                            goal === g.id ? "border-gold" : "border-fg-faint",
                          )}
                        >
                          <span
                            className={clsx(
                              "size-2.5 rounded-full bg-gold transition-transform duration-150 ease-out",
                              goal === g.id ? "scale-100" : "scale-0",
                            )}
                          />
                        </span>
                        <span>
                          <span className="block text-[15px] font-medium leading-tight">
                            {g.label}
                          </span>
                          <span className="mt-0.5 block text-[12.5px] leading-tight text-fg-faint">
                            {g.hint}
                          </span>
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Шаг 3 */}
                <fieldset className="mt-8 border-0 p-0">
                  <legend className={step}>Шаг 3 — Контакт</legend>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div>
                      <label htmlFor="calc-name" className="mb-2 block text-[13.5px] text-fg-dim">
                        Имя <span className="text-fg-faint">— необязательно</span>
                      </label>
                      <input
                        id="calc-name"
                        name="name"
                        type="text"
                        autoComplete="given-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Как к вам обращаться"
                        className={field}
                      />
                    </div>
                    <div>
                      <label htmlFor="calc-phone" className="mb-2 block text-[13.5px] text-fg-dim">
                        Телефон <span className="text-gold">*</span>
                      </label>
                      <input
                        ref={phoneRef}
                        id="calc-phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        required
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (error) setError(null);
                        }}
                        aria-invalid={error ? true : undefined}
                        aria-describedby={error ? "calc-error" : undefined}
                        placeholder="+7 (___) ___-__-__"
                        className={clsx(field, error && "border-[#c4634a]")}
                      />
                    </div>
                  </div>
                </fieldset>

                <label className="mt-6 flex cursor-pointer items-start gap-3 text-[13px] leading-[1.5] text-fg-dim">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => {
                      setAgree(e.target.checked);
                      if (error) setError(null);
                    }}
                    className="mt-0.5 size-[18px] shrink-0 accent-[#c0994e]"
                  />
                  <span>
                    Согласен на обработку персональных данных и с{" "}
                    <a
                      href="https://modnoe-mesto.com/politika-konfidentsialnosti/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="underline underline-offset-4 hover:text-fg"
                    >
                      политикой конфиденциальности
                    </a>
                    .
                  </span>
                </label>

                {error && (
                  <p
                    id="calc-error"
                    role="alert"
                    className="mt-4 rounded-[4px] border border-[#c4634a]/50 bg-[#c4634a]/10 px-4 py-3 text-[13.5px] text-[#e79880]"
                  >
                    {error}
                  </p>
                )}

                <Button type="submit" className="mt-6 w-full">
                  Получить расчёт
                </Button>
                <p className="mt-3 text-center text-[12px] text-fg-faint">
                  Перезвоним в рабочее время: {contacts.hours.toLowerCase()}
                </p>
              </form>
            ) : (
              <div
                ref={doneRef}
                tabIndex={-1}
                role="status"
                className="rounded-[8px] border border-gold/40 bg-surface p-6 focus:outline-none sm:p-8"
              >
                <span className="grid size-11 place-items-center rounded-full bg-gold-soft text-gold">
                  <IconCheck className="size-6" />
                </span>
                <h3 className="mt-5 text-[22px] font-bold leading-tight sm:text-[26px]">
                  Заявка готова
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-fg-dim">
                  {copied
                    ? "Текст заявки скопирован в буфер обмена. Отправьте его удобным способом — ответим в рабочее время."
                    : "Отправьте заявку удобным способом — ответим в рабочее время."}
                </p>

                <pre className="mt-5 overflow-x-auto whitespace-pre-wrap rounded-[4px] border border-line bg-bg-deep p-4 text-[13px] leading-[1.65] text-fg-dim">
                  {summary}
                </pre>

                <div className="mt-5 grid gap-2.5">
                  <ButtonLink href={contacts.telegram} target="_blank" rel="noreferrer noopener">
                    <IconTelegram className="size-[18px]" />
                    Отправить в Telegram
                  </ButtonLink>
                  <ButtonLink href={contacts.phoneHref} variant="secondary">
                    <IconPhone className="size-[18px]" />
                    Позвонить {contacts.phoneDisplay}
                  </ButtonLink>
                  <ButtonLink
                    variant="secondary"
                    href={`${contacts.emailHref}?subject=${encodeURIComponent(
                      "Заявка с сайта MODNOE MESTO",
                    )}&body=${encodeURIComponent(summary)}`}
                  >
                    <IconMail className="size-[18px]" />
                    Отправить письмом
                  </ButtonLink>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setCopied(false);
                  }}
                  className="mt-5 min-h-[44px] text-[13.5px] text-fg-faint underline underline-offset-4 transition-colors hover:text-fg-dim"
                >
                  Изменить заявку
                </button>
              </div>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
