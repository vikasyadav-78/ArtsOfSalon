import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gold" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center font-montserrat font-semibold tracking-wider uppercase transition-all duration-300 ease-out rounded-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 overflow-hidden hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98]",
          
          // Variant styling
          variant === "primary" && 
            "bg-[#111111] text-[#FAF7F2] border border-transparent hover:bg-[#D4AF37] hover:text-[#111111] hover:shadow-[0_10px_20px_rgba(212,175,55,0.15)]",
          
          variant === "secondary" && 
            "bg-white text-[#111111] border border-transparent hover:bg-[#111111] hover:text-white hover:shadow-[0_10px_20px_rgba(0,0,0,0.08)]",
          
          variant === "outline" && 
            "bg-transparent text-[#111111] border border-[#111111] hover:bg-[#111111] hover:text-white",
          
          variant === "gold" && 
            "bg-[#D4AF37] text-[#111111] border border-transparent hover:bg-[#111111] hover:text-[#D4AF37] hover:border-[#D4AF37] hover:shadow-[0_10px_20px_rgba(212,175,55,0.25)]",
            
          variant === "ghost" && 
            "bg-transparent text-[#FAF7F2] hover:text-[#D4AF37]",
          
          // Size styling
          size === "sm" && "px-5 py-2.5 text-xs",
          size === "md" && "px-8 py-3.5 text-xs md:text-sm",
          size === "lg" && "px-10 py-4.5 text-sm md:text-base",
          
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
        {/* Subtle high-end lighting glint effect on hover */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
