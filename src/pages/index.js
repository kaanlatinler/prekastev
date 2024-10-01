import Head from "next/head";
import Script from "next/script"; // Next.js Script bileşenini ekliyoruz
import Slider from "@/components/home/Slider";
import About from "@/components/home/About";
import Steps from "@/components/home/Steps";
import Portfoilo from "@/components/home/Portfoilo";
import api from "@/services/api";

export async function getServerSideProps() {
  const sliderData = await api.get("/slider/getSliders");
  const aboutData = await api.get("about/getAbout");
  const stepData = await api.get("steps/getSteps");
  const modelData = await api.get("/portfoilo/getModels");

  const abouts = aboutData.data.data;
  const steps = stepData.data.data;
  const models = modelData.data.data;
  const sliders = sliderData.data.data;

  return {
    props: {
      abouts,
      steps,
      models,
      sliders,
    },
  };
}

export default function Home({ abouts, steps, models, sliders }) {
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

      <div id="content" className="no-bottom no-top">
        <Slider sliders={sliders} />
        <About abouts={abouts} />
        <Steps steps={steps} />
        <Portfoilo models={models} />
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
