// Bootstrap CSS dosyasını dahil etmeyi unutmayın

import Image from "next/image";

const ModelDetails = ({ isOpen, onClose, model }) => {
  if (!isOpen) return null; // Modal açık değilse hiçbir şey render etme

  return (
    <div
      className={`modal fade ${isOpen ? "show" : ""}`}
      id="scrollableModal"
      tabIndex="-1"
      aria-labelledby="scrollableModalLabel"
      aria-hidden={!isOpen}
      style={{
        display: isOpen ? "block" : "none",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }} // Transparan arka plan
    >
      <div className="modal-dialog modal-fullscreen modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header pb-4">
            <h5 className="modal-title ms-5" id="scrollableModalLabel">
              {model?.title || "Model Detayları"}
            </h5>
            <button
              type="button"
              className="btn-close me-5"
              onClick={onClose}
              aria-label="Close"
            >
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="container project-view">
              <div className="row">
                <div className="col-md-8 project-images">
                  {model?.images?.map((image, index) => (
                    <img
                      key={index}
                      src={image.url}
                      alt={`Model Image ${index + 1}`}
                      className="img-responsive"
                    />
                  ))}
                </div>
                <div className="col-md-4">
                  <div className="project-info">
                    <h2>{model?.title || "Model Başlığı"}</h2>
                    <br />
                    <h2>{model?.area}m² Arsa İçin</h2>

                    <div class="details">
                      <div class="info-text">
                        <span class="title">Zemin Kat Brüt Alan</span>
                        <span class="val">
                          {model?.groundFloor?.grossArea}m²
                        </span>
                      </div>

                      <div class="info-text">
                        <span class="title">Zemin Kat Teras</span>
                        <span class="val">{model?.groundFloor?.terrace}m²</span>
                      </div>

                      <div class="info-text">
                        <span class="title">Havuz</span>
                        <span class="val">{model?.groundFloor?.pool}m²</span>
                      </div>

                      <div class="info-text">
                        <span class="title">1.Kat Brüt Alan</span>
                        <span class="val">
                          {model?.firstFloor?.grossArea}m²
                        </span>
                      </div>

                      <div class="info-text">
                        <span class="title">1.Kat Toplam Teras Alanı</span>
                        <span class="val">{model?.firstFloor?.terrace}m²</span>
                      </div>

                      <div class="info-text"></div>
                      <span class="title">Oda Sayısı</span>
                      <span class="val">{model?.roomCount}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;
