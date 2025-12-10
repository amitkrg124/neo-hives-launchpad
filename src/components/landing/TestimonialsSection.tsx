import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Our website is stunning and we get more customer calls daily. Neo Hives truly delivers on their promises.",
    author: "Rajesh Kumar",
    role: "Restaurant Owner",
    rating: 5,
  },
  {
    quote: "They set up our Google Business profile and we ranked in the top 3 within weeks. Amazing results!",
    author: "Priya Sharma",
    role: "Boutique Owner",
    rating: 5,
  },
  {
    quote: "Best website package at this price—super fast delivery, high-quality work. Highly recommend Neo Hives!",
    author: "Amit Patel",
    role: "Startup Founder",
    rating: 5,
  },
  {
    quote: "My traffic increased by 250% after SEO optimization. The ROI has been incredible for my business.",
    author: "Sneha Gupta",
    role: "Coach & Consultant",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gradient-navy">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="heading-section text-secondary-foreground mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Quote icon */}
          <div className="absolute -top-6 left-8 md:left-12">
            <Quote className="w-16 h-16 text-primary/30" />
          </div>

          {/* Testimonial card */}
          <div className="bg-secondary-foreground/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-secondary-foreground/10 relative overflow-hidden">
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-primary fill-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl md:text-2xl text-secondary-foreground text-center font-medium leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </p>

              {/* Author */}
              <div className="text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-orange flex items-center justify-center mb-3">
                  <span className="text-primary-foreground font-bold text-xl">
                    {testimonials[currentIndex].author.charAt(0)}
                  </span>
                </div>
                <p className="text-secondary-foreground font-bold">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-secondary-foreground/60 text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-secondary-foreground/10 hover:bg-primary/20 transition-colors flex items-center justify-center text-secondary-foreground"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-secondary-foreground/30 hover:bg-secondary-foreground/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-secondary-foreground/10 hover:bg-primary/20 transition-colors flex items-center justify-center text-secondary-foreground"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
