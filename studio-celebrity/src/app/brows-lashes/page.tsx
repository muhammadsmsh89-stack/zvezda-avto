import type { Metadata } from "next";
import { DirectionPage } from "@/components/DirectionPage";

export const metadata: Metadata = {
  title: "Brows & Lashes — брови и ресницы",
  description: "Архитектура и окрашивание бровей, ламинирование бровей и ресниц в Studio Celebrity, Ярославль.",
};

export default function BrowsLashesPage() {
  return <DirectionPage slug="brows-lashes" />;
}
