// Общие motion-токены. Компоненты не задают произвольные duration/ease — используют эти значения,
// чтобы движение на сайте ощущалось как единая система, а не набор случайных анимаций.

export const EASE_EDITORIAL: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const DURATION = {
  fast: 0.2,
  normal: 0.45,
  slow: 0.7,
} as const;

export const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION.normal, ease: "easeOut" as const } },
};

export const riseVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.slow, ease: EASE_EDITORIAL } },
};

export const revealMaskVariants = {
  hidden: { opacity: 0, scale: 1.03 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: EASE_EDITORIAL } },
};
