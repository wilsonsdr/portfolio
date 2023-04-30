import React from "react";

interface ShadowCardProps {
  children: React.ReactNode;
}

export default function ShadowCard(props: ShadowCardProps) {
  return (
    <div className="relative w-3/4 mt-4 p-4 text-dark-color bg-card-color rounded-sm max-sm:m-auto max-sm:mt-4">
      <div className="absolute z-[-1] w-full h-full mt-2 bg-[#000] rounded-sm"></div>
      {props.children}
    </div>
  );
}
