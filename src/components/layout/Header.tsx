import React, { useState } from "react";
import Link from "next/link";
import Main from "./Main";

export default function Header() {
  const [activeLink, setActiveLink] = useState("0");
  const [activeSection, setActiveSection] = useState("home");
  const [hiddenMenu, setHiddenMenu] = useState(true);

  const handleClick = (activeLink: string, activeSection: string) => {
    setActiveLink(activeLink);
    // alteração do top position da tag <li>, nesse caso o bg laranja
    setActiveSection(activeSection);
    // alteração da section de acordo com a section clicada

    if (activeSection) {
      setHiddenMenu(!hiddenMenu);
    }
  };

  const menuBurguer = () => {
    setHiddenMenu(!hiddenMenu);
  };

  return (
    <>
      <header className="relative">
        <nav className="fixed py-2 max-sm:left-0 max-sm:top-0 max-sm:z-50 max-sm:flex max-sm:w-full max-sm:items-center max-sm:justify-between max-sm:p-4 max-sm:backdrop-blur-md">
          <span className="font-logo text-2xl text-primary-color sm:hidden">
            wilson
          </span>

          <ul
            className={`flex flex-col gap-4 text-xl text-primary-color max-sm:fixed max-sm:left-0 max-sm:top-[63px] max-sm:w-full max-sm:flex-col max-sm:rounded-b-md max-sm:bg-primary-color max-sm:p-4 max-sm:text-right ${
              hiddenMenu ? "max-sm:hidden" : "block"
            }`}
          >
            <li
              style={{ top: `${activeLink}%` }}
              className={`absolute left-0 -z-10 inline-block h-1/5 w-full rounded-md bg-highlight-color transition-all duration-300 ease-in-out max-sm:hidden`}
            ></li>
            <li>
              <Link
                onClick={() => handleClick("0", "home")}
                className={`inline-block px-4 py-1 max-sm:p-0 ${
                  activeSection === "home"
                    ? "text-body-color max-sm:text-dark-color"
                    : "hover:text-secondary-color max-sm:text-info-color max-sm:hover:text-secondary-color"
                }`}
                href="/"
              >
                home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleClick("20", "experiência")}
                className={`inline-block px-4 py-1 max-sm:p-0 ${
                  activeSection === "experiência"
                    ? "text-body-color max-sm:text-dark-color"
                    : "hover:text-secondary-color max-sm:text-info-color max-sm:hover:text-secondary-color"
                }`}
                href="/"
              >
                experiência
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleClick("40", "formação")}
                className={`inline-block px-4 py-1 max-sm:p-0 ${
                  activeSection === "formação"
                    ? "text-body-color max-sm:text-dark-color"
                    : "hover:text-secondary-color max-sm:text-info-color max-sm:hover:text-secondary-color"
                }`}
                href="/"
              >
                formação
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleClick("60", "projetos")}
                className={`inline-block px-4 py-1 max-sm:p-0 ${
                  activeSection === "projetos"
                    ? "text-body-color max-sm:text-dark-color"
                    : "hover:text-secondary-color max-sm:text-info-color max-sm:hover:text-secondary-color"
                }`}
                href="/"
              >
                projetos
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleClick("80", "contato")}
                className={`inline-block px-4 py-1 max-sm:p-0 ${
                  activeSection === "contato"
                    ? "text-body-color max-sm:text-dark-color"
                    : "hover:text-secondary-color max-sm:text-info-color max-sm:hover:text-secondary-color"
                }`}
                href="/"
              >
                contato
              </Link>
            </li>
          </ul>
          <div className="cursor-pointer sm:hidden" onClick={menuBurguer}>
            <span className="mx-auto my-1 block h-1 w-7 rounded-md bg-primary-color transition-all duration-300 ease-in-out"></span>
            <span className="mx-auto my-1 block h-1 w-7 rounded-md bg-primary-color transition-all duration-300 ease-in-out"></span>
            <span className="mx-auto my-1 block h-1 w-7 rounded-md bg-primary-color transition-all duration-300 ease-in-out"></span>
          </div>
        </nav>
      </header>
      <Main activeSection={activeSection} />
    </>
  );
}
