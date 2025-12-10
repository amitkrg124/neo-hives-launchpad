import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const websiteTypes = [
  "Business Website",
  "E-commerce Store",
  "Portfolio Website",
  "Restaurant/Food",
  "Service Business",
  "Landing Page",
  "Other",
];

const budgetRanges = [
  "₹10,000 - ₹15,000",
  "₹15,000 - ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000+",
];

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    city: "",
    websiteType: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Thank you!",
      description: "We'll contact you within 24 hours to discuss your project.",
    });
  };

  if (isSubmitted) {
    return (
      <section className="section-padding bg-gradient-navy" id="contact-form">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="heading-section text-secondary-foreground mb-4">
              Thank You!
            </h2>
            <p className="text-secondary-foreground/70 text-lg">
              We've received your request and will contact you within 24 hours 
              to discuss your project and the ₹15,000 offer.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gradient-navy" id="contact-form">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left content */}
          <div className="text-secondary-foreground">
            <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Get Started
            </span>
            <h2 className="heading-section mb-4">
              Start Your Website Today
            </h2>
            <p className="text-secondary-foreground/70 text-lg mb-8">
              Get the Limited ₹15,000 Offer — No upfront payment required. 
              Free consultation included.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-8">
              <a href="tel:8076458459" className="flex items-center gap-4 p-4 rounded-xl bg-secondary-foreground/5 hover:bg-secondary-foreground/10 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-secondary-foreground/60">Call us</p>
                  <p className="font-semibold">8076458459</p>
                </div>
              </a>
              <a href="mailto:hello@neohives.com" className="flex items-center gap-4 p-4 rounded-xl bg-secondary-foreground/5 hover:bg-secondary-foreground/10 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-secondary-foreground/60">Email us</p>
                  <p className="font-semibold">hello@neohives.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary-foreground/5">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-secondary-foreground/60">Website</p>
                  <p className="font-semibold">www.neohives.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-3xl p-8 shadow-large">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Your Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Business Name *
                  </label>
                  <Input
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Your Business"
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone Number *
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email Address *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  City *
                </label>
                <Input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Your City"
                  required
                  className="h-12"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Type of Website *
                  </label>
                  <select
                    name="websiteType"
                    value={formData.websiteType}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select type</option>
                    {websiteTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Budget Range *
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select budget</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message (Optional)
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={3}
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Start My Project"}
                <ArrowRight className="w-5 h-5" />
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                No upfront payment required • Free consultation included
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
