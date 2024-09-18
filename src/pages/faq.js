import Subheader from "@/components/Subheader";
import Head from "next/head";
import Script from "next/script";
import api from "@/services/api";
import { useEffect, useState } from "react";
import QuestionRow_black from "@/components/faq/QuestionRow_black";
import QuestionRow_black2 from "@/components/faq/QuestionRow_black2";
import QuestionRow_gray from "@/components/faq/QuestionRow_gray";

export default function Models() {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/faq/getQuestions');
                setFaqs(response.data.data);
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
    title='SIK SORULAN SORULAR'
    subtitle='' />

    <div id="content" className="no-top no-bottom">
        <QuestionRow_black faqs={faqs} />
        <QuestionRow_gray faqs={faqs} />
        <QuestionRow_black2 faqs={faqs} />
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