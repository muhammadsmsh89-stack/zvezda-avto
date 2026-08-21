import Image from "next/image";
import clsx from "clsx";
import swan from "../../public/media/swan.png";

/**
 * Компактный логотип в шапке. Оригинальный знак с лебедем используется
 * аккуратно и не превращается в декоративный паттерн: словесная часть
 * набирается шрифтом, чтобы знак оставался чистым в любом размере.
 */
export function Wordmark({ tone = "light", className }: { tone?: "light" | "ink"; className?: string }) {
  return (
    <span className={clsx("inline-flex items-center gap-2.5", className)}>
      <Image
        src={swan}
        alt=""
        width={30}
        height={24}
        priority
        className="h-[24px] w-auto shrink-0"
        aria-hidden
      />
      <span className="flex flex-col leading-none">
        <span
          className={clsx(
            "font-display text-[1.0625rem] tracking-[0.13em]",
            tone === "ink" ? "text-milk" : "text-plum-deep",
          )}
        >
          BEAUTYWAY
        </span>
        <span
          className={clsx(
            "mt-[3px] text-[0.5625rem] font-medium tracking-[0.34em]",
            tone === "ink" ? "text-lilac" : "text-graphite-soft",
          )}
        >
          CLINIC
        </span>
      </span>
    </span>
  );
}
