"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, HeartHandshake, Scissors, BadgePercent, Sparkles, HelpCircle } from "lucide-react";

const features = [
  {
    title: "Certified Professionals",
    description: "Our hair artists, beauty specialists, and stylists are highly certified, maintaining elite global styling certifications.",
    icon: Award,
  },
  {
    title: "Premium Products",
    description: "We work strictly with premium, professional international brands to ensure optimal results and gentle formulas.",
    icon: Sparkles,
  },
  {
    title: "Hygienic Environment",
    description: "Medically sanitized toolkits, clean gowns, and thoroughly purified workstations for your safety.",
    icon: ShieldCheck,
  },
  {
    title: "Modern Styling Techniques",
    description: "From custom color balayage to advanced hair spa protein infusions, we specialize in high-end trendy methodologies.",
    icon: Scissors,
  },
  {
    title: "Affordable Luxury",
    description: "Indulge in a premium high-end salon ambiance and elite treatment standards at highly competitive Indian price brackets.",
    icon: BadgePercent,
  },
  {
    title: "Customer Satisfaction",
    description: "112+ happy clients have rated us 4.8 out of 5 stars for our warm hospitality, detail-focused services, and outcomes.",
    icon: HeartHandshake,
  },
  {
    title: "Personalized Consultation",
    description: "We assess your unique facial symmetry, hair texture, and skin profile before curating tailor-made care strategies.",
    icon: HelpCircle,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-[#111111] text-[#FAF7F2] relative overflow-hidden">
      
      {/* Decorative Golden Atmospheric Lighting */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-[#C48A6A]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-montserrat text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-bold block mb-3">
            Elite Standards
          </span>
          <h2 className="font-playfair font-black text-3xl sm:text-5xl text-white uppercase">
            Why Choose Us
          </h2>
          <div className="h-[2px] w-24 bg-[#D4AF37] mx-auto mt-4" />
          <p className="font-poppins text-xs md:text-sm text-white/60 mt-4 leading-relaxed">
            Discover why Jaipur trusts Arts Of Scissors Unisex Salon for international hair care and beauty standards.
          </p>
        </div>

        {/* Features Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-[#D4AF37]/50 hover:bg-white/[0.07] hover:shadow-[0_15px_30px_rgba(212,175,55,0.05)] transition-all duration-500 flex flex-col gap-5"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-none border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] bg-[#111111]">
                  <Icon className="w-5 h-5 text-[#D4AF37]" />
                </div>
                
                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-playfair font-bold text-lg md:text-xl text-white hover:text-[#D4AF37] transition-colors duration-300">
                    {feat.title}
                  </h3>
                  <p className="font-poppins text-xs md:text-sm text-white/65 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
