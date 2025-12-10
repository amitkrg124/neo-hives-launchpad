import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

// Import portfolio images
import connectaiImg from "@/assets/portfolio/connectai.png";
import flexcareImg from "@/assets/portfolio/flexcare.png";
import jdInteriorImg from "@/assets/portfolio/jd-interior.png";
import krishnaFlowersImg from "@/assets/portfolio/krishna-flowers.png";
import rollingBitesImg from "@/assets/portfolio/rolling-bites.png";
import sanehLibraryImg from "@/assets/portfolio/saneh-library.png";
import sugarpopImg from "@/assets/portfolio/sugarpop.png";
import supriyaTravelsImg from "@/assets/portfolio/supriya-travels.png";
import nexellenceImg from "@/assets/portfolio/nexellence.png";
import pretecktImg from "@/assets/portfolio/preteckt.png";

const portfolioItems = [
  { image: connectaiImg, url: "connct.ai", name: "Connct AI", industry: "Technology", type: "SaaS Platform" },
  { image: flexcareImg, url: "flexcare.vercel.app", name: "FlexCare", industry: "Healthcare", type: "Medical Website" },
  { image: jdInteriorImg, url: "jd-interior.vercel.app", name: "JD Interior", industry: "Interior Design", type: "Portfolio Website" },
  { image: krishnaFlowersImg, url: "krishna-flowers.vercel.app", name: "Krishna Flowers", industry: "Retail", type: "E-commerce" },
  { image: rollingBitesImg, url: "rolling-bites.vercel.app", name: "Rolling Bites", industry: "Food", type: "Restaurant Website" },
  { image: sanehLibraryImg, url: "sanehlibrary.com", name: "Saneh Library", industry: "Education", type: "Library Portal" },
  { image: sugarpopImg, url: "sugarpop.vercel.app", name: "SugarPop", industry: "Food & Beverage", type: "Brand Website" },
  { image: supriyaTravelsImg, url: "supriya-travels.vercel.app", name: "Supriya Travels", industry: "Travel", type: "Booking Website" },
  { image: nexellenceImg, url: "nexellencesolution.com", name: "Nexellence Solutions", industry: "IT Solutions", type: "Corporate Website" },
  { image: pretecktImg, url: "preteckt.com", name: "Preteckt", industry: "Automotive", type: "Tech Platform" },
];

const PortfolioSection = () => {
  return (
    <section className="section-padding bg-background" id="portfolio">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-orange-light text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Work
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Featured <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore some of our recent projects and see the results we deliver for our 80+ clients.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.a
              key={index}
              href={`https://${item.url}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-large hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Website preview */}
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-8">
                  <div className="text-center text-secondary-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                    <span className="font-semibold">Visit Website</span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <div className="flex items-center gap-2 text-sm">
                  <span className="px-2 py-1 rounded-md bg-muted text-muted-foreground">
                    {item.industry}
                  </span>
                  <span className="px-2 py-1 rounded-md bg-primary/10 text-primary font-medium">
                    {item.type}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            View Full Portfolio
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
