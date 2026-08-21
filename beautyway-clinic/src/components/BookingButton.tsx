"use client";

import clsx from "clsx";
import { useBooking } from "./BookingSheet";

/** Кнопка записи для серверных страниц: открывает общую шторку с контекстом. */
export function BookingButton({
  label = "Записаться",
  service,
  doctor,
  branch,
  variant = "primary",
  className,
}: {
  label?: string;
  service?: string;
  doctor?: string;
  branch?: string;
  variant?: "primary" | "outline" | "onInk";
  className?: string;
}) {
  const { open } = useBooking();
  const styles = {
    primary: "bg-plum text-white hover:bg-plum-deep",
    outline: "border border-plum/45 text-plum-deep hover:bg-plum-tint",
    onInk: "bg-orchid text-ink hover:bg-orchid-soft",
  } as const;

  return (
    <button
      type="button"
      onClick={() => open({ service, doctor, branch })}
      className={clsx(
        "inline-flex min-h-[52px] items-center justify-center rounded-[4px] px-6 text-[0.9375rem] font-medium transition-colors cursor-pointer",
        styles[variant],
        className,
      )}
    >
      {label}
    </button>
  );
}
