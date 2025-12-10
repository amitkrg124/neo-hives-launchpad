import HeroSection from "@/components/landing/HeroSection";
import OfferSection from "@/components/landing/OfferSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import ServicesSection from "@/components/landing/ServicesSection";
import ProcessSection from "@/components/landing/ProcessSection";
import PortfolioSection from "@/components/landing/PortfolioSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import WhyChooseSection from "@/components/landing/WhyChooseSection";
import AboutSection from "@/components/landing/AboutSection";
import ContactFormSection from "@/components/landing/ContactFormSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <OfferSection />
      <SocialProofSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <WhyChooseSection />
      <AboutSection />
      <ContactFormSection />
      <Footer />
    </main>
  );
};

export default Index;
