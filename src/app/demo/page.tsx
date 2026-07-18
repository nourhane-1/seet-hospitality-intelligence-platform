import LandingNav from "@/components/landing/LandingNav";
import DemoSection from "@/components/landing/DemoSection";
import LandingFooter from "@/components/landing/LandingFooter";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF9]">
      <LandingNav />
      <div className="pt-8">
        <DemoSection />
      </div>
      <LandingFooter />
    </div>
  );
}
