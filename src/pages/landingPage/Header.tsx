import React, { useState } from "react";
import Main from "./Main";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  const handleMenuClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="py-7 w-8/12 mx-auto">
      <header>
        <nav>
          <ul className="flex flex-wrap justify-start items-center gap-4 font-nav-menu text-xl text-info-color max-md:justify-center max-md:text-lg">
            <li>
              <a
                className={`p-2 block ${
                  activeSection === "home"
                    ? "text-bg-color bg-highlight-color  rounded-md"
                    : "hover:text-secondary-color"
                }`}
                onClick={() => handleMenuClick("home")}
                href="#home"
              >
                Home
              </a>
            </li>

            <li>
              <a
                className={`p-2 block ${
                  activeSection === "experiencia"
                    ? "text-bg-color bg-highlight-color  rounded-md"
                    : "hover:text-secondary-color"
                }`}
                onClick={() => handleMenuClick("experiencia")}
                href="#experiencia"
              >
                Experiência
              </a>
            </li>

            <li>
              <a
                className={`p-2 block ${
                  activeSection === "formacao"
                    ? "text-bg-color bg-highlight-color  rounded-md"
                    : "hover:text-secondary-color"
                }`}
                onClick={() => handleMenuClick("formacao")}
                href="#formacao"
              >
                Formação
              </a>
            </li>

            <li>
              <a
                className={`p-2 block ${
                  activeSection === "projetos"
                    ? "text-bg-color bg-highlight-color rounded-md"
                    : "hover:text-secondary-color"
                }`}
                onClick={() => handleMenuClick("projetos")}
                href="#projetos"
              >
                Projetos
              </a>
            </li>

            <li>
              <a
                className={`p-2 block ${
                  activeSection === "contato"
                    ? "text-bg-color bg-highlight-color rounded-md"
                    : "hover:text-secondary-color"
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
