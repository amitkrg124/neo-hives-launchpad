import { Rocket, Target, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block bg-orange-light text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="heading-section text-foreground mb-6">
              Meet the Team Behind{" "}
              <span className="text-gradient">Neo Hives</span>
            </h2>

            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                "I'm Amit, founder of Neo Hives IT Solutions. We help small businesses 
                achieve big results online with websites, SEO, and Google optimization."
              </p>
              <p className="text-lg leading-relaxed">
                Our clients see real growth—more calls, more visitors, more conversions. 
                We believe every business deserves a powerful online presence, regardless of size or budget.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 rounded-xl bg-card border border-border">
                <Rocket className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card border border-border">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card border border-border">
                <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Dedication</div>
              </div>
            </div>
          </div>

          {/* Founder Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-orange rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-card rounded-3xl p-8 shadow-large border border-border overflow-hidden">
              {/* Placeholder for founder image */}
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-navy flex items-center justify-center mb-6">
                <span className="text-5xl font-bold text-secondary-foreground">A</span>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-1">Amit</h3>
                <p className="text-primary font-medium mb-4">Founder & Lead Developer</p>
                <p className="text-muted-foreground">
                  Passionate about helping businesses succeed online through innovative 
                  web solutions and digital marketing strategies.
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-secondary/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
