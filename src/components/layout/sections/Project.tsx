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
          description="Landing Page com design de pizaria, mas na realidade é um canal de denúncia contra a violência doméstica"
          src="https://raw.githubusercontent.com/wilsonsdr/pizzaria-donna/main/public/img/banner-bg.webp"
          href="https://github.com/wilsonsdr/pizzaria-donna"
          alt="tabuleiro de xadrez"
        />
        <ProjectViewer
          name="Jogo de xadrez"
          description="Simples jogo de xadrez como uma aplicação de console"
          href="https://github.com/wilsonsdr/jogo-xadrez"
          src="https://wallpapercave.com/wp/wp2883275.jpg"
          alt="xadrez"
        ></ProjectViewer>
        <ProjectViewer
          name="Bikcraft"
          description="Loja de venda de bicicletas customizadas e seguros"
          href="https://github.com/wilsonsdr/bikcraft"
          src="https://wilsonsdr.github.io/bikcraft/img/bicicletas/nimbus.jpg"
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
        <div className="absolute left-0 top-0 h-full w-full opacity-0 hover:bg-[#000] hover:opacity-90">
          <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col gap-4 px-6 py-2 text-center text-secondary-color">
            <h1 className="text-2xl">{props.name}</h1>
            <span className="max-md:hidden">{props.description}</span>
            <Link
              className="mx-auto block rounded-full bg-[#222] p-1 px-10 hover:bg-[#333]"
              href={`${props.href}`}
              target="_blank"
            >
              Ver Projeto
            </Link>
          </div>
        </div>
        <Image
          className="h-60 w-full object-cover"
          width={240}
          height={240}
          src={`${props.src}`}
          alt={`${props.alt}`}
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
        className="fixed right-20 top-10 -z-50 animate-pulse opacity-90"
        src="/img/star.svg"
        width={64}
        height={64}
        alt="star"
      />
      <Image
        style={{ width: "64px", height: "64px" }}
        className="fixed right-40 top-10 -z-50 animate-pulse opacity-30"
        src="/img/star.svg"
        width={64}
        height={64}
        alt="star"
      />
      <Image
        style={{ width: "64px", height: "64px" }}
        className="top-50 fixed right-32 -z-50 animate-pulse opacity-70"
        src="/img/star.svg"
        width={64}
        height={64}
        alt="star"
      />
      <Image
        style={{ width: "96px", height: "96px" }}
        className="fixed right-60 top-10 -z-50 opacity-50 max-sm:hidden"
        src="/img/cloud.svg"
        width={96}
        height={96}
        alt="cloud"
      />
      <Image
        style={{ width: "208px", height: "208px" }}
        className="fixed -bottom-16 right-0 -z-50 opacity-50 max-sm:hidden"
        src="/img/rocket.svg"
        width={208}
        height={208}
        alt="rocket"
      />
    </>
  );
}
