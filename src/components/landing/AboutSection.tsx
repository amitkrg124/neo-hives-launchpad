import { Rocket, Target, Users } from "lucide-react";
import amitProfile from "@/assets/amit-profile.png";

const AboutSection = () => {
  return (
    <section className="py-8 md:section-padding bg-muted/30">
      <div className="container-custom px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block bg-orange-light text-accent-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
              About Us
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Meet the Team Behind{" "}
              <span className="text-gradient">Neo Hives</span>
            </h2>

            <div className="space-y-4 md:space-y-6 text-muted-foreground">
              <p className="text-base md:text-lg leading-relaxed">
                "I'm Amit, founder of Neo Hives IT Solutions. We help small businesses 
                achieve big results online with websites, SEO, and Google optimization."
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Our clients see real growth—more calls, more visitors, more conversions. 
                We believe every business deserves a powerful online presence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-6 mt-6 md:mt-8">
              <div className="text-center p-3 md:p-4 rounded-xl bg-card border border-border">
                <Rocket className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-1 md:mb-2" />
                <div className="text-xl md:text-2xl font-bold text-foreground">5+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Years Exp.</div>
              </div>
              <div className="text-center p-3 md:p-4 rounded-xl bg-card border border-border">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-1 md:mb-2" />
                <div className="text-xl md:text-2xl font-bold text-foreground">35+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Clients</div>
              </div>
              <div className="text-center p-3 md:p-4 rounded-xl bg-card border border-border">
                <Target className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-1 md:mb-2" />
                <div className="text-xl md:text-2xl font-bold text-foreground">100%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Dedication</div>
              </div>
            </div>
          </div>

          {/* Founder Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-orange rounded-2xl md:rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-large border border-border overflow-hidden">
              {/* Founder image */}
              <div className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden mb-4 md:mb-6 ring-4 ring-primary/20">
                <img 
                  src={amitProfile} 
                  alt="Amit - Founder of Neo Hives" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">Amit</h3>
                <p className="text-primary font-medium mb-3 md:mb-4 text-sm md:text-base">Founder & Lead Developer</p>
                <p className="text-muted-foreground text-sm md:text-base">
                  Passionate about helping businesses succeed online through innovative 
                  web solutions and digital marketing strategies.
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 md:w-16 md:h-16 bg-secondary/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
