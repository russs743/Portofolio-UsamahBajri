import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="relative bg-[#05070A]">
      <Hero />
      <div className="relative z-20">
        <Skills />
        <Projects />
        <Experience />
      </div>
    </main>
  );
}