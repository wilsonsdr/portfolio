import React from "react";
import Section from "../../elements/Section";
import Title from "@/components/elements/Title";
import Hr from "@/components/elements/Hr";
import Subtitle from "@/components/elements/Subtitle";
import { Color } from "@/components/enum/color";
import Span from "@/components/elements/Span";
import P from "@/components/elements/P";

export default function Experience() {
  return (
    <Section>
      <Title>Experiência</Title>
      <JobList
        company="IBM"
        role="Estagiário Future Club"
        startDate="Agosto 2021"
        endDate="Dezembro 2022"
        description="Participação de projetos importantes na empresa durante o estágio, incluindo o Projeto QQSU, em colaboração com o time da IBM e a startup Paypow, para identificar e analisar métricas relevantes para o Food Court usando o Cognos Analytics, e o Projeto Stardust, desenvolvimento de toda a interface visual e experiência do usuário, de um jogo para os Executivos de Cloud da IBM."
      />
      <Hr />
      <JobList
        company="RTM"
        role="Estagiário de Telecomunicações"
        startDate="Maio 2021"
        endDate="Julho 2021"
        description="Auxiliando nas solicitações técnicas de clientes referentes a alterações na rede, monitorando circuitos e realizando gerenciamento proativo da rede, configurando e instalando roteadores e equipamentos de voz, entrando em contato com operadoras e clientes para recuperação de circuitos e configurando acesso aos serviços contratados pelos clientes (VPNs, Acesso Discado, Provedores, Internet, entre outros)."
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
