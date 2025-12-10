import { Users, Briefcase, Globe, Star, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Users, value: "80+", label: "Active Business Clients" },
  { icon: Briefcase, value: "80+", label: "Projects Delivered" },
  { icon: Globe, value: "80+", label: "Global Clients" },
  { icon: Star, value: "4.9/5", label: "Client Satisfaction" },
  { icon: TrendingUp, value: "85%", label: "Client Retention" },
];

const SocialProofSection = () => {
  return (
    <section className="section-padding bg-gradient-navy">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-section text-secondary-foreground mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto">
            Our track record speaks for itself. Join hundreds of successful businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
