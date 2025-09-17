"use client";
import { motion } from "framer-motion";
import { Target, Clock, Share2, CheckCircle, Star, Trophy } from "lucide-react";
import SingleScreenshot from "./SingleScreenshot";

const HeroSection = () => {
  return (
    <section className="pt-8 relative min-h-screen flex flex-col lg:flex-row items-stretch overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-mikado-yellow/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gold/30 rounded-full blur-lg"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/20 rounded-full blur-md"
        />
      </div>

      {/* Left Side - Enhanced with glassmorphism */}
      <div className="w-full lg:min-h-screen lg:w-1/2 bg-gradient-to-br from-rich-black via-gray-900 to-rich-black text-gold p-6 sm:p-8 lg:p-12 flex flex-col justify-center relative z-10">
        {/* Glass morphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-0 text-left relative z-20"
        >
          <motion.h2
            className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-mikado-yellow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            I WILL
          </motion.h2>

          <motion.h1
            className="text-3xl sm:text-4xl text-gray-100 lg:text-5xl font-extrabold mb-6 sm:mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Share Your
            <br />
            <span className="bg-gradient-to-r from-mikado-yellow to-gold bg-clip-text text-transparent">Journey</span>
          </motion.h1>

          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {[
              { icon: Target, text: "Set ambitious goals" },
              { icon: Clock, text: "Commit to a timeline" },
              { icon: Share2, text: "Share with the world" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="relative group"
              >
                {/* Multi-layer glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/30 to-mikado-yellow/30 rounded-2xl blur-xl scale-105 animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-mikado-yellow/20 to-gold/20 rounded-2xl blur-2xl scale-110" />
                </div>

                {/* Enhanced glass card with visible shimmer */}
                <div className="relative z-10 rounded-2xl overflow-hidden">
                  {/* Glass layers (under everything) */}
                  <div className="absolute inset-0 z-0 bg-white/[0.08] backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl" />
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/[0.12] via-transparent to-white/[0.04] rounded-2xl" />

                  {/* Shimmer (above glass layers, below content) */}
                  <div className="absolute inset-0 z-10 overflow-hidden rounded-2xl">
                    <div className="absolute left-[-50%] top-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out" />
                  </div>

                  {/* Content (on top) */}
                  <div className="relative z-20 px-6 py-4 min-h-[56px] flex items-center space-x-3">
                    <item.icon className="w-5 h-5 text-mikado-yellow transition-colors duration-300 group-hover:text-white" />
                    <span className="text-white text-base sm:text-lg font-medium transition-colors duration-300 group-hover:text-mikado-yellow">
                      {item.text}
                    </span>
                  </div>

                  {/* subtle inner glow on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-mikado-yellow/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-gray-100 text-base sm:text-lg font-light opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.8 }}
          >
            &quot;I will achieve my fitness transformation in 6 months&quot;
          </motion.p>
        </motion.div>
      </div>

      {/* Right Side - Enhanced with glassmorphism */}
      <div className="w-full lg:min-h-screen lg:w-1/2 bg-gradient-to-br from-mikado-yellow via-gold to-yellow-400 text-rich-black p-6 sm:p-8 lg:p-12 flex flex-col justify-center relative z-10">
        {/* Glass morphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-white/30 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md mx-0 text-left lg:ml-auto lg:text-right relative z-20"
        >
          <motion.h2
            className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-rich-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I DID IT!
          </motion.h2>

          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 sm:mb-8 leading-tight text-rich-black"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Share Your
            <br />
            <span className="text-white drop-shadow-lg">Achievement</span>
          </motion.h1>

          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {[
              { icon: CheckCircle, text: "Goal Completion" },
              { icon: Star, text: "Celebrate with Community" },
              { icon: Trophy, text: "Inspire Others" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="relative group"
              >
                {/* Multi-layer glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/30 to-mikado-yellow/30 rounded-2xl blur-xl scale-105 animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-mikado-yellow/20 to-gold/20 rounded-2xl blur-2xl scale-110" />
                </div>

                {/* Enhanced glass card with visible shimmer and consistent padding */}
                <div className="relative z-10 rounded-2xl overflow-hidden">
                  {/* Glass layers */}
                  <div className="absolute inset-0 z-0 bg-white/[0.08] backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl" />
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/[0.12] via-transparent to-white/[0.04] rounded-2xl" />

                  {/* Shimmer (above glass layers, below content) */}
                  <div className="absolute inset-0 z-10 overflow-hidden rounded-2xl">
                    <div className="absolute left-[-50%] top-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out" />
                  </div>

                  {/* Content (on top) — fixed padding/spacing (matches left) */}
                  <div className="relative z-20 px-6 py-4 min-h-[56px] flex items-center justify-end space-x-3">
                    <span className="text-rich-black text-base sm:text-lg font-medium transition-colors duration-300 group-hover:text-white">
                      {item.text}
                    </span>
                    <item.icon className="w-5 h-5 text-rich-black transition-colors duration-300 group-hover:text-white" />
                  </div>

                  {/* subtle inner glow on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-mikado-yellow/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-rich-black text-base sm:text-lg font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            &quot;Completed my transformation in 5 months, 2 weeks!&quot;
          </motion.p>
        </motion.div>
      </div>

      {/* Floating Screenshot with Glow Effect - Mobile: right side, Desktop: center */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotateY: 15 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="
          absolute z-30
          top-1/2 -translate-y-1/2
          right-[-60px] sm:right-[-40px]
          lg:left-1/2 lg:right-auto lg:-translate-x-1/2
          w-[180px] sm:w-[200px] lg:w-[240px] 2xl:w-[240px] max-w-xs
        "
      >
        {/* Glow effect behind screenshot */}
        <div className="absolute inset-0 bg-gradient-to-r from-mikado-yellow/40 to-gold/40 rounded-3xl blur-2xl scale-110 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-mikado-yellow/30 rounded-2xl blur-xl scale-105" />

        {/* Glass morphism frame */}
        <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-1 border border-white/20 shadow-2xl">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative overflow-hidden rounded-xl"
          >
            <SingleScreenshot src="/screenshots/appbanner-guidance-screen.webp" />

            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl" />
          </motion.div>
        </div>

        {/* Floating particles around screenshot */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-2 -right-2 w-3 h-3 bg-mikado-yellow rounded-full opacity-60"
        />
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full opacity-40"
        />
      </motion.div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.3\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'2\'/%3E%3C/g%3E%3C/svg%3E')] bg-repeat opacity-100" />
    </section>
  );
};

export default HeroSection;
