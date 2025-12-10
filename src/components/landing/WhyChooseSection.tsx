import { 
  Percent, 
  Zap, 
  Palette, 
  Search, 
  Package, 
  Headphones, 
  Shield 
} from "lucide-react";

const features = [
  {
    icon: Percent,
    title: "40–60% More Affordable",
    description: "Premium quality at a fraction of agency prices",
  },
  {
    icon: Zap,
    title: "Super Fast Delivery",
    description: "Get your website live in just 7–10 days",
  },
  {
    icon: Palette,
    title: "Modern UI/UX",
    description: "Beautiful, conversion-focused designs",
  },
  {
    icon: Search,
    title: "SEO & Speed Ready",
    description: "Optimized for Google rankings from day one",
  },
  {
    icon: Package,
    title: "All-in-One Solution",
    description: "Website + Google + SEO in one package",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal assistance whenever you need it",
  },
  {
    icon: Shield,
    title: "No Hidden Costs",
    description: "Transparent pricing with no surprises",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-light text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Why Us
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Why Choose <span className="text-gradient">Neo Hives?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We deliver exceptional value that sets us apart from traditional agencies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
