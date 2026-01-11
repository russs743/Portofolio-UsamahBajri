"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();

  // Jika yang diklik adalah Home, langsung tembak ke koordinat 0 (paling atas)
  if (href === "#home") {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    return;
  }

  const targetId = href.replace("#", "");
  const elem = document.getElementById(targetId);
  
  if (elem) {
    const offset = 80; // Jarak agar tidak tertutup Navbar
    const elementPosition = elem.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? "py-4" : "py-8"
    }`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
        
        {/* Logo / Initials */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-black text-xl transition-transform group-hover:rotate-[360deg] duration-700">
            U
          </div>
          <span className="font-bold tracking-tighter text-xl text-gray-600 hidden md:block">
            USAMAH<span className="text-gray-200 font-normal">HASAN</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="flex items-center gap-2 p-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="px-4 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA - Hire Me / Status */}
        <div className="hidden lg:block">
          <div className="flex items-center gap-3 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-md">
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            <span className="text-[10px] text-gray-100 font-bold tracking-[0.2em] uppercase">Ready to Work</span>
          </div>
        </div>
      </div>
    </nav>
  );
}