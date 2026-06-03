import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700", "900"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["500", "600"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Arts Of Scissors Unisex Salon | Premium Luxury Salon in Jaipur",
  description: "Experience premium hair, beauty, skin care, and grooming services at Arts Of Scissors Unisex Salon, Kalwar Road, Jhotwara, Jaipur. Certified professionals, premium products, and hygienic environment.",
  keywords: ["Luxury Salon Jaipur", "Unisex Salon Jhotwara", "Best Haircut Jaipur", "Bridal Makeup Jhotwara", "Hair Spa Jaipur", "Arts Of Scissors"],
  authors: [{ name: "Arts Of Scissors Unisex Salon" }],
  openGraph: {
    title: "Arts Of Scissors Unisex Salon | Premium Luxury Salon in Jaipur",
    description: "Experience premium hair, beauty, skin care, and grooming services at Arts Of Scissors Unisex Salon, Jhotwara, Jaipur.",
    url: "https://artsofscissors.in",
    siteName: "Arts Of Scissors Unisex Salon",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${cormorant.variable} ${poppins.variable} ${montserrat.variable} bg-[#FAF7F2] text-[#333333] font-poppins antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
