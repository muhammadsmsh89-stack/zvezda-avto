import type { Metadata } from "next";
import { DirectionPage } from "@/components/DirectionPage";

export const metadata: Metadata = {
  title: "Makeup — профессиональный макияж",
  description: "Макияж на мероприятия, вечерние образы и съёмки в Studio Celebrity, Ярославль.",
};

export default function MakeupPage() {
  return <DirectionPage slug="makeup" />;
}
