"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Navigation, PhoneCall, Sparkles } from "lucide-react";
import Button from "../ui/Button";

export function Contact() {
  const directionsUrl = "https://www.google.com/maps/place/Arts+Of+Scissors+Unisex+Salon/@26.9452426,75.738151,17z/data=!4m6!3m5!1s0x396db382e27ec323:0xfc5e4c8f5715179d!8m2!3d26.9452426!4d75.738151!16s%2Fg%2F11h_bzqpzv";

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#111111] text-[#FAF7F2] relative overflow-hidden">
      
      {/* Decorative Golden Light */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-montserrat text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-bold block mb-3">
            Find Us
          </span>
          <h2 className="font-playfair font-black text-3xl sm:text-5xl text-white uppercase">
            Contact & Location
          </h2>
          <div className="h-[2px] w-24 bg-[#D4AF37] mx-auto mt-4" />
          <p className="font-poppins text-xs md:text-sm text-white/60 mt-4 leading-relaxed">
            Step into a world of tailored styling. Visit our physical space in Jaipur or call to inquire.
          </p>
        </div>

        {/* Split Content-Maps Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left: Contact Info details card */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white/5 border border-white/10 p-8 sm:p-12 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                <span className="font-montserrat text-xs tracking-wider uppercase text-[#C48A6A] font-bold">
                  Arts Of Scissors Unisex Salon
                </span>
              </div>
              
              <h3 className="font-playfair text-2xl md:text-3xl font-black text-white uppercase mb-8 leading-tight">
                {"Let's Transform"} <br />
                <span className="gold-text-gradient">Your Look Today</span>
              </h3>

              <div className="flex flex-col gap-6">
                
                {/* Phone */}
                <a
                  href="tel:9680905608"
                  className="flex items-start gap-4 text-white/70 hover:text-[#D4AF37] transition-all group"
                >
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#D4AF37] bg-white/5 group-hover:bg-[#D4AF37] group-hover:text-[#111111] group-hover:border-transparent transition-all">
                    <Phone className="w-4 h-4 fill-current" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-montserrat text-[10px] tracking-wider uppercase text-white/40">Call Inquiries</span>
                    <span className="font-poppins text-base font-bold text-white mt-0.5 group-hover:text-[#D4AF37] transition-colors">9680905608</span>
                  </div>
                </a>

                {/* Address */}
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-white/70 hover:text-[#D4AF37] transition-all group"
                >
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#D4AF37] bg-white/5 group-hover:bg-[#D4AF37] group-hover:text-[#111111] group-hover:border-transparent transition-all">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-montserrat text-[10px] tracking-wider uppercase text-white/40">Salon Address</span>
                    <span className="font-poppins text-sm text-white/70 mt-0.5 leading-relaxed group-hover:text-white transition-colors">
                      Kalwar Rd, Suraj Nagar,<br />Jhotwara, Jaipur, Rajasthan 302012
                    </span>
                  </div>
                </a>

                {/* Timing */}
                <div className="flex items-start gap-4 text-white/70">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#D4AF37] bg-white/5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-montserrat text-[10px] tracking-wider uppercase text-white/40">Opening Hours</span>
                    <span className="font-poppins text-sm text-white/70 mt-0.5">
                      Sunday - Monday:<br />09:00 AM - 10:00 PM
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* CTAs Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
              <Button
                variant="gold"
                size="sm"
                onClick={() => window.open("tel:9680905608")}
                className="w-full flex items-center gap-2 justify-center"
              >
                <PhoneCall className="w-3.5 h-3.5 fill-current" />
                <span>Call Now</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(directionsUrl, "_blank")}
                className="w-full flex items-center gap-2 justify-center border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all bg-white/5"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </Button>
            </div>

          </motion.div>

          {/* Right: Embedded Google Maps frame */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 aspect-video lg:aspect-auto min-h-[350px] relative gold-border-glow shadow-2xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.5501861783057!2d75.73557607629555!3d26.945247358482025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db382e27ec323%3A0xfc5e4c8f5715179d!2sArts+Of+Scissors+Unisex+Salon!5e0!3m2!1sen!2sin!4v1717000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Arts Of Scissors Unisex Salon Google Maps Location"
              className="grayscale-[20%] contrast-[110%] absolute inset-0"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
