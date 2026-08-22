import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/Button";
import { withBase } from "@/lib/basePath";
import { TrustStrip } from "./TrustStrip";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate bg-bg lg:flex lg:min-h-[100svh] lg:items-center"
    >
      {/*
        Фотография остаётся в своём горизонтальном кадре: на мобильном — полосой
        сверху, на десктопе — правой половиной экрана. Текст никогда не ложится
        на автомобиль.
      */}
      <div className="relative h-[42svh] min-h-[268px] w-full lg:absolute lg:inset-0 lg:h-full lg:w-full lg:min-h-0">
        <picture>
          <source media="(min-width: 768px)" srcSet={withBase("/media/hero-bmw7-1500.webp")} />
          <img
            src={withBase("/media/hero-bmw7-900.webp")}
            alt="BMW 7 серии, оклеенный матовой антигравийной плёнкой, в боксе детейлинг-центра MODNOE MESTO"
            width={1500}
            height={1001}
            fetchPriority="high"
            decoding="async"
            className="u-hero-img size-full object-cover object-[44%_54%] lg:object-[64%_50%]"
          />
        </picture>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,6,7,0.72)_0%,rgba(6,6,7,0.05)_34%,rgba(11,11,12,0.55)_82%,#0b0b0c_100%)] lg:bg-[linear-gradient(to_right,#0b0b0c_0%,rgba(11,11,12,0.94)_26%,rgba(11,11,12,0.55)_50%,rgba(11,11,12,0.10)_78%,transparent_100%)]"
        />
      </div>

      <Container className="relative -mt-10 pb-8 lg:mt-0 lg:py-28">
        <div className="lg:max-w-[46%]">
          <p className="u-eyebrow">Детейлинг-центр · Москва</p>

          <h1 className="mt-3 max-w-[19ch] text-[32px] font-bold leading-[1.03] sm:text-[46px] lg:text-[60px] xl:text-[68px]">
            Защищаем автомобили, которые хочется сохранить
          </h1>

          <p className="mt-3.5 max-w-[40ch] text-[15.5px] leading-[1.5] text-fg-dim sm:text-[18px]">
            Оклейка защитной плёнкой, детейлинг и дооснащение премиальных
            автомобилей в Москве.
          </p>

          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
            <ButtonLink href="#calculator" className="sm:px-8">
              Рассчитать стоимость
            </ButtonLink>
            <ButtonLink href="#works" variant="secondary" className="sm:px-8">
              Смотреть работы
            </ButtonLink>
          </div>

          <div className="mt-6 max-w-[520px]">
            <TrustStrip />
          </div>
        </div>
      </Container>
    </section>
  );
}
