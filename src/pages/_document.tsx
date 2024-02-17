import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='pt-br'>
      <Head />
      <body className='mx-auto max-w-7xl bg-body-color px-10 py-20 max-sm:w-full max-sm:p-4'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
