import React from "react";
import { Justify, Gap } from "../enum";

interface ListProps {
  children: React.ReactNode;
}

export default function List(props: ListProps) {
  return (
    <nav>
      <ul className="text-neutral-400 flex flex-col gap-2">{props.children}</ul>
    </nav>
  );
}

interface ListItemProps {
  children: React.ReactNode;
  justify: Justify;
  gap?: Gap;
}

export function ListItem(props: ListItemProps) {
  return (
    <li
      className={`flex flex-1 flex-wrap items-center ${props.justify} ${props.gap} font-p text-base text-primary-color max-md:justify-center`}
    >
      {props.children}
    </li>
  );
}
