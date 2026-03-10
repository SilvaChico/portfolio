import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Francisco Silva · Software Engineer",
  description:
    "Software Engineer with 10 years of experience, currently building factory logistics software at Volkswagen Group Digital Solutions for 100+ factories across 27 countries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="mesh-bg min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
