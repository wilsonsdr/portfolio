import React from "react";
import { Color } from "../enum/color";

interface ListProps {
  children: React.ReactNode;
}

export default function List(props: ListProps) {
  return <ul className="flex flex-col gap-2">{props.children}</ul>;
}

interface ItemProps {
  children: React.ReactNode;
  color: Color;
}

export function Item(props: ItemProps) {
  return <li className={props.color}>{props.children}</li>;
}
