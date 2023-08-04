import React from "react";
import Section from "../../elements/Section";
import Title from "@/components/elements/Title";
import Hr from "@/components/elements/Hr";
import Subtitle from "@/components/elements/Subtitle";
import { Color } from "@/components/enum/color";
import Span from "@/components/elements/Span";
import P from "@/components/elements/P";
import Image from "next/image";

export default function Experience() {
  return (
    <Section>
      <Title>Experiência</Title>
      <JobList
        company="Intervalor"
        role="Analista de Desenvolvimento de Sistemas"
        startDate="Maio 2023"
        endDate="Atualmente"
        description="Analisar os chamados em aberto, identificar os possíveis bugs e encaminhar para o time responsável, garantindo a qualidade e performance dos bots de voz e a melhoria contínua dos serviços de atendimento ao cliente, utilizando as mais diversas ferramentas, como exemplo, Jira, Grafana, MinIo, Postman."
      />
      <Hr />
      <JobList
        company="IBM"
        role="Estagiário Future Club"
        startDate="Agosto 2021"
        endDate="Dezembro 2022"
        description="Desenvolver projetos para o negócio usando ferramentas e serviços da empresa, como o Cognos Analytics, IBM Cloud, IBM Watson Assistant, IBM Z, LinuxONE e o IBM Storage, permitindo criar soluções inovadoras e de alta qualidade para os clientes, como o dashboard para o Food Court e o jogo para os Executivos de Cloud da IBM. Colaborando com equipes internas e externas, identificando as necessidades e as métricas chaves para cada projeto, garantindo a satisfação dos clientes e a eficiência dos processos, além de possibilitar o aprendizado com diferentes profissionais e áreas de atuação."
      />
      <Hr />
      <JobList
        company="RTM"
        role="Estagiário de Telecomunicações"
        startDate="Maio 2021"
        endDate="Julho 2021"
        description="Realizar suporte técnico aos clientes em relação a alterações na rede, monitorar e gerenciar a rede de forma proativa, configurar e instalar roteadores e equipamentos de voz, entrar em contato com operadoras e clientes para recuperar circuitos em caso de falhas ou interrupções, acessando os serviços contratados pelos clientes, tais como VPNs, Acesso Discado, Provedores, Internet, entre outros, garantindo assim a qualidade e a segurança da conexão."
      />
      <Image
        style={{ width: "192px", height: "192px" }}
        className="fixed right-10 top-14 -z-50 opacity-50 max-sm:right-0"
        src="/img/decorative/name-tag.svg"
        width={192}
        height={192}
        alt="name-tag"
      />
    </Section>
  );
}

interface JobListProps {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

export function JobList(props: JobListProps) {
  return (
    <>
      <Subtitle color={Color["highlight-color"]}>
        {props.company} - {props.role}
      </Subtitle>
      <Span
        color={Color["info-color"]}
        startDate={props.startDate}
        endDate={props.endDate}
      />
      <P>{props.description}</P>
    </>
  );
}
