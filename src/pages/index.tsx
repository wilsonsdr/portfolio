import Header from "@/components/layout/Header";
import Head from "next/head";

export default function App() {
  return (
    <div className="flex flex-row gap-56 max-sm:flex-col max-sm:gap-20">
      <Head>
        <meta
          name="description"
          content="Portfolio com minhas experiências profissionais, formação acadêmica, projetos pessoais e links para contato"
        />
        <title>Wilson</title>
      </Head>
      <Header />
    </div>
  );
}
