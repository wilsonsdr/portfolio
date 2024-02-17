import React from 'react';
import { Color } from '../enum/color';

interface ListContainerProps {
  children: React.ReactNode;
}

export default function ListContainer(props: ListContainerProps) {
  return <ul className='flex flex-col gap-2'>{props.children}</ul>;
}

interface ListItemProps {
  children: React.ReactNode;
  color: Color;
}

export function ListItem(props: ListItemProps) {
  return <li className={props.color}>{props.children}</li>;
}
