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
        className="fixed right-[-10px] top-[20px] -z-50 max-lg:hidden"
        src="/img/coffe.svg"
        alt="coffe"
        width={350}
        height={350}
      />
      <Image
        src="/img/guitar.svg"
        className="fixed bottom-[-50px] left-[60px] -z-50 max-md:opacity-30"
        alt="guitar"
        width={100}
        height={100}
      />
    </Container>
  );
}
