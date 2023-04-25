import React from "react";
import Title from "@/components/elements/Title";
import Container from "@/components/elements/Container";
import P from "@/components/elements/P";
import ExperienceItem from "@/components/experience/ExperienceItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faSquareGooglePlus,
} from "@fortawesome/free-brands-svg-icons";
import {
  faComputerMouse,
  faBookOpen,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "@/components/slider/Carousel";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import Lista from "@/components/elements/Lista";

interface MainProps {
  activeSection: string;
}

export default function Main({ activeSection }: MainProps) {
  return (
    <main>
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
          <Image
            src="/img/guitar.svg"
            className="fixed bottom-[-50px] left-[100px] max-lg:hidden"
            alt="guitar"
            width={100}
            height={100}
          />
          <Image
            className="fixed top-[20px] right-[-10px] max-lg:hidden"
            src="/img/coffe.svg"
            alt="coffe"
            width={350}
            height={350}
          />
          <span className="absolute bottom-[-140px] right-[40px] text-xl font-typewriter max-lg:hidden">
            <Typewriter
              words={["Eat", "Sleep", "Code", "Repeat!"]}
              loop={999}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
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
          <Image
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
            <h2 className="mt-3 font-bold">
              Análise e Desenvolvimento de Sistemas
            </h2>
            <p>FIAP - 2022</p>
          </div>
          <div className="flex flex-1 flex-col gap-10 mt-10">
            <div className="flex flex-wrap flex-col gap-4">
              <div className="relative flex items-center text-xl max-sm:justify-center">
                <h2 className="font-title">Habilidades</h2>
                <FontAwesomeIcon
                  className="absolute left-[-40px] top-1/2 w-5 transform -translate-y-1/2 text-neutral-600 max-sm:hidden"
                  icon={faComputerMouse}
                />
              </div>
              <nav>
                <ul className="flex flex-col gap-2 text-neutral-400">
                  <Lista>
                    <div className="max-sm:hidden">Front</div>
                    <div>JavaScript, React, Tailwind, TypeScript</div>
                  </Lista>
                  <Lista>
                    <div className="max-sm:hidden">Back</div>
                    <div>.NET</div>
                  </Lista>
                  <Lista>
                    <div className="max-sm:hidden">Banco de dados</div>
                    <div>MySQL, MongoDB</div>
                  </Lista>
                  <Lista>
                    <span className="max-sm:hidden">Complementar</span>
                    <span>Git, Servidores Linux, Metodologia Agile</span>
                  </Lista>
                </ul>
              </nav>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative flex items-center text-xl max-sm:justify-center">
                <h2 className="font-title">Cursos</h2>
                <FontAwesomeIcon
                  className="absolute left-[-40px] top-1/2 w-5 transform -translate-y-1/2 text-neutral-600 max-sm:hidden"
                  icon={faBookOpen}
                />
              </div>
              <nav>
                <ul className="flex flex-col gap-2 text-neutral-400 cursor-pointer">
                  <Lista>
                    <a
                      href="https://www.udemy.com/share/101Wjk3@quGoc0HSwRJ_ZMdZIhy3DiOJseMCoY5XP9bUrISLrYkUq8lipLgYTQhF6caB4AEm/"
                      target="_blank"
                    >
                      C# COMPLETO Programação Orientada a Objetos
                    </a>
                  </Lista>
                  <Lista>
                    <a
                      href="https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/"
                      target="_blank"
                    >
                      JavaScript e TypeScript do básico ao avançado
                    </a>
                  </Lista>
                  <Lista>
                    <a href="https://www.origamid.com/" target="_blank">
                      Web Design, UX/UI Design, HTML, CSS, JavaScript e React
                    </a>
                  </Lista>
                </ul>
              </nav>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative flex items-center text-xl max-sm:justify-center">
                <h2 className="font-title">Idiomas</h2>
                <FontAwesomeIcon
                  className="absolute left-[-40px] top-1/2 w-5 transform -translate-y-1/2 text-neutral-600 max-sm:hidden"
                  icon={faLanguage}
                />
              </div>
              <nav>
                <ul className="flex flex-col gap-2 text-neutral-400">
                  <Lista>
                    <div className="max-sm:hidden">Inglês</div>
                    <div className="max-sm:hidden">Avançado</div>
                    <div className="sm:hidden">Inglês - Avançado</div>
                  </Lista>
                  <Lista>
                    <div className="max-sm:hidden">Edivhol</div>
                    <div className="max-sm:hidden">Básico</div>
                    <div className="sm:hidden">Espanhol - Básico</div>
                  </Lista>
                </ul>
              </nav>
            </div>
          </div>
          <Image
            className="fixed top-10 right-10 w-[150px] animate-spin-slow max-md:hidden"
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
          <Image
            className="fixed top-[70px] right-[400px] max-lg:hidden z-[-40]"
            src="/img/cloud.svg"
            alt="cloud"
            width={100}
            height={100}
          />
          <Image
            className="fixed top-[10px] right-[300px] max-lg:hidden z-[-40]"
            src="/img/cloud.svg"
            alt="cloud"
            width={100}
            height={100}
          />
          <Image
            className="fixed top-[10px] right-[220px] max-lg:hidden z-[-40] animate-pulse"
            src="/img/star.svg"
            alt="star"
            width={70}
            height={70}
          />
          <Image
            className="fixed top-[50px] right-[250px] max-lg:hidden z-[-40] animate-pulse"
            src="/img/star.svg"
            alt="star"
            width={50}
            height={50}
          />
          <Image
            className="fixed top-[40px] right-[100px] max-lg:hidden z-[-40] animate-pulse"
            src="/img/star.svg"
            alt="star"
            width={50}
            height={50}
          />
          <Image
            className="fixed top-[60px] right-[150px] max-lg:hidden z-[-40]"
            src="/img/spaceship.svg"
            alt="spaceship"
            width={100}
            height={100}
          />
          <Image
            className="fixed bottom-[-50px] right-[100px] max-lg:hidden z-[-40]"
            src="/img/rocket.svg"
            alt="rocket"
            width={200}
            height={200}
          />
        </Container>
      )}
      {activeSection == "contato" && (
        <Container>
          <Title>Contato</Title>
          <P>
            Caso você também seja apaixonado por tecnologia ou tenha interesse
            em algumas das minhas outras áreas de interesse, sinta-se à vontade
            para me enviar uma mensagem através das minhas redes sociais. Será
            um prazer trocar conhecimentos e ideias!
          </P>
          <nav>
            <ul className="flex items-center gap-4 text-3xl animate-bounce mt-4 max-sm:animate-none ">
              <li>
                <a href="https://github.com/wilsonsdr" target="_blank">
                  <FontAwesomeIcon icon={faGithubSquare} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/wilsonsdr/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="mailto:wilsonsdr@gmail.com">
                  <FontAwesomeIcon icon={faSquareGooglePlus} />
                </a>
              </li>
            </ul>
          </nav>
          <Image
            className="fixed top-[140px] right-[140px] max-lg:hidden z-[-40]"
            src="/img/paper-airplane.svg"
            alt="paper-airplane"
            width={100}
            height={100}
          />
        </Container>
      )}
    </main>
  );
}
