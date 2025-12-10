import { Globe, MapPin, Search } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "High-performance websites designed for lead generation, credibility, and trust.",
    features: ["Custom Design", "Mobile-First", "Fast Loading", "SEO Ready"],
    highlight: "Perfect for startups, shops, restaurants, services, coaches, and influencers.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile Optimization",
    description: "Rank higher in your city, get more customer calls, appear in Google Maps.",
    features: ["Local SEO", "Map Ranking", "Review Management", "Daily Leads"],
    highlight: "Get discovered by customers searching for businesses like yours.",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Complete search visibility growth with on-page optimization and tracking.",
    features: ["Keyword Optimization", "Page Speed", "Analytics", "Content Strategy"],
    highlight: "Drive organic traffic that converts into paying customers.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background" id="services">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-light text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="heading-section text-foreground mb-4">
            How We Help You <span className="text-gradient">Grow</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to establish a powerful online presence and attract more customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-8 shadow-soft border border-border hover:border-primary/30 transition-all duration-300 card-hover"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-muted text-muted-foreground px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Highlight */}
                <p className="text-sm text-primary font-medium">
                  {service.highlight}
                </p>

                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
