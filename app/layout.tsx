import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Usamah Hasan | Portfolio",
  description: "Portofolio Usamah Hasan - Lulusan Sistem Informasi ITENAS Bandung. Data Analyst & Web Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#05070A] text-white antialiased`}>
        <Navbar />

        <main className="relative">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}