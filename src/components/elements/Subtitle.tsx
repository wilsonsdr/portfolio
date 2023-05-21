import React from "react";
import { Color } from "../enum/color";

interface SubtitleProps {
  children: React.ReactNode;
  color: Color;
}

export default function Subtitle(props: SubtitleProps) {
  return (
    <h2 className={`text-xl ${props.color} max-md:w-full`}>{props.children}</h2>
  );
}
