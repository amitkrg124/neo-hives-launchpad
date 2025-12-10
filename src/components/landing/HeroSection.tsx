import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";
import { renderCanvas, TypeWriter, ShineBorder } from "@/components/ui/hero-canvas";
import logoLight from "@/assets/logo-light.png";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    "Website Development",
    "Google Business Setup",
    "SEO Optimization",
    "UI/UX Design",
    "Digital Marketing",
  ];

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 max-md:hidden top-[200px] -z-10 h-[500px] w-full bg-transparent bg-[linear-gradient(to_right,hsl(var(--muted-foreground)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground)/0.1)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Navigation */}
      <nav className="container-custom py-4 flex items-center justify-between relative z-10">
        <img src={logoLight} alt="Neo Hives" className="h-10 md:h-12" />
        <Button variant="glow" size="sm" onClick={scrollToForm}>
          Get Started
        </Button>
      </nav>

      {/* Hero Content */}
      <div className="container-custom pt-8 pb-20 md:pt-12 md:pb-32 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Badge */}
          <div className="mb-6 mt-6 md:mt-16">
            <div className="relative flex items-center rounded-full border border-border bg-card/50 backdrop-blur-sm px-4 py-2 text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Limited Time Offer — Website @ ₹15,000
              <button
                onClick={scrollToForm}
                className="ml-2 font-semibold text-primary hover:underline"
              >
                Claim Now →
              </button>
            </div>
          </div>

          {/* Main Heading Box */}
          <div className="mx-auto max-w-5xl">
            <div className="relative mx-auto bg-card/30 backdrop-blur-sm border border-border rounded-2xl py-12 px-6 md:px-12 [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)]">
              <Plus
                strokeWidth={3}
                className="text-primary absolute -left-3 -top-3 h-6 w-6 md:h-8 md:w-8"
              />
              <Plus
                strokeWidth={3}
                className="text-primary absolute -bottom-3 -left-3 h-6 w-6 md:h-8 md:w-8"
              />
              <Plus
                strokeWidth={3}
                className="text-primary absolute -right-3 -top-3 h-6 w-6 md:h-8 md:w-8"
              />
              <Plus
                strokeWidth={3}
                className="text-primary absolute -bottom-3 -right-3 h-6 w-6 md:h-8 md:w-8"
              />

              <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                <span className="text-foreground">Grow Your Business With </span>
                <span className="text-gradient">High-Converting Websites</span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We help small businesses and startups increase their leads, visibility, and revenue with{" "}
              <span className="text-primary font-semibold">
                <TypeWriter strings={services} />
              </span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <ShineBorder
                borderWidth={2}
                className="border cursor-pointer h-auto w-auto p-1.5 bg-background/5 backdrop-blur-md"
                color={["#FF5200", "#FF7A00", "#FFB800"]}
              >
                <Button variant="hero" onClick={scrollToForm} className="w-full">
                  Get Your Website @ Just ₹15,000
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </ShineBorder>
              <Button variant="hero-outline" size="xl" onClick={scrollToPortfolio}>
                See Our Portfolio (80+ Projects)
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-orange border-2 border-background flex items-center justify-center text-xs text-primary-foreground font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">80+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-primary fill-primary" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm text-muted-foreground ml-1">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Canvas for mouse trail effect */}
      <canvas
        className="pointer-events-none absolute inset-0 mx-auto"
        id="canvas"
      ></canvas>

      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
