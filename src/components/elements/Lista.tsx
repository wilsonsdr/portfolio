import React from "react";

interface ListaProps {
  children : React.ReactNode
}

export default function Lista(props: ListaProps) {
  return (
    <li className="flex flex-1 flex-wrap justify-between items-center gap-4 font-p text-base hover:bg-[#222] hover:text-white transition duration-500 max-sm:justify-center">
        {props.children}
    </li>
  );
}
