import React from "react";

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <h1 className="font-title text-3xl font-extrabold tracking-wide text-secondary-color md:text-3xl lg:text-4xl">
      {title}
    </h1>
  );
}
