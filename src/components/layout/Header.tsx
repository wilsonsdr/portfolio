import React, { useState } from "react";
import Link from "next/link";
import Main from "./Main";
import Image from "next/image";

export default function Header() {
  const [activeLink, setActiveLink] = useState("0");
  const [activeSection, setActiveSection] = useState("about");
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
          <div
            className="flex items-center gap-4 font-logo
          text-2xl text-secondary-color sm:hidden"
          >
            <Image
              src="/img/decorative/icon.svg"
              width={40}
              height={40}
              className="w-10"
              alt="logo"
            />
            <span>portfolio</span>
          </div>

          <ul
            className={`flex flex-col gap-4 text-xl text-primary-color max-sm:fixed max-sm:left-0 max-sm:top-[73px] max-sm:w-full max-sm:flex-col max-sm:rounded-b-md max-sm:bg-primary-color max-sm:p-4 max-sm:text-right ${
              hiddenMenu ? "max-sm:hidden" : "block"
            }`}
          >
            <li
              style={{ top: `${activeLink}%` }}
              className={`absolute left-0 -z-10 inline-block h-1/5 w-full rounded-md bg-highlight-color transition-all duration-300 ease-in-out max-sm:hidden`}
            ></li>
            <li>
              <Link
                onClick={() => handleClick("0", "about")}
                className={`inline-block px-4 py-1 max-sm:p-0 ${
                  activeSection === "about"
                    ? "text-body-color max-sm:text-dark-color"
                    : "hover:text-secondary-color max-sm:text-info-color max-sm:hover:text-secondary-color"
                }`}
                href="/"
              >
                about
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleClick("20", "experience")}
                className={`inline-block px-4 py-1 max-sm:p-0 ${
                  activeSection === "experience"
                    ? "text-body-color max-sm:text-dark-color"
                    : "hover:text-secondary-color max-sm:text-info-color max-sm:hover:text-secondary-color"
                }`}
                href="/"
              >
                experience
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleClick("40", "education")}
                className={`inline-block px-4 py-1 max-sm:p-0 ${
                  activeSection === "education"
                    ? "text-body-color max-sm:text-dark-color"
                    : "hover:text-secondary-color max-sm:text-info-color max-sm:hover:text-secondary-color"
                }`}
                href="/"
              >
                education
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleClick("60", "project")}
                className={`inline-block px-4 py-1 max-sm:p-0 ${
                  activeSection === "project"
                    ? "text-body-color max-sm:text-dark-color"
                    : "hover:text-secondary-color max-sm:text-info-color max-sm:hover:text-secondary-color"
                }`}
                href="/"
              >
                project
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleClick("80", "contact")}
                className={`inline-block px-4 py-1 max-sm:p-0 ${
                  activeSection === "contact"
                    ? "text-body-color max-sm:text-dark-color"
                    : "hover:text-secondary-color max-sm:text-info-color max-sm:hover:text-secondary-color"
                }`}
                href="/"
              >
                contact
              </Link>
            </li>
          </ul>
          <div className="cursor-pointer sm:hidden" onClick={menuBurguer}>
            <span
              className={`mx-auto my-1 block h-1 w-7 rounded-md bg-secondary-color transition-all duration-300 ease-in-out ${
                hiddenMenu ? "" : "translate-y-2 rotate-45"
              }`}
            ></span>
            <span
              className={`mx-auto my-1 block h-1 w-7 rounded-md bg-secondary-color transition-all duration-300 ease-in-out ${
                hiddenMenu ? "" : "opacity-0"
              }`}
            ></span>
            <span
              className={`mx-auto my-1 block h-1 w-7 rounded-md bg-secondary-color transition-all duration-300 ease-in-out ${
                hiddenMenu ? "" : "-translate-y-2 -rotate-45"
              }`}
            ></span>
          </div>
        </nav>
      </header>
      <Main activeSection={activeSection} />
    </>
  );
}
