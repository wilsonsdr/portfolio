import React from "react";

interface ShadowCardProps {
  children: React.ReactNode;
}

export default function ShadowCard(props: ShadowCardProps) {
  return (
    <div className="relative mt-4 w-3/4 rounded-sm bg-card-color p-4 text-dark-color max-sm:m-auto max-sm:mt-4">
      <div className="absolute z-[-1] mt-2 h-full w-full rounded-sm bg-[#000]"></div>
      {props.children}
    </div>
  );
}
