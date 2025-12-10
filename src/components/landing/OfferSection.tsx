import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const features = [
  "5-Page Professional Website",
  "5 Free Business Emails (1 Year)",
  "Free Domain (1 Year)",
  "Free Hosting (1 Year)",
  "SEO-Friendly Pages",
  "Mobile Responsive",
  "Website Content Writing",
  "Modern UI/UX Design",
  "SSL Security",
  "WhatsApp Integration",
  "Google Business Setup",
];

const OfferSection = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-8 md:section-padding bg-muted/50">
      <div className="container-custom px-4">
        <div className="relative max-w-4xl mx-auto">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-orange rounded-2xl md:rounded-3xl opacity-5"></div>
          
          {/* Main offer card */}
          <div className="relative bg-card rounded-2xl md:rounded-3xl shadow-large overflow-hidden border border-primary/10">
            {/* Top banner */}
            <div className="bg-gradient-navy text-secondary-foreground py-2 md:py-4 px-4 md:px-6 text-center">
              <div className="flex items-center justify-center gap-1 md:gap-2 text-sm md:text-xl font-bold">
                <span className="text-lg md:text-2xl">⭐</span>
                <span className="truncate">Limited-Time Website Package</span>
                <span className="text-lg md:text-2xl">⭐</span>
              </div>
            </div>

            <div className="p-4 md:p-12">
              <div className="text-center mb-4 md:mb-10">
                <div className="inline-block">
                  <span className="text-muted-foreground text-sm md:text-lg line-through">₹35,000</span>
                  <div className="flex items-baseline justify-center gap-1 md:gap-2">
                    <span className="text-3xl md:text-7xl font-extrabold text-gradient">₹15,000</span>
                    <span className="text-muted-foreground text-sm md:text-lg">only</span>
                  </div>
                </div>
                <p className="text-muted-foreground mt-2 md:mt-4 text-sm md:text-lg">
                  Everything to go online & attract customers
                </p>
              </div>

              {/* Features grid - compact on mobile */}
              <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-10">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2 md:p-3 rounded-lg bg-muted/50 hover:bg-accent transition-colors"
                  >
                    <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 md:w-4 md:h-4 text-primary" />
                    </div>
                    <span className="font-medium text-foreground text-xs md:text-base leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center space-y-2 md:space-y-4">
                <Button variant="hero" size="lg" onClick={scrollToForm} className="w-full sm:w-auto text-sm md:text-base">
                  Claim This Offer Now
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
                <p className="text-xs md:text-sm text-muted-foreground">
                  No upfront payment • Free consultation
                </p>
              </div>
            </div>

            {/* Corner badge - hidden on mobile */}
            <div className="hidden md:block absolute top-6 -right-12 bg-primary text-primary-foreground py-2 px-12 text-sm font-bold rotate-45 shadow-md">
              BEST VALUE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
