import React from "react";
import Home from "@/components/sections/Home";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Project from "@/components/sections/Project";
import Contact from "@/components/sections/Contact";

interface MainProps {
  activeSection: string;
}

export default function Main({ activeSection }: MainProps) {
  return (
    <main className="w-9/12">
      {activeSection == "home" && <Home />}
      {activeSection == "experiencia" && <Experience />}
      {activeSection == "formacao" && <Education />}
      {activeSection == "projetos" && <Project />}
      {activeSection == "contato" && <Contact />}
    </main>
  );
}
