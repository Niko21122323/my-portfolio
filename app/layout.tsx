import type { Metadata } from "next";
import { Geist, Funnel_Sans } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/lib/gsap/providers/LenisProvider";
import Provider from "@/lib/transitions/Provider";
import Preloader from "@/components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "👋 Hi, I'm Nikola",
  description:
    "A full stack web developer with three years of experience shipping production-ready applications across agency and SaaS environments. Partners with designers, backend engineers, and QA teams to deliver reliable, high-performing products on tight timelines. Confident in the ability to thrive in fast-paced settings and leverage skills in JavaScript/TypeScript development, frontend architecture, and API integration to enable team success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${funnelSans.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <LenisProvider>
          <Preloader />
          <Provider>
            <Navbar />
            {children}
            <Footer />
          </Provider>
        </LenisProvider>
      </body>
    </html>
  );
}
