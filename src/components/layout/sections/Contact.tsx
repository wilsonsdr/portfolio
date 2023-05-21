import React from "react";
import Section from "../../elements/Section";
import Title from "@/components/elements/Title";
import P from "@/components/elements/P";
import { FaGithubSquare, FaLinkedin, FaGooglePlusSquare } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <Section>
      <Title>Contato</Title>
      <P>
        Caso você também seja apaixonado por tecnologia ou tenha interesse em
        algumas das minhas outras áreas de interesse, sinta-se à vontade para me
        enviar uma mensagem através das minhas redes sociais, será um prazer
        trocarmos ideias e conhecimentos, podemos até marcar de tomarmos um
        café!
      </P>
      <ul className="flex flex-row gap-5 text-3xl">
        <SocialMedia href="https://github.com/wilsonsdr">
          <FaGithubSquare />
        </SocialMedia>
        <SocialMedia href="https://www.linkedin.com/in/wilsonsdr/">
          <FaLinkedin />
        </SocialMedia>
        <SocialMedia href="mailto:wilsonsdr@gmail.com">
          <FaGooglePlusSquare />
        </SocialMedia>
      </ul>
      <Image
        style={{ width: "384px", height: "384px" }}
        className="fixed -bottom-20 -right-0 -z-50 opacity-80 max-sm:-right-20"
        src="/img/decorative/coffe.svg"
        width={384}
        height={384}
        alt="coffe"
      />
    </Section>
  );
}

interface SocialMediaProps {
  href: string;
  children: React.ReactNode;
}

export function SocialMedia(props: SocialMediaProps) {
  return (
    <li>
      <Link
        className="text-primary-color hover:text-secondary-color"
        target="_blank"
        href={props.href}
      >
        {props.children}
      </Link>
    </li>
  );
}
