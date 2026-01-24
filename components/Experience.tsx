"use client";
import { useState, useEffect, useRef } from "react";
import { FiAward, FiX } from "react-icons/fi";
import Image from "next/image";
import gsap from "gsap";

const experiences = [
  {
    title: "Kepala Divisi Olahraga dan Esport",
    organization: "HMSI ITENAS",
    period: "2022 – 2023",
    description: [
      "Mengelola kegiatan olahraga dan turnamen e-sport antar mahasiswa Sistem Informasi.",
      "Bertanggung jawab atas koordinasi tim dan pelaksanaan event divisi secara menyeluruh."
    ],
    icon: <FiAward />,
    type: "Organization",
    images: ["/images/experience/hmsi1.jpg", "/images/experience/hmsi2.jpg"], 
    color: "bg-blue-600/10"
  },
  {
    title: "Ketua UKM Karate",
    organization: "ITENAS",
    period: "2023 – 2024",
    description: [
      "Memimpin latihan rutin dan koordinasi kompetisi karate antar universitas.",
      "Mengelola administrasi dan pengembangan anggota UKM Karate ITENAS."
    ],
    icon: <FiAward />,
    type: "Organization",
    images: ["/images/experience/karate1.jpg", "/images/experience/karate2.jpg"],
    color: "bg-red-600/10"
  }
];

export default function Experience() {
  const [activeExp, setActiveExp] = useState<any>(null);
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (activeExp) {
      document.body.style.overflow = "hidden";
      const tl = gsap.timeline();
      tl.to(modalRef.current, { opacity: 1, duration: 0.3, display: "flex" })
        .fromTo(contentRef.current, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.2)" });
    } else {
      document.body.style.overflow = "unset";
    }
  }, [activeExp]);

  const closeModal = () => {
    gsap.to(modalRef.current, { 
      opacity: 0, 
      duration: 0.2, 
      onComplete: () => setActiveExp(null) 
    });
  };

  return (
    <section id="experience" className="relative z-30 bg-[#05070A] py-32 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="container mx-auto">
        <div className="mb-24">
          <h2 className="text-yellow-500 font-medium tracking-[0.2em] mb-4 uppercase text-xs">Career Journey</h2>
          <h1 className="text-6xl md:text-8xl font-bold italic tracking-tighter uppercase text-white leading-none">
            EXPERI<span className="text-gray-500 font-normal">ENCE</span>
          </h1>
        </div>

        {/* List Experience */}
        <div className="flex flex-col border-t border-white/10">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              onClick={() => setActiveExp(exp)}
              className="group relative flex flex-col md:flex-row items-center justify-between py-16 border-b border-white/10 cursor-pointer hover:bg-white/[0.02] transition-all px-4"
            >
              <div className="flex flex-col md:flex-row items-baseline gap-4 md:gap-12 z-10">
                <span className="text-gray-600 font-bold text-xl uppercase tracking-tighter">0{index + 1}</span>
                <h3 className="text-3xl md:text-6xl font-bold text-white group-hover:text-yellow-500 transition-all duration-300 uppercase">
                  {exp.title}
                </h3>
              </div>
              
              <div className="flex flex-col items-end z-10 mt-4 md:mt-0 text-right">
                <p className="text-yellow-500 font-bold uppercase tracking-widest text-sm">{exp.organization}</p>
                <p className="text-gray-500 text-xs mt-1">{exp.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CENTER POP-UP MODAL */}
      {activeExp && (
        <div 
          ref={modalRef}
          onClick={(e) => e.target === e.currentTarget && closeModal()}
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 cursor-pointer"
          style={{ display: "none", opacity: 0 }}
        >
          <div 
            ref={contentRef}
            className="relative w-full max-w-5xl bg-[#0A0C10] border border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-y-auto max-h-[90vh] cursor-default shadow-2xl"
          >
            <button 
              onClick={closeModal} 
              className="absolute top-8 right-8 text-white/50 hover:text-white text-3xl z-10"
            >
              <FiX />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Sisi Kiri: Deskripsi */}
              <div className="order-2 lg:order-1 flex flex-col justify-center">
                <div className="mb-8">
                  <span className="text-yellow-500 font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">
                    {activeExp.type}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold italic text-white uppercase tracking-tighter leading-[0.9] mb-4">
                    {activeExp.title}
                  </h2>
                  <p className="text-xl text-gray-500 italic">@ {activeExp.organization}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {activeExp.description.map((desc: string, i: number) => (
                    <li key={i} className="flex gap-4 text-gray-400 text-sm md:text-base leading-relaxed">
                      <span className="text-yellow-500 font-bold">/</span> {desc}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={closeModal}
                  className="w-fit px-8 py-3 border border-white/10 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all"
                >
                  ← Back
                </button>
              </div>

              {/* Sisi Kanan: 2 Foto Grid Sejajar */}
              <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 h-full">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 shadow-xl">
                  <Image src={activeExp.images[0]} alt="Activity 1" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 shadow-xl mt-8">
                  <Image src={activeExp.images[1]} alt="Activity 2" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}