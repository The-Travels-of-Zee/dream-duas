"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Zap, Mail, Sparkles, Star, Crown, Gift } from "lucide-react";
import { useState, useEffect } from "react";

const WaitList = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [memberCount, setMemberCount] = useState(2847);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  }, [email]);

  const handleSubmit = async () => {
    if (!email || !isValidEmail) {
      setErrorMsg("Please enter a valid email address");
      return;
    }

    setErrorMsg(null);
    setIsLoading(true);

    try {
      setIsSubmitted(true);
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Failed to subscribe. Please try again.");
        setIsLoading(false);
        return;
      }

      setShowSuccess(true);
      setMemberCount((prev) => prev + 1);

      setTimeout(() => setShowSuccess(false), 4000);
    } catch (err) {
      console.error("Subscribe error:", err);
      setErrorMsg("Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const onInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <section id="waitlist" className="relative py-24 sm:py-32">
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-mikado-yellow via-gold to-yellow-400" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{ x: ["-100%", "100%", "-100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-white/[0.15] backdrop-blur-sm" />
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating decorative icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => {
          const Icon = [Crown, Star, Gift, Sparkles][i % 4];
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 50 - 25, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            >
              <Icon className="w-6 h-6 text-white/30" />
            </motion.div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-5xl sm:text-7xl font-black text-rich-black mb-8 leading-tight"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          Ready to Start Your
          <span className="relative block">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-lg">
              Journey?
            </span>
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-rich-black to-gray-800 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </span>
        </motion.h2>

        <p className="text-xl sm:text-2xl text-rich-black/80 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
          Be among the first to experience the most motivating goal-sharing platform. Join our exclusive waitlist and
          get <span className="font-bold text-rich-black bg-white/20 px-2 py-1 rounded-lg">early access</span>!
        </p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative max-w-2xl mx-auto mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/20 rounded-3xl blur-xl scale-105 pointer-events-none" />

          <div className="relative bg-white/20 backdrop-blur-2xl rounded-3xl p-8 border border-white/30 shadow-2xl">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="space-y-6">
                  <div className="relative group z-10">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 pointer-events-none" />
                    <div className="relative flex items-center z-20">
                      <Mail className="absolute left-6 w-6 h-6 text-rich-black/60" />
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={onInputKeyDown}
                        className="w-full pl-16 pr-6 py-5 bg-transparent text-rich-black text-lg font-medium placeholder:text-rich-black/60 focus:outline-none rounded-2xl"
                        required
                      />
                      {email &&
                        (isValidEmail ? (
                          <CheckCircle className="absolute right-6 w-6 h-6 text-green-600" />
                        ) : (
                          <div className="absolute right-6 w-6 h-6 rounded-full border-2 border-red-500 flex items-center justify-center">
                            <div className="w-3 h-0.5 bg-red-500 rounded" />
                          </div>
                        ))}
                    </div>
                  </div>

                  {errorMsg && <div className="text-sm text-red-600 text-left px-2">{errorMsg}</div>}

                  <motion.button
                    onClick={handleSubmit}
                    disabled={!isValidEmail || isLoading}
                    whileHover={{ scale: isValidEmail && !isLoading ? 1.02 : 1 }}
                    whileTap={{ scale: isValidEmail && !isLoading ? 0.98 : 1 }}
                    className="relative w-full group disabled:cursor-not-allowed"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-rich-black to-gray-800 rounded-2xl blur-lg ${
                        isValidEmail && !isLoading ? "opacity-70 scale-105" : "opacity-30"
                      } transition-all duration-300`}
                    />
                    <div
                      className={`relative bg-gradient-to-r from-rich-black to-gray-800 rounded-2xl py-5 px-8 border border-white/20 transition-all duration-300 ${
                        isValidEmail && !isLoading ? "shadow-xl" : "opacity-50"
                      }`}
                    >
                      <div className="relative flex items-center justify-center gap-3">
                        {isLoading ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                            />
                            <span className="text-white font-bold text-xl">Joining...</span>
                          </>
                        ) : (
                          <>
                            <span className="text-white font-bold text-xl">Join Exclusive Waitlist</span>
                            <motion.div
                              animate={{ x: isValidEmail && !isLoading ? [0, 5, 0] : 0 }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <ArrowRight className="w-6 h-6 text-white" />
                            </motion.div>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="text-center py-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.6, times: [0, 0.6, 1] }}
                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-rich-black mb-4">🎉 You&apos;re In!</h3>
                  <p className="text-rich-black/80 text-lg">Check your email for exclusive early access details</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Social Proof */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: <Users className="w-6 h-6" />,
              label: "people joined",
              value: memberCount.toLocaleString(),
              color: "from-blue-500 to-purple-600",
            },
            {
              icon: <Zap className="w-6 h-6" />,
              label: "Early access guaranteed",
              value: "100%",
              color: "from-green-500 to-emerald-600",
            },
            {
              icon: <Crown className="w-6 h-6" />,
              label: "VIP benefits included",
              value: "FREE",
              color: "from-gold to-mikado-yellow",
            },
          ].map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05, y: -5 }} className="relative group">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 scale-105`}
              />
              <div className="relative bg-white/15 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl mb-4 text-white`}
                >
                  {item.icon}
                </div>
                <div className="text-2xl font-bold text-rich-black mb-1">{item.value}</div>
                <div className="text-rich-black/70 font-medium">{item.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Confetti */}
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: ["#FFD700", "#FFC107", "#FF9800", "#4CAF50", "#2196F3"][i % 5],
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ scale: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  y: [-100, -200, -300],
                  x: [0, Math.random() * 200 - 100, Math.random() * 400 - 200],
                  rotate: [0, Math.random() * 360],
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: "easeOut", delay: i * 0.02 }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WaitList;
