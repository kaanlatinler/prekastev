import Subheader from "@/components/Subheader";
import Head from "next/head";
import Script from "next/script";
import api from "@/services/api";
import { useEffect, useState } from "react";
import Map from "@/components/contact/Map";
import Form from "@/components/contact/Form";
import Sidebar from "@/components/contact/Sidebar";

export default function Models() {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="/images/logo.png"
          type="image/gif"
          sizes="16x16"
        />
        <title>Prekast Ev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Archi is best selling interior design website template with responsive stunning design"
        />
        <meta
          name="keywords"
          content="architecture,building,business,bootstrap,creative,exterior design,furniture design,gallery,garden design,house,interior design,landscape design,multipurpose,onepage,portfolio,studio"
        />
        <meta name="author" content="" />
      </Head>

      <Subheader title="İLETİŞİM" subtitle="" />

      <div id="content" className="no-top">
        <Map />
        <div className="container">
          <div className="row">
            <Form />
            <Sidebar />
          </div>
        </div>
      </div>

      {/* Script dosyalarını ekliyoruz */}
      <Script src="/js/plugins.js" strategy="lazyOnload" />
      <Script src="/js/designesia.js" strategy="lazyOnload" />
      <Script src="/js/menu.js" strategy="lazyOnload" />
      <Script
        src="/rs-plugin/js/jquery.themepunch.plugins.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/rs-plugin/js/jquery.themepunch.revolution.min.js"
        strategy="lazyOnload"
      />
      <Script src="/js/cookies.js" strategy="lazyOnload" />
      <Script src="/js/rev-slider.js" strategy="lazyOnload" />
    </>
  );
}
