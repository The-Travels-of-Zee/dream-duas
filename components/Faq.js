"use client";

import AnimatedText from "@/components/AnimatedText";
import NeonHexagon from "@/public/svg/neonHexagon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import Link from "next/link";
import { faq } from "@/constants";
import { useState } from "react";
import { HelpCircle, MessageCircle, Sparkles, Zap, ChevronDown, ArrowRight, Star } from "lucide-react";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);
  if (!faq) return null;

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      {/* Advanced Background System */}
      <div className="absolute inset-0">
        {/* Animated mesh gradients */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-mikado-yellow/5 to-transparent"
          animate={{
            x: ["-100%", "100%", "-100%"],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Glass morphism base */}
        <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl" />

        {/* Dynamic grid pattern */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        {[...Array(12)].map((_, i) => {
          const Icon = [HelpCircle, Star, Sparkles, Zap][i % 4];
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 60 - 30, 0],
                rotate: [0, Math.random() * 360, 0],
                scale: [0.8, 1.2, 0.8],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            >
              <Icon className="w-4 h-4 text-mikado-yellow/20" />
            </motion.div>
          );
        })}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left Side - Enhanced Title and Graphic */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Premium Glass Card */}
            <div className="relative group">
              {/* Card glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-mikado-yellow/20 to-gold/20 rounded-3xl blur-2xl scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Glass layers */}
              <div className="relative bg-white/[0.08] backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] via-white/[0.05] to-transparent" />

                {/* Animated mesh */}
                <motion.div
                  className="absolute inset-0 opacity-30"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-8-6-14-14-14s-14 6-14 14 6 14 14 14 14-6 14-14z'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />

                <div className="relative z-10 p-8 md:p-12">
                  {/* Enhanced Hexagon Container */}
                  <div className="relative mb-12 flex justify-center">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                      }}
                      className="relative"
                    >
                      {/* Multi-layer glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-mikado-yellow/40 via-gold/40 to-mikado-yellow/40 rounded-full blur-3xl scale-150" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-mikado-yellow/30 rounded-full blur-2xl scale-125" />

                      {/* Floating particles around hexagon */}
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-mikado-yellow/60 rounded-full"
                          style={{
                            left: `${50 + Math.cos((i * 45 * Math.PI) / 180) * 80}px`,
                            top: `${50 + Math.sin((i * 45 * Math.PI) / 180) * 80}px`,
                          }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 0.8, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut",
                          }}
                        />
                      ))}

                      <div className="relative z-10">
                        <NeonHexagon />
                      </div>
                    </motion.div>
                  </div>

                  {/* Enhanced Title */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-center lg:text-left"
                  >
                    <h3 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-mikado-yellow via-gold to-mikado-yellow bg-clip-text text-transparent leading-tight mb-8">
                      <AnimatedText text={faq.title} initial={{ y: "0%" }} />
                    </h3>

                    <motion.p
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="text-gray-300 text-xl leading-relaxed"
                    >
                      Find answers to the most commonly asked questions about our revolutionary platform.
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="mt-8 grid grid-cols-2 gap-4"
                    >
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                        <div className="text-2xl font-bold text-mikado-yellow">50+</div>
                        <div className="text-gray-400 text-sm">Questions Answered</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                        <div className="text-2xl font-bold text-mikado-yellow">24/7</div>
                        <div className="text-gray-400 text-sm">Support Available</div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Premium FAQ Accordion */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-6"
          >
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-4"
              onValueChange={(value) => {
                const index = value ? parseInt(value.split("-")[1]) : null;
                setActiveIndex(index);
              }}
            >
              {faq.qa.map((qa, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.6, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group relative"
                >
                  {/* Question glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-mikado-yellow/20 to-gold/20 rounded-3xl blur-xl scale-105 opacity-0 transition-opacity duration-500 ${
                      activeIndex === index ? "opacity-100" : "group-hover:opacity-60"
                    }`}
                  />

                  <AccordionItem
                    value={`item-${index}`}
                    className="relative bg-white/[0.08] backdrop-blur-2xl rounded-3xl border border-white/20 overflow-hidden shadow-xl group-hover:border-white/30 transition-all duration-300"
                  >
                    {/* Glass layers */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-white/[0.04] to-transparent" />

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                    <AccordionTrigger className="relative z-10 px-8 py-8 hover:no-underline transition-all duration-300">
                      <div className="flex items-center gap-6 w-full">
                        {/* Enhanced Question Number */}
                        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="flex-shrink-0 relative">
                          {/* Number glow */}
                          <div className="absolute inset-0 bg-gradient-to-r from-mikado-yellow to-gold rounded-full blur-lg scale-110" />

                          <div className="relative w-12 h-12 bg-gradient-to-r from-mikado-yellow to-gold rounded-full flex items-center justify-center text-rich-black text-lg font-black shadow-lg">
                            {index + 1}
                          </div>
                        </motion.div>

                        {/* Question text */}
                        <span className="text-xl font-bold text-white text-left flex-1 group-hover:text-mikado-yellow transition-colors duration-300">
                          {qa.question}
                        </span>

                        {/* Enhanced chevron */}
                        <motion.div
                          animate={{ rotate: activeIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="text-mikado-yellow"
                        >
                          <ChevronDown className="w-6 h-6" />
                        </motion.div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="relative z-10 px-8 pb-8">
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-18"
                      >
                        <div className="bg-white/[0.05] backdrop-blur-sm rounded-2xl p-6 border-l-4 border-mikado-yellow/50 relative overflow-hidden">
                          {/* Answer background effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-mikado-yellow/5 to-gold/5" />

                          <p className="relative text-gray-300 text-lg leading-relaxed">{qa.answer}</p>
                        </div>
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            {/* Enhanced Call-to-action */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 100 }}
              className="relative group mt-12"
            >
              {/* CTA glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-mikado-yellow/30 to-gold/30 rounded-3xl blur-2xl scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-white/[0.08] backdrop-blur-2xl rounded-3xl border border-white/20 p-8 overflow-hidden">
                {/* Glass layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-white/[0.04] to-transparent" />

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-mikado-yellow/40 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                <div className="relative text-center">
                  <motion.div whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-3 mb-6">
                    <MessageCircle className="w-8 h-8 text-mikado-yellow" />
                    <h4 className="text-2xl font-bold text-white">Still have questions?</h4>
                  </motion.div>

                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    We&apos;re here to help! Get in touch with our support team for personalized assistance.
                  </p>

                  <Link href="#contact-us">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative group/btn overflow-hidden"
                    >
                      {/* Button glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-mikado-yellow to-gold rounded-2xl blur-lg scale-105 opacity-70" />

                      {/* Button */}
                      <div className="relative bg-gradient-to-r from-mikado-yellow to-gold text-rich-black px-8 py-4 font-bold text-lg shadow-xl flex items-center gap-3">
                        {/* Shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />

                        <span className="relative">Contact Support</span>
                        <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Faq;
