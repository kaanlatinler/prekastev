import { useState, useEffect } from "react";
import api from "@/services/api";
import ModelDetails from "../home/ModelDetails"; // Modal bileşenini import et
import Image from "next/image";
import Link from "next/link";

const Portfoilo = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null); // Seçilen modeli saklamak için durum ekle
  const [isModalOpen, setIsModalOpen] = useState(false); // Modalın açık olup olmadığını kontrol etmek için durum ekle

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/portfoilo/getModels");
        setModels(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleLinkClick = (model) => {
    setSelectedModel(model);
    setIsModalOpen(true); // Modalı aç
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Modalı kapat
  };

  const filteredItems = () => {
    if (activeFilter === "*") {
      return ".item";
    }
    return activeFilter;
  };

  return (
    <section
      id="section-portfolio"
      className="no-top no-bottom"
      aria-label="section-portfolio"
    >
      <div className="container">
        <div className="spacer-single"></div>
        <div className="row">
          <div className="col-md-12 text-center">
            <ul id="filters" className="wow fadeInUp" data-wow-delay="0s">
              <li>
                <Link
                  href="#"
                  className={activeFilter === "*" ? "selected" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    handleFilterClick("*");
                  }}
                  data-filter="*"
                >
                  tüm evler
                </Link>
              </li>
              {models.map((model, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className={
                      activeFilter === `.${model.filter}` ? "selected" : ""
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      handleFilterClick(`.${model.filter}`);
                    }}
                    data-filter={`.${model.filter}`}
                  >
                    {model.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div id="gallery" className="row g-0 wow fadeInUp" data-wow-delay=".3s">
        {models.map((model, index) => (
          <div
            key={index}
            className={`col-md-4 col-sm-6 col-12 item ${model.filter} ${
              activeFilter !== "*" && activeFilter !== `.${model.filter}`
                ? "d-none"
                : ""
            }`}
          >
            <div className="picframe">
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(model); // Seçilen modeli modal için ayarla
                }}
              >
                <span className="overlay">
                  <span className="pf_text">
                    <span className="project-name">{model.title}</span>
                  </span>
                </span>
              </Link>
              <img src={model.mainPicture} alt="" />
            </div>
          </div>
        ))}
        <div
          className={`col-md-4 col-sm-6 col-12 item ${
            activeFilter !== "*" && activeFilter !== "*" ? "d-none" : ""
          }`}
        >
          <div className="picframe">
            <Link className="simple-ajax-popup-align-top" href="/models">
              <span className="overlay">
                <span className="pf_text">
                  <span className="project-name">PREKASTEV</span>
                </span>
              </span>
            </Link>
            <img src="../images/logobyuk.png" alt="" />
          </div>
        </div>
      </div>

      <div id="loader-area">
        <div className="project-load"></div>
      </div>

      {/* Model Details Modal */}
      <ModelDetails
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        model={selectedModel}
      />
    </section>
  );
};

export default Portfoilo;
