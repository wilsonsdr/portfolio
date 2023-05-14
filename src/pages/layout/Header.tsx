import React, { useState } from "react";
import Main from "./Main";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeSlide, setActiveSlide] = useState("0%");

  const handleMenuClick = (section: string, top: string) => {
    setActiveSection(section);
    setActiveSlide(top);
  };

  return (
    <div className="mx-auto flex w-10/12 flex-row gap-[200px] py-20">
      <header>
        <nav className="fixed">
          <ul className="relative flex flex-col flex-wrap items-start justify-start gap-2 font-nav-menu text-lg text-info-color max-md:justify-center max-md:text-lg">
            <li
              className={`absolute left-0 top-[${activeSlide}] -z-20 h-1/5 w-full rounded-md bg-highlight-color duration-300 ease-out`}
            ></li>
            <li>
              <a
                aria-label="home"
                className={`mt-[2px] block px-4 py-2 ${
                  activeSection === "home"
                    ? "text-bg-color"
                    : "hover:text-secondary-color"
                }`}
                onClick={() => handleMenuClick("home", "0%")}
                href="#home"
              >
                home
              </a>
            </li>
            <li>
              <a
                aria-label="experiencia"
                className={`block px-4 py-2 pt-[2px] ${
                  activeSection === "experiencia"
                    ? "text-bg-color"
                    : "hover:text-secondary-color"
                }`}
                onClick={() => handleMenuClick("experiencia", "20%")}
                href="#experiencia"
              >
                experiência
              </a>
            </li>
            <li>
              <a
                aria-label="formacao"
                className={`block px-4 py-2 pt-[2px] ${
                  activeSection === "formacao"
                    ? "text-bg-color"
                    : "hover:text-secondary-color"
                }`}
                onClick={() => handleMenuClick("formacao", "40%")}
                href="#formacao"
              >
                formação
              </a>
            </li>
            <li>
              <a
                aria-label="projetos"
                className={`block px-4 py-2 pt-[2px] ${
                  activeSection === "projetos"
                    ? "text-bg-color"
                    : "hover:text-secondary-color"
                }`}
                onClick={() => handleMenuClick("projetos", "60%")}
                href="#projetos"
              >
                projetos
              </a>
            </li>
            <li>
              <a
                aria-label="contato"
                className={`block px-4 py-2 pt-[2px] ${
                  activeSection === "contato"
                    ? "text-bg-color"
                    : "hover:text-secondary-color"
                }`}
                onClick={() => handleMenuClick("contato", "80%")}
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
