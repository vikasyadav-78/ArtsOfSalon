"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";
import Image from "next/image";

const Instagram = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const instagramPosts = [
  {
    id: 1,
    url: "/images/ig1.webp",
    postUrl: "https://www.instagram.com/p/CkkClBLJa_P/?img_index=1",
    likes: 489,
    comments: 34,
    alt: "Arts of Scissors professional stylist work - Silver gown reception styling",
  },
  {
    id: 2,
    url: "/images/ig2.webp",
    postUrl: "https://www.instagram.com/p/CkkVZ7HpMgU/",
    likes: 542,
    comments: 41,
    alt: "Arts of Scissors luxury hair treatment highlights - Traditional red lehenga bridal styling",
  },
  {
    id: 3,
    url: "/images/ig3.webp",
    postUrl: "https://www.instagram.com/p/CiRldmotFwN/?img_index=1",
    likes: 415,
    comments: 22,
    alt: "Arts of Scissors custom beard trim and style - Traditional blue salwar kameez design",
  },
];

export function InstagramSection() {
  const instagramUrl = "https://www.instagram.com/artsofscissor/";

  return (
    <section className="py-24 bg-[#FAF7F2] overflow-hidden border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <span className="font-montserrat text-xs tracking-[0.3em] uppercase text-[#C48A6A] font-bold block mb-3">
              Social Connection
            </span>
            <h2 className="font-playfair font-black text-3xl sm:text-5xl text-[#111111] uppercase leading-tight">
              Follow Our Journey
            </h2>
            <div className="h-[2px] w-24 bg-[#D4AF37] mt-4" />
            <p className="font-poppins text-xs md:text-sm text-[#333333]/70 mt-4 leading-relaxed">
              Stay inspired by daily styling releases, before-after makeovers, hair design tips, and premier grooming styles directly on our active feed.
            </p>
          </div>
          <div>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open(instagramUrl, "_blank")}
              className="flex items-center gap-3 px-8 py-4 bg-[#111111] text-[#FAF7F2] border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#111111] transition-all duration-300 font-montserrat font-bold text-xs md:text-sm tracking-widest uppercase cursor-pointer group shadow-xl"
            >
              <Instagram className="w-4 h-4 text-[#D4AF37] group-hover:text-[#111111] transition-colors" />
              <span>@artsofscissor</span>
            </motion.button>
          </div>
        </div>

        {/* Instagram Feed 3-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden bg-[#111111] shadow-md border border-[#D4AF37]/10"
            >
              {/* Image */}
              <Image
                src={post.url}
                alt={post.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-108"
              />

              {/* Hover overlay with live counts */}
              <div className="absolute inset-0 bg-[#111111]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 z-10">
                <Instagram className="w-7 h-7 text-[#D4AF37]" />
                <div className="flex items-center gap-4 text-white">
                  <div className="flex items-center gap-1 font-montserrat text-xs md:text-sm font-semibold">
                    <Heart className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 font-montserrat text-xs md:text-sm font-semibold">
                    <MessageCircle className="w-4 h-4 fill-white text-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>

              {/* Decorative Subtle Gold Corner */}
              <div className="absolute top-0 right-0 w-[4px] h-[4px] bg-[#D4AF37] transform scale-0 group-hover:scale-100 transition-transform duration-300" />
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default InstagramSection;
