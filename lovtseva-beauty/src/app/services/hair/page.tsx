import type { Metadata } from "next";
import { DirectionPage } from "@/components/DirectionPage";
import { getDirectionBySlug } from "@/lib/services";

export const metadata: Metadata = {
  title: "Волосы",
  description: "Стрижки, окрашивание и японская лечебная биозавивка tocosme в Центре красоты Натальи Ловцевой, Рязань.",
};

export default function HairPage() {
  return <DirectionPage direction={getDirectionBySlug("hair")!} />;
}
