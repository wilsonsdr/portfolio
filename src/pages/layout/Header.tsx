import React, { useState } from "react";
import Main from "./Main";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  const handleMenuClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="mx-auto flex w-10/12 flex-row gap-[200px] py-20">
      <header>
        <nav className="fixed">
          <ul className="flex flex-col flex-wrap items-start justify-start gap-2 font-nav-menu text-lg text-info-color max-md:justify-center max-md:text-lg">
            <li>
              <a
                aria-label="home"
                className={`block p-2 ${
                  activeSection === "home"
                    ? "rounded-md bg-highlight-color text-bg-color"
                    : "hover:text-secondary-color"
                }`}
                onClick={() => handleMenuClick("home")}
                href="#home"
              >
                home
              </a>
            </li>

            <li>
              <a
                aria-label="experiencia"
                className={`block p-2 ${
                  activeSection === "experiencia"
                    ? "rounded-md bg-highlight-color  text-bg-color"
                    : "hover:text-secondary-color"
                }`}
                onClick={() => handleMenuClick("experiencia")}
                href="#experiencia"
              >
                experiência
              </a>
            </li>

            <li>
              <a
                aria-label="formacao"
                className={`block p-2 ${
                  activeSection === "formacao"
                    ? "rounded-md bg-highlight-color  text-bg-color"
                    : "hover:text-secondary-color"
                }`}
                onClick={() => handleMenuClick("formacao")}
                href="#formacao"
              >
                formação
              </a>
            </li>

            <li>
              <a
                aria-label="projetos"
                className={`block p-2 ${
                  activeSection === "projetos"
                    ? "rounded-md bg-highlight-color text-bg-color"
                    : "hover:text-secondary-color"
                }`}
                onClick={() => handleMenuClick("projetos")}
                href="#projetos"
              >
                projetos
              </a>
            </li>

            <li>
              <a
                aria-label="contato"
                className={`block p-2 ${
                  activeSection === "contato"
                    ? "rounded-md bg-highlight-color text-bg-color"
                    : "hover:text-secondary-color"
                }`}
                onClick={() => handleMenuClick("contato")}
                href="#contato"
              >
                contato
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <Main activeSection={activeSection} />
    </div>
  );
}
