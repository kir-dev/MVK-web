import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MVK",
  description: "Műegyetemi Versenycsapat Közösség",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-dvh flex flex-col justify-between relative`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
