import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";

const testimonials = [
  {
    text: "Our website is stunning and we get more customer calls daily. Neo Hives truly delivers on their promises.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Rajesh Kumar",
    role: "Restaurant Owner",
  },
  {
    text: "They set up our Google Business profile and we ranked in the top 3 within weeks. Amazing results!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Priya Sharma",
    role: "Boutique Owner",
  },
  {
    text: "Best website package at this price—super fast delivery, high-quality work. Highly recommend Neo Hives!",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Amit Patel",
    role: "Startup Founder",
  },
  {
    text: "My traffic increased by 250% after SEO optimization. The ROI has been incredible for my business.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Sneha Gupta",
    role: "Coach & Consultant",
  },
  {
    text: "Professional team, quick turnaround, and they understand small business needs perfectly.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Vikram Singh",
    role: "Fitness Studio Owner",
  },
  {
    text: "From design to deployment, everything was handled smoothly. Our online presence has transformed!",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Anita Desai",
    role: "Interior Designer",
  },
  {
    text: "The website they built for us generates 40+ leads every month. Worth every rupee!",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Suresh Reddy",
    role: "Real Estate Agent",
  },
  {
    text: "Exceptional service! They even helped us set up online payments and booking system.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Meera Joshi",
    role: "Salon Owner",
  },
  {
    text: "Our e-commerce site loads super fast and customers love the experience. Sales up by 180%!",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Karan Malhotra",
    role: "E-commerce Entrepreneur",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-10"
        >
          <div className="flex justify-center">
            <span className="inline-block bg-orange-light text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
              Testimonials
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-5 text-center text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-center mt-4 text-muted-foreground">
            See what our customers have to say about working with us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
