import Subheader from "@/components/Subheader";
import Head from "next/head";
import Script from "next/script";
import api from "@/services/api";
import { useEffect, useState } from "react";
import HouseModel_col3 from "@/components/models/HouseModel_col3";
import HouseModel_col2 from "@/components/models/HouseModel_col2";

export async function getServerSideProps() {
  const response = await api.get("/portfoilo/getModels");

  const models = response.data.data;

  return { props: { models } };
}

export default function Models({ models }) {
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

      <Subheader title="MODELLER" subtitle="" />

      <div id="content">
        <div className="container">
          <div className="row mb-5">
            {models.map((model, index) =>
              index < 3 ? <HouseModel_col3 key={index} model={model} /> : null
            )}
          </div>

          <div className="row">
            {models.map((model, index) =>
              index >= 3 ? <HouseModel_col2 key={index} model={model} /> : null
            )}
          </div>
        </div>
      </div>

      {/* Script dosyalarını ekliyoruz */}
      <Script src="/js/plugins.js" strategy="lazyOnload" />
      <Script src="/js/designesia.js" strategy="lazyOnload" />
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
