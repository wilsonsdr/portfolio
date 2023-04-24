import React from "react";

interface MainProps {
  activeSection: string;
}

export default function Main({ activeSection }: MainProps) {
  return (
    <main>
      {
        activeSection == "home" && (
          <section>
            <h1>Home</h1>
          </section>
        )
      }
      {
        activeSection == "experiencia" && (
          <section>
            <h2>Experiencia</h2>
          </section>
        )
      }
      {
        activeSection == "formacao" && (
          <section>
            <h1>Formação</h1>
          </section>
        )
      }
          {
        activeSection == "projetos" && (
          <section>
            <h1>Projetos</h1>
          </section>
        )
      }
          {
        activeSection == "contato" && (
          <section>
            <h1>Contato</h1>
          </section>
        )
      }
    </main>
  );
}