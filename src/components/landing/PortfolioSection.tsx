import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

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
  { image: jdInteriorImg, url: "jd-interior.vercel.app", name: "JD Interior", industry: "Interior Design", type: "Portfolio" },
  { image: krishnaFlowersImg, url: "krishna-flowers.vercel.app", name: "Krishna Flowers", industry: "Retail", type: "E-commerce" },
  { image: rollingBitesImg, url: "rolling-bites.vercel.app", name: "Rolling Bites", industry: "Food", type: "Restaurant" },
  { image: sanehLibraryImg, url: "sanehlibrary.com", name: "Saneh Library", industry: "Education", type: "Library Portal" },
  { image: sugarpopImg, url: "sugarpop.vercel.app", name: "SugarPop", industry: "Food & Beverage", type: "Brand Website" },
  { image: supriyaTravelsImg, url: "supriya-travels.vercel.app", name: "Supriya Travels", industry: "Travel", type: "Booking" },
  { image: nexellenceImg, url: "nexellencesolution.com", name: "Nexellence", industry: "IT Solutions", type: "Corporate" },
  { image: pretecktImg, url: "preteckt.com", name: "Preteckt", industry: "Automotive", type: "Tech Platform" },
  { image: nexellenceImg, url: "digital-nirvana.com", name: "Digital Nirvana", industry: "Marketing", type: "Agency" },
  { image: pretecktImg, url: "telematica.com.au", name: "Telematica", industry: "Technology", type: "Corporate" },
];

const PortfolioSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-8 md:section-padding bg-background" id="portfolio">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <span className="inline-block bg-orange-light text-accent-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
            Our Work
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Featured <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto">
            Explore our recent projects for 40+ clients
          </p>
        </motion.div>

        {/* Mobile scrollable carousel */}
        <div className="md:hidden relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {portfolioItems.map((item, index) => (
              <motion.a
                key={index}
                href={`https://${item.url}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[75vw] snap-center bg-card rounded-xl overflow-hidden shadow-soft border border-border active:scale-95 transition-transform"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-base text-foreground mb-2">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs">
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
          
          {/* Scroll indicators */}
          <div className="flex justify-center gap-2 mt-4">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-muted hover:bg-accent transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-muted hover:bg-accent transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
          
          {/* Swipe hint */}
          <p className="text-center text-xs text-muted-foreground mt-2">
            ← Swipe to explore →
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-8">
                  <div className="text-center text-secondary-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                    <span className="font-semibold">Visit Website</span>
                  </div>
                </div>
              </div>
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
          className="text-center mt-8 md:mt-12"
        >
          <Button variant="outline" size="lg" className="text-sm md:text-base">
            View Full Portfolio
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
