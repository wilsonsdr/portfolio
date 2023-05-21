import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body className="mx-auto w-10/12 bg-body-color py-20 max-sm:w-full max-sm:p-4">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
