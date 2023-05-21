import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

export default function Title(props: TitleProps) {
  return (
    <h1 className="text-3xl font-extrabold tracking-wide text-secondary-color md:text-3xl lg:text-4xl">
      {props.children}
    </h1>
  );
}
