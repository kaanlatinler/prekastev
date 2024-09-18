import Subheader from "@/components/Subheader";
import Head from "next/head";
import Script from "next/script";
import api from "@/services/api";
import { useEffect, useState } from "react";

export default function Models() {

  const [founder, setFounder] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/founder/getFounderDetails');
        setFounder(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <Head>
    <link rel="icon" href="/images/logo.png" type="image/gif" sizes="16x16" />
    <title>Prekast Ev</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description"
      content="Archi is best selling interior design website template with responsive stunning design" />
    <meta name="keywords"
      content="architecture,building,business,bootstrap,creative,exterior design,furniture design,gallery,garden design,house,interior design,landscape design,multipurpose,onepage,portfolio,studio" />
    <meta name="author" content="" />
    </Head>

    <Subheader 
    title='KURUCUMUZ'
    subtitle='' />
    
    <div id="content" className="no-top no-bottom">
    <section id="section-about-us-2" className="side-bg no-padding">
                <div className="image-container col-md-5 pull-left" data-delay="0"></div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-6 " data-animation="fadeInRight" data-delay="200">
                            {founder.map((f, index) => (
                                <div key={index} className="inner-padding">
                                <h2>{f.name} {f.surname}</h2><br/>
                                <h3>
                                    <span className="id-color">Kurucu</span> & {f.title}
                                </h3>

                                <p className="intro">
                                    {f.paragraph}
                                </p>
                                {f.description}
                            </div>
                            ))}
                            <div className="clearfix"></div>
                            <a className="simple-ajax-popup-align-top btn-line btn-fullwidth"
                                href="founderDetails/founderVideo.html">
                                TANITIM VİDEOSU
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    </div>

    {/* Script dosyalarını ekliyoruz */}
    <Script src="/js/plugins.js" strategy="lazyOnload" />
    <Script src="/js/designesia.js" strategy="lazyOnload" />
    <Script src="/rs-plugin/js/jquery.themepunch.plugins.min.js" strategy="lazyOnload" />
    <Script src="/rs-plugin/js/jquery.themepunch.revolution.min.js" strategy="lazyOnload" />
    <Script src="/js/cookies.js" strategy="lazyOnload" />
    <Script src="/js/rev-slider.js" strategy="lazyOnload" />
  </>
  );
}