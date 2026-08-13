import { Hero } from "@/components/sections/Hero";
import { DirectionsSection } from "@/components/sections/DirectionsSection";
import { TransformationsSection } from "@/components/sections/TransformationsSection";
import { WhyCelebritySection } from "@/components/sections/WhyCelebritySection";
import { MastersSection } from "@/components/sections/MastersSection";
import { HairColorSection } from "@/components/sections/HairColorSection";
import { EventBeautySection } from "@/components/sections/EventBeautySection";
import { PricesSection } from "@/components/sections/PricesSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { GiftSection } from "@/components/sections/GiftSection";
import { StudioInteriorSection } from "@/components/sections/StudioInteriorSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { ContactsSection } from "@/components/sections/ContactsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <DirectionsSection />
      <TransformationsSection />
      <WhyCelebritySection />
      <MastersSection />
      <HairColorSection />
      <EventBeautySection />
      <PricesSection />
      <EducationSection />
      <ReviewsSection />
      <GiftSection />
      <StudioInteriorSection />
      <FinalCtaSection />
      <ContactsSection />
    </>
  );
}
