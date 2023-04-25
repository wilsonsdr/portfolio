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
      <h2 className="text-lg md:text-lg lg:text-xl font-p text-neutral-200 w-11/12 max-md:w-full">
        {props.company} - {props.role}
      </h2>
      <span className="text-neutral-400 italic font-p text-lg">
        {props.startDate} - {props.endDate}
      </span>
      <P>{props.description}</P>
    </div>
  );
}
