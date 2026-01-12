import type { Metadata } from "next";
import { Instrument_Sans, Hubot_Sans } from "next/font/google";
import "./globals.css";

const hubotSans = Hubot_Sans({
  variable: "--font-hubot-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikola Stojanovski",
  description: "Full-stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${instrumentSans.variable} ${hubotSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
