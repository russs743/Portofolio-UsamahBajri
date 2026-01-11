"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".anim-down", {
        y: -30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home"
      ref={containerRef}
      className="sticky top-0 min-h-screen w-full bg-[#05070A] text-white flex items-center py-20 lg:py-0 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Text - Ukuran dinamis sesuai layar */}
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] lg:text-[12vw] font-black text-white/[0.03] whitespace-nowrap z-0 select-none pointer-events-none">
        DATA ANALYST
      </h2>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center z-10">
        
        {/* Sisi Kiri: About Me (7 Kolom) */}
        <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left">
          <h2 className="anim-down text-yellow-500 font-medium tracking-[0.2em] mb-4 uppercase text-xs md:text-sm">
            System Information Graduate
          </h2>
          <h1 className="anim-down text-5xl md:text-7xl lg:text-8xl font-bold mb-6 lg:mb-8 italic tracking-tighter uppercase leading-none">
            Usamah <br /> <span className="text-gray-500 font-normal">Hasan</span>
          </h1>

          <div className="anim-down flex flex-col lg:flex-row items-center lg:items-start gap-4 max-w-xl mx-auto lg:mx-0">
            <div className="hidden lg:block w-12 h-[1px] bg-yellow-500 mt-3"></div>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Lulusan Sistem Informasi ITENAS yang memiliki minat pada analisis
              data, basis data, dan pengembangan sistem. Berpengalaman dalam
              pengujian sistem berbasis web.
            </p>
          </div>
        </div>

        {/* Sisi Kanan: Foto & Stats (5 Kolom) */}
        <div className="lg:col-span-5 order-1 lg:order-2 relative flex justify-center lg:justify-end anim-down">
          <div className="relative inline-block">
            {/* Box Foto - Ukuran mengecil di HP */}
            <div className="relative w-[260px] h-[340px] md:w-[320px] md:h-[420px] lg:w-[380px] lg:h-[500px] bg-gray-900 border border-white/10 overflow-hidden group rounded-2xl shadow-2xl">
              <Image
                src="/images/Hero/Main.jpg"
                alt="Usamah Hasan"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Floating Stats - Muncul di samping pas layar gede, muncul di bawah pas layar kecil */}
            <div className="absolute -right-4 lg:-right-20 -bottom-10 lg:bottom-auto lg:top-10 flex lg:flex-col gap-3 lg:gap-6 bg-[#080A0F]/60 backdrop-blur-md p-4 lg:p-6 border border-white/5 shadow-2xl z-30 min-w-[120px] lg:min-w-[200px] rounded-xl scale-90 lg:scale-100">
              <div className="border-l-2 border-yellow-500 pl-3 lg:pl-4">
                <p className="text-gray-400 text-[8px] lg:text-[10px] uppercase tracking-widest mb-1">Pendidikan</p>
                <h3 className="text-sm lg:text-xl font-bold uppercase">S.Kom</h3>
                <p className="hidden lg:block text-gray-400 text-[10px] italic text-nowrap">ITENAS Bandung</p>
              </div>

              <div className="border-l-2 border-blue-500 pl-3 lg:pl-4">
                <p className="text-gray-400 text-[8px] lg:text-[10px] uppercase tracking-widest mb-1">Experience</p>
                <h3 className="text-sm lg:text-md font-bold uppercase">Web Tester</h3>
              </div>

              <div className="hidden lg:block border-l-2 border-white/20 pl-4">
                <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">Focus</p>
                <h3 className="text-lg font-bold italic">Data & Web</h3>
              </div>
            </div>

            {/* Dekorasi Aksen */}
            <div className="absolute -bottom-4 -left-4 w-16 h-16 lg:w-24 lg:h-24 border-b-2 border-l-2 border-yellow-500/30 -z-10"></div>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full lg:w-1/3 h-full bg-blue-950/10 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
}