import React, { useState } from "react";
import Main from "./Main";

export default function Header() {
  
  const [activeSection, setActiveSection] = useState("home");

  const handleMenuClick = (section : string) => {
    setActiveSection(section);
  }
  
  return (
      <header className="w-6/12 mx-auto p-9">
        <nav>
          <ul className="flex items-center gap-5">
            <li><a onClick={() => handleMenuClick("home")} href="#home">Home</a></li>
            <li><a onClick={() => handleMenuClick("experiencia")} href="#experiencia">Experiência</a></li>
            <li><a onClick={() => handleMenuClick("formacao")} href="#formacao">Formação</a></li>
            <li><a onClick={() => handleMenuClick("projetos")} href="#projetos">Projetos</a></li>
            <li><a onClick={() => handleMenuClick("contato")} href="#contato">Contato</a></li>
          </ul>
          <Main activeSection={activeSection} />
        </nav>
      </header>
  )
}
