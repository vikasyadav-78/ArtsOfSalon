"use client";

import React, { useState, useEffect, useRef } from "react";

interface LazySectionProps {
  children: React.ReactNode;
  height?: string;
}

export function LazySection({ children, height = "400px" }: LazySectionProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isIntersected, setIsIntersected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsIntersected(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersected(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px 0px", // Pre-load 300px before entering viewport for a seamless experience
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // During SSR and initial hydration, render children to match HTML and preserve SEO indexability.
  if (!isMounted) {
    return (
      <div style={{ minHeight: height }}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} style={{ minHeight: isIntersected ? "auto" : height }}>
      {isIntersected ? children : null}
    </div>
  );
}

export default LazySection;
