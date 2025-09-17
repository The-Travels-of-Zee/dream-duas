"use client";
import { motion } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";
import { Smartphone, Download, Bell, Sparkles } from "lucide-react";
import { appBanner, googlePlayLink, appStoreLink } from "@/constants";
import { FaApple, FaGooglePlay } from "react-icons/fa6";

function AppBanner() {
  if (!appBanner) return null;

  return (
    <motion.section
      id={appBanner.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative max-w-7xl my-16 mx-auto px-4 py-20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs with gold theme */}
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-40 h-40 bg-mikado-yellow/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gold/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 right-1/3 w-24 h-24 bg-rich-black/10 rounded-full blur-lg"
        />
      </div>

      {/* Main Container with Dark Theme */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        {/* Glass morphism container with dark theme */}
        <div className="relative overflow-hidden rounded-3xl">
          {/* Dark background with gold accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-rich-black via-gray-900 to-rich-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-mikado-yellow/5 to-gold/10" />

          {/* Glass morphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl" />

          <div className="relative z-20 p-8 md:p-16">
            {/* New Layout: Centered text with screenshots around */}
            <div className="text-center mb-12">
              {/* Badge */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-6 py-3 mb-8 relative group"
              >
                {/* Multi-layer glow effect */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/30 to-mikado-yellow/30 rounded-full blur-xl scale-105 animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-mikado-yellow/20 to-gold/20 rounded-full blur-2xl scale-110" />
                </div>

                {/* Enhanced glass badge */}
                <div className="relative z-10 rounded-full overflow-hidden">
                  {/* Glass layers */}
                  <div className="absolute inset-0 z-0 bg-white/[0.08] backdrop-blur-xl rounded-full border border-white/20 shadow-2xl" />
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/[0.12] via-transparent to-white/[0.04] rounded-full" />

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 z-10 overflow-hidden rounded-full">
                    <div className="absolute left-[-50%] top-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out" />
                  </div>

                  {/* Content */}
                  <div className="relative z-20 px-6 py-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-mikado-yellow" />
                    <span className="text-gold font-semibold text-sm">Coming Soon</span>
                  </div>
                </div>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
              >
                <span className="text-white block mb-2">{appBanner.title.split(" ")[0]}</span>
                <span className="bg-gradient-to-r from-mikado-yellow via-gold to-yellow-400 bg-clip-text text-transparent">
                  {appBanner.title.split(" ").slice(1).join(" ")}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-gray-300 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-12 font-light opacity-90"
              >
                {appBanner.subtitle}
              </motion.p>
            </div>

            {/* Screenshots Grid with Enhanced Layout */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative flex justify-center items-center min-h-[600px] mb-12"
            >
              {/* Background glow for phones */}
              <div className="absolute inset-0 bg-gradient-to-br from-mikado-yellow/10 via-gold/15 to-yellow-400/10 rounded-full blur-3xl scale-150" />

              {appBanner.screenshots.map((src, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: {
                      scale: 0.7,
                      opacity: 0,
                      y: 60,
                      rotate: 0,
                    },
                    visible: {
                      scale: index === 1 ? 1.1 : 0.9, // Middle phone larger
                      opacity: 1,
                      y: index === 1 ? -20 : index === 0 ? 40 : 20,
                      rotate: index === 0 ? -12 : index === 2 ? 12 : 0,
                    },
                  }}
                  transition={{
                    delay: 0.7 + index * 0.15,
                    duration: 0.9,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: index === 1 ? 1.15 : 0.95,
                    rotate: index === 1 ? 0 : index === 0 ? -8 : 8,
                    y: index === 1 ? -30 : index === 0 ? 30 : 10,
                    transition: { duration: 0.4 },
                  }}
                  className={clsx(
                    "relative transition-all duration-300 cursor-pointer",
                    index === 1 && "z-30", // Middle phone on top
                    index === 0 && "absolute z-20 -left-24 lg:-left-32",
                    index === 2 && "absolute z-20 -right-24 lg:-right-32"
                  )}
                >
                  <div className="relative group">
                    {/* Enhanced phone shadow with gold tint */}
                    <div className="absolute inset-0 bg-gradient-to-b from-mikado-yellow/20 to-rich-black/40 rounded-3xl blur-2xl scale-110 translate-y-12" />

                    {/* Glass frame around phone */}
                    <div className="relative p-2 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
                      <div className="relative overflow-hidden rounded-2xl">
                        {/* Shimmer effect on phone */}
                        <div className="absolute inset-0 z-10 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute left-[-50%] top-0 w-[200%] h-full bg-gradient-to-r from-transparent via-mikado-yellow/40 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-1200 ease-out" />
                        </div>

                        <img
                          src={src}
                          alt={`App screenshot ${index + 1}`}
                          className="relative z-0 w-full h-auto rounded-2xl"
                        />
                      </div>
                    </div>

                    {/* Floating elements around middle phone */}
                    {index === 1 && (
                      <>
                        <motion.div
                          animate={{
                            y: [0, -15, 0],
                            rotate: [0, 10, 0],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute -top-12 -right-12 w-10 h-10 bg-gradient-to-br from-mikado-yellow to-gold rounded-full shadow-xl flex items-center justify-center"
                        >
                          <Smartphone className="w-5 h-5 text-rich-black" />
                        </motion.div>
                        <motion.div
                          animate={{
                            y: [0, 15, 0],
                            rotate: [0, -8, 0],
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2,
                          }}
                          className="absolute -bottom-8 -left-8 w-8 h-8 bg-gradient-to-br from-gold to-mikado-yellow rounded-full shadow-lg flex items-center justify-center"
                        >
                          <Download className="w-4 h-4 text-rich-black" />
                        </motion.div>
                        <motion.div
                          animate={{
                            y: [0, 15, 0],
                            rotate: [0, -8, 0],
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2,
                          }}
                          className="absolute -bottom-8 left-40 w-8 h-8 bg-gradient-to-br from-gold to-mikado-yellow rounded-full shadow-lg flex items-center justify-center"
                        >
                          <Download className="w-4 h-4 text-rich-black" />
                        </motion.div>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* App Store Buttons with Enhanced Styling */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col items-center space-y-8"
            >
              <div className="flex flex-wrap justify-center gap-6">
                {googlePlayLink && (
                  <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }} className="group relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-mikado-yellow/40 to-gold/40 rounded-2xl blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <Link href={"/"} className="block relative">
                      <div className="bg-gradient-to-r from-mikado-yellow to-gold p-[2px] rounded-2xl shadow-2xl">
                        <div className="bg-rich-black/90 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4 hover:bg-rich-black/70 transition-all duration-300 min-w-[180px]">
                          <FaGooglePlay className="h-10 w-10" alt="google play logo" src="/stores/google-play.svg" />
                          <div className="text-left">
                            <div className="text-xs text-gray-400 font-medium">Get it on</div>
                            <div className="text-white font-semibold">Google Play</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )}

                {appStoreLink && (
                  <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }} className="group relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gold/40 to-mikado-yellow/40 rounded-2xl blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <Link href={"/"} className="block relative">
                      <div className="bg-gradient-to-r from-gold to-mikado-yellow p-[2px] rounded-2xl shadow-2xl">
                        <div className="bg-rich-black/90 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4 hover:bg-rich-black/70 transition-all duration-300 min-w-[180px]">
                          <FaApple className="h-11 w-11" alt="app store logo" />
                          <div className="text-left">
                            <div className="text-xs text-gray-400 font-medium">Download on the</div>
                            <div className="text-white font-semibold">App Store</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )}
              </div>

              {/* Enhanced Notification Banner */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ delay: 1, duration: 0.6 }}
                className="relative group max-w-md"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-mikado-yellow/20 to-gold/20 rounded-2xl blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glass notification box */}
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-2xl" />

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div className="absolute left-[-50%] top-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out" />
                  </div>

                  <div className="relative z-10 px-6 py-4 flex items-center justify-center gap-3">
                    <Bell className="w-5 h-5 text-mikado-yellow animate-pulse" />
                    <p className="text-gold font-semibold text-center">🚀 We'll notify you as soon as we launch!</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating decorative elements */}
      <div className="absolute top-16 left-16 w-3 h-3 bg-mikado-yellow rounded-full animate-pulse opacity-60" />
      <div className="absolute top-32 right-32 w-5 h-5 bg-gold rounded-full animate-bounce opacity-40" />
      <div className="absolute bottom-32 left-32 w-2 h-2 bg-white rounded-full animate-pulse opacity-30" />
      <div className="absolute bottom-16 right-16 w-4 h-4 bg-mikado-yellow/60 rounded-full animate-pulse" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23D4AF37\' fill-opacity=\'0.02\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1.5\'/%3E%3C/g%3E%3C/svg%3E')] bg-repeat opacity-100" />
    </motion.section>
  );
}

export default AppBanner;
