import React from "react";

interface SubtitleProps {
  company: string;
  role: string;
}

export default function Subtitle(props: SubtitleProps) {
  return (
    <h2 className="font-p w-11/12 text-lg text-highlight-color max-md:w-full md:text-lg  lg:text-xl">
      {props.company} - {props.role}
    </h2>
  );
}
