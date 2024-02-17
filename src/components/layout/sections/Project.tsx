import React from "react";
import Section from "../../elements/Section";
import Title from "@/components/elements/Title";
import ShadowCard from "@/components/elements/ShadowCard";
import Link from "next/link";
import Image from "next/image";

export default function Project() {
  return (
    <Section>
      <Title>Projetos</Title>
      <div className="flex flex-col gap-10 max-sm:pb-8">
        <ProjectViewer
          name="Pizzaria Donna"
          description="Landing page com design temático de pizzaria, mas na realidade é um canal de denúncia contra a violência doméstica"
          href="https://github.com/wilsonsdr/pizzaria-donna"
          src="/img/project/pizza.jpg"
          alt="pizza"
        />
        <ProjectViewer
          name="Jogo de xadrez"
          description="Simples jogo de xadrez como uma aplicação de console"
          href="https://github.com/wilsonsdr/jogo-xadrez"
          src="/img/project/tabuleiro-xadrez.jpg"
          alt="tabuleiro-xadrez"
        ></ProjectViewer>
        <ProjectViewer
          name="Bikcraft"
          description="Loja de venda de bicicletas customizadas e seguros"
          href="https://github.com/wilsonsdr/bikcraft"
          src="/img/project/bike.jpg"
          alt="bicicleta"
        ></ProjectViewer>
      </div>
      <Icon />
    </Section>
  );
}

interface ProjectViewerProps {
  name: string;
  description: string;
  href: string;
  src: string;
  alt: string;
}

export function ProjectViewer(props: ProjectViewerProps) {
  return (
    <ShadowCard>
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-full opacity-0 hover:bg-[#000] hover:opacity-90 transition-all duration-300">
          <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col gap-4 px-6 py-2 text-center text-secondary-color">
            <h1 className="text-2xl">{props.name}</h1>
            <span className="max-md:hidden">{props.description}</span>
            <Link
              className="mx-auto block rounded-full bg-[#222] p-1 px-10 hover:bg-[#333]"
              href={props.href}
              target="_blank"
            >
              Ver Projeto
            </Link>
          </div>
        </div>
        <Image
          style={{ width: "100%", height: "240px" }}
          className="object-cover"
          width={1280}
          height={240}
          src={props.src}
          alt={props.alt}
        />
      </div>
    </ShadowCard>
  );
}

export function Icon() {
  return (
    <>
      <Image
        style={{ width: "64px", height: "64px" }}
        className="fixed right-20 top-10 -z-50 animate-pulse opacity-90 max-sm:right-10 max-sm:top-20"
        src="/img/decorative/star.svg"
        width={64}
        height={64}
        alt="star"
      />
      <Image
        style={{ width: "64px", height: "64px" }}
        className="fixed right-40 top-10 -z-50 animate-pulse opacity-30 max-sm:right-24 max-sm:top-14"
        src="/img/decorative/star.svg"
        width={64}
        height={64}
        alt="star"
      />
      <Image
        style={{ width: "64px", height: "64px" }}
        className="top-50 fixed right-32 -z-50 animate-pulse opacity-70"
        src="/img/decorative/star.svg"
        width={64}
        height={64}
        alt="star"
      />
      <Image
        style={{ width: "96px", height: "96px" }}
        className="fixed right-60 top-10 -z-50 opacity-50 max-sm:hidden"
        src="/img/decorative/cloud.svg"
        width={96}
        height={96}
        alt="cloud"
      />
      <Image
        style={{ width: "208px", height: "208px" }}
        className="fixed bottom-52 right-[430px] rotate-45 -z-50 opacity-50 max-sm:hidden"
        src="/img/decorative/rocket.svg"
        width={208}
        height={208}
        alt="rocket"
      />
    </>
  );
}
