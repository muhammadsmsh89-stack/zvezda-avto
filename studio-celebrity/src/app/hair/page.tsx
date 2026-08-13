import type { Metadata } from "next";
import { DirectionPage } from "@/components/DirectionPage";

export const metadata: Metadata = {
  title: "Hair — стрижки и окрашивание",
  description:
    "Стрижки, сложное окрашивание, уход и восстановление волос в Studio Celebrity, Ярославль.",
};

export default function HairPage() {
  return <DirectionPage slug="hair" />;
}
