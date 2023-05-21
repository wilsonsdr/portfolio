import React from "react";
import Section from "../../elements/Section";
import Title from "@/components/elements/Title";
import P from "@/components/elements/P";
import ShadowCard from "@/components/elements/ShadowCard";
import Span from "@/components/elements/Span";
import { Color } from "@/components/enum/color";
import Subtitle from "@/components/elements/Subtitle";
import List, { Item } from "@/components/elements/List";
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
        <SkillContainer name="Habilidades" src="/img/mouse.svg" alt="mouse">
          <List>
            <Item color={Color["highlight-color"]}>Front-end</Item>
            <Item color={Color["primary-color"]}>
              HTML, CSS, Bootstrap, SASS, JavaScript, React, Tailwind,
              Typescript, NextJS
            </Item>
            <Item color={Color["highlight-color"]}>Back-end</Item>
            <Item color={Color["primary-color"]}>.NET</Item>
            <Item color={Color["highlight-color"]}>Banco de dados</Item>
            <Item color={Color["primary-color"]}>MySQL, MongoDB</Item>
            <Item color={Color["highlight-color"]}>Complementar</Item>
            <Item color={Color["primary-color"]}>Git, Jira</Item>
          </List>
        </SkillContainer>
        <SkillContainer name="Cursos" src="/img/book.svg" alt="book">
          <List>
            <Item color={Color["primary-color"]}>
              <Link
                target="_blank"
                className="hover:text-highlight-color"
                href="https://www.udemy.com/course/programacao-orientada-a-objetos-csharp/"
              >
                C# Programação Orientada a Objetos
              </Link>
            </Item>
            <Item color={Color["primary-color"]}>
              <Link
                target="_blank"
                className="hover:text-highlight-color"
                href="https://www.udemy.com/course/programacao-orientada-a-objetos-csharp/"
              >
                JavaScript e TypeScript do básico ao avançado
              </Link>
            </Item>
            <Item color={Color["primary-color"]}>
              <Link
                target="_blank"
                className="hover:text-highlight-color"
                href="https://www.origamid.com/"
              >
                Web Design, UX/UI Design, HTML, CSS, JavaScript e React
              </Link>
            </Item>
          </List>
        </SkillContainer>
        <SkillContainer name="Idiomas" src="/img/globe.svg" alt="globe">
          <List>
            <Item color={Color["highlight-color"]}>Inglês</Item>
            <Item color={Color["primary-color"]}>Avançado</Item>
            <Item color={Color["highlight-color"]}>Espanhol</Item>
            <Item color={Color["primary-color"]}>Básico</Item>
          </List>
        </SkillContainer>
      </div>
      <Image
        style={{ width: "160px", height: "160px" }}
        className="fixed bottom-10 right-10 -z-50 animate-spin-slow opacity-50"
        src="/img/react.svg"
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
