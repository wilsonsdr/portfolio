import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container(props: ContainerProps) {
  return <section className="relative flex flex-1 flex-wrap flex-col gap-5 pt-9 text-white max-sm:text-center max-sm:items-center z-50">{props.children}</section>;
}
