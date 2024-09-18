// pages/_document.js
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="/css/bootstrap.min.css" rel="stylesheet" id="bootstrap" />
        <link href="/css/plugins.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/color.css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/bg.css" />
        <link rel="stylesheet" href="/css/colors/yellow.css" id="colors" />
        <link rel="stylesheet" href="/rs-plugin/css/settings.css" />
        <link rel="stylesheet" href="/css/rev-settings.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>
      <body id="homepage">
        <div id="wrapper">
          <Header />
          <Main />
          <NextScript />
        </div>
        <Footer />
      </body>
    </Html>
  );
}
