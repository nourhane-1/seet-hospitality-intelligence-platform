import LandingNav from "@/components/landing/LandingNav";
import HeroSection from "@/components/landing/HeroSection";
import PlatformLogos from "@/components/landing/PlatformLogos";
import FeaturesSection from "@/components/landing/FeaturesSection";
import AISection from "@/components/landing/AISection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import DemoSection from "@/components/landing/DemoSection";
import LandingFooter from "@/components/landing/LandingFooter";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF9]">
      <LandingNav />
      <HeroSection />
      <PlatformLogos />
      <FeaturesSection />
      <AISection />
      <TestimonialsSection />
      <FAQSection />
      <DemoSection />
      <LandingFooter />
    </div>
  );
}
