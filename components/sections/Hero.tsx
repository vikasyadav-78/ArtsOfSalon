"use client";

import { motion } from "framer-motion";
import { Star, Phone, Calendar, ArrowDown } from "lucide-react";
import Button from "../ui/Button";

export function Hero() {
  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center bg-[#111111] overflow-hidden pt-24 pb-28"
    >
      {/* Premium Luxury Salon Background with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        style={{
          backgroundImage: "url('/images/premium_interior.png')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-[#111111]/90" />
      
      {/* Decorative Golden Ambient Glare */}
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] bg-[#C48A6A]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Rating Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 bg-[#FAF7F2]/5 backdrop-blur-md px-4 py-2 border border-white/10 rounded-full mb-8 shadow-2xl"
        >
          <div className="flex items-center text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="font-montserrat text-xs tracking-wider uppercase text-white/90 font-medium">
            4.8 Rating
          </span>
          <span className="text-white/30 text-xs">|</span>
          <span className="font-montserrat text-xs tracking-wider uppercase text-[#D4AF37] font-semibold">
            112+ Happy Reviews
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair font-black text-4xl sm:text-6xl md:text-8xl tracking-wider text-white uppercase leading-none mb-6"
        >
          Where Style <br className="sm:hidden" />
          <span className="gold-text-gradient">Meets Perfection</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-cormorant font-medium text-lg sm:text-2xl md:text-3xl text-white/80 leading-relaxed max-w-3xl mb-12 italic"
        >
          {"Experience premium hair, beauty, skin care and grooming services at Jaipur's trusted unisex salon."}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
        >
          <Button
            variant="gold"
            size="lg"
            onClick={() => handleScrollTo("#booking")}
            className="w-full sm:w-auto flex items-center gap-2 justify-center shadow-lg"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => window.open("tel:9680905608")}
            className="w-full sm:w-auto flex items-center gap-2 justify-center border border-white/20 backdrop-blur-sm bg-white/5 hover:bg-white hover:text-[#111111] hover:border-transparent transition-colors duration-300"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call 9680905608</span>
          </Button>
        </motion.div>
      </div>

      {/* Floating Animated Geometric Border Decor */}
      <div className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 flex flex-col gap-6 items-center pointer-events-none hidden md:flex">
        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
        <span className="h-20 w-[1px] bg-gradient-to-b from-[#D4AF37] to-transparent" />
        <span className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-white/30 [writing-mode:vertical-lr] select-none">
          LUXURY EXPERIENCE
        </span>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={() => handleScrollTo("#about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer group z-10"
      >
        <span className="font-montserrat text-[10px] tracking-[0.25em] uppercase text-white/55 group-hover:text-[#D4AF37] transition-colors duration-300">
          Discover More
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-all"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
