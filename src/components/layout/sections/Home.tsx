import React from "react";
import Section from "../../elements/Section";
import Title from "@/components/elements/Title";
import P from "@/components/elements/P";
import Image from "next/image";

export default function Home() {
  return (
    <Section>
      <Title>Quem sou</Title>
      <P>
        Meu nome é Wilson Reis, sou apaixonado pelo que faço e comprometido a
        entregar o melhor resultado, acredito que a chave para ser um bom
        profissional é estar em constante aprendizado.
      </P>
      <P>
        Possuindo experiência em front e back-end, capaz de atuar em diversas
        àreas do desenvolvimento de software.
      </P>
      <P>
        Tendo uma forte convicção que a tecnologia tem um grande potencial para
        solucionar problemas e melhorar a vida das pessoas, estando empenhado em
        contribuir para essa missão através do meu trabalho.
      </P>
      <P>
        Além do trabalho com tecnologia, tenho interesse em áreas como
        filosofia, música, xadrez e não dispenso um bom café.
      </P>
      <Image
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
