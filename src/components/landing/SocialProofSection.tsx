import { Users, Briefcase, Globe, Star, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "50+", label: "Active Business Clients" },
  { icon: Briefcase, value: "1000+", label: "Projects Delivered" },
  { icon: Globe, value: "826+", label: "Past Global Clients" },
  { icon: Star, value: "4.9/5", label: "Client Satisfaction" },
  { icon: TrendingUp, value: "85%", label: "Client Retention" },
];

const SocialProofSection = () => {
  return (
    <section className="section-padding bg-gradient-navy">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-section text-secondary-foreground mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto">
            Our track record speaks for itself. Join hundreds of successful businesses.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-secondary-foreground/5 backdrop-blur-sm border border-secondary-foreground/10 hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-orange flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary-foreground/70 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
