"use client";
import { FiArrowUpRight, FiMail, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative z-30 bg-[#05070A] text-white pt-32 pb-10 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          
          {/* Sisi Kiri: CTA */}
          <div>
            <h2 className="text-yellow-500 font-medium tracking-[0.2em] mb-6 uppercase text-[10px]">Ready to Collaborate?</h2>
            <h1 className="text-5xl md:text-7xl font-bold italic tracking-tighter uppercase leading-[0.9] mb-10">
              Let's work <br /> <span className="text-gray-500 font-normal">together.</span>
            </h1>
            
            {/* Badge Status dari CV */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold tracking-widest uppercase">
                Notice Period: 0 Bulan
              </span>
            </div>
          </div>

          {/* Sisi Kanan: Links & Info */}
          <div className="flex flex-col justify-end gap-12">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-4 font-bold">Socials</p>
                <ul className="space-y-3 text-sm">
                  <li><a href="https://www.linkedin.com/in/usamah-hasan-29a971387/" className="hover:text-yellow-500 transition-colors flex items-center gap-2">LinkedIn <FiArrowUpRight/></a></li>
                  <li><a href="https://www.instagram.com/usamahbajri/" className="hover:text-yellow-500 transition-colors flex items-center gap-2">Instagram <FiArrowUpRight/></a></li>
                </ul>
              </div>
              <div>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-4 font-bold">Contact</p>
                <a href="mailto:usamah.bajri@gmail.com" className="text-sm hover:text-yellow-500 transition-colors">
                  usamah.bajri@gmail.com
                </a>
              </div>
            </div>

            {/* Info Organisasi dari CV */}
            <div className="pt-8 border-t border-white/5">
              <p className="text-gray-600 text-[9px] uppercase tracking-[0.3em] mb-2 font-bold">Leadership Experience</p>
              <p className="text-xs text-gray-400">Ex-Head of Sports Division HMSI & Head of Karate UKM ITENAS</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5 opacity-40">
          <p className="text-[10px] tracking-widest uppercase">&copy; 2026 Usamah Hasan. S.Kom - ITENAS</p>
          <p className="text-[10px] tracking-[0.5em] uppercase italic">Bogor, Indonesia</p>
        </div>
      </div>
    </footer>
  );
}