"use client";
import AnimatedText from "@/components/AnimatedText";
import clsx from "clsx";
import { motion } from "framer-motion";
import SingleScreenshot from "./SingleScreenshot";
import { howItWorks } from "@/constants";
import HeadingUnderline from "./HeadingUnderline";

function HowItWorks() {
  if (!howItWorks) return null;

  return (
    <section
      id="how-it-works"
      className="relative py-24 px-4 bg-transparent"
    >
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-mikado-yellow/10 to-transparent" />
        </div>

        {/* Glass morphism base */}
        <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl" />

        {/* Animated grid pattern */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffd60a\' fill-opacity=\'0.3\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-[length:60px_60px]"
        />
      </div>

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => {
          const colors = ["from-gold/30", "from-mikado-yellow/30", "from-yale-blue/30"];
          return (
            <motion.div
              key={i}
              className={`absolute w-32 h-32 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${
                colors[i % 3]
              } to-transparent`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2,
              }}
            />
          );
        })}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-muted leading-tight">
                <AnimatedText text={howItWorks.title} />
              </h2>
            </div>

            <HeadingUnderline styles={"mx-auto max-w-[220px]"} />

            {howItWorks.subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg text-muted/80 max-w-2xl mx-auto leading-relaxed"
              >
                {howItWorks.subtitle}
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Enhanced Steps */}
        <div className="relative">
          {/* Desktop vertical connecting line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/80 via-mikado-yellow to-transparent shadow-lg shadow-gold/50 z-20" />

          {/* Mobile dashed connecting line */}
          <div className="block lg:hidden absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 border-l-2 border-dashed border-mikado-yellow/50 z-10" />

          <div className="space-y-16 lg:space-y-24 relative z-30">
            {howItWorks.steps.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative"
              >
                <div
                  className={clsx("flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20", {
                    "lg:flex-row-reverse": index % 2 === 1,
                  })}
                >
                  {/* Enhanced Content Side */}
                  <motion.div
                    variants={{
                      hidden: {
                        x: index % 2 === 0 ? -50 : 50,
                        opacity: 0,
                      },
                      visible: {
                        x: 0,
                        opacity: 1,
                      },
                    }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex-1 text-center lg:text-left"
                  >
                    {/* Glassmorphism container */}
                    <div className="relative">
                      {/* Gold glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-mikado-yellow/20 rounded-3xl blur-xl scale-110 opacity-40" />

                      {/* Main glass container */}
                      <div className="relative bg-white/[0.05] backdrop-blur-xl rounded-3xl border border-gold/20 p-8 lg:p-10 shadow-2xl shadow-rich-black/50">
                        {/* Multiple glass layers */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent rounded-3xl" />
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gold/5 rounded-3xl" />

                        {/* Content */}
                        <div className="relative z-10">
                          {/* Enhanced Step Number */}
                          <div className="flex items-center justify-center lg:justify-start mb-6">
                            <div className="relative">
                              {/* Gold glow behind number */}
                              <div className="absolute inset-0 bg-gradient-to-br from-gold to-mikado-yellow rounded-full blur-lg scale-110 opacity-60" />

                              {/* Number container */}
                              <div className="relative w-16 h-16 bg-gradient-to-br from-gold to-mikado-yellow rounded-full flex items-center justify-center shadow-2xl shadow-gold/50 border border-white/20">
                                <span className="text-xl font-bold text-rich-black">{index + 1}</span>
                              </div>

                              {/* Animated ring */}
                              <motion.div
                                className="absolute inset-0 border-2 border-gold/80 rounded-full"
                                animate={{
                                  scale: [1, 1.2, 1],
                                  opacity: [0.5, 0.2, 0.5],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              />
                            </div>
                          </div>

                          <h3 className="text-2xl lg:text-3xl font-bold text-muted mb-4">{step.title}</h3>

                          <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-mikado-yellow to-gold mx-auto lg:mx-0 mb-4 rounded-full shadow-lg shadow-gold/50" />

                          <p className="text-base lg:text-lg text-muted/80 leading-relaxed max-w-md mx-auto lg:mx-0">
                            {step.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Enhanced iPhone Mockup Side */}
                  <motion.div
                    variants={{
                      hidden: {
                        x: index % 2 === 0 ? 50 : -50,
                        opacity: 0,
                        scale: 0.95,
                      },
                      visible: {
                        x: 0,
                        opacity: 1,
                        scale: 1,
                      },
                    }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                    className="flex-1"
                  >
                    <div className="relative group max-w-xs mx-auto">
                      <div className="relative h-80 lg:h-96 w-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        {/* Gold glow layers — centered around the phone */}
                        <div className="absolute inset-0 rounded-[3rem] blur-2xl scale-110 opacity-40 bg-gradient-to-br from-gold/40 to-mikado-yellow/30 group-hover:opacity-60 transition-opacity duration-500" />
                        <div className="absolute inset-0 rounded-[3rem] blur-3xl scale-125 opacity-20 bg-gradient-to-br from-gold/30 to-mikado-yellow/20 group-hover:scale-130 transition-all duration-700" />

                        {/* Frame + Screenshot wrapper (centered together) */}
                        <div className="relative h-full flex items-center justify-center">
                          {/* Screenshot container — offsets preserved inside the frame */}
                          <div className="absolute left-[7px] top-[1.5px] w-[91.5%] h-full rounded-2xl lg:rounded-3xl overflow-hidden z-0">
                            {/* Gold glow behind screenshot */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-mikado-yellow/30 blur-sm scale-110 opacity-60" />

                            {/* Screenshot */}
                            <SingleScreenshot src={step.image} />

                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-rich-black/10 via-transparent to-gold/5 pointer-events-none" />
                          </div>

                          {/* iPhone frame (sits perfectly above screenshot) */}
                          <img
                            src="/misc/iphone-frame.webp"
                            alt="iphone-frame"
                            className="relative z-10 h-[102%] lg:h-[103%] w-auto pointer-events-none drop-shadow-2xl"
                          />
                        </div>

                        {/* Floating gold particles */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          {[...Array(4)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1.5 h-1.5 bg-gold/80 rounded-full"
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
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: "easeInOut",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced Desktop connecting line node */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-8">
                  <div className="relative">
                    {/* Gold glow */}
                    <div className="absolute inset-0 w-6 h-6 bg-gold rounded-full blur-md scale-150 opacity-60" />
                    {/* Node */}
                    <div className="relative w-4 h-4 bg-gradient-to-br from-gold to-mikado-yellow rounded-full shadow-xl shadow-gold/50 border-4 border-muted/20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
