import React from "react";

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <h1 className="text-3xl md:text-3xl lg:text-4xl font-extrabold font-title tracking-wide text-secondary-color">
      {title}
    </h1>
  );
}
