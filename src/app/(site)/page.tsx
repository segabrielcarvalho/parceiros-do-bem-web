import CTASection from "@/components/sections/Home/CTA";
import FAQSection from "@/components/sections/Home/FAQ";
import FeatureSection from "@/components/sections/Home/Feature";
import FinalCTA from "@/components/sections/Home/FinalCTA";
import HeroSection from "@/components/sections/Home/Hero";
import TestimonialsSection from "@/components/sections/Home/Testimonials";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <CTASection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
};

export default HomePage;