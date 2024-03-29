import React from "react";
import { Color } from "../enum/color";

interface SubtitleProps {
  children: React.ReactNode;
  color: Color;
}

export default function Subtitle(props: SubtitleProps) {
  return <h2 className={`text-2xl ${props.color}`}>{props.children}</h2>;
}
