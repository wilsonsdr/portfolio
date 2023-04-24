import React from "react";

interface PProps {
  children: React.ReactNode;
}

export default function P(props: PProps) {
  return <p className="text-lg md:text-lg lg:text-xl font-p text-neutral-200 w-11/12 max-md:w-full">{props.children}</p>;
}
