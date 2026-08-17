import type { Metadata } from "next";
import { DirectionPage } from "@/components/DirectionPage";
import { getDirectionBySlug } from "@/lib/services";

export const metadata: Metadata = {
  title: "Брови",
  description: "Коррекция, окрашивание и долговременная укладка бровей в студии SEYCHAS, Тула.",
};

export default function BrowsPage() {
  return <DirectionPage direction={getDirectionBySlug("brows")!} />;
}
