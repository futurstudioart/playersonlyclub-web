import "./globals.css";
import type { Metadata } from "next";
import { Manrope, Bodoni_Moda } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Players Only Club",
  description: "Players Only Club — Virtus in ludo. A luxury performance society.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${bodoni.variable}`}>{children}</body>
    </html>
  );
}