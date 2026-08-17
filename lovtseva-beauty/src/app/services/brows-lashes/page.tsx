import type { Metadata } from "next";
import { DirectionPage } from "@/components/DirectionPage";
import { getDirectionBySlug } from "@/lib/services";

export const metadata: Metadata = {
  title: "Брови и ресницы",
  description: "Наращивание ресниц, ламинирование и оформление бровей в Центре красоты Натальи Ловцевой, Рязань.",
};

export default function BrowsLashesPage() {
  return <DirectionPage direction={getDirectionBySlug("brows-lashes")!} />;
}
