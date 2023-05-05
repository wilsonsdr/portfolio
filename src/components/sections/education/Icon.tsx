import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconProps {
  icon: any;
}

export default function Icon(props: IconProps) {
  return (
    <FontAwesomeIcon
      className={`absolute left-[-40px] top-1/2 w-5 -translate-y-1/2 transform text-[#F9C784] max-md:hidden`}
      icon={props.icon}
    />
  );
}
