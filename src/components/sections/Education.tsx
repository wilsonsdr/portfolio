import React from "react";
import Image from "next/image";
import {
  Title,
  Subtitle,
  Container,
  P,
  List,
  ListItem,
  Hyperlink,
} from "../elements";
import ShadowCard from "@/components/elements/ShadowCard";
import Icon from "@/components/sections/education/Icon";
import { Justify } from "../enum/justify";
import {
  faComputerMouse,
  faBookOpen,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";

export default function Education() {
  return (
    <Container>
      <Title title="Formação" />
      <P
        text="Mantendo-se atualizado com cursos online, sua mais recente
            experiência acadêmica foi o Tecnólogo."
      />
      <ShadowCard>
        <div className="absolute top-[-15px] w-32 rounded-full bg-highlight-color p-1 text-center text-bg-color max-md:left-1/2 max-md:-translate-x-1/2 max-md:transform">
          Tecnólogo
        </div>
        <h3 className="mt-3 font-bold text-dark-color">
          Análise e Desenvolvimento de Sistemas
        </h3>
        <span className="text-dark-color">FIAP - 2022</span>
      </ShadowCard>
      <div className="mt-10 flex flex-1 flex-col gap-10">
        <div className="flex flex-col flex-wrap gap-4">
          <div className="relative flex items-center text-xl max-md:justify-center">
            <Subtitle text="Habilidades" />
            <Icon icon={faComputerMouse} />
          </div>
          <List>
            <ListItem justify={Justify.between}>
              <div className="max-sm:hidden">Front</div>
              <div>HTML, CSS, JavaScript, React, Tailwind, TypeScript</div>
            </ListItem>
            <ListItem justify={Justify.between}>
              <div className="max-sm:hidden">Back</div>
              <div>.NET</div>
            </ListItem>
            <ListItem justify={Justify.between}>
              <div className="max-sm:hidden">Banco de dados</div>
              <div>MySQL, MongoDB</div>
            </ListItem>
            <ListItem justify={Justify.between}>
              <div className="max-sm:hidden">Complementar</div>
              <div>Git, Servidores Linux, Metodologia Agile</div>
            </ListItem>
          </List>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative flex items-center text-xl max-md:justify-center">
            <Subtitle text="Cursos" />
            <Icon icon={faBookOpen} />
          </div>
          <List>
            <ListItem justify={Justify.start}>
              <Hyperlink
                href="https://www.udemy.com/share/101Wjk3@quGoc0HSwRJ_ZMdZIhy3DiOJseMCoY5XP9bUrISLrYkUq8lipLgYTQhF6caB4AEm/"
                children="C# Programação Orientada a Objetos"
              />
            </ListItem>
            <ListItem justify={Justify.start}>
              <Hyperlink
                href="https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/"
                children="JavaScript e TypeScript do básico ao avançado"
              />
            </ListItem>
            <ListItem justify={Justify.start}>
              <Hyperlink
                href="https://www.origamid.com/"
                children=" Web Design, UX/UI Design, HTML, CSS, JavaScript e React"
              />
            </ListItem>
          </List>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative flex items-center text-xl max-md:justify-center">
            <Subtitle text="Idiomas" />
            <Icon icon={faLanguage} />
          </div>
          <List>
            <ListItem justify={Justify.between}>
              <div className="max-md:hidden">Inglês</div>
              <div className="max-md:hidden">Avançado</div>
              <div className="md:hidden">Inglês - Avançado</div>
            </ListItem>
            <ListItem justify={Justify.between}>
              <div className="max-md:hidden">Espanhol</div>
              <div className="max-md:hidden">Básico</div>
              <div className="md:hidden">Espanhol - Básico</div>
            </ListItem>
          </List>
        </div>
      </div>
      <Image
        className="fixed right-20 top-10 -z-50 h-[150px] w-[150px] animate-spin-slow max-md:right-[-5px] max-md:top-[140px] max-md:opacity-30"
        width={150}
        height={150}
        src="/img/react.svg"
        alt="react"
        loading="lazy"
      />
    </Container>
  );
}
