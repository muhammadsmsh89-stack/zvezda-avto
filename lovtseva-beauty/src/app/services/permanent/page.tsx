import type { Metadata } from "next";
import { DirectionPage } from "@/components/DirectionPage";
import { getDirectionBySlug } from "@/lib/services";

export const metadata: Metadata = {
  title: "Перманентный макияж",
  description: "Перманентный макияж бровей, губ и межресничной зоны в Центре красоты Натальи Ловцевой, Рязань.",
};

export default function PermanentPage() {
  return <DirectionPage direction={getDirectionBySlug("permanent")!} />;
}
