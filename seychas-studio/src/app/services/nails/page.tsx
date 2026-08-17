import type { Metadata } from "next";
import { DirectionPage } from "@/components/DirectionPage";
import { getDirectionBySlug } from "@/lib/services";

export const metadata: Metadata = {
  title: "Ногти",
  description: "Маникюр, педикюр, наращивание и дизайн ногтей в студии SEYCHAS, Тула.",
};

export default function NailsPage() {
  return <DirectionPage direction={getDirectionBySlug("nails")!} />;
}
