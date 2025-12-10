import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const features = [
  "5-Page Professional Website",
  "5 Free Business Emails (1 Year)",
  "Free Domain (1 Year)",
  "Free Hosting (1 Year)",
  "SEO-Friendly Pages",
  "Fully Mobile Responsive",
  "Complete Website Content Writing",
  "Modern UI/UX Design",
  "SSL Security",
  "WhatsApp Button Integration",
  "Google Business Profile Setup",
];

const OfferSection = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="relative max-w-4xl mx-auto">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-orange rounded-3xl opacity-5"></div>
          
          {/* Main offer card */}
          <div className="relative bg-card rounded-3xl shadow-large overflow-hidden border border-primary/10">
            {/* Top banner */}
            <div className="bg-gradient-navy text-secondary-foreground py-4 px-6 text-center">
              <div className="flex items-center justify-center gap-2 text-lg md:text-xl font-bold">
                <span className="text-2xl">⭐</span>
                Limited-Time Website Starter Package
                <span className="text-2xl">⭐</span>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="text-center mb-10">
                <div className="inline-block">
                  <span className="text-muted-foreground text-lg line-through">₹35,000</span>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl md:text-7xl font-extrabold text-gradient">₹15,000</span>
                    <span className="text-muted-foreground text-lg">only</span>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4 text-lg">
                  Everything your business needs to go online & attract customers
                </p>
              </div>

              {/* Features grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-accent transition-colors"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center space-y-4">
                <Button variant="hero" size="xl" onClick={scrollToForm} className="w-full sm:w-auto">
                  Claim This Offer Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <p className="text-sm text-muted-foreground">
                  No upfront payment required • Free consultation included
                </p>
              </div>
            </div>

            {/* Corner badge */}
            <div className="absolute top-6 -right-12 bg-primary text-primary-foreground py-2 px-12 text-sm font-bold rotate-45 shadow-md">
              BEST VALUE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
