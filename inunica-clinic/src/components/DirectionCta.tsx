"use client";

import { formatFrom } from "@/lib/format";
import { useBooking } from "./BookingSheet";

/**
 * Кнопка записи в шапке страницы направления. Отдельный клиентский компонент,
 * чтобы сама страница осталась серверной и не тащила в бандл ничего лишнего.
 */
export function DirectionCta({ title, from }: { title: string; from?: number }) {
  const { open } = useBooking();

  return (
    <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
      <button
        type="button"
        onClick={() => open(title)}
        className="inline-flex min-h-[56px] w-full cursor-pointer items-center justify-center rounded-[2px] bg-accent px-8 text-[1rem] font-medium text-paper transition-colors duration-200 hover:bg-accent-deep active:scale-[0.98] sm:w-auto"
      >
        Записаться
      </button>
      {from && (
        <span className="text-[1rem] text-ink-mute">
          Стоимость {formatFrom(from)}
        </span>
      )}
    </div>
  );
}

/** То же действие для карточки акции — без строки «стоимость от». */
export function PromoCta({ title }: { title: string }) {
  const { open } = useBooking();

  return (
    <button
      type="button"
      onClick={() => open(title)}
      className="mt-8 inline-flex min-h-[56px] w-full cursor-pointer items-center justify-center rounded-[2px] bg-accent px-8 text-[1rem] font-medium text-paper transition-colors duration-200 hover:bg-accent-deep active:scale-[0.98] sm:w-auto"
    >
      Забронировать
    </button>
  );
}
