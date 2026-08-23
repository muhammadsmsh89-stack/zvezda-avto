"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, useReducedMotion, motion, MotionValue } from "framer-motion";
import clsx from "clsx";

/**
 * Фото клиники, которое выпрямляется и приближается по мере скролла.
 *
 * Адаптация Aceternity ContainerScroll под дизайн-систему сайта: механика
 * скролл-driven наклона и масштаба сохранена, но убран тёмный «бейзл
 * устройства» (border-4 + #222222 + пятислойная неоновая тень) — на сайте
 * клиники нет ни одной скруглённой карточки с тенью, радиус везде 2px.
 * Вместо этого — тонкая рамка `border-line` и мягкая тень чернильным тоном.
 *
 * Наклон и масштаб отключены при `prefers-reduced-motion: reduce`: это
 * scroll-driven 3D-трансформация, а не статичный parallax, и у части
 * пользователей она может вызывать дискомфорт вестибулярного аппарата.
 */
export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.86, 0.95] : [1.03, 1];
  };

  const rotateRaw = useTransform(scrollYProgress, [0, 1], [16, 0]);
  const scaleRaw = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -60]);
  // Хуки framer-motion нельзя вызывать условно — считаем оба варианта всегда,
  // а под reduced-motion просто выбираем неподвижный.
  const flat = useTransform(() => 0);
  const full = useTransform(() => 1);

  const rotate = reduceMotion ? flat : rotateRaw;
  const scale = reduceMotion ? full : scaleRaw;

  return (
    <div
      className="relative flex h-[46rem] items-center justify-center p-2 md:h-[62rem] md:p-12"
      ref={containerRef}
    >
      <div
        className="relative w-full py-8 md:py-24"
        style={{ perspective: "1200px" }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div style={{ translateY: translate }} className="mx-auto max-w-3xl text-center">
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
  className,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 30px 60px -28px rgba(36,28,33,.32), 0 12px 26px -14px rgba(36,28,33,.2)",
      }}
      className={clsx(
        "mx-auto -mt-8 h-[24rem] w-full max-w-4xl overflow-hidden rounded-[4px] border border-line bg-paper p-1.5 md:h-[34rem] md:p-2",
        className,
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2px] bg-veil">
        {children}
      </div>
    </motion.div>
  );
};
