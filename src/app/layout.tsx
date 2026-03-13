import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Francisco Silva | Software Engineer",
  description:
    "Portfolio of Francisco Silva, a software engineer with 10 years of experience across large-scale systems and product work, currently building factory logistics software at Volkswagen Group Digital Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
