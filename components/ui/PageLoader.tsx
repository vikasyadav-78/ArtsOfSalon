"use client";

import { useState, useEffect } from "react";
import { Scissors } from "lucide-react";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Hide the loader after 1 second to improve PageSpeed score
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      const unmountTimer = setTimeout(() => {
        setVisible(false);
      }, 600);
      return () => clearTimeout(unmountTimer);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 bg-[#111111] z-[9999] flex flex-col items-center justify-center text-[#FAF7F2] select-none transition-all duration-600 ease-in-out ${
        isFadingOut ? "opacity-0 -translate-y-5 pointer-events-none" : "opacity-100 translate-y-0"
      }`}
    >
      {/* Spinning Golden Scissors Decor */}
      <div
        className="w-16 h-16 rounded-full border border-dashed border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] mb-6 animate-[spin_2.2s_linear_infinite]"
      >
        <Scissors className="w-7 h-7" />
      </div>
      
      {/* Luxury Brand Title Reveal */}
      <div className="text-center animate-fade-in-up-slight [animation-delay:300ms]">
        <h1 className="font-playfair font-black text-2xl md:text-3xl tracking-widest uppercase text-[#D4AF37]">
          Arts Of Scissors
        </h1>
        <span className="font-cormorant font-semibold text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#C48A6A] block mt-1">
          Unisex Salon
        </span>
      </div>

      {/* Luxury horizontal load line */}
      <div className="w-40 h-[1px] bg-white/10 mt-8 relative overflow-hidden">
        <div
          className="absolute top-0 bottom-0 w-1/2 bg-[#D4AF37] animate-shimmer-bar"
        />
      </div>
    </div>
  );
}

export default PageLoader;
