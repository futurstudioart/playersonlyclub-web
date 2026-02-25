import "./globals.css";

export const metadata = {
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