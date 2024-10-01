import Subheader from "@/components/Subheader";
import Head from "next/head";
import Script from "next/script";
import api from "@/services/api";
import { useEffect, useState } from "react";
import VideoModal from "@/components/founder/VideoModal"; // Modal bileşeni için doğru yolu ekleyin
import Link from "next/link";

export async function getServerSideProps() {
  const response = await api.get("/founder/getFounderDetails");
  const founder = response.data.data;
  return { props: { founder } };
}

export default function Founder({ founder }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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

      <Subheader title="KURUCUMUZ" subtitle="" />

      <div id="content" className="no-top no-bottom">
        <section id="section-about-us-2" className="side-bg no-padding">
          <div
            className="image-container col-md-5 pull-left"
            data-delay="0"
          ></div>

          <div className="container">
            <div className="row">
              <div
                className="col-xxl-6 offset-lg-6 offset-md-12 col-lg-6 col-md-12"
                data-animation="fadeInRight"
                data-delay="200"
              >
                {founder.map((f, index) => (
                  <div key={index} className="inner-padding">
                    <h2>
                      {f.name} {f.surname}
                    </h2>
                    <br />
                    <h3>
                      <span className="id-color">Kurucu</span> & {f.title}
                    </h3>

                    <p className="intro">{f.paragraph}</p>
                    {f.description}
                  </div>
                ))}
                <div className="clearfix"></div>
                <Link
                  className="btn btn-primary w-100"
                  href="#"
                  onClick={openModal} // Modalı açmak için tıklama olayı
                >
                  TANITIM VİDEOSU
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Modal Bileşeni */}
      <VideoModal isOpen={isModalOpen} onClose={closeModal} />

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
