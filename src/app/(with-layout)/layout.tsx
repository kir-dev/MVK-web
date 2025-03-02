import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar/Navbar";
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
        className={`${inter.className} min-h-screen h-screen flex flex-col justify-between relative`}
      >
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
