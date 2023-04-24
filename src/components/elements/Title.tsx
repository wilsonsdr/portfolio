import React from 'react'

interface TitleProps {
    children : React.ReactNode
}

export default function Title({children} : TitleProps) {
  return (
    <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold font-title tracking-wide text-white">{children}</h1>
  )
}
