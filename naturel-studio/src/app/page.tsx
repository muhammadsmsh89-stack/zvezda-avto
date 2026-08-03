import { Hero } from "@/components/sections/Hero";
import { TrustStats } from "@/components/sections/TrustStats";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyUs } from "@/components/sections/WhyUs";
import { TeamSection } from "@/components/sections/TeamSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { BookingWizard } from "@/components/sections/BookingWizard";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactsSection } from "@/components/sections/ContactsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <ServicesOverview />
      <WhyUs />
      <TeamSection />
      <BeforeAfterSection />
      <BookingWizard />
      <ReviewsSection />
      <GallerySection />
      <FaqSection />
      <ContactsSection />
    </>
  );
}
