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
        description="Atuando diretamente nas correções e melhorias identificadas nos bots, assim como na implementação de novos áudios e resolução de eventuais falhas. Essas ações, resultaram em uma redução de 70% nos chamados em aberto, promovendo uma melhoria contínua nos serviços oferecidos."
        skills="JavaScript · Git · TypeScript · MySQL · Node.js · Postman · Jira · Grafana · Kibana · MinIO · Jenkins · Jaeger"
      />
      <Hr />
      <JobList
        company="IBM"
        role="Estagiário Future Club"
        startDate="Agosto 2021"
        endDate="Dezembro 2022"
        description="Contato com as mais diversas ferramentas e serviços da empresa, permitindo criar soluções inovadoras e de grande impacto. Um projeto em destaque é o 'Pizzaria Donna', uma landing page com um design temático de pizzaria, integrada ao IBM Watson Assistant. Esta integração permitiu a simulação de denúncias contra a violência doméstica, utilizando a tecnologia para promover a conscientização e a assistência a um problema tão crucial."
        skills="HTML · CSS · JavaScript · User Interface (UI) · User Experience (UX) · IBM Cognos Analytics · IBM Cloud · IBM Watson Assistant · IBM Z · IBM LinuxONE · IBM Storage"
      />
      <Hr />
      <JobList
        company="RTM"
        role="Estagiário de Telecomunicações"
        startDate="Maio 2021"
        endDate="Julho 2021"
        description="Realizar suporte técnico aos clientes, configurando e instalando roteadores e equipamentos de voz, e também monitorar e gerenciar as alterações na rede, entrando em contato com as operadoras para recuperar o circuito em caso de falhas ou interrupções."
        skills="SolarWinds Orion · Putty · Cacti · Topdesk"
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
  skills: string;
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
      <P>
        <strong>Competências:</strong> {props.skills}
      </P>
    </>
  );
}
