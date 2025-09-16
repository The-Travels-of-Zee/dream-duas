"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { footer } from "@/constants";

const socialIcons = {
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  facebook: FaFacebookF,
  twitter: FaTwitter,
};

function Footer() {
  const { links, legalLinks, socials, poweredBy } = footer;

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-rich-black via-gray-900 to-rich-black">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0">
        {/* Primary gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-rich-black/90 via-gray-900/80 to-rich-black/90" />

        {/* Glass morphism base layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] via-white/[0.08] to-white/[0.03] backdrop-blur-3xl" />

        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 40 40\' width=\'40\' height=\'40\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.15\'%3E%3Ccircle cx=\'2\' cy=\'2\' r=\'1\'/%3E%3Ccircle cx=\'10\' cy=\'8\' r=\'1\'/%3E%3Ccircle cx=\'25\' cy=\'5\' r=\'1\'/%3E%3Ccircle cx=\'30\' cy=\'15\' r=\'1\'/%3E%3Ccircle cx=\'12\' cy=\'22\' r=\'1\'/%3E%3Ccircle cx=\'20\' cy=\'30\' r=\'1\'/%3E%3Ccircle cx=\'35\' cy=\'28\' r=\'1\'/%3E%3Ccircle cx=\'8\' cy=\'35\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E')] bg-repeat" />
      </div>

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 40, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-mikado-yellow/10 to-gold/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -120, 60, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.7, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-gold/8 to-white/12 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-1/3 w-24 h-24 bg-white/8 rounded-full blur-xl"
        />
      </div>

      {/* Content container with enhanced glass effect */}
      <div className="relative z-10 px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Main navigation links with premium glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {links.map(({ title, href }, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group"
              >
                {/* Multi-layer glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/30 to-mikado-yellow/30 rounded-2xl blur-xl scale-105 animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-mikado-yellow/20 to-gold/20 rounded-2xl blur-2xl scale-110" />
                </div>

                {/* Enhanced glass card */}
                <a href={href} className="relative z-10 block group">
                  {/* Glass layers */}
                  <div className="absolute inset-0 bg-white/[0.08] backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-white/[0.04] rounded-2xl" />

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 transform group-hover:scale-[1.02] transition-transform duration-300">
                    <span className="text-white text-xl font-bold group-hover:text-mikado-yellow transition-colors duration-300 drop-shadow-lg">
                      {title}
                    </span>

                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-mikado-yellow/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Bottom section with enhanced glass separator */}
          <div className="relative">
            {/* Glass separator line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mikado-yellow/30 to-transparent blur-sm" />

            <div className="pt-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Enhanced social links */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="flex items-center gap-4"
                >
                  {Object.entries(socials).map(([key, url], index) => {
                    const Icon = socialIcons[key];
                    if (!Icon || !url) return null;
                    return (
                      <motion.a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group w-12 h-12 flex items-center justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        {/* Glow layers */}
                        <div className="absolute inset-0 bg-gradient-to-r from-gold/40 to-mikado-yellow/40 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-125" />
                        <div className="absolute inset-0 bg-gradient-to-r from-mikado-yellow/20 to-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150" />

                        {/* Premium glass button */}
                        <div className="relative z-10 w-12 h-12 rounded-full overflow-hidden">
                          {/* Glass layers */}
                          <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent" />
                          <div className="absolute inset-0 border border-white/20 rounded-full" />

                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                          {/* Icon */}
                          <div className="relative z-10 w-full h-full flex items-center justify-center">
                            <Icon className="size-5 text-white group-hover:text-mikado-yellow transition-colors duration-300 drop-shadow-sm" />
                          </div>
                        </div>
                      </motion.a>
                    );
                  })}
                </motion.div>

                {/* Enhanced legal links */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex flex-wrap items-center justify-center gap-6 text-sm"
                >
                  {[
                    { key: "termsAndConditions", label: "Terms & Conditions", href: "/terms-and-conditions" },
                    { key: "privacyPolicy", label: "Privacy Policy", href: "/privacy-policy" },
                    { key: "cookiesPolicy", label: "Cookies Policy", href: "/cookies-policy" },
                  ]
                    .filter(({ key }) => legalLinks[key])
                    .map(({ label, href }, index) => (
                      <motion.a
                        key={href}
                        href={href}
                        className="relative group px-3 py-2 rounded-lg overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-mikado-yellow/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-r from-mikado-yellow/10 to-gold/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Glass background */}
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <span className="relative z-10 text-white/70 group-hover:text-mikado-yellow transition-colors duration-300 font-medium">
                          {label}
                        </span>
                      </motion.a>
                    ))}
                </motion.div>

                {/* Enhanced powered by section */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 30 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-col items-center lg:items-end gap-3 text-sm"
                >
                  <p className="text-white/70 text-center lg:text-right">
                    Powered by{" "}
                    <Link href={poweredBy.link} className="relative group font-semibold inline-block">
                      {/* Glow effect */}
                      <span className="absolute inset-0 bg-gradient-to-r from-gold/30 to-mikado-yellow/30 rounded blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110" />

                      {/* Text with glass effect */}
                      <span className="relative z-10 text-gold group-hover:text-mikado-yellow transition-colors duration-300 px-2 py-1 rounded group-hover:bg-white/5 group-hover:backdrop-blur-sm">
                        {poweredBy.title}
                      </span>
                    </Link>
                  </p>

                  <div className="flex items-center gap-2 text-white/50">
                    <div className="w-1 h-1 bg-white/30 rounded-full" />
                    <p>All rights reserved © {new Date().getFullYear()}</p>
                    <div className="w-1 h-1 bg-white/30 rounded-full" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced decorative glass orbs */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-gold/20 to-mikado-yellow/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          scale: [1, 0.8, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-mikado-yellow/15 to-white/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl"
      />
    </footer>
  );
}

export default Footer;
