"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Target, Users, Trophy, Sparkles, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import HeadingUnderline from "./HeadingUnderline";

const features = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Set Your Goals",
    description: "Post your journey's starting point with a single powerful image and commitment timeline",
    color: "from-blue-500 to-purple-600",
    bgGlow: "from-blue-500/20 to-purple-600/20",
    particles: 8,
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Share Your Journey",
    description: "Build a community around your goals and inspire others with your progress",
    color: "from-emerald-500 to-teal-600",
    bgGlow: "from-emerald-500/20 to-teal-600/20",
    particles: 12,
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Celebrate Success",
    description: "Share your victory moment and inspire others to achieve their dreams",
    color: "from-gold to-mikado-yellow",
    bgGlow: "from-gold/20 to-mikado-yellow/20",
    particles: 15,
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-20 sm:py-32 bg-transparent">
      {/* Dynamic Background */}
      <div className="absolute inset-0">

        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-mikado-yellow/10 to-transparent animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-gold/5 to-transparent" />
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
          className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-[length:60px_60px]"
        />
      </div>

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-32 h-32 rounded-full blur-3xl opacity-30`}
            style={{
              background: `linear-gradient(45deg, ${["#FFD700", "#FFC107", "#FFFFFF"][i % 3]}/20, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          {/* Floating sparkles */}
          <div className="relative inline-block">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-mikado-yellow"
                style={{
                  left: `${Math.random() * 400 - 50}px`,
                  top: `${Math.random() * 100 - 50}px`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
            ))}

            <motion.h2
              className="text-4xl sm:text-6xl font-black text-white mb-6 sm:mb-8 leading-tight"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
              Turn Your Dreams Into{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-gold via-mikado-yellow to-gold bg-clip-text text-transparent">
                  Achievements
                </span>
                {/* Animated underline */}
                <div className="absolute -bottom-2 left-0 right-0">
                  <HeadingUnderline />
                </div>
              </span>
            </motion.h2>
          </div>

          <motion.p
            className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Join thousands of goal-achievers who are transforming their lives one commitment at a time
          </motion.p>
        </motion.div>

        {/* Premium Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {features.map((feature, index) => (
            <EnhancedFeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EnhancedFeatureCard = ({ icon, title, description, color, bgGlow, particles, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group cursor-pointer h-full"
    >
      {/* Dynamic glow effect */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${bgGlow} rounded-3xl blur-2xl scale-110 opacity-0 group-hover:opacity-100`}
        animate={{
          scale: isHovered ? [1.1, 1.2, 1.1] : 1.1,
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut",
        }}
      />

      {/* Main card with premium glassmorphism */}
      <div className="relative h-full bg-white/[0.08] backdrop-blur-2xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
        {/* Multiple glass layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] via-white/[0.05] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

        {/* Animated mesh pattern */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-4.5z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(particles)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
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
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
          style={{ transform: "skewX(-20deg)" }}
        />

        {/* Content */}
        <div className="relative z-10 p-8 sm:p-10 h-full flex flex-col">
          {/* Icon with glow */}
          <motion.div
            className={`relative mb-8 self-start`}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Icon glow */}
            <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-2xl blur-lg opacity-60 scale-110`} />

            {/* Icon container */}
            <div className={`relative bg-gradient-to-r ${color} p-4 rounded-2xl text-white shadow-lg`}>{icon}</div>

            {/* Floating ring */}
            <motion.div
              className={`absolute inset-0 border-2 border-current rounded-2xl opacity-0 group-hover:opacity-40`}
              animate={
                isHovered
                  ? {
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }
                  : {}
              }
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: "linear",
              }}
              style={{ color: color.includes("gold") ? "#FFD700" : color.includes("blue") ? "#3B82F6" : "#10B981" }}
            />
          </motion.div>

          {/* Text content */}
          <div className="flex-1 flex flex-col">
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-mikado-yellow transition-colors duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {title}
            </motion.h3>

            <motion.p
              className="text-gray-300 text-lg leading-relaxed flex-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              {description}
            </motion.p>

            {/* Call-to-action */}
            <motion.div
              className="mt-8 flex items-center text-mikado-yellow font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300"
              whileHover={{ x: 5 }}
            >
              <span className="mr-2">Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  );
};

export default Features;
