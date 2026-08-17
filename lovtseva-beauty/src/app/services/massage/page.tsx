import type { Metadata } from "next";
import { DirectionPage } from "@/components/DirectionPage";
import { getDirectionBySlug } from "@/lib/services";

export const metadata: Metadata = {
  title: "Массаж",
  description: "Массаж лица и тела в Центре красоты Натальи Ловцевой, Рязань.",
};

export default function MassagePage() {
  return <DirectionPage direction={getDirectionBySlug("massage")!} />;
}
