"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { 
  SiPython, SiPhp, SiDart, SiMysql, 
  SiFigma, SiLaravel, SiGooglesheets 
} from "react-icons/si";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Draggable);
}

const skills = [
  { name: "Python", icon: <SiPython />, color: "text-[#3776AB]" },
  { name: "PHP", icon: <SiPhp />, color: "text-[#777BB4]" },
  { name: "Laravel", icon: <SiLaravel />, color: "text-[#FF2D20]" },
  { name: "Dart", icon: <SiDart />, color: "text-[#0175C2]" },
  { name: "MySQL", icon: <SiMysql />, color: "text-[#4479A1]" },
  { name: "Figma", icon: <SiFigma />, color: "text-[#F24E1E]" },
  { name: "Sheets", icon: <SiGooglesheets />, color: "text-[#34A853]" },
  { name: "Excel", icon: null, color: "text-green-500", isExcel: true },
];

export default function Skills() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Animasi Overlay: Nutup Hero
    gsap.fromTo(sectionRef.current, 
      { y: 100, borderRadius: "100px 100px 0 0" }, 
      {
        y: 0,
        borderRadius: "0px",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top center",
          scrub: true,
        }
      }
    );

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollContent = scrollContainer.firstChild as HTMLElement;
    const clone = scrollContent.cloneNode(true);
    scrollContainer.appendChild(clone);
    
    const totalWidth = scrollContent.offsetWidth;

    // Fungsi buat bikin infinite loop yang bisa di-update
    let xPos = 0;
    const speed = 1; // Kecepatan gerak otomatis

    const animate = () => {
      xPos -= speed;
      if (xPos <= -totalWidth) xPos = 0;
      gsap.set(scrollContainer, { x: xPos });
    };

    // Jalankan animasi frame by frame biar bisa di-pause/resume gampang
    let ticker = gsap.ticker.add(animate);

    // Fitur Draggable
    Draggable.create(scrollContainer, {
      type: "x",
      inertia: true,
      onPress: () => {
        gsap.ticker.remove(animate); // Berhenti pas ditekan
      },
      onDrag: function() {
        xPos = this.x; // Update xPos biar pas dilepas nggak loncat
        if (xPos > 0) xPos = -totalWidth;
        if (xPos < -totalWidth) xPos = 0;
        gsap.set(this.target, { x: xPos });
      },
      onRelease: () => {
        // Kasih delay dikit biar nggak kaku, lalu lanjut jalan
        gsap.ticker.add(animate);
      },
      // Penting: Biar hover dan klik di dalam kartu tetep jalan
      dragClickables: true,
      allowEventDefault: true
    });

    return () => {
      gsap.ticker.remove(animate);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="skills"
      ref={sectionRef} 
      className="relative z-20 -mt-20 py-24 bg-[#05070A] text-white overflow-hidden border-t border-white/10 shadow-[0_-50px_100px_rgba(0,0,0,1)]"
    >
      <div className="container mx-auto px-6 md:px-24 mb-12">
        <h2 className="text-yellow-500 font-medium tracking-[0.2em] mb-4 uppercase text-[10px] text-center md:text-left">
          Tools & Tech Stack
        </h2>
      </div>

      <div className="relative flex whitespace-nowrap cursor-grab active:cursor-grabbing px-4">
        <div ref={scrollRef} className="flex gap-4 md:gap-8 items-center py-4">
          <div className="flex gap-4 md:gap-8 items-center">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="group flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-yellow-500/50 hover:scale-105"
              >
                <div className={`text-2xl md:text-3xl transition-transform duration-300 group-hover:rotate-12 ${skill.color}`}>
                  {skill.isExcel ? (
                    <div className="text-xs font-bold border border-green-500 px-1 rounded text-green-500">XL</div>
                  ) : (
                    skill.icon
                  )}
                </div>
                <span className="text-[10px] md:text-sm font-bold tracking-widest uppercase text-gray-400 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}