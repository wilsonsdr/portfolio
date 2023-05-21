import React from "react";

interface PProps {
  children: React.ReactNode;
}

export default function P(props: PProps) {
  return (
    <p
      data-aos="fade-left"
      className="font-p w-11/12 text-lg text-primary-color max-md:w-full md:text-lg lg:text-xl"
    >
      {props.children}
    </p>
  );
}
