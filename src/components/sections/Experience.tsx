import React from "react";
import Image from "next/image";
import { Title, Container, Hr } from "../elements";
import JobList from "@/components/sections/experience/JobList";

export default function Experience() {
  return (
    <Container>
      <Title title="Experiência"></Title>
      <JobList
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
      ></JobList>
      <Hr />
      <JobList
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
      ></JobList>
      <Image
        className="fixed right-10 top-10 -z-50 max-md:right-[-10px] max-md:top-[170px] max-md:opacity-30"
        src="/img/name-tag.svg"
        alt="name-tag"
        width={230}
        height={200}
      />
    </Container>
  );
}
