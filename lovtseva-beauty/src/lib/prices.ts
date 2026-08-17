// Прайс для страницы /prices — переиспользует услуги и цены из services.ts,
// сгруппированные по направлениям в порядке, удобном для навигации.

import { directions } from "@/lib/services";

export const priceCategories = directions;
