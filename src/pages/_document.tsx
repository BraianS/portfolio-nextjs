import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <meta name="descricao" content="Portfolio criando com NextJS"/>      
      <Head title="Portoflio NextJS" />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
