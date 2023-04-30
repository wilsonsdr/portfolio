import React from "react";

interface HyperLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function Hyperlink(props: HyperLinkProps) {
  return (
    <a className="hover:text-highlight-color" href={props.href} target="_blank">
      {props.children}
    </a>
  );
}
