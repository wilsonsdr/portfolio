import React from "react";
import Section from "../../elements/Section";
import Title from "@/components/elements/Title";
import P from "@/components/elements/P";
import Image from "next/image";

export default function Home() {
  return (
    <Section>
      <Title>Wilson Reis</Title>
      <P>
        Apaixonado pelo que faz e comprometido a entregar o melhor resultado,
        possuindo experiência em front e back-end, capaz de atuar em diversas
        áreas do desenvolvimento de software.
      </P>
      <P>
        Acreditando que a chave para ser um bom profissional é estar em
        constante aprendizado, e também que a tecnologia tem um grande papel
        para solucionar problemas e melhorar a vida das pessoas, tendo como
        objetivo contribuir com isso atráves do seu trabalho.
      </P>
      <P>
        Além do trabalho com tecnologia, interessado em áreas como filosofia,
        música, xadrez e não dispenso um bom café.
      </P>
      <Image
        style={{ width: "260px", height: "260px" }}
        className="fixed -bottom-14 right-10 -z-50 opacity-50"
        src="/img/decorative/guitar.svg"
        width={240}
        height={240}
        alt="guitar"
      />
    </Section>
  );
}
