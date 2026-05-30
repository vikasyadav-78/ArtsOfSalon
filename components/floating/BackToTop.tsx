"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export function BackToTop() {
  const scrollY = useScrollPosition();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (scrollY > 500) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, backgroundColor: "#D4AF37", color: "#111111" }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 w-12 h-12 rounded-full bg-[#111111] text-[#D4AF37] border border-[#D4AF37]/30 flex items-center justify-center shadow-lg z-50 cursor-pointer"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;
