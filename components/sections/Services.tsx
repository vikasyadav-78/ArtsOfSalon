"use client";

import { useState } from "react";
import { Scissors, Sparkles, User, Clock, CheckCircle, X, BookOpen } from "lucide-react";
import { motion as m, AnimatePresence as Ap } from "framer-motion";
import Button from "../ui/Button";

// Popular core services to show on the main cards grid
const popularServices = [
  {
    category: "Hair Services",
    description: "Signature haircut, shave and styling combinations carefully tailored for daily grooming needs.",
    icon: Scissors,
    services: [
      {
        name: "Hair Cut with Shampoo",
        description: "Bespoke signature hair wash and premium haircut styled by master barbers.",
        duration: "30 mins",
        price: "₹150",
        features: ["Relaxing Hair Wash", "Professional Haircut", "Style Finish"],
      },
      {
        name: "Haircut & Shave Combo",
        description: "The classic elite combo pack featuring a custom precision cut and clean razor shave.",
        duration: "40 mins",
        price: "₹200",
        features: ["Hair Wash & Cut", "Classic Shave", "Soothing Skin Balm"],
      },
      {
        name: "Shaving (Signature)",
        description: "Clean classic hot-towel edge straight razor shave with organic cream.",
        duration: "20 mins",
        price: "₹70",
        features: ["Hot Towel Prep", "Nourishing Lather", "Razor Finish"],
      },
      {
        name: "Female Hair Cut",
        description: "Trendy customized styles, layers, or styling cuts designed specifically for women.",
        duration: "40 mins",
        price: "₹199",
        features: ["Style Consultation", "Stylist Wash", "Blow Dry Finish"],
      },
    ],
  },
  {
    category: "Skin & Beauty",
    description: "Rejuvenating fruit facials, detan wraps and essential nail cares for active glows.",
    icon: Sparkles,
    services: [
      {
        name: "Fruit Facial",
        description: "Rejuvenating organic double-cleansing fruit facial pack to restore natural glow.",
        duration: "45 mins",
        price: "₹349",
        features: ["Deep Cleansing", "Organic Fruit Therapy", "Moisturizer Wrap"],
      },
      {
        name: "Ozone Bleach Face",
        description: "Gentle pores cleaning and anti-pigmentation skin bleach to brighten.",
        duration: "25 mins",
        price: "₹249",
        features: ["Pore Tightening", "Deep Tone Clarifier", "Soothing Aloe Finish"],
      },
      {
        name: "D-Tan (Aroma)",
        description: "Soothing sun-tan removal wrap using organic aromatherapy and lactic extracts.",
        duration: "30 mins",
        price: "₹399",
        features: ["Sun Damage Restore", "Natural Brightener", "Cooling Therapy"],
      },
      {
        name: "Manicure Classic",
        description: "Essential hand care, nail shaping, premium cuticle detailing and gentle scrubbing.",
        duration: "30 mins",
        price: "₹349",
        features: ["Shaping & Buffing", "Moisturizer Massage", "Premium Polish"],
      },
    ],
  },
  {
    category: "Bridal & Groom Packages",
    description: "Premium pre-wedding timelines, specialized groom packages and elite bridal makeups.",
    icon: User,
    services: [
      {
        name: "Groom Package",
        description: "Complete royal pre-wedding overhaul combining massage, facials, detan, hair spa and cuts.",
        duration: "150 mins",
        price: "₹6,999",
        features: ["Body Massage & Polish", "4 Facials & 4 D-Tans", "2 Pedicures & 2 Manicures", "Hair Spa & Treatment"],
      },
      {
        name: "1 Day Pre-Bridal Pack",
        description: "Express premium pre-wedding care combining brightening facial, spa, detan and polish.",
        duration: "120 mins",
        price: "₹5,000",
        features: ["Brightening Facial", "Full Body Waxing", "Body Polish with Steam", "Hair Spa & Manicure/Pedicure"],
      },
      {
        name: "Bridal Makeup (Bobby Brown)",
        description: "Exquisite HD camera-ready bridal makeup base with elegant hair design and draping.",
        duration: "180 mins",
        price: "₹15,000",
        features: ["Premium Bobby Brown Base", "Hairstyle of Choice", "Saree/Lehenga Draping", "Eyelashes & Glow Lock"],
      },
      {
        name: "15 Day Pre-Bridal Pack",
        description: "Comprehensive multi-session bridal roadmap spanning customized facials, waxing and bleach timelines.",
        duration: "3-Session Plan",
        price: "₹9,999",
        features: ["Bridal Consultation", "Power Brightening Cleanup", "Body Polishing & Steam", "Waxing, Bleach & Pedicure"],
      },
    ],
  },
];

