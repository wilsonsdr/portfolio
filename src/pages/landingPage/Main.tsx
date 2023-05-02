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
import {
  faGithubSquare,
  faLinkedin,
  faSquareGooglePlus,
} from "@fortawesome/free-brands-svg-icons";
import Carousel from "@/components/slider/Carousel";
import Image from "next/image";
import List, { ListItem } from "@/components/elements/List";
import ShadowCard from "@/components/elements/ShadowCard";
import EducationIcon from "@/components/education/EducationIcon";
import Subtitle from "@/components/elements/Subtitle";
import Hr from "@/components/elements/Hr";
import Hyperlink from "@/components/elements/Hyperlink";
import { Justify } from "@/components/enum/Justify";
import { Gap } from "@/components/enum/Gap";

interface MainProps {
  activeSection: string;
}

export default function Main({ activeSection }: MainProps) {
  return (
    <main>
      {activeSection == "home" && (
        <Container>
          <Title title="Wilson Reis" />
          <P text="Apaixonado pelo que faz e comprometido a entregar o melhor resultado, acredita que a chave para ser um bom profissional é estar em constante aprendizado." />
          <P text="Possuindo experiência em front e back-end, capaz de atuar em diversas àreas do desenvolvimento de software." />
          <P text="Tendo uma forte convicção que a tecnologia tem um grande potencial para solucionar problemas e melhorar a vida das pessoas, estando empenhado em contribuir para essa missão através do seu trabalho." />
          <P
            text="Além do trabalho com tecnologia, há interesse em áreas como
            filosofia, música, xadrez e não dispensa um bom café."
          />
          <Image
            className="fixed right-[-10px] top-[20px] -z-50 max-lg:hidden"
            src="/img/coffe.svg"
            alt="coffe"
            width={350}
            height={350}
          />
          <Image
            src="/img/guitar.svg"
            className="fixed bottom-[-50px] left-[60px] -z-50 max-md:opacity-30"
            alt="guitar"
            width={100}
            height={100}
          />
        </Container>
      )}
      {activeSection == "experiencia" && (
        <Container>
          <Title title="Experiência"></Title>
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
          <Hr />
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
            className="fixed right-10 top-10 -z-50 max-md:right-[-10px] max-md:top-[170px] max-md:opacity-30"
            src="/img/name-tag.svg"
            alt="name-tag"
            width={230}
            height={200}
          />
        </Container>
      )}
      {activeSection == "formacao" && (
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
                <EducationIcon icon={faComputerMouse} />
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
                <EducationIcon icon={faBookOpen} />
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
                <EducationIcon icon={faLanguage} />
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
            className="fixed right-20 top-10 -z-50 w-[150px] animate-spin-slow max-md:right-[-5px] max-md:top-[140px] max-md:opacity-30"
            width={150}
            height={150}
            src="/img/react.svg"
            alt="react"
          />
        </Container>
      )}
      {activeSection == "projetos" && (
        <Container>
          <Title title="Projetos" />
          <Carousel />
          <Image
            className="fixed right-[400px] top-[70px] -z-50 max-xl:hidden"
            src="/img/cloud.svg"
            alt="cloud"
            width={100}
            height={100}
          />
          <Image
            className="fixed right-[300px] top-[10px] -z-50 max-xl:hidden"
            src="/img/cloud.svg"
            alt="cloud"
            width={100}
            height={100}
          />
          <Image
            className="fixed right-[220px] top-[10px] -z-50 animate-pulse max-lg:top-[90px] max-md:right-[10px] max-md:top-[40px] max-md:opacity-30"
            src="/img/star.svg"
            alt="star"
            width={70}
            height={70}
          />
          <Image
            className="fixed right-[250px] top-[50px] -z-50 animate-pulse max-lg:top-[150px] max-md:right-[40px] max-md:top-[100px] max-md:opacity-30"
            src="/img/star.svg"
            alt="star"
            width={50}
            height={50}
          />
          <Image
            className="fixed right-[100px] top-[40px] -z-50 animate-pulse max-lg:top-[130px] max-md:opacity-30"
            src="/img/star.svg"
            alt="star"
            width={50}
            height={50}
          />
          <Image
            className="fixed right-[150px] top-[60px] -z-50 max-lg:hidden"
            src="/img/spaceship.svg"
            alt="spaceship"
            width={100}
            height={100}
          />
          <Image
            className="fixed bottom-[-50px] right-[100px] max-md:opacity-30"
            src="/img/rocket.svg"
            alt="rocket"
            width={200}
            height={200}
          />
        </Container>
      )}
      {activeSection == "contato" && (
        <Container>
          <Title title="Contato" />
          <P
            text="Caso você também seja apaixonado por tecnologia ou tenha interesse
            em algumas das minhas outras áreas de interesse, sinta-se à vontade
            para me enviar uma mensagem através das minhas redes sociais. Será
            um prazer trocar conhecimentos e ideias!"
          />
          <List>
            <ListItem justify={Justify.start} gap={Gap["16px"]}>
              <Hyperlink
                href="https://github.com/wilsonsdr"
                children={
                  <FontAwesomeIcon icon={faGithubSquare} fontSize={30} />
                }
              />
              <Hyperlink
                href="https://www.linkedin.com/in/wilsonsdr/"
                children={<FontAwesomeIcon icon={faLinkedin} fontSize={30} />}
              />
              <Hyperlink
                href="mailto:wilsonsdr@gmail.com"
                children={
                  <FontAwesomeIcon icon={faSquareGooglePlus} fontSize={30} />
                }
              />
            </ListItem>
          </List>
          <Image
            className="fixed left-2/3 top-1/2 -z-50 max-md:opacity-30"
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
