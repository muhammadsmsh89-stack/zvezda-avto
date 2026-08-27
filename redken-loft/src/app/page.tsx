import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { MastersSection } from "@/components/sections/MastersSection";
import { StorySection } from "@/components/sections/StorySection";
import { PricePreviewSection } from "@/components/sections/PricePreviewSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { ContactsSection } from "@/components/sections/ContactsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesSection />
      <PortfolioSection />
      <MastersSection />
      <StorySection />
      <PricePreviewSection />
      <ReviewsSection />
      <FinalCtaSection />
      <ContactsSection />
    </>
  );
}
