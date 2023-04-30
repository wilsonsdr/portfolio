import React from "react";

interface PProps {
  text: string;
}

export default function P({ text }: PProps) {
  return (
    <p className="text-lg w-11/12 font-p text-primary-color md:text-lg lg:text-xl max-md:w-full">
      {text}
    </p>
  );
}
