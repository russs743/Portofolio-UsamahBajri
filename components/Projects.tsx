"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { FiExternalLink, FiGithub, FiCheckCircle, FiX } from "react-icons/fi";
import Image from "next/image";

const projects = [
  {
    title: "Website Tester",
    company: "UPT-TIK ITENAS",
    category: "Pengalaman Kerja",
    description: "Menguji fungsionalitas dan performa website SISTA, menyusun laporan hasil uji, serta membuat dokumentasi BRD untuk kebutuhan sistem.",
    tags: ["SISTA", "BRD", "Testing"],
    icon: <FiCheckCircle className="text-blue-500" />,
    color: "bg-blue-500/10",
    images: ["/images/projects/test1.jpg", "/images/projects/test2.jpg", "/images/projects/test3.jpg"]
  },
  {
    title: "Website Al Mubarokah",
    category: "Project",
    description: "Membuat website profil sekolah SD Al Mubarokah menggunakan Laravel serta mendesain antarmuka menggunakan Figma dan Draw.io.",
    tags: ["PHP", "Laravel", "Figma"],
    icon: <FiExternalLink className="text-yellow-500" />,
    color: "bg-yellow-500/10",
    images: ["/images/projects/SIP-7.jpg", "/images/projects/SIP-2.jpg", "/images/projects/SIP-3.jpg"]
  },
  {
    title: "Drakor Recommendation System",
    category: "Tugas Akhir",
    description: "Mengembangkan sistem rekomendasi berdasarkan pola rating pengguna menggunakan Python dan metode Collaborative Filtering.",
    tags: ["Python", "Machine Learning", "Pearson"],
    icon: <FiGithub className="text-purple-500" />,
    color: "bg-purple-500/10",
    images: ["/images/projects/4.jpg", "/images/projects/1.jpg", "/images/projects/3.jpg"]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      const tl = gsap.timeline();
      
      tl.to(modalRef.current, { opacity: 1, duration: 0.3, display: "flex" })
        .fromTo(contentRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power4.out" })
        .fromTo(".scatter-img", 
          { scale: 0, opacity: 0, rotate: () => gsap.utils.random(-15, 15) }, 
          { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.2)" }, 
          "-=0.4"
        );
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  const closeModal = () => {
    gsap.to(modalRef.current, { 
      opacity: 0, 
      duration: 0.3, 
      onComplete: () => setSelectedProject(null) 
    });
  };

  return (
    <section id="projects" className="relative z-30 bg-[#05070A] py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 min-h-screen">
      <div className="container mx-auto">
        <div className="mb-20">
          <h2 className="text-yellow-500 font-medium tracking-[0.2em] mb-4 uppercase text-[10px] md:text-xs text-center md:text-left">
            Selected Works
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold italic tracking-tighter uppercase text-white leading-none text-center md:text-left">
            MY <span className="text-gray-500 font-normal">PROJECTS</span>
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mt-6 mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.05] hover:-translate-y-3 cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl ${project.color} flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {project.icon}
              </div>

              <div className="space-y-4">
                <span className="text-[10px] text-yellow-500 uppercase tracking-[0.2em] font-bold block">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-yellow-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="mt-10 flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">
                View Showcase <FiExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div 
          ref={modalRef}
          onClick={(e) => e.target === e.currentTarget && closeModal()}
          className="fixed inset-0 z-[150] bg-[#05070A]/98 backdrop-blur-2xl flex items-center justify-center p-6 overflow-hidden cursor-pointer"
          style={{ display: "none", opacity: 0 }}
        >
          <button 
            onClick={closeModal}
            className="absolute top-24 right-8 md:top-25 md:right-12 text-white/50 hover:text-yellow-500 transition-all z-[200] flex items-center gap-3 group"
          >
            <span className="text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Close Project</span>
            <FiX className="text-3xl md:text-4xl" />
          </button>

          <div className="relative w-full max-w-7xl flex flex-col items-center justify-center gap-12 cursor-default">
            
            {/* Scattered Images - Left */}
            <div className="hidden xl:flex flex-col gap-8 absolute -left-10 2xl:-left-20">
              {selectedProject.images.slice(0, 2).map((img: string, i: number) => (
                <div key={i} className="scatter-img w-72 h-44 relative bg-white/5 rounded-3xl border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <Image src={img} alt={selectedProject.title} fill className="object-cover" />
                </div>
              ))}
            </div>

            {/* Central Content */}
            <div ref={contentRef} className="max-w-2xl text-center z-10 px-4">
               <div className={`w-20 h-20 rounded-[2rem] ${selectedProject.color} flex items-center justify-center text-4xl mb-10 mx-auto border border-white/5`}>
                {selectedProject.icon}
              </div>
              <span className="text-yellow-500 uppercase tracking-[0.4em] font-black text-[10px]">
                {selectedProject.category}
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold italic text-white mt-6 tracking-tighter uppercase leading-[0.9]">
                {selectedProject.title}
              </h2>
              <p className="text-gray-400 text-base md:text-lg mt-8 leading-relaxed max-w-lg mx-auto">
                {selectedProject.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mt-10 justify-center">
                {selectedProject.tags.map((tag: string, i: number) => (
                  <span key={i} className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-300 uppercase tracking-widest font-bold">
                    {tag}
                  </span>
                ))}
              </div>

              <button 
                onClick={closeModal}
                className="mt-12 px-10 py-4 border border-white/10 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500"
              >
                ← Back to List
              </button>
            </div>

            {/* Scattered Images - Right */}
            <div className="hidden xl:flex flex-col gap-8 absolute -right-10 2xl:-right-20">
              {selectedProject.images.slice(1, 3).map((img: string, i: number) => (
                <div key={i} className="scatter-img w-72 h-44 relative bg-white/5 rounded-3xl border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                   <Image src={img} alt={selectedProject.title} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}