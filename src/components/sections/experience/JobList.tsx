import React from "react";
import P from "@/components/elements/P";

interface JobListProps {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

export default function JobList(props: JobListProps) {
  return (
    <div className="flex flex-1 flex-col flex-wrap gap-5">
      <h2 className="w-11/12 font-p text-lg text-highlight-color max-md:w-full md:text-lg  lg:text-xl">
        {props.company} - {props.role}
      </h2>
      <span className="font-p text-lg italic text-info-color">
        {props.startDate} - {props.endDate}
      </span>
      <P text={props.description}></P>
    </div>
  );
}
