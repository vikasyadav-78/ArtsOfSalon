"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors } from "lucide-react";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide the loader after 2 seconds to match original animation duration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 bg-[#111111] z-[9999] flex flex-col items-center justify-center text-[#FAF7F2] select-none"
        >
          {/* Spinning Golden Scissors Decor */}
          <div
            className="w-16 h-16 rounded-full border border-dashed border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] mb-6 animate-[spin_2.2s_linear_infinite]"
          >
            <Scissors className="w-7 h-7" />
          </div>
          
          {/* Luxury Brand Title Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-playfair font-black text-2xl md:text-3xl tracking-widest uppercase text-[#D4AF37]">
              Arts Of Scissors
            </h1>
            <span className="font-cormorant font-semibold text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#C48A6A] block mt-1">
              Unisex Salon
            </span>
          </motion.div>

          {/* Luxury horizontal load line */}
          <div className="w-40 h-[1px] bg-white/10 mt-8 relative overflow-hidden">
            <div
              className="absolute top-0 bottom-0 w-1/2 bg-[#D4AF37] animate-shimmer-bar"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PageLoader;
