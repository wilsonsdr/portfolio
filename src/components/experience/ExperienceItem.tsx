import React from "react";
import P from "../elements/P";

interface ExperienceItemProps {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

export default function ExperienceItem(props: ExperienceItemProps) {
  return (
    <div className="flex flex-1 flex-wrap flex-col gap-5">
      <P>
        {props.company} - {props.role}
      </P>
      <span className="text-neutral-400 italic font-p text-lg">
        {props.startDate} - {props.endDate}
      </span>
      <P>{props.description}</P>
    </div>
  );
}
