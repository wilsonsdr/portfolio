import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface EducationIconProps {
  icon: any;
}

export default function EducationIcon(props: EducationIconProps) {
  return (
    <FontAwesomeIcon
      className={`absolute left-[-40px] top-1/2 w-5 transform -translate-y-1/2 text-[#F9C784] max-md:hidden`}
      icon={props.icon}
    />
  );
}
