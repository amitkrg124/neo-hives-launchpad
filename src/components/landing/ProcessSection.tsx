import { MessageSquare, Palette, Code, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Business Understanding & Requirements",
    description: "We understand your goals, industry, competitors, and design direction to create the perfect strategy.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Website UI/UX & SEO-Ready Structure",
    description: "We create a modern design + optimized structure to convert visitors into leads.",
  },
  {
    icon: Code,
    number: "03",
    title: "Development & Google Business Setup",
    description: "We build your website, connect domain, hosting, emails & optimize Google Business listing.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch + Support + Growth Optimization",
    description: "We launch smoothly, provide training, offer SEO improvements, and help you grow long-term.",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-light text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Process
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Our Strategy & <span className="text-gradient">Process</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven 4-step approach to transform your online presence.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Arrow for mobile/tablet */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block lg:hidden absolute -bottom-4 left-1/2 -translate-x-1/2">
                      <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                    </div>
                  )}

                  <div className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-medium transition-all duration-300 relative z-10">
                    {/* Step number */}
                    <div className="absolute -top-4 -right-2 w-12 h-12 rounded-full bg-gradient-orange flex items-center justify-center text-primary-foreground font-bold text-sm shadow-glow">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-secondary-foreground" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow between steps (desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-primary-foreground" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
