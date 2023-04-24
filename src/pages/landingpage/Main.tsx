import React from "react";
import Title from "@/components/elements/Title";
import Container from "@/components/elements/Container";
import P from "@/components/elements/P";
import ExperienceItem from "@/components/experience/ExperienceItem";

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
          <hr className="border-neutral-800" />
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
        <section>
          <h1>Formação</h1>
        </section>
      )}
      {activeSection == "projetos" && (
        <section>
          <h1>Projetos</h1>
        </section>
      )}
      {activeSection == "contato" && (
        <section>
          <h1>Contato</h1>
        </section>
      )}
    </div>
  );
}
