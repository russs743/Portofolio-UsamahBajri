"use client";
import { FiExternalLink, FiGithub, FiCheckCircle } from "react-icons/fi";

const projects = [
  {
    title: "Website Tester",
    company: "UPT-TIK ITENAS",
    category: "Pengalaman Kerja",
    description: "Menguji fungsionalitas dan performa website SISTA, menyusun laporan hasil uji, serta membuat dokumentasi BRD untuk kebutuhan sistem.",
    tags: ["SISTA", "BRD", "Testing"],
    icon: <FiCheckCircle className="text-blue-500" />,
    color: "bg-blue-500/10",
  },
  {
    title: "Website Al Mubarokah",
    category: "Project",
    description: "Membuat website profil sekolah SD Al Mubarokah menggunakan Laravel serta mendesain antarmuka menggunakan Figma dan Draw.io.",
    tags: ["PHP", "Laravel", "Figma"],
    icon: <FiExternalLink className="text-yellow-500" />,
    color: "bg-yellow-500/10",
  },
  {
    title: "Korean Drama Recommendation System",
    category: "Tugas Akhir",
    description: "Mengembangkan sistem rekomendasi berdasarkan pola rating pengguna menggunakan Python dan metode Collaborative Filtering.",
    tags: ["Python", "Collaborative Filtering", "Pearson Correlation"],
    icon: <FiGithub className="text-purple-500" />,
    color: "bg-purple-500/10",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-30 bg-[#05070A] py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="text-yellow-500 font-medium tracking-[0.2em] mb-4 uppercase text-[10px] md:text-xs">
            Selected Works
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold italic tracking-tighter uppercase text-white leading-none">
            MY <span className="text-gray-500 font-normal">PROJECTS</span>
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.05] hover:-translate-y-3"
            >
              <div className={`w-14 h-14 rounded-2xl ${project.color} flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform`}>
                {project.icon}
              </div>

              <div className="space-y-4">
                <span className="text-[10px] text-yellow-500 uppercase tracking-[0.2em] font-bold">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-yellow-500 transition-colors">
                  {project.title}
                </h3>
                {project.company && <p className="text-gray-300 text-xs font-medium -mt-2">{project.company}</p>}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-10">
                {project.tags.map((tag, tIndex) => (
                  <span 
                    key={tIndex}
                    className="text-[9px] px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-500 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}