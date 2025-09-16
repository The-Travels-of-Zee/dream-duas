"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    goal: "Lost 30lbs in 6 months",
    quote: "The accountability from my followers kept me motivated every single day!",
  },
  {
    name: "Marcus T.",
    goal: "Learned guitar in 90 days",
    quote: "Sharing my daily practice made the journey so much more rewarding.",
  },
  {
    name: "Lisa K.",
    goal: "Started my business in 1 year",
    quote: "The community support was incredible. Best decision I ever made!",
  },
];

const Testimonials = () => (
  <section className="py-16 sm:py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-rich-black mb-4 sm:mb-6">Real People, Real Results</h2>
        <p className="text-lg sm:text-xl text-rich-black/70 max-w-2xl mx-auto">
          See how our community is achieving incredible goals
        </p>
      </motion.div>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} delay={index * 0.2} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

const TestimonialCard = ({ name, goal, quote, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    whileHover={{ rotateX: 2, rotateY: -2 }}
    className="p-6 sm:p-8 rounded-xl border border-gold/20 shadow-md 
               bg-white transition-transform duration-500"
  >
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-gold fill-gold" />
      ))}
    </div>
    <p className="text-rich-black/80 mb-4 italic text-sm sm:text-base">&quot;{quote}&quot;</p>
    <div>
      <p className="font-bold text-rich-black text-sm sm:text-base">{name}</p>
      <p className="text-gold font-semibold text-sm sm:text-base">{goal}</p>
    </div>
  </motion.div>
);
