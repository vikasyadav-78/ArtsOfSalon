"use client";

import { motion } from "framer-motion";
import { Award, UserCheck, ShieldCheck, Sparkles, HeartHandshake } from "lucide-react";

const highlights = [
  {
    title: "Experienced Professionals",
    description: "Our certified master stylists and estheticians have trained globally to deliver exceptional results.",
    icon: Award,
  },
  {
    title: "Personalized Care",
    description: "Every service starts with a tailored consultation to match your personal style, hair type, and features.",
    icon: HeartHandshake,
  },
  {
    title: "Premium Products",
    description: "We use only top-tier international hair care and skin formulations to keep your style healthy and glowing.",
    icon: Sparkles,
  },
  {
    title: "Modern Equipment",
    description: "Outfitted with high-end, industry-leading styling chairs, tools, and advanced skin care therapy units.",
    icon: UserCheck,
  },
  {
    title: "Hygienic Environment",
    description: "We maintain ultra-strict safety standards with medically sanitized tool sets and clean spaces.",
    icon: ShieldCheck,
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Premium Framed Images */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Ambient Background Spot */}
            <div className="absolute top-10 left-10 w-[250px] h-[250px] bg-[#D4AF37]/5 rounded-full blur-[80px] pointer-events-none" />

            {/* main premium stylist image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md aspect-[3/4] overflow-hidden z-10 shadow-2xl gold-border-glow"
            >
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage: "url('/images/img11.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/30 to-transparent" />
            </motion.div>

            {/* floating visual accent block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-6 -right-2 md:right-8 bg-[#111111] text-[#FAF7F2] p-6 shadow-2xl z-20 max-w-xs border border-[#D4AF37]/30"
            >
              <span className="font-playfair text-2xl md:text-3xl font-bold text-[#D4AF37]">
                112+ Reviews
              </span>
              <p className="font-montserrat text-[10px] tracking-widest uppercase text-white/60 mt-1">
                With an elite 4.8 star average rating
              </p>
            </motion.div>

            {/* Decorative Gold Frame Wire */}
            <div className="absolute top-6 left-6 -right-6 -bottom-6 border-2 border-[#D4AF37]/15 z-0 pointer-events-none hidden md:block" />

          </div>

          {/* Right Column: Content and Pillars */}
          <div className="lg:col-span-6 flex flex-col">
            
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <span className="font-montserrat text-xs tracking-[0.3em] uppercase text-[#C48A6A] font-bold block mb-3">
                Premium Luxury Salon
              </span>
              <h2 className="font-playfair font-black text-3xl sm:text-5xl text-[#111111] uppercase leading-tight">
                Welcome To Arts Of Scissors <span className="text-[#D4AF37]">Unisex Salon</span>
              </h2>
              <div className="h-[2px] w-24 bg-[#D4AF37] mt-4" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-poppins text-sm md:text-base text-[#333333]/80 leading-relaxed mb-10"
            >
              Step into a sanctuary of refined elegance. At Arts Of Scissors Unisex Salon, we believe that style is a reflection of your personality. Our luxury salon provides an unmatched indulgence of customized hair designs, therapeutic skin care, and premier grooming packages utilizing premium international formulations inside a highly hygienic, modern space.
            </motion.p>

            {/* Pillars / Highlights Grid */}
            <div className="flex flex-col gap-6">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="w-12 h-12 flex-shrink-0 rounded-full border border-[#D4AF37]/30 bg-white shadow-md flex items-center justify-center text-[#D4AF37] group-hover:bg-[#111111] group-hover:text-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-playfair font-bold text-base md:text-lg text-[#111111] group-hover:text-[#D4AF37] transition-colors duration-300">
                        {highlight.title}
                      </h4>
                      <p className="font-poppins text-xs md:text-sm text-[#333333]/70 mt-0.5 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
