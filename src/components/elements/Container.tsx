import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container(props: ContainerProps) {
  return (
    <section
      className="text-white relative z-50 flex flex-1 flex-col flex-wrap gap-5 max-md:items-center max-md:text-center"
    >
      {props.children}
    </section>
  );
}
