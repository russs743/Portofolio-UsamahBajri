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

  // 1. Logic Scroll Detection untuk ganti background navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Logic Lock Scroll Body saat mobile menu terbuka
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Tutup menu setelah klik link

    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

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
      isScrolled ? "py-4 bg-[#05070A]/90 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
    }`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
        
        {/* Logo Initials */}
        <div 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
          className="flex items-center gap-2 group cursor-pointer z-[110]"
        >
          <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-black text-xl transition-transform group-hover:rotate-[360deg] duration-500">
            U
          </div>
          <span className="font-bold tracking-tighter text-xl hidden sm:block uppercase">
            Usamah<span className="text-gray-500 font-normal text-sm ml-1">S.Kom</span>
          </span>
        </div>

        {/* Desktop Navigation Link */}
        <div className="hidden md:flex items-center gap-1 p-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="px-5 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Action Section */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex flex-col text-right">
            <span className="text-[9px] tracking-[0.2em] text-yellow-500 font-bold uppercase">Available Now</span>
            <span className="text-[9px] tracking-[0.1em] text-gray-500 uppercase">Notice Period: 0 Bulan</span>
          </div>

          {/* Hamburger Button for Mobile */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl text-white p-2.5 bg-white/5 border border-white/10 rounded-xl z-[110] hover:bg-white/10 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#05070A] z-[105] h-screen w-screen overflow-hidden flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
        isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible translate-y-[-20px]"
      }`}>
        <div className="flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-5xl font-bold italic uppercase tracking-tighter text-gray-700 hover:text-white transition-all active:scale-95"
            >
              {link.name}
            </a>
          ))}
          
          <div className="mt-12 p-8 bg-white/5 rounded-[2rem] border border-white/10 max-w-[280px] mx-auto">
            <p className="text-[10px] text-yellow-500 font-bold tracking-[0.3em] uppercase mb-3">Get in Touch</p>
            <p className="text-sm text-gray-400 break-words mb-4">usamah.bajri@gmail.com</p>
            <div className="flex justify-center gap-4">
               <span className="text-[9px] px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full font-bold uppercase tracking-widest border border-yellow-500/20">
                 Notice: 0 Mo
               </span>
            </div>
          </div>
        </div>

        {/* Background Decor di Mobile Menu */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-yellow-500/5 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
      </div>
    </nav>
  );
}
