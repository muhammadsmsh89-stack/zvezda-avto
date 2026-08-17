import type { Metadata } from "next";
import { DirectionPage } from "@/components/DirectionPage";
import { getDirectionBySlug } from "@/lib/services";

export const metadata: Metadata = {
  title: "Beauty",
  description: "Уход за лицом и телом в студии SEYCHAS, Тула.",
};

export default function BeautyPage() {
  return <DirectionPage direction={getDirectionBySlug("beauty")!} />;
}
