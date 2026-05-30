"use client";

import { Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";

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

const Facebook = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#111111] text-[#FAF7F2] border-t border-[#D4AF37]/20 pt-20 pb-10 relative overflow-hidden">
      {/* Background Subtle Sparkle/Light Glare */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[#C48A6A]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
        
        {/* Column 1: Logo & Brand Info */}
        <div className="flex flex-col gap-6">
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="flex flex-col w-fit group"
          >
            <span className="font-playfair font-black text-2xl tracking-wider text-[#D4AF37] uppercase transition-colors duration-300">
              Arts Of Scissors
            </span>
            <span className="font-cormorant font-medium text-sm tracking-[0.25em] text-[#C48A6A] uppercase text-right -mt-1">
              Unisex Salon
            </span>
          </a>
          <p className="text-white/60 font-poppins text-xs md:text-sm leading-relaxed max-w-sm">
            Experience world-class grooming, hair care, and premium cosmetics. Arts Of Scissors brings international standards of beauty and styling to Jaipur.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://www.instagram.com/artsofscissor/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 bg-white/5"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 bg-white/5"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-6">
          <h4 className="font-playfair font-bold text-lg tracking-wider text-[#D4AF37] relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-[#C48A6A]">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { label: "Home", href: "#home" },
              { label: "About Us", href: "#about" },
              { label: "Our Services", href: "#services" },
              { label: "Gallery & Portfolio", href: "#gallery" },
              { label: "Reviews", href: "#reviews" },
              { label: "Contact Us", href: "#contact" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-white/60 hover:text-[#D4AF37] font-montserrat text-xs tracking-wider uppercase transition-colors duration-300 flex items-center gap-1 group"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#D4AF37]" />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Featured Services */}
        <div className="flex flex-col gap-6">
          <h4 className="font-playfair font-bold text-lg tracking-wider text-[#D4AF37] relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-[#C48A6A]">
            Our Services
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              "Hair Styling & Cuts",
              "Premium Hair Coloring",
              "Luxury Hair Spa & Keratin",
              "Advanced Facials & Detan",
              "Bridal & Party Makeups",
              "Beard Grooming & Styling",
            ].map((srv) => (
              <li key={srv}>
                <a
                  href="#services"
                  onClick={(e) => handleScrollTo(e, "#services")}
                  className="text-white/60 hover:text-[#D4AF37] font-poppins text-xs md:text-sm transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C48A6A]" />
                  <span>{srv}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="flex flex-col gap-6">
          <h4 className="font-playfair font-bold text-lg tracking-wider text-[#D4AF37] relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-[#C48A6A]">
            Contact Details
          </h4>
          <div className="flex flex-col gap-4">
            
            <a 
              href="tel:9680905608"
              className="flex items-start gap-3 text-white/70 hover:text-[#D4AF37] transition-colors group"
            >
              <Phone className="w-4 h-4 text-[#C48A6A] mt-1 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="font-montserrat text-xs tracking-wider uppercase text-[#FAF7F2]/80">Phone Number</span>
                <span className="font-poppins text-sm font-semibold mt-0.5 text-[#D4AF37] group-hover:text-white transition-colors">9680905608</span>
              </div>
            </a>

            <div className="flex items-start gap-3 text-white/70">
              <Clock className="w-4 h-4 text-[#C48A6A] mt-1 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="font-montserrat text-xs tracking-wider uppercase text-[#FAF7F2]/80">Salon Hours</span>
                <span className="font-poppins text-sm mt-0.5 text-white/60">Sun - Mon: 09:00 AM - 10:00 PM</span>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/place/Arts+Of+Scissors+Unisex+Salon/@26.9452426,75.738151,17z/data=!4m6!3m5!1s0x396db382e27ec323:0xfc5e4c8f5715179d!8m2!3d26.9452426!4d75.738151!16s%2Fg%2F11h_bzqpzv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-white/70 hover:text-[#D4AF37] transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#C48A6A] mt-1 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="font-montserrat text-xs tracking-wider uppercase text-[#FAF7F2]/80">Location Address</span>
                <span className="font-poppins text-sm mt-0.5 leading-relaxed text-white/60">
                  Kalwar Rd, Suraj Nagar,<br />Jhotwara, Jaipur, Rajasthan 302012
                </span>
              </div>
            </a>

          </div>
        </div>

      </div>

      {/* Footer Bottom copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/40 font-poppins text-xs text-center sm:text-left">
          &copy; {new Date().getFullYear()} Arts Of Scissors Unisex Salon. All Rights Reserved.
        </p>
        <p className="text-white/40 font-poppins text-[10px] tracking-widest uppercase text-center sm:text-right">
          Designed with Elegance & Passion
        </p>
      </div>
    </footer>
  );
}

export default Footer;
