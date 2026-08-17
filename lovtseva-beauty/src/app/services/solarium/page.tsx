import type { Metadata } from "next";
import { DirectionPage } from "@/components/DirectionPage";
import { getDirectionBySlug } from "@/lib/services";

export const metadata: Metadata = {
  title: "Солярий",
  description: "Турбосолярий в Центре красоты Натальи Ловцевой, Рязань.",
};

export default function SolariumPage() {
  return <DirectionPage direction={getDirectionBySlug("solarium")!} />;
}
