import type { Metadata, Viewport } from "next";
import { Inter, Tajawal } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const tajawal = Tajawal({ 
  subsets: ["arabic"], 
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal"
});

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ar">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </head>
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden font-tajawal",
          tajawal.className
        )}
        suppressHydrationWarning
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
        <a href="https://wa.me/966541428814" target="_blank" rel="noopener noreferrer" className="fixed bottom-[20px] left-[20px] w-[50px] h-[50px] flex items-center justify-center bg-[#25d366] rounded-full text-white text-[1.4rem] z-[90] transition-transform hover:scale-110 shadow-[0_4px_14px_rgba(37,211,102,.3)]" aria-label="واتساب">
          <i className="fab fa-whatsapp"></i>
        </a>
      </body>
    </html>
  );
}
