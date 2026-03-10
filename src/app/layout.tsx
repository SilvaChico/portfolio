import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Francisco Silva · Software Engineer",
  description:
    "Full Stack Engineer with 8+ years of experience, currently at Volkswagen Group Digital Solutions, specializing in React, TypeScript, Ruby on Rails, and modern web technologies.",
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
