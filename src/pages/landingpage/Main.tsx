import React from "react";
import Title from "@/components/elements/Title";
import Container from "@/components/elements/Container";
import P from "@/components/elements/P";
import ExperienceItem from "@/components/experience/ExperienceItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComputerMouse,
  faBookOpen,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "@/components/slider/Carousel";

interface MainProps {
  activeSection: string;
}

export default function Main({ activeSection }: MainProps) {
  return (
    <div>
      {activeSection == "home" && (
        <Container>
          <Title>Wilson Souto dos Reis</Title>
          <P>
            Apaixonado pelo que faz, acredita que a chave para um bom
            desenvolvedor é estar em constante aprendizado.
          </P>
          <P>
            Possuindo experiência em front e back, comprometido a entregar o
            melhor resultado.
          </P>
          <P>
            Além do trabalho com tecnologia, há interesse em áreas como
            filosofia, música, xadrez e não dispensa um bom café.
          </P>
          <img
            className="fixed bottom-[-50px] left-[100px] max-lg:hidden"
            src="/img/guitar.svg"
            alt="guitar"
            width={100}
            height={100}
          />
          <img
            className="fixed top-[20px] right-[-10px] max-lg:hidden"
            src="/img/coffe.svg"
            alt="coffe"
            width={350}
            height={350}
          />
        </Container>
      )}
      {activeSection == "experiencia" && (
        <Container>
          <Title>Experiência</Title>
          <ExperienceItem
            company="IBM"
            role="Estagiário Future Club"
            startDate="Agosto 2021"
            endDate="Dezembro 2022"
            description="Participação de projetos importantes na empresa durante o estágio,
            incluindo o Projeto QQSU, em colaboração com o time da IBM e a
            startup Paypow, para identificar e analisar métricas relevantes para
            o Food Court usando o Cognos Analytics, e o Projeto Stardust,
            desenvolvimento de toda a interface visual e experiência do usuário,
            de um jogo para os Executivos de Cloud da IBM."
          ></ExperienceItem>
          <span className="w-full h-[0.40px] rounded-full bg-neutral-800" />
          <ExperienceItem
            company="RTM"
            role="Estagiário de Telecomunicações"
            startDate="Maio 2021"
            endDate="Julho 2021"
            description="Auxiliando nas solicitações técnicas de clientes referentes a
            alterações na rede, monitorando circuitos e realizando gerenciamento
            proativo da rede, configurando e instalando roteadores e
            equipamentos de voz, entrando em contato com operadoras e clientes
            para recuperação de circuitos e configurando acesso aos serviços
            contratados pelos clientes (VPNs, Acesso Discado, Provedores,
            Internet, entre outros)."
          ></ExperienceItem>
          <img
            className="fixed right-10 top-10 max-md:hidden"
            src="/img/name-tag.svg"
            alt="name-tag"
            width={230}
            height={200}
          />
        </Container>
      )}
      {activeSection == "formacao" && (
        <Container>
          <Title>Formação</Title>
          <P>
            Mantendo-se atualizado com cursos online, sua mais recente
            experiência acadêmica foi o Tecnólogo.
          </P>
          <div className="relative w-3/4 mt-4 p-4 bg-[#222] rounded-sm max-sm:m-auto max-sm:mt-4">
            <div className="absolute z-[-1] w-full h-full mt-2 bg-black rounded-sm"></div>
            <span className="absolute w-32 top-[-15px] text-center bg-[#333] rounded-full p-1 max-sm:transform max-sm:translate-x-[-66px]">
              Tecnólogo
            </span>
            <h1 className="mt-3 font-bold">
              Análise e Desenvolvimento de Sistemas
            </h1>
            <p>FIAP - 2022</p>
          </div>
          <div className="flex flex-1 flex-col gap-10 mt-10">
            <div className="flex flex-wrap flex-col gap-4">
              <div className="relative flex items-center text-xl max-sm:justify-center">
                <h1 className="font-title">Habilidades</h1>
                <FontAwesomeIcon
                  className="absolute left-[-40px] top-1/2 w-5 transform -translate-y-1/2 text-neutral-600 max-sm:hidden"
                  icon={faComputerMouse}
                />
              </div>
              <nav>
                <ul className="flex flex-col gap-2 text-neutral-400">
                  <li className="flex flex-1 flex-wrap justify-between items-center gap-4 font-p text-base hover:bg-[#222] hover:text-white transition duration-500 max-sm:hidden">
                    Front
                    <span>JavaScript, React, Tailwind, TypeScript</span>
                  </li>
                  <li className="flex flex-1 flex-wrap justify-between items-center gap-4 font-p text-base hover:bg-[#222] hover:text-white transition duration-500 max-sm:hidden">
                    Back
                    <span>.NET</span>
                  </li>
                  <li className="flex flex-1 flex-wrap justify-between items-center gap-4 font-p text-base hover:bg-[#222] hover:text-white transition duration-500 max-sm:hidden">
                    Banco de dados
                    <span>MySQL, MongoDB</span>
                  </li>
                  <li className="flex flex-1 flex-wrap justify-between items-center gap-4 font-p text-base hover:bg-[#222] hover:text-white transition duration-500 max-sm:hidden">
                    Complementar
                    <span>Git, Servidor Linux, Metodologia Agile</span>
                  </li>
                  <li className="font-p text-base hover:bg-[#222] hover:text-white transition duration-500 sm:hidden">
                    JavaScript, React, Tailwind, TypeScript
                  </li>
                  <li className="font-p text-base hover:bg-[#222] hover:text-white transition duration-500 sm:hidden">
                    .NET
                  </li>
                  <li className="font-p text-base hover:bg-[#222] hover:text-white transition duration-500 sm:hidden">
                    MySQL e MongoDB
                  </li>
                  <li className="font-p text-base hover:bg-[#222] hover:text-white transition duration-500 sm:hidden">
                    Git, Servidor Linux, Metodologia Agile
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative flex items-center text-xl max-sm:justify-center">
                <h1 className="font-title">Cursos</h1>
                <FontAwesomeIcon
                  className="absolute left-[-40px] top-1/2 w-5 transform -translate-y-1/2 text-neutral-600 max-sm:hidden"
                  icon={faBookOpen}
                />
              </div>
              <nav>
                <ul className="flex flex-col gap-2 text-neutral-400 cursor-pointer">
                  <li className="flex flex-1 flex-wrap justify-between items-center gap-4 font-p text-base hover:bg-[#222] hover:text-white transition duration-500 max-sm:flex-col">
                    <a
                      href="https://www.udemy.com/share/101Wjk3@quGoc0HSwRJ_ZMdZIhy3DiOJseMCoY5XP9bUrISLrYkUq8lipLgYTQhF6caB4AEm/"
                      target="_blank"
                    >
                      C# COMPLETO Programação Orientada a Objetos
                    </a>
                  </li>
                  <li className="flex flex-1 flex-wrap justify-between items-center gap-4 font-p text-base hover:bg-[#222] hover:text-white transition duration-500 max-sm:justify-center">
                    <a
                      href="https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/"
                      target="_blank"
                    >
                      JavaScript e TypeScript do básico ao avançado
                    </a>
                  </li>
                  <li className="flex flex-1 flex-wrap justify-between items-center gap-4 font-p text-base hover:bg-[#222] hover:text-white transition duration-500 max-sm:flex-col">
                    <a href="https://www.origamid.com/" target="_blank">
                      Web Design, UX/UI Design, HTML, CSS, JavaScript e React
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative flex items-center text-xl max-sm:justify-center">
                <h1 className="font-title">Idiomas</h1>
                <FontAwesomeIcon
                  className="absolute left-[-40px] top-1/2 w-5 transform -translate-y-1/2 text-neutral-600 max-sm:hidden"
                  icon={faLanguage}
                />
              </div>
              <nav>
                <ul className="flex flex-col gap-2 text-neutral-400">
                  <li className="flex flex-1 flex-wrap justify-between items-center gap-4 font-p text-base hover:bg-[#222] hover:text-white transition duration-500 max-sm:hidden">
                    Inglês
                    <span>Avançado</span>
                  </li>
                  <li className="flex flex-1 flex-wrap justify-between items-center gap-4 font-p text-base hover:bg-[#222] hover:text-white transition duration-500 max-sm:hidden">
                    Espanhol
                    <span>Básico</span>
                  </li>
                  <li className="font-p text-base hover:bg-[#222] hover:text-white transition duration-500 sm:hidden">
                    Inglês - Avançado
                  </li>
                  <li className="font-p text-base hover:bg-[#222] hover:text-white transition duration-500 sm:hidden">
                    Espanhol - Básico
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <img
            className="fixed top-20 right-10 w-[150px] animate-spin-slow max-md:hidden"
            width={150}
            height={150}
            src="/img/react.svg"
            alt="react"
          />
        </Container>
      )}
      {activeSection == "projetos" && (
        <Container>
          <Title>Projetos</Title>
          <Carousel />
        </Container>
      )}
      {activeSection == "contato" && (
        <section>
          <h1>Contato</h1>
        </section>
      )}
    </div>
  );
}
