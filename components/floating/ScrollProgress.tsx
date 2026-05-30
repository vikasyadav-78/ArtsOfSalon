"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4AF37] via-[#C48A6A] to-[#D4AF37] z-[100] origin-[0%]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default ScrollProgress;
