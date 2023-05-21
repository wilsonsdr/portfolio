import React from "react";

interface PProps {
  children: React.ReactNode;
}

export default function P(props: PProps) {
  return <p className="w-11/12 text-lg text-primary-color">{props.children}</p>;
}
