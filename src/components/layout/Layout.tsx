import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex flex-row gap-56">
      <Head>
        <title>Wilson</title>
      </Head>
      <Header />
      <Main>{props.children}</Main>
    </div>
  );
}
