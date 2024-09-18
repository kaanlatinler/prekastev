import Subheader from "@/components/Subheader";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import api from "@/services/api";
import { useEffect, useState } from "react";
import { set } from "mongoose";

export default function Models() {
    const router = useRouter();
    const { id } = router.query;

    const [model, setModel] = useState({});
    const [models, setModels] = useState([]);
    const [selectedModelId, setSelectedModelId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const modelsResponse = await api.get('/portfoilo/getModels');
                setModels(modelsResponse.data.data);

                if (id) {
                    const modelFromDb = await api.get(`/portfoilo/getModelById/${id}`);
                    setModel(modelFromDb.data.data);
                    setSelectedModelId(id);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleModelClick = (modelId) => {
        setSelectedModelId(modelId);
        router.push(`/models/${modelId}`);
    };

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
    title='MODELLER'
    subtitle='Model Details'
    link='models' />
    
    <div id="content">
      <div className="container">
        <div className="row">
                        <div id="sidebar" className="col-md-3 wow fadeInUp">
                            <ul id="services-list">
                                {models.map((model, index) => (
                                    <li 
                                        key={index} 
                                        className={selectedModelId === model._id ? "active" : ""}
                                        onClick={() => handleModelClick(model._id)}
                                    >
                                        <a href="#">{model.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-12 wow fadeInUp" data-wow-delay=".3s">
                                <div className="project-info">
                                        <h2>{model?.area}m² Arsa İçin</h2>

                                        <div class="details">
                                        <div class="info-text">
                                            <span class="title">Zemin Kat Brüt Alan </span>
                                            <span class="val"> {model?.groundFloor?.grossArea}m²</span>
                                        </div>

                                        <div class="info-text">
                                            <span class="title">Zemin Kat Teras </span>
                                            <span class="val"> {model?.groundFloor?.terrace}m²</span>
                                        </div>

                                        <div class="info-text">
                                            <span class="title">Havuz </span>
                                            <span class="val"> {model?.groundFloor?.pool}m²</span>
                                        </div>

                                        <div class="info-text">
                                            <span class="title">1.Kat Brüt Alan </span>
                                            <span class="val"> {model?.firstFloor?.grossArea}m²</span>
                                        </div>

                                        <div class="info-text">
                                            <span class="title">1.Kat Toplam Teras Alanı </span>
                                            <span class="val"> {model?.firstFloor?.terrace}m²</span>
                                        </div>

                                        <div class="info-text"></div>
                                            <span class="title">Oda Sayısı </span>
                                            <span class="val"> {model?.roomCount}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {model?.images?.map((image, index) => (
                                <div key={index} className="col-md-6 pic-services wow fadeInUp" data-wow-delay=".6s"><img
                                    src={image.url} className="img-responsive" alt=""/>
                                </div>    
                                ))}
                            </div>
                        </div>
        </div>
      </div>
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