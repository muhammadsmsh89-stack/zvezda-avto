import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { DirectionsSection } from "@/components/sections/DirectionsSection";
import { StorySection } from "@/components/sections/StorySection";
import { MastersSection } from "@/components/sections/MastersSection";
import { WorksSection } from "@/components/sections/WorksSection";
import { HairFeatureSection } from "@/components/sections/HairFeatureSection";
import { CosmetologyLaserSection } from "@/components/sections/CosmetologyLaserSection";
import { PricePreviewSection } from "@/components/sections/PricePreviewSection";
import { BookingStepsSection } from "@/components/sections/BookingStepsSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { AboutTeaserSection } from "@/components/sections/AboutTeaserSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { ContactsSection } from "@/components/sections/ContactsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <DirectionsSection />
      <StorySection />
      <MastersSection />
      <WorksSection />
      <HairFeatureSection />
      <CosmetologyLaserSection />
      <PricePreviewSection />
      <BookingStepsSection />
      <ReviewsSection />
      <AboutTeaserSection />
      <FinalCtaSection />
      <ContactsSection />
    </>
  );
}
