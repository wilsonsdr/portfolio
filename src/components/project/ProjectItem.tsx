import React from "react";

interface ProjectItemProps {
  name: string;
  description: string;
  href: string;
  src: string;
  alt: string;
}

export default function ProjectItem(props: ProjectItemProps) {
  return (
    <div className="relative">
      <div className="absolute opacity-0 top-0 left-0 w-full h-full hover:opacity-90 hover:bg-black transition-all duration-500">
        <div className="absolute flex flex-col gap-4 text-center left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 font-p">
          <h1 className="text-2xl max-sm:text-xl max-md:text-3xl">
            {props.name}
          </h1>
          <span className="max-md:hidden">{props.description}</span>
          <a
            className="p-1 bg-[#222] block rounded-full hover:bg-[#333] max-sm:text-sm max-md:text-xl"
            href={`${props.href}`}
            target="_blank"
          >
            Ver Projeto
          </a>
        </div>
      </div>
      <img
        className="object-cover w-full h-[235px]"
        width={235}
        height={235}
        src={`${props.src}`}
        alt={`${props.alt}`}
      />
    </div>
  );
}
