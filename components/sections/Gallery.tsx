"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { GalleryItem } from "@/types";

const galleryData: GalleryItem[] = [
  {
    id: 1,
    url: "/images/img3.webp",
    category: "hair",
    alt: "Arts Of Scissors Precision Hair Art Highlight",
    title: "Precision Hair Art",
  },
  {
    id: 2,
    url: "/images/ig2.webp",
    category: "beauty",
    alt: "Arts Of Scissors Premium Bridal Prep",
    title: "Premium Bridal Prep",
  },
  {
    id: 3,
    url: "/images/premium_grooming.webp",
    category: "grooming",
    alt: "Arts Of Scissors Elite Royal Shave with Indian Barber",
    title: "Elite Royal Shave",
  },
  {
    id: 4,
    url: "/images/img8.webp",
    category: "hair",
    alt: "Arts Of Scissors Luxury Hair Therapy",
    title: "Luxury Hair Therapy",
  },
  {
    id: 5,
    url: "/images/img9.webp",
    category: "beauty",
    alt: "Arts Of Scissors Detox Face Cleanse Skincare",
    title: "Detox Face Cleanse",
  },
  {
    id: 6,
    url: "/images/img10.webp",
    category: "grooming",
    alt: "Arts Of Scissors Classic Beard Design",
    title: "Classic Beard Design",
  },
  {
    id: 7,
    url: "/images/img2.webp",
    category: "hair",
    alt: "Arts Of Scissors Bespoke Styling Lounge",
    title: "Bespoke Styling Lounge",
  },
  {
    id: 8,
    url: "/images/ig1.webp",
    category: "beauty",
    alt: "Arts Of Scissors Reception Glamour Makeover",
    title: "Reception Glamour Makeover",
  },
  {
    id: 9,
    url: "/images/img5.webp",
    category: "grooming",
    alt: "Arts Of Scissors Modern Men's Shave & Cut",
    title: "Modern Men's Shave & Cut",
  },
];

const categories = [
  { label: "All Works", value: "all" },
  { label: "Hair Art", value: "hair" },
  { label: "Skin & Beauty", value: "beauty" },
  { label: "Male Grooming", value: "grooming" },
];

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = galleryData.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  const openLightbox = (id: number) => {
    const index = galleryData.findIndex((item) => item.id === id);
    if (index !== -1) setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? galleryData.length - 1 : prev! - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === galleryData.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-montserrat text-xs tracking-[0.3em] uppercase text-[#C48A6A] font-bold block mb-3">
            Portfolio Showcase
          </span>
          <h2 className="font-playfair font-black text-3xl sm:text-5xl text-[#111111] uppercase">
            Our Luxury Gallery
          </h2>
          <div className="h-[2px] w-24 bg-[#D4AF37] mx-auto mt-4" />
          <p className="font-poppins text-xs md:text-sm text-[#333333]/70 mt-4 leading-relaxed">
            Witness the artistic precision, hair treatments, and beautiful transformations created by our master stylists.
          </p>
        </div>

        {/* Gallery Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`relative px-5 py-2.5 border transition-all duration-300 font-montserrat text-[10px] md:text-xs tracking-widest uppercase cursor-pointer ${
                  isActive
                    ? "bg-[#111111] border-transparent text-[#D4AF37]"
                    : "bg-white border-[#D4AF37]/25 text-[#111111] hover:border-[#D4AF37]"
                }`}
              >
                <span className="font-semibold">{cat.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeGalleryGlow"
                    className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-[#D4AF37]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Masonry / Variable Grid Layout */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              // Custom masonry heights based on indices to give variable luxury layout feel
              const isLarge = index === 1 || index === 4;
              const gridSpan = isLarge ? "row-span-2" : "row-span-1";

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.3, ease: "easeOut" } }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                  onClick={() => openLightbox(item.id)}
                  className={`group relative overflow-hidden bg-[#111111] cursor-pointer shadow-lg transition-[box-shadow] duration-500 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] ${gridSpan}`}
                >
                  {/* Photo container via optimized Next.js Image */}
                  <Image
                    src={item.url}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Glassmorphic Luxury Overlay */}
                  <div className="absolute inset-0 bg-[#111111]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                    
                    {/* Zoom Icon */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-[#D4AF37] border border-white/20 scale-75 group-hover:scale-100 transition-all duration-300">
                      <ZoomIn className="w-4 h-4" />
                    </div>

                    {/* text */}
                    <motion.div
                      initial={{ y: 15, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-1 border-l-2 border-[#D4AF37] pl-3"
                    >
                      <span className="font-montserrat text-[10px] tracking-widest text-[#D4AF37] uppercase font-semibold">
                        {item.category}
                      </span>
                      <h4 className="font-playfair text-white text-base md:text-lg font-bold">
                        {item.title}
                      </h4>
                    </motion.div>
                  </div>

                  {/* Gradient Overlay for general visual polish */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 bg-black/95 z-[99] flex flex-col items-center justify-center p-4 cursor-zoom-out select-none"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white flex items-center justify-center transition-all duration-300 cursor-pointer z-55 focus:outline-none"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev Arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white flex items-center justify-center transition-all duration-300 cursor-pointer z-55 focus:outline-none"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* High-res Image Preview */}
              <motion.div
                key={lightboxIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl max-h-[70vh] w-full aspect-video flex flex-col items-center justify-center cursor-default bg-[#111111]/30 border border-white/5 p-2 shadow-2xl overflow-hidden"
              >
                {/* Photo */}
                <Image
                  src={galleryData[lightboxIndex].url}
                  alt={galleryData[lightboxIndex].alt}
                  fill
                  sizes="(max-width: 1200px) 100vw, 85vw"
                  priority
                  className="object-contain border border-[#D4AF37]/20"
                />

                {/* Lightbox Caption Footer */}
                <div className="absolute bottom-4 left-0 right-0 text-center bg-black/60 backdrop-blur-sm py-3 z-20">
                  <span className="font-montserrat text-[10px] tracking-widest text-[#D4AF37] uppercase font-bold">
                    {galleryData[lightboxIndex].category}
                  </span>
                  <h3 className="font-playfair text-white text-lg md:text-xl font-bold mt-1">
                    {galleryData[lightboxIndex].title}
                  </h3>
                </div>
              </motion.div>

              {/* Next Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white flex items-center justify-center transition-all duration-300 cursor-pointer z-55 focus:outline-none"
                aria-label="Next Image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

export default Gallery;
