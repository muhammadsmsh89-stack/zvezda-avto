import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WorksWallSection } from "@/components/sections/WorksWallSection";
import { PinterestSection } from "@/components/sections/PinterestSection";
import { ServicesIndexSection } from "@/components/sections/ServicesIndexSection";
import { PricesPreviewSection } from "@/components/sections/PricesPreviewSection";
import { MastersSection } from "@/components/sections/MastersSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SafetySection } from "@/components/sections/SafetySection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { PromosGiftSection } from "@/components/sections/PromosGiftSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WorksWallSection />
      <PinterestSection />
      <ServicesIndexSection />
      <PricesPreviewSection />
      <MastersSection />
      <ExperienceSection />
      <SafetySection />
      <ReviewsSection />
      <PromosGiftSection />
      <FinalCtaSection />
    </>
  );
}
