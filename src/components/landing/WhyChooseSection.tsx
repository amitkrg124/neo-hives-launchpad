import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Percent, 
  Zap, 
  Palette, 
  Search, 
  Package, 
  Headphones, 
  Shield,
  Globe,
  Smartphone,
  Lock
} from "lucide-react";

// Animated typography component
function PriceAnimation() {
  const [price, setPrice] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice((prev) => (prev === 100 ? 50 : 100));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        className="text-5xl md:text-7xl font-bold text-primary"
        animate={{ scale: price === 50 ? 1.1 : 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-muted-foreground text-3xl line-through mr-2">₹{price === 50 ? 100 : 50}k</span>
        <span className="text-primary">₹{price === 50 ? 50 : 40}k</span>
      </motion.div>
    </div>
  );
}

// Speed indicator component
function SpeedIndicator() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cycle = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 500);
    };
    cycle();
    const interval = setInterval(cycle, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <div className="h-10 flex items-center justify-center overflow-hidden relative w-full">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loader"
              className="h-8 w-24 bg-primary/20 rounded"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          ) : (
            <motion.span
              key="text"
              initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              className="text-3xl md:text-4xl font-bold text-primary"
            >
              7-10 Days
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <span className="text-sm text-muted-foreground">Delivery Time</span>
      <div className="w-full max-w-[120px] h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: loading ? "30%" : "100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 15, mass: 1 }}
        />
      </div>
    </div>
  );
}

// Security shields animation
function SecurityBadge() {
  const [shields, setShields] = useState([
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShields(prev => {
        const nextIndex = prev.findIndex(s => !s.active);
        if (nextIndex === -1) {
          return prev.map(() => ({ id: Math.random(), active: false }));
        }
        return prev.map((s, i) => i === nextIndex ? { ...s, active: true } : s);
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-full gap-3">
      {shields.map((shield) => (
        <motion.div
          key={shield.id}
          className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${
            shield.active ? 'bg-primary/20' : 'bg-muted'
          }`}
          animate={{ scale: shield.active ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Lock className={`w-6 h-6 ${shield.active ? 'text-primary' : 'text-muted-foreground'}`} />
        </motion.div>
      ))}
    </div>
  );
}

// Global network animation
function GlobalNetwork() {
  const pulses = [0, 1, 2, 3, 4];

  return (
    <div className="flex items-center justify-center h-full relative">
      <Globe className="w-16 h-16 text-primary z-10" />
      {pulses.map((pulse) => (
        <motion.div
          key={pulse}
          className="absolute w-16 h-16 border-2 border-primary/30 rounded-full"
          initial={{ scale: 0.5, opacity: 1 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: pulse * 0.8,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
}

// Layout animation
function LayoutAnimation() {
  const [layout, setLayout] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLayout((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const layouts = ["grid-cols-2", "grid-cols-3", "grid-cols-1"];

  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        className={`grid ${layouts[layout]} gap-2 w-full max-w-[140px]`}
        layout
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="bg-primary/20 rounded-md h-6 w-full"
            layout
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </motion.div>
    </div>
  );
}

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-orange-light text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Why Us
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Why Choose <span className="text-gradient">Neo Hives?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We deliver exceptional value that sets us apart from traditional agencies.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[200px]">
          
          {/* 1. Affordable - Tall (2x2) */}
          <motion.div
            className="md:col-span-2 md:row-span-2 bg-card border border-border rounded-2xl p-8 flex flex-col hover:border-primary/30 transition-all duration-300 cursor-pointer overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex-1">
              <PriceAnimation />
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 rounded-xl bg-orange-light flex items-center justify-center">
                  <Percent className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">40–60% More Affordable</h3>
              </div>
              <p className="text-muted-foreground text-sm">Premium quality at a fraction of agency prices.</p>
            </div>
          </motion.div>

          {/* 2. Modern UI/UX - Standard (2x1) */}
          <motion.div
            className="md:col-span-2 bg-card border border-border rounded-2xl p-6 flex flex-col hover:border-primary/30 transition-all duration-300 cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1">
              <LayoutAnimation />
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-1">
                <Palette className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground">Modern UI/UX</h3>
              </div>
              <p className="text-muted-foreground text-sm">Beautiful, conversion-focused designs.</p>
            </div>
          </motion.div>

          {/* 3. All-in-One - Tall (2x2) */}
          <motion.div
            className="md:col-span-2 md:row-span-2 bg-card border border-border rounded-2xl p-6 flex flex-col hover:border-primary/30 transition-all duration-300 cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex-1 flex items-center justify-center">
              <GlobalNetwork />
            </div>
            <div className="mt-auto">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 rounded-xl bg-orange-light flex items-center justify-center">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">All-in-One Solution</h3>
              </div>
              <p className="text-muted-foreground text-sm">Website + Google + SEO in one complete package.</p>
            </div>
          </motion.div>

          {/* 4. Fast Delivery - Standard (2x1) */}
          <motion.div
            className="md:col-span-2 bg-card border border-border rounded-2xl p-6 flex flex-col hover:border-primary/30 transition-all duration-300 cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1">
              <SpeedIndicator />
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground">Super Fast Delivery</h3>
              </div>
              <p className="text-muted-foreground text-sm">Get your website live in just 7–10 days.</p>
            </div>
          </motion.div>

          {/* 5. SEO Ready - Wide (3x1) */}
          <motion.div
            className="md:col-span-3 bg-card border border-border rounded-2xl p-6 flex flex-col hover:border-primary/30 transition-all duration-300 cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1">
              <SecurityBadge />
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-1">
                <Search className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground">SEO & Speed Ready</h3>
              </div>
              <p className="text-muted-foreground text-sm">Optimized for Google rankings from day one.</p>
            </div>
          </motion.div>

          {/* 6. No Hidden Costs - Wide (3x1) */}
          <motion.div
            className="md:col-span-3 bg-card border border-border rounded-2xl p-6 flex flex-col hover:border-primary/30 transition-all duration-300 cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1 flex items-center justify-center gap-6">
              <div className="flex flex-col items-center">
                <Headphones className="w-12 h-12 text-primary mb-2" />
                <span className="text-xs text-muted-foreground">24/7 Support</span>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="flex flex-col items-center">
                <Shield className="w-12 h-12 text-primary mb-2" />
                <span className="text-xs text-muted-foreground">No Hidden Fees</span>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="flex flex-col items-center">
                <Smartphone className="w-12 h-12 text-primary mb-2" />
                <span className="text-xs text-muted-foreground">Mobile Ready</span>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground">Dedicated Support & Transparent Pricing</h3>
              </div>
              <p className="text-muted-foreground text-sm">Personal assistance whenever you need it. No surprise costs.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
