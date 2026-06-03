import { useState, useEffect } from "react";
import { Star, Phone, Calendar, ArrowDown } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";

const headlines = [
  "Where Style Meets Perfection",
  "Crafting Elite Hair Artistry",
  "Indulge In Absolute Luxury"
];

export function Hero() {
  const [currentText, setCurrentText] = useState("Where Style Meets Perfection");
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Delay typing loop until loader is fully unmounted
    const timer = setTimeout(() => {
      setIsReady(true);
      setIsDeleting(true);
      setTypingSpeed(1500); // Briefly hold the first text before backspacing
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const fullText = headlines[headlineIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing characters
        setCurrentText(fullText.substring(0, currentText.length + 1));
        
        // If typing is complete, wait and start backspacing
        if (currentText === fullText) {
          setTypingSpeed(2500); // Hold for 2.5s
          setIsDeleting(true);
        } else {
          setTypingSpeed(80 + Math.random() * 40); // Fast realistic typing
        }
      } else {
        // Backspacing
        setCurrentText(fullText.substring(0, currentText.length - 1));
        
        // If backspacing is complete, move to next headline
        if (currentText === "") {
          setIsDeleting(false);
          setHeadlineIndex((prev) => (prev + 1) % headlines.length);
          setTypingSpeed(400); // Brief pause before typing next
        } else {
          setTypingSpeed(40); // Fast backspacing
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, headlineIndex, typingSpeed, isReady]);

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
      <div className="absolute inset-0 scale-105 animate-[pulse_10s_ease-in-out_infinite]">
        <Image
          src="/images/premium_interior.webp"
          alt="Arts of Scissors Unisex Salon Interior"
          fill
          sizes="100vw"
          priority
          quality={80}
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-[#111111]/90" />
      
      {/* Decorative Golden Ambient Glare */}
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] bg-[#C48A6A]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center w-full">
        
        {/* Rating Block */}
        <div
          className="flex items-center gap-2 bg-[#FAF7F2]/5 backdrop-blur-md px-4 py-2 border border-white/10 rounded-full mb-8 shadow-2xl animate-fade-in-up"
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
        </div>

        {/* Dynamic Typewriter Headline */}
        <div className="min-h-[130px] sm:min-h-[190px] md:min-h-[220px] flex items-center justify-center mb-6 w-full">
          <h1 className="font-playfair font-black text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wider text-white uppercase leading-none text-center">
            <span className="gold-text-gradient">{currentText}</span>
            <span className="animate-[pulse_1s_infinite] text-[#D4AF37] ml-1 font-light font-sans">|</span>
          </h1>
        </div>

        {/* Subheadline */}
        <p
          className="font-cormorant font-medium text-lg sm:text-2xl md:text-3xl text-white/80 leading-relaxed max-w-3xl mb-12 italic animate-fade-in-up [animation-delay:400ms]"
        >
          {"Experience premium hair, beauty, skin care and grooming services at Jaipur's trusted unisex salon."}
        </p>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto animate-fade-in-up [animation-delay:600ms]"
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
        </div>
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
      <div
        onClick={() => handleScrollTo("#about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer group z-10 animate-fade-in-scroll [animation-delay:1000ms]"
      >
        <span className="font-montserrat text-[10px] tracking-[0.25em] uppercase text-white/55 group-hover:text-[#D4AF37] transition-colors duration-300">
          Discover More
        </span>
        <div
          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-all animate-scroll-bounce"
        >
          <ArrowDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
