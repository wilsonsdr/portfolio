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
      <h2 className="text-lg md:text-lg lg:text-xl font-p w-11/12 text-highlight-color  max-md:w-full">
        {props.company} - {props.role}
      </h2>
      <span className="italic font-p text-lg text-info-color">
        {props.startDate} - {props.endDate}
      </span>
      <P text={props.description}></P>
    </div>
  );
}
