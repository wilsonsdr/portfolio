import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [linkActive, setLinkActive] = useState("0");

  const handleClick = (linkActive: string) => {
    setLinkActive(linkActive);
  };

  return (
    <header className="relative">
      <nav className="fixed py-2">
        <ul className="flex flex-col gap-4 text-xl text-primary-color">
          <li
            className={`absolute left-0 inline-block top-[${linkActive}%] -z-10 h-1/5 w-full rounded-md bg-highlight-color transition-all duration-300 ease-in-out`}
          ></li>
          <li>
            <Link
              onClick={() => handleClick("0")}
              className={`inline-block px-4 py-1 ${
                linkActive === "0"
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
              onClick={() => handleClick("20")}
              className={`inline-block px-4 py-1 ${
                linkActive === "20"
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
              onClick={() => handleClick("40")}
              className={`inline-block px-4 py-1 ${
                linkActive === "40"
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
              onClick={() => handleClick("60")}
              className={`inline-block px-4 py-1 ${
                linkActive === "60"
                  ? "text-body-color"
                  : "hover:text-secondary-color"
              }`}
              href="/"
            >
              projetos
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleClick("80")}
              className={`inline-block px-4 py-1 ${
                linkActive === "80"
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
  );
}
