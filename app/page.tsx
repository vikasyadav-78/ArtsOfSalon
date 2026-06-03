"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";

// Dynamic imports with pre-rendering enabled for critical/lightweight sections, and client-only load for heavy below-the-fold sections
const About = dynamic(() => import("@/components/sections/About"));
const Services = dynamic(() => import("@/components/sections/Services"), { ssr: false });
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"), { ssr: false });
const Statistics = dynamic(() => import("@/components/sections/Statistics"), { ssr: false });
const Gallery = dynamic(() => import("@/components/sections/Gallery"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: false });
const InstagramSection = dynamic(() => import("@/components/sections/Instagram"), { ssr: false });
const BookingForm = dynamic(() => import("@/components/sections/BookingForm"), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/sections/Footer"), { ssr: false });

// Dynamic client UI components
import PageLoader from "@/components/ui/PageLoader";
import PageWrapper from "@/components/ui/PageWrapper";
import LazySection from "@/components/ui/LazySection";

// Floating UI components
const ScrollProgress = dynamic(() => import("@/components/floating/ScrollProgress"), { ssr: false });
const BackToTop = dynamic(() => import("@/components/floating/BackToTop"), { ssr: false });
const WhatsAppButton = dynamic(() => import("@/components/floating/WhatsAppButton"), { ssr: false });
const CallButton = dynamic(() => import("@/components/floating/CallButton"), { ssr: false });

export default function Home() {
  return (
    <>
      {/* Absolute overlay loader that unmounts dynamically */}
      <PageLoader />

      {/* Main page wrapper that handles transition animation */}
      <PageWrapper>
        {/* Floating top scroll progression indicator */}
        <ScrollProgress />
        
        {/* Translucent sticky header menu */}
        <Navbar />

        {/* consolidated luxury landing page content */}
        <main>
          <Hero />
          
          <LazySection height="600px">
            <About />
          </LazySection>

          <LazySection height="800px">
            <Services />
          </LazySection>

          <LazySection height="500px">
            <WhyChooseUs />
          </LazySection>

          <LazySection height="250px">
            <Statistics />
          </LazySection>

          <LazySection height="600px">
            <Gallery />
          </LazySection>

          <LazySection height="400px">
            <Testimonials />
          </LazySection>

          <LazySection height="450px">
            <InstagramSection />
          </LazySection>

          <LazySection height="650px">
            <BookingForm />
          </LazySection>

          <LazySection height="600px">
            <Contact />
          </LazySection>
        </main>

        {/* Gold-accented luxury footer */}
        <LazySection height="400px">
          <Footer />
        </LazySection>

        {/* Floating quick action triggers */}
        <WhatsAppButton />
        <CallButton />
        <BackToTop />
      </PageWrapper>
    </>
  );
}
