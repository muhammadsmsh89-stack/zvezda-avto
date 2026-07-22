import { Hero } from "@/components/sections/Hero";
import { TrustStats } from "@/components/sections/TrustStats";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyUs } from "@/components/sections/WhyUs";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { PromotionsSection } from "@/components/sections/PromotionsSection";
import { PricePreview } from "@/components/sections/PricePreview";
import { TrustProofSection } from "@/components/sections/TrustProofSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { BookingForm } from "@/components/sections/BookingForm";
import { ContactsSection } from "@/components/sections/ContactsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <ServicesOverview />
      <WhyUs />
      <BrandsSection />
      <GalleryPreview />
      <PromotionsSection />
      <PricePreview />
      <TrustProofSection />
      <ReviewsSection />
      <BookingForm />
      <ContactsSection />
    </>
  );
}
