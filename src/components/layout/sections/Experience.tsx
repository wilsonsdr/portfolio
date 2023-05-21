import React from "react";
import Section from "../../elements/Section";
import Title from "@/components/elements/Title";
import Subtitle from "@/components/elements/Subtitle";
import Span from "@/components/elements/Span";
import P from "@/components/elements/P";
import Hr from "@/components/elements/Hr";

export default function Experience() {
  return (
    <Section>
      <Title>Experiência</Title>
      <Subtitle company="IBM" role="Estagiário Future Club"></Subtitle>
      <Span startDate="Agosto 2021" endDate="Dezembro 2022" />
      <P>
        Participação de projetos importantes na empresa durante o estágio,
        incluindo o Projeto QQSU, em colaboração com o time da IBM e a startup
        Paypow, para identificar e analisar métricas relevantes para o Food
        Court usando o Cognos Analytics, e o Projeto Stardust, desenvolvimento
        de toda a interface visual e experiência do usuário, de um jogo para os
        Executivos de Cloud da IBM.
      </P>
      <Hr/>
      <Subtitle company="RTM" role="Estagiário de Telecomunicações"></Subtitle>
      <Span startDate="Maio 2021" endDate="Julho 2021" />
      <P>
      Auxiliando nas solicitações técnicas de clientes referentes a alterações na rede, monitorando circuitos e realizando gerenciamento proativo da rede, configurando e instalando roteadores e equipamentos de voz, entrando em contato com operadoras e clientes para recuperação de circuitos e configurando acesso aos serviços contratados pelos clientes (VPNs, Acesso Discado, Provedores, Internet, entre outros).
      </P>
      <Hr/>
    </Section>
  );
}
