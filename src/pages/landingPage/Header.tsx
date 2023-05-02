import React, { useState } from "react";
import Main from "./Main";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  const handleMenuClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="mx-auto w-8/12 py-7">
      <header>
        <nav>
          <ul className="flex flex-wrap items-center justify-start gap-4 font-nav-menu text-xl text-info-color max-md:justify-center max-md:text-lg">
            <li>
              <a
                className={`block p-2 ${
                  activeSection === "home"
                    ? "rounded-md bg-highlight-color  text-bg-color"
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
                className={`block p-2 ${
                  activeSection === "experiencia"
                    ? "rounded-md bg-highlight-color  text-bg-color"
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
                className={`block p-2 ${
                  activeSection === "formacao"
                    ? "rounded-md bg-highlight-color  text-bg-color"
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
                className={`block p-2 ${
                  activeSection === "projetos"
                    ? "rounded-md bg-highlight-color text-bg-color"
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
                className={`block p-2 ${
                  activeSection === "contato"
                    ? "rounded-md bg-highlight-color text-bg-color"
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
