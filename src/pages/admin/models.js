import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "@/services/api";
import ModelCard from "./components/model/ModelCard";

export async function getServerSideProps() {
  const response = await api.get("/portfoilo/getModels");

  const models = response.data.data;

  return { props: { models } };
}

export default function Models({ models }) {
  const router = useRouter();
  const [token, setToken] = useState("");

  useEffect(() => {
    const jwtToken = localStorage.getItem("token");
    setToken(jwtToken);
    if (!jwtToken) {
      alert("Giriş yapmalısınız");
      router.push("/admin/login");
    }
  }, []);

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

      <div className="m-5 p-5">
        <section className="fullwidthbanner-container pt-5">
          <div id="content" className="no-bottom no-top mt-5">
            <div className="row mb-5">
              <div className="col-lg-12">
                <h1 className="text-center">Modeller</h1>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-lg-12">
                <Link className="btn btn-primary" href="/admin/addModel">
                  Model Ekle
                </Link>
              </div>
            </div>
            <div class="row row-cols-1 row-cols-md-2 g-4">
              {models.map((model) => (
                <ModelCard key={model._id} model={model} token={token} />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Script dosyalarını ekliyoruz */}
      <Script src="../js/plugins.js" strategy="lazyOnload" />
      <Script src="../js/designesia.js" strategy="lazyOnload" />
      <Script src="../js/menu.js" strategy="lazyOnload" />
      <Script
        src="../rs-plugin/js/jquery.themepunch.plugins.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="../rs-plugin/js/jquery.themepunch.revolution.min.js"
        strategy="lazyOnload"
      />
      <Script src="../js/cookies.js" strategy="lazyOnload" />
      <Script src="../js/rev-slider.js" strategy="lazyOnload" />
    </>
  );
}
