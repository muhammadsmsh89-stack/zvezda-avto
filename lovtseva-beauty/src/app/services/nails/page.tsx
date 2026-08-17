import type { Metadata } from "next";
import { DirectionPage } from "@/components/DirectionPage";
import { getDirectionBySlug } from "@/lib/services";

export const metadata: Metadata = {
  title: "Ногти",
  description: "Маникюр, педикюр, покрытие и наращивание ногтей в Центре красоты Натальи Ловцевой, Рязань.",
};

export default function NailsPage() {
  return <DirectionPage direction={getDirectionBySlug("nails")!} />;
}
