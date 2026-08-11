// Стилевые направления вместо «проектов» с придуманными метаданными (адрес/площадь/дата/заказчик —
// PHASE 11 брифа прямо запрещает их выдумывать). Описания опираются на то, что подтверждено по
// реальным фото шоурума на 2ГИС: тёплый айвори с латунной фурнитурой и паркетом-ёлочкой, тонированное
// стекло, светлая классика, тёмное дерево.
//
// tone/crop управляют тем, как DoorTexturePanel подаёт единственный проработанный SVG-актив
// (DoorScene) — крупным планом и в разном тоне, а не плоской цветовой заливкой (см. VISUAL_QA).

export type StyleDirection = {
  id: string;
  title: string;
  description: string;
  tone: "default" | "dark" | "walnut";
  crop: "full" | "door" | "floor";
  variant: "double" | "single";
};

export const styleDirections: StyleDirection[] = [
  {
    id: "ivory-brass",
    title: "Тёплый айвори и латунь",
    description: "Остеклённые двери светлого тона с латунной фурнитурой — на паркете-ёлочке",
    tone: "default",
    crop: "full",
    variant: "double",
  },
  {
    id: "tinted-glass",
    title: "Тонированное стекло",
    description: "Тёмные остеклённые полотна для сдержанных, контрастных интерьеров",
    tone: "dark",
    crop: "door",
    variant: "single",
  },
  {
    id: "soft-classic",
    title: "Светлая классика",
    description: "Филёнчатые двери мягких светлых оттенков — без тяжеловесного декора",
    tone: "default",
    crop: "door",
    variant: "single",
  },
  {
    id: "dark-wood",
    title: "Тёмное дерево",
    description: "Плотная фактура массива для интерьеров с глубоким, тёплым тоном",
    tone: "walnut",
    crop: "floor",
    variant: "double",
  },
];
