import type { Metadata } from "next";
import { DirectionPage } from "@/components/DirectionPage";

export const metadata: Metadata = {
  title: "Event Beauty — образ в 4 руки",
  description: "Макияж и причёска в 4 руки к свадьбе, мероприятию, фотосессии или вечернему выходу.",
};

export default function EventBeautyPage() {
  return <DirectionPage slug="event-beauty" />;
}
