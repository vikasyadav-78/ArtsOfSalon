"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Heart, Award, Sparkles } from "lucide-react";

interface StatItem {
  id: number;
  value: number;
  suffix: string;
  decimals?: number;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const stats: StatItem[] = [
  {
    id: 1,
    value: 112,
    suffix: "+",
    label: "Google Reviews",
    description: "Highly rated five-star reviews on business profiles",
    icon: Star,
  },
  {
    id: 2,
    value: 5000,
    suffix: "+",
    label: "Happy Clients",
    description: "Loyal customers in Jaipur who trust our aesthetic sense",
    icon: Heart,
  },
  {
    id: 3,
    value: 15,
    suffix: "+",
    label: "Core Services",
    description: "Bespoke customized hair, skin, and grooming treatments",
    icon: Award,
  },
  {
    id: 4,
    value: 4.8,
    suffix: "/5",
    decimals: 1,
    label: "Average Rating",
    description: "Delivering unmatched service consistency and standards",
    icon: Sparkles,
  },
];

function StatCount({ value, suffix, decimals = 0, trigger }: { value: number; suffix: string; decimals?: number; trigger: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    const start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing out quadratic
      const easeProgress = progress * (2 - progress);
      const currentCount = start + easeProgress * (end - start);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [value, trigger]);

  return (
    <span className="font-playfair font-black text-4xl sm:text-5xl md:text-6xl text-[#D4AF37]">
      {count.toFixed(decimals)}
      <span>{suffix}</span>
    </span>
  );
}

export function Statistics() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-[#FAF7F2] border-y border-[#D4AF37]/15 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 justify-items-center">
          
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: stat.id * 0.1 }}
                className="flex flex-col items-center text-center max-w-xs group"
              >
                {/* Decorative Icon */}
                <div className="w-12 h-12 rounded-full border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-4 bg-white shadow-sm group-hover:bg-[#111111] group-hover:border-transparent transition-all duration-300">
                  <Icon className="w-5 h-5 text-[#D4AF37]" />
                </div>

                {/* Animated counter value */}
                <StatCount 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  decimals={stat.decimals} 
                  trigger={isInView} 
                />

                {/* label */}
                <span className="font-montserrat font-bold text-xs md:text-sm tracking-wider text-[#111111] uppercase mt-3 mb-1.5 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {stat.label}
                </span>

                {/* description */}
                <p className="font-poppins text-[11px] md:text-xs text-[#333333]/60 leading-relaxed">
                  {stat.description}
                </p>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Statistics;
