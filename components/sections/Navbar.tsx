import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { Button } from "../ui/Button";

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

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const scrollY = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  // Handle smooth scroll clicks
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-slide-down ${
          isScrolled
            ? "glassmorphism py-4 shadow-lg"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="flex flex-col group cursor-pointer"
          >
            <span className={`font-playfair font-black text-lg md:text-2xl tracking-wider uppercase group-hover:text-[#D4AF37] transition-colors duration-300 ${
              isScrolled ? "text-[#111111]" : "text-white"
            }`}>
              Arts Of Scissors
            </span>
            <span className="font-cormorant font-medium text-[10px] md:text-xs tracking-[0.25em] text-[#C48A6A] uppercase text-right -mt-1">
              Unisex Salon
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={`font-montserrat font-medium text-xs tracking-widest hover:text-[#D4AF37] uppercase transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#D4AF37] after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300 ${
                    isScrolled ? "text-[#111111]" : "text-white/90"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Separator */}
            <div className="h-4 w-[1px] bg-[#D4AF37]/30" />

            {/* Contact utilities & CTA */}
            <div className="flex items-center gap-5">
              <a
                href="tel:9680905608"
                className={`flex items-center gap-2 font-montserrat text-xs font-semibold tracking-wider hover:text-[#D4AF37] transition-colors duration-300 ${
                  isScrolled ? "text-[#111111]" : "text-white/90"
                }`}
              >
                <Phone className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                <span>9680905608</span>
              </a>
              <a
                href="https://www.instagram.com/artsofscissor/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={`w-8 h-8 rounded-full border flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 ${
                  isScrolled 
                    ? "border-[#111111]/10 text-[#111111]" 
                    : "border-white/20 text-white"
                }`}
              >
                <Instagram className="w-4 h-4" />
              </a>
              <Button
                variant="gold"
                size="sm"
                onClick={() => {
                  const target = document.querySelector("#booking");
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book Appointment
              </Button>
            </div>
          </div>

          {/* Mobile Hamburguer */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`lg:hidden p-1 focus:outline-none cursor-pointer ${
              isScrolled ? "text-[#111111]" : "text-white"
            }`}
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {/* Backdrop */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 z-50 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Content Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-80 max-w-full glassmorphism-dark text-white z-50 flex flex-col p-8 lg:hidden shadow-2xl transition-all duration-400 ease-in-out transform ${
          mobileMenuOpen ? "translate-x-0 opacity-100 visible" : "translate-x-full opacity-0 invisible"
        }`}
      >
        {/* Header inside drawer */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex flex-col">
            <span className="font-playfair font-black text-lg tracking-wider text-[#D4AF37] uppercase">
              Arts Of Scissors
            </span>
            <span className="font-cormorant font-medium text-[10px] tracking-[0.25em] text-[#C48A6A] uppercase text-right -mt-1">
              Unisex Salon
            </span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-[#D4AF37] focus:outline-none p-1 cursor-pointer"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col gap-6 mb-12">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="font-montserrat font-semibold text-sm tracking-widest text-white/95 hover:text-[#D4AF37] uppercase transition-colors duration-300 py-1"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Quick links & Call */}
        <div className="mt-auto flex flex-col gap-6">
          <a
            href="tel:9680905608"
            className="flex items-center gap-3 font-montserrat text-sm font-semibold tracking-wider text-white hover:text-[#D4AF37] transition-colors duration-300"
          >
            <div className="w-9 h-9 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
              <Phone className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
            </div>
            <span>9680905608</span>
          </a>
          <a
            href="https://www.instagram.com/artsofscissor/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-montserrat text-sm font-semibold tracking-wider text-white hover:text-[#D4AF37] transition-colors duration-300"
          >
            <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
              <Instagram className="w-4 h-4 text-[#C48A6A]" />
            </div>
            <span>Follow us on Instagram</span>
          </a>
          <Button
            variant="gold"
            size="md"
            onClick={() => {
              setMobileMenuOpen(false);
              const target = document.querySelector("#booking");
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full text-center mt-2"
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
