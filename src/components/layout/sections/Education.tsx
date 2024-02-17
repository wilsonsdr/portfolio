import React from "react";
import Section from "../../elements/Section";
import Title from "@/components/elements/Title";
import P from "@/components/elements/P";
import ShadowCard from "@/components/elements/ShadowCard";
import Span from "@/components/elements/Span";
import { Color } from "@/components/enum/color";
import Subtitle from "@/components/elements/Subtitle";
import ListContainer, { ListItem } from "@/components/elements/List";
import Link from "next/link";
import Image from "next/image";

export default function Education() {
  return (
    <Section>
      <Title>Formação</Title>
      <P>
        Mantendo-se atualizado com cursos online, sua mais recente experiência
        acadêmica foi o Tecnólogo.
      </P>
      <ShadowCard>
        <span className="text-bg-color absolute top-[-15px] w-32 rounded-full bg-highlight-color p-1 text-center">
          Tecnólogo
        </span>
        <h3 className="mt-2 font-bold">
          Análise e Desenvolvimento de Sistemas
        </h3>
        <Span
          color={Color["dark-color"]}
          startDate="FIAP"
          endDate="2022"
        ></Span>
      </ShadowCard>
      <div className="mt-10 flex flex-1 flex-col gap-10">
        <SkillContainer
          name="Habilidades"
          src="/img/decorative/mouse.svg"
          alt="mouse"
        >
          <ListContainer>
            <ListItem color={Color["highlight-color"]}>
              Desenvolvimento Front-end
            </ListItem>
            <ListItem color={Color["primary-color"]}>
              HTML, CSS, SASS, Bootstrap, JavaScript, TypeScript, TailwindCSS,
              React.js, Next.js
            </ListItem>
            <ListItem color={Color["highlight-color"]}>
              Desenvolvimento Back-end
            </ListItem>
            <ListItem color={Color["primary-color"]}>
              Node.js, C#, MySQL, MongoDB
            </ListItem>
            <ListItem color={Color["highlight-color"]}>
              Ferramentas de Desenvolvimento
            </ListItem>
            <ListItem color={Color["primary-color"]}>Git, Jira, Postman</ListItem>
          </ListContainer>
        </SkillContainer>
        <SkillContainer name="Cursos" src="/img/decorative/book.svg" alt="book">
          <ListContainer>
          <ListItem color={Color["primary-color"]}>
              <Link
                target="_blank"
                className="hover:text-highlight-color"
                href="https://lp.b7web.com.br/fullstack?utm_source=home"
              >
                Do Zero ao Fullstack
              </Link>
            </ListItem>
            <ListItem color={Color["primary-color"]}>
              <Link
                target="_blank"
                className="hover:text-highlight-color"
                href="https://www.udemy.com/course/programacao-orientada-a-objetos-csharp/"
              >
                C# Programação Orientada a Objetos
              </Link>
            </ListItem>
            <ListItem color={Color["primary-color"]}>
              <Link
                target="_blank"
                className="hover:text-highlight-color"
                href="https://www.origamid.com/"
              >
                Web Design, UX/UI Design, HTML, CSS, JavaScript e React
              </Link>
            </ListItem>
          </ListContainer>
        </SkillContainer>
        <SkillContainer
          name="Idiomas"
          src="/img/decorative/globe.svg"
          alt="globe"
        >
          <ListContainer>
            <ListItem color={Color["highlight-color"]}>Inglês</ListItem>
            <ListItem color={Color["primary-color"]}>Avançado</ListItem>
            <ListItem color={Color["highlight-color"]}>Espanhol</ListItem>
            <ListItem color={Color["primary-color"]}>Básico</ListItem>
          </ListContainer>
        </SkillContainer>
      </div>
      <Image
        style={{ width: "160px", height: "160px" }}
        className="fixed bottom-10 right-10 -z-50 animate-spin-slow opacity-50"
        src="/img/decorative/react.svg"
        width={160}
        height={160}
        alt="react"
      />
    </Section>
  );
}

interface SkillContainerProps {
  children: React.ReactNode;
  name: string;
  src: string;
  alt: string;
}

export function SkillContainer(props: SkillContainerProps) {
  return (
    <div className="relative flex flex-col flex-wrap gap-4">
      <Subtitle color={Color["secondary-color"]}>{props.name}</Subtitle>
      <Image
        className="absolute -left-10 top-1 h-5 w-5"
        src={props.src}
        alt={props.alt}
        width={20}
        height={20}
      />
      {props.children}
    </div>
  );
}
