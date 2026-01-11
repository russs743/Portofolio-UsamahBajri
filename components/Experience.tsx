"use client";
import { FiBriefcase, FiAward } from "react-icons/fi";

const experiences = [
  {
    title: "Website Tester",
    organization: "UPT-TIK ITENAS",
    period: "Mar 2023 – Jun 2023",
    description: [
      "Menguji fungsionalitas dan performa website SISTA (Sistem Informasi Tugas Akhir).",
      "Berkolaborasi dengan tim pengembang dan menyusun laporan hasil uji.",
      "Membuat dokumentasi BRD (Business Requirements Document) untuk kebutuhan sistem."
    ],
    icon: <FiBriefcase />,
    type: "Work"
  },
  {
    title: "Kepala Divisi Olahraga dan Esport",
    organization: "HMSI ITENAS",
    period: "2022 – 2023",
    description: [
      "Mengelola kegiatan olahraga dan turnamen e-sport antar mahasiswa.",
      "Bertanggung jawab atas koordinasi tim dan pelaksanaan event divisi."
    ],
    icon: <FiAward />,
    type: "Organization"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-30 bg-[#05070A] py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="container mx-auto">
        <div className="mb-20 text-center lg:text-left">
          <h2 className="text-yellow-500 font-medium tracking-[0.2em] mb-4 uppercase text-[10px] md:text-xs">
            Career Journey
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold italic tracking-tighter uppercase text-white leading-none">
            EXPERI<span className="text-gray-500 font-normal">ENCE</span>
          </h1>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col md:flex-row gap-8 md:gap-16 items-start p-8 md:p-12 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:bg-white/[0.04] transition-all duration-500"
            >
              {/* Year & Type Side */}
              <div className="w-full md:w-1/4">
                <span className="text-yellow-500 font-bold text-sm tracking-widest block mb-2">
                  {exp.period}
                </span>
                <div className="flex items-center gap-2 text-gray-500 uppercase text-[10px] tracking-widest font-bold">
                  <span className="p-2 bg-white/5 rounded-lg text-lg text-white group-hover:text-yellow-500 transition-colors">
                    {exp.icon}
                  </span>
                  {exp.type}
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-3/4 space-y-6">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-gray-400 font-medium italic">
                    {exp.organization}
                  </p>
                </div>

                <ul className="space-y-4">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-400 text-sm md:text-base leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/50 mt-2 shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative Number */}
              <span className="absolute top-8 right-12 text-8xl font-black text-white/[0.02] group-hover:text-white/[0.05] transition-all select-none pointer-events-none">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}