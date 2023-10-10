import React from "react";
import Home from "./sections/Home";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Project from "./sections/Project";
import Contact from "./sections/Contact";

interface MainProps {
  activeSection: string;
}

export default function Main({ activeSection }: MainProps) {
  return (
    <main className="h-full w-full">
      {activeSection === "home" && <Home />}
      {activeSection === "experiência" && <Experience />}
      {activeSection === "formação" && <Education />}
      {activeSection === "projetos" && <Project />}
      {activeSection === "contato" && <Contact />}
    </main>
  );
}
