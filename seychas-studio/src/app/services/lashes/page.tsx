import type { Metadata } from "next";
import { DirectionPage } from "@/components/DirectionPage";
import { getDirectionBySlug } from "@/lib/services";

export const metadata: Metadata = {
  title: "Ресницы",
  description: "Наращивание, ламинирование и окрашивание ресниц в студии SEYCHAS, Тула.",
};

export default function LashesPage() {
  return <DirectionPage direction={getDirectionBySlug("lashes")!} />;
}
