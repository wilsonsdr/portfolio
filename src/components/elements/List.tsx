import React from "react";
import { Justify } from "../enum/Justify";
import { Gap } from "../enum/Gap";

interface ListProps {
  children: React.ReactNode;
}

export default function List(props: ListProps) {
  return (
    <nav>
      <ul className="flex flex-col gap-2 text-neutral-400">{props.children}</ul>
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
      className={`flex flex-1 flex-wrap items-center ${props.justify} ${props.gap} text-base font-p text-primary-color max-md:justify-center`}
    >
      {props.children}
    </li>
  );
}