export function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuTab, setMenuTab] = useState("packages");

  return (
    <section id="services" className="py-24 md:py-32 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-montserrat text-xs tracking-[0.3em] uppercase text-[#C48A6A] font-bold block mb-3">
            Official Price List
          </span>
          <h2 className="font-playfair font-black text-3xl sm:text-5xl text-[#111111] uppercase">
            Our Luxury Services
          </h2>
          <div className="h-[2px] w-24 bg-[#D4AF37] mx-auto mt-4" />
          <p className="font-poppins text-xs md:text-sm text-[#333333]/70 mt-4 leading-relaxed">
            Indulge in certified professional grooming, authentic bridal packages, and styling therapies using the official salon menu card rates.
          </p>
        </div>

        {/* Categories Tab Buttons */}
        <div className="flex justify-center gap-3 md:gap-6 mb-16 flex-wrap">
          {popularServices.map((cat, index) => {
            const Icon = cat.icon;
            const isActive = activeTab === index;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveTab(index)}
                className={`relative flex items-center gap-2.5 px-6 py-3.5 border transition-all duration-300 font-montserrat text-xs tracking-widest uppercase cursor-pointer ${
                  isActive
                    ? "bg-[#111111] border-transparent text-[#D4AF37]"
                    : "bg-white border-[#D4AF37]/20 text-[#111111] hover:border-[#D4AF37] hover:shadow-[0_5px_15px_rgba(212,175,55,0.05)]"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#D4AF37]" : "text-[#C48A6A]"}`} />
                <span className="font-semibold">{cat.category}</span>
                {isActive && (
                  <m.div
                    layoutId="activeTabGlow"
                    className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-[#D4AF37]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Animated Description */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <m.p
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-cormorant font-medium text-lg md:text-xl text-[#333333]/80 italic"
          >
            &ldquo;{popularServices[activeTab].description}&rdquo;
          </m.p>
        </div>

        {/* Services Grid */}
        <m.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <Ap mode="popLayout">
            {popularServices[activeTab].services.map((service, index) => (
              <m.div
                key={service.name}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }}
                whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.3, ease: "easeOut" } }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white group p-6 shadow-[0_8px_30px_rgb(0,0,0,0.01)] border border-[#D4AF37]/10 hover:border-[#D4AF37]/50 hover:shadow-[0_15px_35px_rgba(212,175,55,0.08)] transition-[colors,border-color,box-shadow] duration-500 relative flex flex-col justify-between cursor-pointer"
              >
                <div className="absolute top-0 left-0 w-[4px] h-0 bg-[#D4AF37] group-hover:h-full transition-all duration-500" />
                
                <div>
                  <div className="flex justify-between items-start gap-3 mb-3">
                    <h3 className="font-playfair font-black text-base text-[#111111] group-hover:text-[#D4AF37] transition-colors duration-300 leading-snug">
                      {service.name}
                    </h3>
                    <span className="font-montserrat font-bold text-sm text-[#D4AF37] flex-shrink-0">
                      {service.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[#333333]/50 font-poppins text-[10px] mb-3">
                    <Clock className="w-3.5 h-3.5 text-[#C48A6A]" />
                    <span>Duration: {service.duration}</span>
                  </div>

                  <p className="font-poppins text-xs text-[#333333]/70 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  <ul className="flex flex-col gap-2 mb-6 border-t border-[#D4AF37]/10 pt-4">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 font-poppins text-[10px] text-[#333333]/80">
                        <CheckCircle className="w-3 h-3 text-[#C48A6A] flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-2 group-hover:bg-[#111111] group-hover:text-white group-hover:border-transparent transition-all text-[10px] py-2"
                    onClick={() => {
                      const target = document.querySelector("#booking");
                      if (target) target.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Book Appointment
                  </Button>
                </div>

              </m.div>
            ))}
          </Ap>
        </m.div>

        {/* View Full Menu CTA Button */}
        <div className="flex justify-center mt-16">
          <m.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-3 px-10 py-5 bg-[#111111] text-[#FAF7F2] border-2 border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#111111] transition-all duration-300 font-montserrat font-bold text-xs md:text-sm tracking-widest uppercase cursor-pointer shadow-2xl"
          >
            <BookOpen className="w-4 h-4 text-[#D4AF37] group-hover:text-[#111111] transition-colors" />
            <span>View Full Menu Card</span>
          </m.button>
        </div>

      </div>

      {/* FULL MENU LUXURY POPUP MODAL */}
      <Ap>
        {isMenuOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6 cursor-default"
          >
            {/* Modal Body */}
            <m.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="bg-[#FAF7F2] border border-[#D4AF37]/45 w-full max-w-5xl h-[85vh] flex flex-col shadow-2xl overflow-hidden relative"
            >
              {/* Gold Top Border */}
              <div className="h-1 bg-gradient-to-r from-[#D4AF37] via-[#C48A6A] to-[#D4AF37]" />

              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#D4AF37]/15 bg-white">
                <div>
                  <h3 className="font-playfair font-black text-xl md:text-2xl text-[#111111] uppercase tracking-wider">
                    Official Salon Menu Card
                  </h3>
                  <p className="font-poppins text-[10px] md:text-xs text-[#333333]/60 mt-0.5">
                    Arts Of Scissors Unisex Salon &bull; suraj nagar, Jaipur
                  </p>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-10 h-10 rounded-full border border-[#D4AF37]/20 flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-[#D4AF37] hover:border-transparent transition-all duration-300 cursor-pointer focus:outline-none"
                  aria-label="Close menu modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Menu Category Subtabs */}
              <div className="flex bg-white px-4 border-b border-[#D4AF37]/15 overflow-x-auto gap-2 md:gap-4 no-scrollbar">
                {[
                  { value: "packages", label: "Bridal & Groom Packs" },
                  { value: "hair", label: "Hair & Styling (M/F)" },
                  { value: "skin", label: "Facials & Massages" },
                  { value: "body", label: "Wax, Bleach, Mani & Pedi" },
                ].map((tab) => {
                  const isActive = menuTab === tab.value;
                  return (
                    <button
                      key={tab.value}
                      onClick={() => setMenuTab(tab.value)}
                      className={`px-4 py-4 font-montserrat text-[10px] md:text-xs tracking-wider uppercase font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? "border-[#D4AF37] text-[#D4AF37]"
                          : "border-transparent text-[#111111]/60 hover:text-[#D4AF37]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Modal Body - Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-[#FAF7F2]/50 no-scrollbar">
                
                {/* Category: WEDDING & PRE-BRIDAL PACKAGES */}
                {menuTab === "packages" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Pre-Bridal TIMELINE Packs */}
                    <div className="flex flex-col gap-6">
                      <div className="border-b border-[#D4AF37]/35 pb-2">
                        <h4 className="font-playfair font-black text-lg text-[#111111] uppercase tracking-wide">
                          Pre-Bridal Packages
                        </h4>
                      </div>
                      
                      {/* Timeline Items */}
                      <div className="flex flex-col gap-6">
                        <div className="bg-white p-5 border border-[#D4AF37]/10 shadow-[0_5px_15px_rgba(0,0,0,0.01)]">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-montserrat font-bold text-xs uppercase text-[#C48A6A] tracking-wider">1 Day Package</span>
                            <span className="font-montserrat font-extrabold text-sm text-[#D4AF37]">₹5,000</span>
                          </div>
                          <p className="font-poppins text-[11px] text-[#333333]/85 leading-relaxed">
                            Brightening Facial, Hair Spa, D-Tan, Full Body waxing, Manicure, Pedicure, Body Polishing with Steam, Eye brow, Upper Lips.
                          </p>
                        </div>

                        <div className="bg-white p-5 border border-[#D4AF37]/10 shadow-[0_5px_15px_rgba(0,0,0,0.01)]">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-montserrat font-bold text-xs uppercase text-[#C48A6A] tracking-wider">15 Day Package</span>
                            <span className="font-montserrat font-extrabold text-sm text-[#D4AF37]">₹9,999</span>
                          </div>
                          <div className="flex flex-col gap-2 font-poppins text-[10px] text-[#333333]/70 leading-relaxed border-t border-dashed border-[#D4AF37]/15 pt-2 mt-2">
                            <p><strong>Day 1:</strong> Bridal Consultation, Hair Spa, Power brightening Cleanup, back Polishing, Signature Pedicure & Manicure.</p>
                            <p><strong>Day 5-10:</strong> D-Tan, Brightening Face Mask, Body Polishing with Steam & Hair Cut.</p>
                            <p><strong>Day 11-16:</strong> Power bright Facial, D-Tan, Waxing, Back & Neck Bleach, Eye Brows, upper lips.</p>
                          </div>
                        </div>

                        <div className="bg-white p-5 border border-[#D4AF37]/10 shadow-[0_5px_15px_rgba(0,0,0,0.01)]">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-montserrat font-bold text-xs uppercase text-[#C48A6A] tracking-wider">1 Month Package</span>
                            <span className="font-montserrat font-extrabold text-sm text-[#D4AF37]">₹14,999</span>
                          </div>
                          <p className="font-poppins text-[10px] text-[#333333]/60 italic">Complete 4-week premium bridal roadmap with multiple body polishing sessions, signature manicures, custom facials and full hair repair treatments.</p>
                        </div>

                        <div className="bg-white p-5 border border-[#D4AF37]/10 shadow-[0_5px_15px_rgba(0,0,0,0.01)]">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-montserrat font-bold text-xs uppercase text-[#C48A6A] tracking-wider">3 Month Package</span>
                            <span className="font-montserrat font-extrabold text-sm text-[#D4AF37]">₹19,999</span>
                          </div>
                          <p className="font-poppins text-[10px] text-[#333333]/60 italic">The ultimate bridal luxury timeline. Spanning over 90 days with recurrent deep-conditioning hair spas, body polishings, aroma detan packs and multiple facial treatments.</p>
                        </div>
                      </div>
                    </div>

                    {/* Wedding Makeups & Groom */}
                    <div className="flex flex-col gap-8">
                      {/* Bridal Makeup */}
                      <div>
                        <div className="border-b border-[#D4AF37]/35 pb-2 mb-4">
                          <h4 className="font-playfair font-black text-lg text-[#111111] uppercase tracking-wide">
                            Bridal Makeup
                          </h4>
                        </div>
                        <div className="bg-white border border-[#D4AF37]/15 p-5 flex flex-col gap-3.5 shadow-sm">
                          <div className="flex justify-between items-center">
                            <span className="font-montserrat text-xs font-semibold text-[#111111]">Air Brush Bridal Makeup</span>
                            <span className="font-montserrat font-bold text-sm text-[#D4AF37]">₹18,000</span>
                          </div>
                          <div className="flex justify-between items-center border-t border-[#FAF7F2] pt-3">
                            <span className="font-montserrat text-xs font-semibold text-[#111111]">Bobby Brown Bridal Makeup</span>
                            <span className="font-montserrat font-bold text-sm text-[#D4AF37]">₹15,000</span>
                          </div>
                          <div className="flex justify-between items-center border-t border-[#FAF7F2] pt-3">
                            <span className="font-montserrat text-xs font-semibold text-[#111111]">Mac HD Bridal Makeup</span>
                            <span className="font-montserrat font-bold text-sm text-[#D4AF37]">₹12,000</span>
                          </div>
                        </div>
                      </div>

                      {/* Reception / Sangeet */}
                      <div>
                        <div className="border-b border-[#D4AF37]/35 pb-2 mb-4">
                          <h4 className="font-playfair font-black text-lg text-[#111111] uppercase tracking-wide">
                            Reception / Engagement / Sangeet
                          </h4>
                        </div>
                        <div className="bg-white border border-[#D4AF37]/15 p-5 flex flex-col gap-3.5 shadow-sm">
                          <div className="flex justify-between items-center">
                            <span className="font-montserrat text-xs font-semibold text-[#111111]">Air Brush Makeover</span>
                            <span className="font-montserrat font-bold text-sm text-[#D4AF37]">₹12,000</span>
                          </div>
                          <div className="flex justify-between items-center border-t border-[#FAF7F2] pt-3">
                            <span className="font-montserrat text-xs font-semibold text-[#111111]">Bobby Brown Makeover</span>
                            <span className="font-montserrat font-bold text-sm text-[#D4AF37]">₹9,000</span>
                          </div>
                          <div className="flex justify-between items-center border-t border-[#FAF7F2] pt-3">
                            <span className="font-montserrat text-xs font-semibold text-[#111111]">Mac HD Makeover</span>
                            <span className="font-montserrat font-bold text-sm text-[#D4AF37]">₹6,000</span>
                          </div>
                        </div>
                      </div>

                      {/* Groom Package Details */}
                      <div>
                        <div className="border-b border-[#D4AF37]/35 pb-2 mb-4">
                          <h4 className="font-playfair font-black text-lg text-[#111111] uppercase tracking-wide">
                            Groom Package
                          </h4>
                        </div>
                        <div className="bg-white p-5 border border-[#D4AF37]/10 shadow-[0_5px_15px_rgba(0,0,0,0.01)]">
                          <div className="flex justify-between items-center mb-3">
                            <span className="font-montserrat font-bold text-xs uppercase text-[#C48A6A] tracking-wider">Ultimate Groom Package</span>
                            <span className="font-montserrat font-extrabold text-sm text-[#D4AF37]">₹6,999</span>
                          </div>
                          <p className="font-poppins text-[11px] text-[#333333]/85 leading-relaxed">
                            Body massage, Body Polishing, 4 Facial, 4 D-Tan, 2 Pedicure, 2 Manicure, 2 Haircut, 3 Shaving sessions, Hair Spa, Color, Hair Treatment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Category: HAIR & STYLING */}
                {menuTab === "hair" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Male Services */}
                    <div>
                      <div className="border-b border-[#D4AF37]/35 pb-2 mb-4">
                        <h4 className="font-playfair font-black text-lg text-[#111111] uppercase tracking-wide">
                          Male Core Services
                        </h4>
                      </div>
                      <div className="flex flex-col gap-3 bg-white p-5 border border-[#D4AF37]/10 shadow-sm font-poppins text-xs">
                        {[
                          { name: "Haircut with Shampoo (Combo Cover)", price: "₹150" },
                          { name: "Haircut & Shave Combo (Cover)", price: "₹200" },
                          { name: "Signature Shaving", price: "₹70" },
                          { name: "Normal Shave", price: "₹49" },
                          { name: "Trimmer", price: "₹49" },
                          { name: "Hair Cut (Classic)", price: "₹99" },
                          { name: "Kids Cut", price: "₹99" },
                          { name: "Bleach", price: "₹250" },
                          { name: "Facial (Started)", price: "₹350" },
                          { name: "Face Clean-Up", price: "₹250" },
                          { name: "Head Massage (with Steam)", price: "₹200" },
                          { name: "Hair Color (Touch-Up Loreal)", price: "₹499" },
                          { name: "Hair Color (Touch-Up Matrix)", price: "₹349" },
                          { name: "High Lighting", price: "₹799" },
                          { name: "Straightening", price: "₹2,499" },
                          { name: "Hair Spa", price: "₹799" },
                          { name: "Manicure", price: "₹299" },
                          { name: "Pedicure", price: "₹449" },
                          { name: "Body Massage", price: "₹800" },
                        ].map((item) => (
                          <div key={item.name} className="flex justify-between items-center py-1.5 border-b border-[#FAF7F2] last:border-none">
                            <span className="text-[#333333] font-medium">{item.name}</span>
                            <span className="font-montserrat font-bold text-[#D4AF37]">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Female Core Services & Highlighting/Coloring */}
                    <div className="flex flex-col gap-8">
                      {/* Female Core */}
                      <div>
                        <div className="border-b border-[#D4AF37]/35 pb-2 mb-4">
                          <h4 className="font-playfair font-black text-lg text-[#111111] uppercase tracking-wide">
                            Female Core Services
                          </h4>
                        </div>
                        <div className="flex flex-col gap-3 bg-white p-5 border border-[#D4AF37]/10 shadow-sm font-poppins text-xs">
                          {[
                            { name: "Eye brow", price: "₹29" },
                            { name: "Upper Lips", price: "₹10" },
                            { name: "Forehead", price: "₹10" },
                            { name: "Chin", price: "₹10" },
                            { name: "Chin With Wax", price: "₹49" },
                            { name: "Hair Cut (Classic)", price: "₹199" },
                            { name: "Hair Cut with Shampoo", price: "₹249" },
                            { name: "Hair Dryer", price: "₹249" },
                            { name: "Ironing (According Length)", price: "₹399" },
                            { name: "Tongs / Curls", price: "₹399" },
                            { name: "One Length", price: "₹249" },
                            { name: "Advance Cut", price: "₹349" },
                            { name: "Hair Spa (with Oil)", price: "₹999" },
                            { name: "Anti Dandruff", price: "₹799" },
                            { name: "Straightening", price: "₹2,999" },
                            { name: "Rebonding", price: "₹3,999" },
                          ].map((item) => (
                            <div key={item.name} className="flex justify-between items-center py-1.5 border-b border-[#FAF7F2] last:border-none">
                              <span className="text-[#333333] font-medium">{item.name}</span>
                              <span className="font-montserrat font-bold text-[#D4AF37]">{item.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Hair Styling (General) */}
                      <div>
                        <div className="border-b border-[#D4AF37]/35 pb-2 mb-4">
                          <h4 className="font-playfair font-black text-lg text-[#111111] uppercase tracking-wide">
                            Hair Styling & Juda
                          </h4>
                        </div>
                        <div className="flex flex-col gap-3 bg-white p-5 border border-[#D4AF37]/10 shadow-sm font-poppins text-xs">
                          {[
                            { name: "Ironing", price: "₹399" },
                            { name: "Crimping", price: "₹399" },
                            { name: "Juda styling", price: "₹250 - ₹1,000" },
                            { name: "Saree Draping", price: "₹300 - ₹1,500" },
                          ].map((item) => (
                            <div key={item.name} className="flex justify-between items-center py-1.5 border-b border-[#FAF7F2] last:border-none">
                              <span className="text-[#333333] font-medium">{item.name}</span>
                              <span className="font-montserrat font-bold text-[#D4AF37]">{item.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Category: FACIALS & MASSAGES */}
                {menuTab === "skin" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Facials */}
                    <div>
                      <div className="border-b border-[#D4AF37]/35 pb-2 mb-4">
                        <h4 className="font-playfair font-black text-lg text-[#111111] uppercase tracking-wide">
                          Professional Facials
                        </h4>
                      </div>
                      <div className="flex flex-col gap-3 bg-white p-5 border border-[#D4AF37]/10 shadow-sm font-poppins text-xs">
                        {[
                          { name: "Fruit Facial", price: "₹349" },
                          { name: "Gold Facial", price: "₹399" },
                          { name: "Diamond Facial", price: "₹499" },
                          { name: "Silver Facial", price: "₹699" },
                          { name: "Organic Facial", price: "₹799" },
                          { name: "Radiance Facial", price: "₹699" },
                          { name: "Power bright Facial", price: "₹1,499" },
                          { name: "Oxy Firm (Anti Ageing) Facial", price: "₹1,499" },
                          { name: "O3+ Gold Facial", price: "₹1,499" },
                          { name: "O3+ Hydrating Facial", price: "₹1,199" },
                          { name: "O3+ Diamond Facial", price: "₹1,499" },
                          { name: "O3+ Pearl Facial", price: "₹1,249" },
                          { name: "O3+ Silver Facial", price: "₹1,499" },
                          { name: "O3+ Platinum Facial", price: "₹2,499" },
                          { name: "O3+ Whitening Facial", price: "₹2,499" },
                        ].map((item) => (
                          <div key={item.name} className="flex justify-between items-center py-1.5 border-b border-[#FAF7F2] last:border-none">
                            <span className="text-[#333333] font-medium">{item.name}</span>
                            <span className="font-montserrat font-bold text-[#D4AF37]">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Massages & Luxury Coloring / Highlighting */}
                    <div className="flex flex-col gap-8">
                      {/* Head & Foot Massages */}
                      <div>
                        <div className="border-b border-[#D4AF37]/35 pb-2 mb-4">
                          <h4 className="font-playfair font-black text-lg text-[#111111] uppercase tracking-wide">
                            Therapeutic Massages
                          </h4>
                        </div>
                        <div className="flex flex-col gap-3 bg-white p-5 border border-[#D4AF37]/10 shadow-sm font-poppins text-xs">
                          {[
                            { name: "Indian Head Massage", price: "₹199" },
                            { name: "Aroma Head Massage", price: "₹399" },
                            { name: "Moroccan Oil Head Massage", price: "₹599" },
                            { name: "Aroma Foot Massage", price: "₹499" },
                            { name: "Body Massage (General)", price: "₹799" },
                            { name: "Head & Foot Massage Combo", // Yes!
                            price: "₹849" },
                          ].map((item) => (
                            <div key={item.name} className="flex justify-between items-center py-1.5 border-b border-[#FAF7F2] last:border-none">
                              <span className="text-[#333333] font-medium">{item.name}</span>
                              <span className="font-montserrat font-bold text-[#D4AF37]">{item.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Coloring & Highlights */}
                      <div>
                        <div className="border-b border-[#D4AF37]/35 pb-2 mb-4">
                          <h4 className="font-playfair font-black text-lg text-[#111111] uppercase tracking-wide">
                            Luxury Hair Color & Highlights
                          </h4>
                        </div>
                        <div className="flex flex-col gap-3 bg-white p-5 border border-[#D4AF37]/10 shadow-sm font-poppins text-xs">
                          {[
                            { name: "Inoa / Loreal Men Global Touch-up", price: "₹499" },
                            { name: "Inoa / Loreal Women Global Touch-up", price: "₹499" },
                            { name: "Full Global Color (Matrix)", price: "₹2,499" },
                            { name: "Full Global Color (Loreal)", price: "₹2,999" },
                            { name: "Innova (Loreal Global Luxury)", price: "₹3,499" },
                            { name: "Per Streak Highlight", price: "₹149" },
                            { name: "Crown Area Highlights", price: "₹2,499" },
                            { name: "Half Head Highlights", price: "₹2,999" },
                            { name: "Full Head Highlights", price: "₹4,999" },
                          ].map((item) => (
                            <div key={item.name} className="flex justify-between items-center py-1.5 border-b border-[#FAF7F2] last:border-none">
                              <span className="text-[#333333] font-medium">{item.name}</span>
                              <span className="font-montserrat font-bold text-[#D4AF37]">{item.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Luxury Hair Treatments */}
                      <div>
                        <div className="border-b border-[#D4AF37]/35 pb-2 mb-4">
                          <h4 className="font-playfair font-black text-lg text-[#111111] uppercase tracking-wide">
                            Luxury Hair Treatments
                          </h4>
                        </div>
                        <div className="flex flex-col gap-3 bg-white p-5 border border-[#D4AF37]/10 shadow-sm font-poppins text-xs">
                          {[
                            { name: "Extreme Hair Repair Treatment", price: "₹2,999" },
                            { name: "Extreme Repair Hair/Face Treatment", price: "₹2,499" },
                            { name: "Repair Weak / Damaged Hair (Style & Aroma)", price: "₹1,299" },
                            { name: "Moisturizing sensitive/ Dry or Fizzy (Loreal)", price: "₹1,499" },
                            { name: "Anti Dandruff Treatment (Loreal)", price: "₹1,599" },
                          ].map((item) => (
                            <div key={item.name} className="flex justify-between items-center py-1.5 border-b border-[#FAF7F2] last:border-none">
                              <span className="text-[#333333] font-medium">{item.name}</span>
                              <span className="font-montserrat font-bold text-[#D4AF37]">{item.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Category: WAX, BLEACH, MANICURE & PEDICURE */}
                {menuTab === "body" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Wax & Bleach */}
                    <div>
                      <div className="border-b border-[#D4AF37]/35 pb-2 mb-4">
                        <h4 className="font-playfair font-black text-lg text-[#111111] uppercase tracking-wide">
                          Wax & Bleach (Milk, Banana, Rica, Brazilian)
                        </h4>
                      </div>
                      <div className="flex flex-col gap-3 bg-white p-5 border border-[#D4AF37]/10 shadow-sm font-poppins text-xs">
                        {[
                          { name: "Face Wax", price: "₹299" },
                          { name: "Under Arms Waxing", price: "₹49 - ₹150" },
                          { name: "Full Hand Waxing", price: "₹149 - ₹500" },
                          { name: "Full Leg Waxing", price: "₹250 - ₹800" },
                          { name: "Full Body Waxing", price: "₹999" },
                          { name: "Back Waxing", price: "₹349 - ₹800" },
                          { name: "Upper Lips Wax", price: "₹50" },
                          { name: "Chin Wax", price: "₹50" },
                          { name: "Ozone Bleach Face", price: "₹249" },
                          { name: "Cheryls Bleach Face", price: "₹349" },
                          { name: "Gold Bleach Face", price: "₹149" },
                          { name: "Back Bleach", price: "₹249 - ₹500" },
                          { name: "Body Bleach", price: "₹1,499" },
                        ].map((item) => (
                          <div key={item.name} className="flex justify-between items-center py-1.5 border-b border-[#FAF7F2] last:border-none">
                            <span className="text-[#333333] font-medium">{item.name}</span>
                            <span className="font-montserrat font-bold text-[#D4AF37]">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Manicure, Pedicure, D-Tan & Body Polishing */}
                    <div className="flex flex-col gap-8">
                      {/* Manicure & Pedicure */}
                      <div>
                        <div className="border-b border-[#D4AF37]/35 pb-2 mb-4">
                          <h4 className="font-playfair font-black text-lg text-[#111111] uppercase tracking-wide">
                            Nail Care, Manicure & Pedicure
                          </h4>
                        </div>
                        <div className="flex flex-col gap-3 bg-white p-5 border border-[#D4AF37]/10 shadow-sm font-poppins text-xs font-medium">
                          <div className="font-montserrat text-[10px] text-[#C48A6A] font-bold mt-1 tracking-wider">MANICURE SPECIALS</div>
                          {[
                            { name: "Manicure Classic", price: "₹349" },
                            { name: "Manicure Royal", price: "₹449" },
                            { name: "Manicure Signature", price: "₹599" },
                          ].map((item) => (
                            <div key={item.name} className="flex justify-between items-center py-1.5 border-b border-[#FAF7F2] last:border-none pl-2">
                              <span className="text-[#333333]">{item.name}</span>
                              <span className="font-montserrat font-bold text-[#D4AF37]">{item.price}</span>
                            </div>
                          ))}
                          
                          <div className="font-montserrat text-[10px] text-[#C48A6A] font-bold mt-3 tracking-wider">PEDICURE SPECIALS</div>
                          {[
                            { name: "Pedicure Classic", price: "₹399" },
                            { name: "Pedicure Royal", price: "₹449" },
                            { name: "Pedicure Signature", price: "₹799" },
                            { name: "Pedicure Crystal Soak", price: "₹1,399" },
                          ].map((item) => (
                            <div key={item.name} className="flex justify-between items-center py-1.5 border-b border-[#FAF7F2] last:border-none pl-2">
                              <span className="text-[#333333]">{item.name}</span>
                              <span className="font-montserrat font-bold text-[#D4AF37]">{item.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* D-Tan */}
                      <div>
                        <div className="border-b border-[#D4AF37]/35 pb-2 mb-4">
                          <h4 className="font-playfair font-black text-lg text-[#111111] uppercase tracking-wide">
                            D-Tan Treatments
                          </h4>
                        </div>
                        <div className="flex flex-col gap-3 bg-white p-5 border border-[#D4AF37]/10 shadow-sm font-poppins text-xs">
                          {[
                            { name: "D-Tan Half & Full Hand", price: "₹250 - ₹1,000" },
                            { name: "D-Tan Half & Full Leg", price: "₹350 - ₹1,000" },
                            { name: "D-Tan Ozone Pack", price: "₹449" },
                            { name: "D-Tan Aroma Pack", price: "₹399" },
                            { name: "D-Tan Lotus Pack", price: "₹499" },
                          ].map((item) => (
                            <div key={item.name} className="flex justify-between items-center py-1.5 border-b border-[#FAF7F2] last:border-none">
                              <span className="text-[#333333] font-medium">{item.name}</span>
                              <span className="font-montserrat font-bold text-[#D4AF37]">{item.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Body Polishing */}
                      <div>
                        <div className="border-b border-[#D4AF37]/35 pb-2 mb-4">
                          <h4 className="font-playfair font-black text-lg text-[#111111] uppercase tracking-wide">
                            Luxurious Body Polishing
                          </h4>
                        </div>
                        <div className="flex flex-col gap-3 bg-white p-5 border border-[#D4AF37]/10 shadow-sm font-poppins text-xs">
                          {[
                            { name: "Aroma Therapy Body Polishing - Eternal Bliss", price: "₹2,499" },
                            { name: "Stress Relief Body Polish Pack", price: "₹1,999" },
                            { name: "Aroma Therapy Body Polishing - Intense Nourishment", price: "₹5,999" },
                            { name: "Hydrating Anti Cellulite Body Wrap", price: "₹4,499" },
                          ].map((item) => (
                            <div key={item.name} className="flex justify-between items-center py-1.5 border-b border-[#FAF7F2] last:border-none">
                              <span className="text-[#333333] font-medium">{item.name}</span>
                              <span className="font-montserrat font-bold text-[#D4AF37]">{item.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-[#D4AF37]/15 bg-white flex items-center justify-between flex-wrap gap-4">
                <div className="text-left font-poppins text-[10px] text-[#333333]/50">
                  * Note: All prices are standard official menu card rates. No hidden charges.
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="cursor-pointer text-[10px] px-5 py-2 border-[#D4AF37]/20"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Close Menu
                  </Button>
                  <Button
                    variant="gold"
                    size="sm"
                    className="cursor-pointer text-[10px] px-5 py-2 shadow-lg"
                    onClick={() => {
                      setIsMenuOpen(false);
                      const target = document.querySelector("#booking");
                      if (target) target.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Book Now
                  </Button>
                </div>
              </div>

            </m.div>
          </m.div>
        )}
      </Ap>
    </section>
  );
}

export default Services;
