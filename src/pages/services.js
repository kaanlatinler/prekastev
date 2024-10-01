import Subheader from "@/components/Subheader";
import Head from "next/head";
import Script from "next/script";

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

      <Subheader title="HİZMETLERİMİZ" subtitle="" />

      <div id="content">
        <div className="container">
          <div className="row mb-5">
            <div className="col-xxl-3 col-xl-6 col-lg-6 mb-5 border-bottom col-xxl-3 col-xl-6 col-lg-6 mb-5 border-bottom border-warning">
              <h3>
                <span className="id-color">ARSA</span> KEŞFİ
              </h3>
              İnşaat yapılacak arsanın topografya ve zemin yapısının
              değerlendirilmesi.
              <div className="spacer-single"></div>
              <br />
              <br />
            </div>

            <div className="col-xxl-3 col-xl-6 col-lg-6 mb-5 border-bottom col-xxl-3 col-xl-6 col-lg-6 mb-5 border-bottom border-warning">
              <h3>
                <span className="id-color">RUHSAT</span> PROJELERİ
              </h3>
              İnşaat izinlerinin alınması için gerekli Elektrik, Mekanik, Statik
              ve Mimari projelerinin hazırlanması.
              <br />
              <br />
              <div className="spacer-single"></div>
            </div>

            <div className="col-xxl-3 col-xl-6 col-lg-6 mb-5 border-bottom col-xxl-3 col-xl-6 col-lg-6 mb-5 border-bottom border-warning">
              <h3>
                <span className="id-color">ÜRETİM</span>
              </h3>
              Şantiyede kullanılacak prekast duvar panellerinin ve diğer inşaat
              kalemlerinin üretilmesi
              <br />
              <br />
              <div className="spacer-single"></div>
            </div>

            <div className="col-xxl-3 col-xl-6 col-lg-6 mb-5 border-bottom col-xxl-3 col-xl-6 col-lg-6 mb-5 border-bottom border-warning">
              <h3>
                <span className="id-color">ELEKTRİK VE</span> OTOMASYON
              </h3>
              Binaların elektrik sistemleri ve otomatik kontrol sistemlerinin
              tasarımı ve kurulumu
              <br />
              <br />
              <br />
              <div className="spacer-single"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-6 col-lg-6 mb-5 border-bottom col-xxl-3 col-xl-6 col-lg-6 mb-5 border-bottom border-warning">
              <h3>
                <span className="id-color">MEKANİK VE</span> İKLİMLENDİRME
              </h3>
              Binanın mekanik tesisat, ısıtma ve klima sistemlerinin tasarımı ve
              uygulanması.
              <br />
              <br />
              <div className="spacer-single"></div>
            </div>

            <div className="col-xxl-3 col-xl-6 col-lg-6 mb-5 border-bottom col-xxl-3 col-xl-6 col-lg-6 mb-5 border-bottom border-warning">
              <h3>
                <span className="id-color">İÇ</span> MİMARİ
              </h3>
              İç mekanlarının müşteri talepleri doğrultusunda estetik ve
              fonksiyonel tasarımın yapılması
              <br />
              <div className="spacer-single"></div>
            </div>

            <div className="col-xxl-3 col-xl-6 col-lg-6 mb-5 border-bottom col-xxl-3 col-xl-6 col-lg-6 mb-5 border-bottom border-warning">
              <h3>
                <span className="id-color">PEYZAJ</span>
              </h3>
              Dış mekanların bitki, su ögeleri ve diğer unsurlarla düzenlenmesi.
              <br />
              <br />
              <div className="spacer-single"></div>
            </div>

            <div className="col-xxl-3 col-xl-6 col-lg-6 mb-5 border-bottom col-xxl-3 col-xl-6 col-lg-6 mb-5 border-bottom border-warning">
              <h3>
                <span className="id-color">GARANTİ</span>
              </h3>
              İnşaat sonrası hizmetlerde kalite güvencesi ve onarım desteği
              sağlanması.
              <br />
              <br />
              <div className="spacer-single"></div>
            </div>
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
