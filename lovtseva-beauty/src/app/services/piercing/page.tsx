import type { Metadata } from "next";
import { DirectionPage } from "@/components/DirectionPage";
import { getDirectionBySlug } from "@/lib/services";

export const metadata: Metadata = {
  title: "Пирсинг",
  description: "Прокол ушей, хряща, носа и пупка в Центре красоты Натальи Ловцевой, Рязань.",
};

export default function PiercingPage() {
  return <DirectionPage direction={getDirectionBySlug("piercing")!} />;
}
