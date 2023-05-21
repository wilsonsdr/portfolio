interface SectionProps {
  children: React.ReactNode;
}

export default function Section(props: SectionProps) {
  return <section className="flex flex-col gap-5">{props.children}</section>;
}
