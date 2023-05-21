import Header from "@/components/layout/Header";
import Head from "next/head";

export default function App() {
  return (
    <div className="flex flex-row gap-56">
      <Head>
        <title>Wilson</title>
      </Head>
      <Header />
    </div>
  );
}
