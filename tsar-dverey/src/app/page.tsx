import { Hero } from "@/components/sections/Hero";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { QuizSection } from "@/components/sections/QuizSection";
import { InteriorsPreviewSection } from "@/components/sections/InteriorsPreviewSection";
import { CollectionsSection } from "@/components/sections/CollectionsSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ShowroomSection } from "@/components/sections/ShowroomSection";
import { ServiceSection } from "@/components/sections/ServiceSection";
import { InstallmentSection } from "@/components/sections/InstallmentSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { ContactsSection } from "@/components/sections/ContactsSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <QuizSection />
      <InteriorsPreviewSection />
      <CollectionsSection />
      <SocialProofSection />
      <ReviewsSection />
      <ShowroomSection />
      <ServiceSection />
      <InstallmentSection />
      <FinalCtaSection />
      <ContactsSection />
    </>
  );
}
