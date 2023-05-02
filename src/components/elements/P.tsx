import React from "react";

interface PProps {
  text: string;
}

export default function P({ text }: PProps) {
  return (
    <p className="w-11/12 font-p text-lg text-primary-color max-md:w-full md:text-lg lg:text-xl">
      {text}
    </p>
  );
}
