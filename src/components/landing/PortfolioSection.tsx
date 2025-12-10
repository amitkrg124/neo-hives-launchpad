import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const portfolioItems = [
  { url: "supriya-travels.vercel.app", name: "Supriya Travels", industry: "Travel", type: "Booking Website" },
  { url: "connct.ai", name: "Connct AI", industry: "Technology", type: "SaaS Platform" },
  { url: "taxhardshipcenter.com", name: "Tax Hardship Center", industry: "Finance", type: "Service Website" },
  { url: "telematica.com.au", name: "Telematica", industry: "Telecom", type: "Corporate Website" },
  { url: "preteckt.com", name: "Preteckt", industry: "Automotive", type: "Tech Platform" },
  { url: "pipelinevelocity.com", name: "Pipeline Velocity", industry: "Sales", type: "Business Website" },
  { url: "sanehlibrary.com", name: "Saneh Library", industry: "Education", type: "Library Portal" },
  { url: "rolling-bites.vercel.app", name: "Rolling Bites", industry: "Food", type: "Restaurant Website" },
  { url: "nexellencesolution.com", name: "Nexellence", industry: "IT Solutions", type: "Corporate Website" },
  { url: "digital-nirvana.com", name: "Digital Nirvana", industry: "Media", type: "Tech Platform" },
  { url: "krishna-flowers.vercel.app", name: "Krishna Flowers", industry: "Retail", type: "E-commerce" },
  { url: "aniket-graphics.vercel.app", name: "Aniket Graphics", industry: "Design", type: "Portfolio" },
];

const PortfolioSection = () => {
  return (
    <section className="section-padding bg-background" id="portfolio">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-light text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Work
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Featured <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore some of our recent projects and see the results we deliver.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <a
              key={index}
              href={`https://${item.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card rounded-xl overflow-hidden shadow-soft border border-border hover:shadow-large hover:border-primary/30 transition-all duration-300"
            >
              {/* Website preview placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                <div className="absolute inset-4 rounded-lg border border-border/50 bg-background flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-orange flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-lg">
                        {item.name.charAt(0)}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground font-medium truncate">
                      {item.url}
                    </p>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-secondary/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center text-secondary-foreground">
                    <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                    <span className="font-medium">Visit Website</span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">{item.industry}</span>
                  <span className="text-muted-foreground/50">•</span>
                  <span className="text-primary font-medium">{item.type}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View Full Portfolio
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
