import React from "react";
import Section from "../../elements/Section";
import Title from "@/components/elements/Title";
import P from "@/components/elements/P";

export default function Home() {
  return (
    <Section>
      <Title>Wilson Reis</Title>
      <P>
        Apaixonado pelo que faz e comprometido a entregar o melhor resultado,
        acredita que a chave para ser um bom profissional é estar em constante
        aprendizado.
      </P>
      <P>
        Possuindo experiência em front e back-end, capaz de atuar em diversas
        àreas do desenvolvimento de software.
      </P>
      <P>
        Tendo uma forte convicção que a tecnologia tem um grande potencial para
        solucionar problemas e melhorar a vida das pessoas, estando empenhado em
        contribuir para essa missão através do seu trabalho.
      </P>
      <P>
        Além do trabalho com tecnologia, há interesse em áreas como filosofia,
        música, xadrez e não dispensa um bom café.
      </P>
      <img
        style={{ width: "260px", height: "260px" }}
        className="fixed -bottom-14 right-10 -z-50 opacity-50"
        src="/img/guitar.svg"
        width={240}
        height={240}
        alt="guitar"
      />
    </Section>
  );
}
