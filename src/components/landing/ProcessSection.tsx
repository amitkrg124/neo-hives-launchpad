import { FeatureSteps } from "@/components/ui/feature-steps";

const features = [
  {
    step: "Step 1",
    title: "Business Understanding & Requirements",
    content: "We understand your goals, industry, competitors, and design direction to create the perfect strategy for your success.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 2",
    title: "Website UI/UX & SEO-Ready Structure",
    content: "We create a modern design + optimized structure to convert visitors into leads with beautiful, fast-loading pages.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 3",
    title: "Development & Google Business Setup",
    content: "We build your website, connect domain, hosting, emails & optimize your Google Business listing for local visibility.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
  },
  {
    step: "Step 4",
    title: "Launch + Support + Growth Optimization",
    content: "We launch smoothly, provide training, offer SEO improvements, and help you grow long-term with ongoing support.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-8">
          <span className="inline-block bg-orange-light text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Process
          </span>
        </div>

        <FeatureSteps
          features={features}
          title="Our Strategy & Process"
          autoPlayInterval={4000}
        />
      </div>
    </section>
  );
};

export default ProcessSection;
