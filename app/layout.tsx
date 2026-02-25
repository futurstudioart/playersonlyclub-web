import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Players Only Club",
  description: "Players Only Club — Virtus in ludo. A luxury performance society.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}