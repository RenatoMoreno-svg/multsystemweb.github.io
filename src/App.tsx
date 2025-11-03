import { MultSystemHeader } from "./components/MultSystemHeader";
import { ImprovedMultSystemHero } from "./components/improved/ImprovedMultSystemHero";
import { ImprovedTrustBar } from "./components/improved/ImprovedTrustBar";
import { ImprovedMultSystemCategories } from "./components/improved/ImprovedMultSystemCategories";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { AboutSection } from "./components/AboutSection";
import { TechnicalServices } from "./components/TechnicalServices";
import { BusinessUnits } from "./components/BusinessUnits";
import { SocialProof } from "./components/SocialProof";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { ContactInfo } from "./components/ContactInfo";
import { MultSystemFooter } from "./components/MultSystemFooter";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { BackToTop } from "./components/BackToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <MultSystemHeader />
      
      <main id="main-content" className="relative overflow-x-hidden">
        <ImprovedMultSystemHero />
        <ImprovedTrustBar />
        <ImprovedMultSystemCategories />
        <FeaturedProducts />
        <AboutSection />
        <TechnicalServices />
        <BusinessUnits />
        <SocialProof />
        <WhyChooseUs />
        <ContactInfo />
      </main>
      
      <MultSystemFooter />
      
      {/* Floating Action Buttons */}
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
