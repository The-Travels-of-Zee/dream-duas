"use client";
import { motion } from "framer-motion";

function SingleScreenshot({ src }) {
  return <motion.img src={src} alt="screenshot" className="w-full h-full object-cover" />;
}

export default SingleScreenshot;
