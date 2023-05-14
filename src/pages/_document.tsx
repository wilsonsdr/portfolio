import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="icon" type="image/x-icon" href="/img/logo.svg" />
      </Head>
      <body className="bg-bg-color">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
