import React, { useState } from "react";
import Main from "./Main";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  const handleMenuClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="py-9">
      <header>
        <nav>
          <ul className="flex flex-wrap justify-start items-center gap-5 font-nav-menu text-neutral-400 text-xl max-sm:justify-center max-sm:text-lg">
            <li>
              <a
                className={`hover:text-white transition-all duration-500 ${
                  activeSection === "home"
                    ? "text-white bg-zinc-800 rounded-full"
                    : ""
                }`}
                onClick={() => handleMenuClick("home")}
                href="#home"
              >
                Home
              </a>
            </li>

            <li>
              <a
                className={`hover:text-white transition-all duration-500 ${
                  activeSection === "experiencia"
                    ? "text-white bg-zinc-800 rounded-full"
                    : ""
                }`}
                onClick={() => handleMenuClick("experiencia")}
                href="#experiencia"
              >
                Experiência
              </a>
            </li>

            <li>
              <a
                className={`hover:text-white transition-all duration-500 ${
                  activeSection === "formacao"
                    ? "text-white bg-zinc-800 rounded-full"
                    : ""
                }`}
                onClick={() => handleMenuClick("formacao")}
                href="#formacao"
              >
                Formação
              </a>
            </li>

            <li>
              <a
                className={`hover:text-white transition-all duration-500 ${
                  activeSection === "projetos"
                    ? "text-white bg-zinc-800 rounded-full"
                    : ""
                }`}
                onClick={() => handleMenuClick("projetos")}
                href="#projetos"
              >
                Projetos
              </a>
            </li>

            <li>
              <a
                className={`hover:text-white transition-all duration-500 ${
                  activeSection === "contato"
                    ? "text-white bg-zinc-800 rounded-full"
                    : ""
                }`}
                onClick={() => handleMenuClick("contato")}
                href="#contato"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <Main activeSection={activeSection} />
    </div>
  );
}
