import React from "react";
import Image from "next/image";
import { Title, Container, P } from "../elements";

export default function Home() {
  return (
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
        className="fixed right-[-40px] top-[-40px] -z-50 h-[350px] w-[350px] max-lg:hidden"
        src="/img/coffe.svg"
        alt="coffe"
        width={350}
        height={350}
        priority={true}
      />
    </Container>
  );
}
