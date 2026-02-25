import "./globals.css";
import { Bodoni_Moda, Manrope } from "next/font/google";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "Players Only Club",
  description: "Players Only Club — Virtus in ludo. A luxury performance society.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} ${bodoni.variable}`}>
        {children}
      </body>
    </html>
  );
}
