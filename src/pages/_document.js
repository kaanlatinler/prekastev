// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head></Head>
      <body id="homepage">
        <div id="wrapper">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
