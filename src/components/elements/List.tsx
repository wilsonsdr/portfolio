import React from 'react';
import { Color } from '../enum/color';
import { List } from '../enum/list';

interface ListContainerProps {
  children: React.ReactNode;
}

export default function ListContainer(props: ListContainerProps) {
  return <ul className='flex flex-col gap-2'>{props.children}</ul>;
}

interface ListItemProps {
  children: React.ReactNode;
  color: Color;
  disc?: List;
}

export function ListItem(props: ListItemProps) {
  return <li className={`list-inside text-lg ${props.disc} ${props.color}`}>{props.children}</li>;
}
