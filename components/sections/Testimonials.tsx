"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { Testimonial } from "@/types";

const testimonials: Testimonial[] = [
  {
    name: "Reception Makeover",
    review: "Stunning customized party makeup and elegant hair design tailored specifically to highlight natural beauty. Verified 5.0 Star Rating.",
    rating: 5,
    date: "Official Showcase",
    avatarUrl: "/images/ig1.webp",
  },
  {
    name: "Bridal Airbrush Prep",
    review: "Exquisite HD Bridal makeup base and traditional hair styling tailored for special wedding moments. Verified 5.0 Star Rating.",
    rating: 5,
    date: "Official Showcase",
    avatarUrl: "/images/ig2.webp",
  },
  {
    name: "Ethnic Style Styling",
    review: "Elegant ethnic hair design, precision cuts, and professional skincare custom consultations. Verified 5.0 Star Rating.",
    rating: 5,
    date: "Official Showcase",
    avatarUrl: "/images/ig3.webp",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000); // 8 seconds duration
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#111111] text-[#FAF7F2] relative overflow-hidden">
      
      {/* Golden atmospheric glare */}
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] bg-[#C48A6A]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-montserrat text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-bold block mb-3">
            Client Appreciations
          </span>
          <h2 className="font-playfair font-black text-3xl sm:text-5xl text-white uppercase">
            What Our Clients Say
          </h2>
          <div className="h-[2px] w-24 bg-[#D4AF37] mx-auto mt-4" />
          <p className="font-poppins text-xs md:text-sm text-white/60 mt-4 leading-relaxed">
            Discover first-hand styling journeys shared by our beautiful family of 5000+ satisfied clients.
          </p>
        </div>

        {/* Global Rating Score Highlight Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-white/[0.03] border border-white/5 py-6 px-8 mb-12 shadow-2xl backdrop-blur-sm">
          <div className="flex items-center text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <span className="font-montserrat text-sm tracking-wider uppercase text-white font-bold">
            4.8 Rating out of 5
          </span>
          <span className="hidden sm:block text-white/20">|</span>
          <span className="font-montserrat text-sm tracking-wider uppercase text-[#D4AF37] font-extrabold">
            112+ Verified Google Reviews
          </span>
        </div>

        {/* Interactive Testimonial Box */}
        <div className="relative min-h-[350px] sm:min-h-[280px] bg-white/[0.02] border border-white/10 p-8 sm:p-12 shadow-2xl backdrop-blur-md flex flex-col justify-between">
          
          {/* Quote icon watermark */}
          <div className="absolute top-6 right-6 text-white/5 pointer-events-none">
            <Quote className="w-20 h-20 fill-current" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              {/* Star Rating Indicator */}
              <div className="flex items-center text-[#D4AF37]">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Review Content */}
              <p className="font-cormorant font-medium text-lg sm:text-2xl text-white/90 leading-relaxed italic">
                &ldquo;{testimonials[currentIndex].review}&rdquo;
              </p>

              {/* Author Footer */}
              <div className="flex items-center gap-4 mt-4 border-t border-white/5 pt-6">
                <div className="relative w-12 h-12 flex-shrink-0 rounded-full border-2 border-[#D4AF37]/50 overflow-hidden">
                  <Image
                    src={testimonials[currentIndex].avatarUrl || "/images/ig1.webp"}
                    alt={testimonials[currentIndex].name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-playfair text-white text-base font-bold">
                    {testimonials[currentIndex].name}
                  </h4>
                  <span className="font-poppins text-[10px] md:text-xs text-[#C48A6A] mt-0.5 font-semibold uppercase tracking-widest">
                    Verified Client &bull; {testimonials[currentIndex].date}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows */}
          <div className="absolute bottom-6 right-6 sm:right-12 flex gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:bg-white/10 flex items-center justify-center transition-all duration-300 cursor-pointer"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:bg-white/10 flex items-center justify-center transition-all duration-300 cursor-pointer"
              aria-label="Next Review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
