import React from "react";

interface SpanProps {
  startDate: string;
  endDate: string;
}

export default function Span(props: SpanProps) {
  return (
    <span className="text-lg italic text-info-color">
      {props.startDate} - {props.endDate}
    </span>
  );
}
