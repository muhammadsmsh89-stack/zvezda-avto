import { AxonKitchen } from "./AxonKitchen";
import { SectionWardrobe } from "./SectionWardrobe";
import { DressingPlan } from "./DressingPlan";
import { BedElevation } from "./BedElevation";
import { CustomExploded } from "./CustomExploded";
import { JoineryDetail } from "./JoineryDetail";

export const illustrations = {
  kitchen: AxonKitchen,
  wardrobe: SectionWardrobe,
  dressing: DressingPlan,
  bedroom: BedElevation,
  custom: CustomExploded,
  joinery: JoineryDetail,
} as const;

export type IllustrationId = keyof typeof illustrations;

export { DrawingFrame } from "./DrawingFrame";
