import React, { useState } from "react";
import Link from "next/link";
import Main from "./Main";

export default function Header() {
  const [activeLink, setActiveLink] = useState("0");
  const [activeSection, setActiveSection] = useState("home");

  const handleClick = (activeLink: string, activeSection: string) => {
    setActiveLink(activeLink);
    setActiveSection(activeSection);
  };

  return (
    <>
      <header className="relative">
        <nav className="fixed py-2">
          <ul className="flex flex-col gap-4 text-xl text-primary-color">
            <li
              style={{ top: `${activeLink}%` }}
              className={`absolute left-0 -z-10 inline-block h-1/5 w-full rounded-md bg-highlight-color transition-all duration-300 ease-in-out`}
            ></li>
            <li>
              <Link
                onClick={() => handleClick("0", "home")}
                className={`inline-block px-4 py-1 ${
                  activeSection === "home"
                    ? "text-body-color"
                    : "hover:text-secondary-color"
                }`}
                href="/"
              >
                home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleClick("20", "experiência")}
                className={`inline-block px-4 py-1 ${
                  activeSection === "experiência"
                    ? "text-body-color"
                    : "hover:text-secondary-color"
                }`}
                href="/"
              >
                experiência
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleClick("40", "formação")}
                className={`inline-block px-4 py-1 ${
                  activeSection === "formação"
                    ? "text-body-color"
                    : "hover:text-secondary-color"
                }`}
                href="/"
              >
                formação
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleClick("60", "projetos")}
                className={`inline-block px-4 py-1 ${
                  activeSection === "projetos"
                    ? "text-body-color"
                    : "hover:text-secondary-color"
                }`}
                href="#projeto"
              >
                projetos
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleClick("80", "contato")}
                className={`inline-block px-4 py-1 ${
                  activeSection === "contato"
                    ? "text-body-color"
                    : "hover:text-secondary-color"
                }`}
                href="/"
              >
                contato
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Main activeSection={activeSection} />
    </>
  );
}
