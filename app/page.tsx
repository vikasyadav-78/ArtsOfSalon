"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors } from "lucide-react";

// Import all sections
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Statistics from "@/components/sections/Statistics";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import InstagramSection from "@/components/sections/Instagram";
import BookingForm from "@/components/sections/BookingForm";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

// Floating UI components
import ScrollProgress from "@/components/floating/ScrollProgress";
import BackToTop from "@/components/floating/BackToTop";
import WhatsAppButton from "@/components/floating/WhatsAppButton";
import CallButton from "@/components/floating/CallButton";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Elite entrance loader timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#111111] z-[9999] flex flex-col items-center justify-center text-[#FAF7F2] select-none"
          >
            {/* Spinning Golden Scissors Decor */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
              className="w-16 h-16 rounded-full border border-dashed border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] mb-6"
            >
              <Scissors className="w-7 h-7" />
            </motion.div>
            
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
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-1/2 bg-[#D4AF37]"
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Floating top scroll progression indicator */}
            <ScrollProgress />
            
            {/* Translucent sticky header menu */}
            <Navbar />

            {/* consolidated luxury landing page content */}
            <main>
              <Hero />
              <About />
              <Services />
              <WhyChooseUs />
              <Statistics />
              <Gallery />
              <Testimonials />
              <InstagramSection />
              <BookingForm />
              <Contact />
            </main>

            {/* Gold-accented luxury footer */}
            <Footer />

            {/* Floating quick action triggers */}
            <WhatsAppButton />
            <CallButton />
            <BackToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
