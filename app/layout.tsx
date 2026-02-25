import "./globals.css";
import { Bodoni_Moda, Manrope } from "next/font/google";

const display = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const sans = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Players Only Club",
  description: "Players Only Club. Virtus in ludo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sans.className} ${display.className}`}>{children}</body>
    </html>
  );
}