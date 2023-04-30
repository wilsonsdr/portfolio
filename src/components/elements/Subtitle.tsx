import React from "react";

interface SubtitleProps {
  text: string;
}

export default function Subtitle(props: SubtitleProps) {
  return <h2 className="font-title text-secondary-color">{props.text}</h2>;
}
