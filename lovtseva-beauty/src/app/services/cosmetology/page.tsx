import type { Metadata } from "next";
import { DirectionPage } from "@/components/DirectionPage";
import { getDirectionBySlug } from "@/lib/services";

export const metadata: Metadata = {
  title: "Косметология",
  description: "Уход за лицом, чистки, пилинги и аппаратная косметология в Центре красоты Натальи Ловцевой, Рязань.",
};

export default function CosmetologyPage() {
  return <DirectionPage direction={getDirectionBySlug("cosmetology")!} />;
}
