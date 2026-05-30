"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export function CallButton() {
  return (
    <motion.a
      href="tel:9680905608"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 h-12 w-12 md:w-auto md:px-5 bg-[#111111] text-[#D4AF37] border border-[#D4AF37]/50 rounded-full flex items-center justify-center gap-2 shadow-2xl z-50 hover:bg-[#D4AF37] hover:text-[#111111] transition-all duration-300 font-montserrat font-medium text-xs md:text-sm tracking-wider uppercase"
    >
      <Phone className="w-4 h-4 fill-current flex-shrink-0" />
      <span className="hidden md:inline">Call 9680905608</span>
    </motion.a>
  );
}

export default CallButton;
