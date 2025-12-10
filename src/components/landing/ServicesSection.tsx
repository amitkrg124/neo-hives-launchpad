import { motion } from "framer-motion";

const services = [
  {
    title: "Website Development",
    description: "High-performance websites designed for lead generation, credibility, and trust.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    overlayImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
  },
  {
    title: "Google Business Profile",
    description: "Rank higher in your city, get more customer calls, appear in Google Maps.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop",
    overlayImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop",
  },
  {
    title: "SEO Optimization",
    description: "Complete search visibility growth with on-page optimization and tracking.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&h=300&fit=crop",
    overlayImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop",
  },
  {
    title: "Creative Design",
    description: "Modern UI/UX designs that convert visitors into loyal customers.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    overlayImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-muted/30" id="services">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-orange-light text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight"
          >
            How Can We <span className="text-gradient">Help?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Let's turn your vision into something amazing.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card border border-border rounded-3xl p-6 flex flex-col h-[340px] transition-all duration-300 hover:bg-muted/50 hover:border-primary/20 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative flex-grow flex items-center justify-center mb-4">
                {/* Back Image */}
                <img
                  src={service.image}
                  alt={`${service.title} showcase`}
                  className="absolute w-44 h-32 object-cover rounded-xl shadow-md transform -rotate-6 transition-all duration-500 ease-out group-hover:rotate-[-12deg] group-hover:scale-105 group-hover:-translate-x-2"
                />
                {/* Front Image */}
                <img
                  src={service.overlayImage}
                  alt={`${service.title} example`}
                  className="absolute w-44 h-32 object-cover rounded-xl shadow-lg transform rotate-3 transition-all duration-500 ease-out group-hover:rotate-[8deg] group-hover:scale-105 group-hover:translate-x-2"
                />
              </div>

              {/* Service Content */}
              <div className="mt-auto">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
