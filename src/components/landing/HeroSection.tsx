import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";
import logoLight from "@/assets/logo-light.png";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="container-custom py-4 flex items-center justify-between relative z-10">
        <img src={logoLight} alt="Neo Hives" className="h-10 md:h-12" />
        <Button variant="glow" size="sm" onClick={scrollToForm}>
          Get Started
        </Button>
      </nav>

      {/* Hero Content */}
      <div className="container-custom pt-12 pb-20 md:pt-16 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-orange-light text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Limited Time Offer — Website @ ₹15,000
            </div>

            <h1 className="heading-display text-foreground">
              Grow Your Business Online With{" "}
              <span className="text-gradient">High-Converting Websites</span>, Google Business Setup & SEO
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              We help small businesses and startups increase their leads, visibility, and revenue using fast, modern websites and Google search optimization—without needing any technical experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" onClick={scrollToForm}>
                Get Your Website @ Just ₹15,000
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="xl" onClick={scrollToPortfolio}>
                <Play className="w-5 h-5 fill-primary text-primary" />
                See Our Portfolio (50+ Clients)
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-orange border-2 border-background flex items-center justify-center text-xs text-primary-foreground font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">50+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-primary fill-primary" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm text-muted-foreground ml-1">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-orange-glow/20 blur-3xl rounded-full"></div>
            <img
              src={heroMockup}
              alt="Website and Google Business Profile Mockup"
              className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
