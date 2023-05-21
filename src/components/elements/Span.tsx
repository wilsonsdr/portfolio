import React from "react";
import { Color } from "../enum/color";

interface SpanProps {
  startDate: string;
  endDate: string;
  color: Color;
}

export default function Span(props: SpanProps) {
  return (
    <span className={`text-base italic text-info-color ${props.color}`}>
      {props.startDate} - {props.endDate}
    </span>
  );
}
