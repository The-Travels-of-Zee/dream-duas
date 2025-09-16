"use client";
import { motion } from "framer-motion";

const HeadingUnderline = ({ styles }) => {
  return (
    <motion.div
      className={`${styles} h-1.5 bg-gradient-to-r from-mikado-yellow via-gold to-mikado-yellow rounded-full shadow-lg shadow-gold/50`}
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
    />
  );
};

export default HeadingUnderline;
