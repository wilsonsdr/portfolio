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
      <div className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-500 hover:bg-[#000] hover:opacity-90">
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col gap-4 text-center font-p text-secondary-color">
          <h1 className="text-2xl max-md:text-3xl max-sm:text-xl">
            {props.name}
          </h1>
          <span className="max-md:hidden">{props.description}</span>
          <a
            className="block rounded-full bg-[#222] p-1 hover:bg-[#333] max-md:text-xl max-sm:text-sm"
            href={`${props.href}`}
            target="_blank"
          >
            Ver Projeto
          </a>
        </div>
      </div>
      <img
        className="h-[235px] w-full object-cover"
        width={235}
        height={235}
        src={`${props.src}`}
        alt={`${props.alt}`}
      />
    </div>
  );
}
