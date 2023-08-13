import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

export default function Title(props: TitleProps) {
  return (
    <h1 className="text-3xl font-extrabold tracking-wide text-secondary-color">
      {props.children}
    </h1>
  );
}
