import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { DirectionsSection } from "@/components/sections/DirectionsSection";
import { BookingStepsSection } from "@/components/sections/BookingStepsSection";
import { WorksSection } from "@/components/sections/WorksSection";
import { MastersSection } from "@/components/sections/MastersSection";
import { WhySection } from "@/components/sections/WhySection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { ContactsSection } from "@/components/sections/ContactsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <DirectionsSection />
      <BookingStepsSection />
      <WorksSection />
      <MastersSection />
      <WhySection />
      <ReviewsSection />
      <FinalCtaSection />
      <ContactsSection />
    </>
  );
}
