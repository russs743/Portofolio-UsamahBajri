"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Tutup menu pas diklik di HP
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    
    if (elem) {
      const offset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      isScrolled ? "py-4 bg-[#05070A]/80 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
    }`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
        
        {/* Logo Initials */}
        <div 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
          className="flex items-center gap-2 group cursor-pointer z-[110]"
        >
          <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-black text-xl">U</div>
          <span className="font-bold tracking-tighter text-xl hidden sm:block uppercase">
            Usamah<span className="text-gray-500 font-normal text-sm ml-1">S.Kom</span>
          </span>
        </div>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-1 p-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Section (Notice Period & Hamburger) */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:block text-[9px] tracking-[0.2em] text-gray-500 uppercase font-bold text-right leading-tight">
            <span className="text-yellow-500 block">Available Now</span>
            Notice Period: 0 Bulan
          </div>

          {/* Toggle Button for Mobile */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl text-white p-2 bg-white/5 rounded-lg z-[110]"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#05070A] z-[100] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
        isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible translate-y-[-20px]"
      }`}>
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-4xl font-bold italic uppercase tracking-tighter text-gray-500 hover:text-yellow-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-[10px] text-yellow-500 font-bold tracking-[0.3em] uppercase mb-2">Contact Me</p>
            <p className="text-sm text-gray-400">usamah.bajri@gmail.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
