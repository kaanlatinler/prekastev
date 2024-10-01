import { useState, useEffect } from "react";
import Link from "next/link";
import api from "@/services/api";
import { useRouter } from "next/router";

const UpdateForm = ({ model, token }) => {
  const router = useRouter();
  const [title, setTitle] = useState(model.title);
  const [area, setArea] = useState(model.area);
  const [gfGrossArea, setGfGrossArea] = useState(model.groundFloor.grossArea);
  const [gfTerrace, setGfGTerrace] = useState(model.groundFloor.terrace);
  const [gfPool, setGfPool] = useState(model.groundFloor.pool);
  const [ffGrossArea, setFfGrossArea] = useState(model.firstFloor.grossArea);
  const [ffTerrace, setFfTerrace] = useState(model.firstFloor.terrace);
  const [roomCount, setRoomCount] = useState(model.roomCount);
  const [mainPicture, setMainPicture] = useState(model.mainPicture);
  const [filter, setFilter] = useState(model.filter);
  const [images, setImages] = useState(model.images);

  const [chosenImages, setChosenImages] = useState([]);
  const [chosenMainImage, setChosenMainImage] = useState("");
  const [deletedMainImage, setDeletedMainImage] = useState("");

  const [alert, setAlert] = useState("");
  const [alertType, setAlertType] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setAlert("");

    try {
      const response = await api.put(
        `/portfoilo/updateModel/${model._id}`,
        {
          title,
          area,
          groundFloor: {
            grossArea: gfGrossArea,
            terrace: gfTerrace,
            pool: gfPool,
          },
          firstFloor: {
            grossArea: ffGrossArea,
            terrace: ffTerrace,
          },
          roomCount,
          mainPicture,
          filter,
          images,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setAlert("Kayıt başarılı");
        setAlertType(true);
      } else {
        setAlert("Kayıt başarısız");
        setAlertType(false);
      }
    } catch (err) {
      console.log(err);
      setAlert("Something went wrong");
      setAlertType(false);
    }
  };

  const handleDeleteImage = async (imgId) => {
    try {
      const response = await api.delete(
        `/portfoilo/deleteImage/${model._id}/${imgId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.data.success) {
        setAlert("Silme işlemi başarısız");
        setAlertType(false);
      } else {
        setAlert("Silme işlemi başarılı");
        setAlertType(true);
        const updatedImages = images.filter(
          (image, index) => image._id !== imgId
        );
        setImages(updatedImages);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card mb-0">
      <div className="card-body">
        <p className="text-center text-white fs-4 pt-5">Model Güncelle</p>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-xxl-6">
              <div className="form-group mt-3">
                <label htmlFor="title" className="form-label text-white">
                  Başlık
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="area" className="form-label text-white">
                  Alan
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="area"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="gfGrossArea" className="form-label text-white">
                  Zemin Kat Brüt Alan
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="gfGrossArea"
                  value={gfGrossArea}
                  onChange={(e) => setGfGrossArea(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="gfTerrace" className="form-label text-white">
                  Zemin Kat Teras
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="gfTerrace"
                  value={gfTerrace}
                  onChange={(e) => setGfGTerrace(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="gfPool" className="form-label text-white">
                  Havuz
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="gfPool"
                  value={gfPool}
                  onChange={(e) => setGfPool(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="ffGrossArea" className="form-label text-white">
                  1.Kat Brüt Alan
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ffGrossArea"
                  value={ffGrossArea}
                  onChange={(e) => setFfGrossArea(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="ffTerrace" className="form-label text-white">
                  1.Kat Teras
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ffTerrace"
                  value={ffTerrace}
                  onChange={(e) => setFfTerrace(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="roomCount" className="form-label text-white">
                  Oda Sayısı
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="roomCount"
                  value={roomCount}
                  onChange={(e) => setRoomCount(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="filter" className="form-label text-white">
                  Filtre (anasayfadaki bölüm için)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ffTerrace"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                />
              </div>
            </div>
            <div className="col-xxl-6">
              <div className="form-group mt-3">
                <label htmlFor="mainPicture" className="form-label text-white">
                  Ana Resim
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="mainPicture"
                  onChange={(e) => setMainPicture(e.target.value)}
                />
                <div class="col-lg-4 mt-5">
                  <div class="card text-white">
                    <img src={mainPicture} class="card-img-top" />
                    <div class="card-body">
                      <div className="d-flex justify-content-between">
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-lg"
                        >
                          Sil
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="images" className="form-label text-white">
                  Resimler
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="images"
                  multiple
                  onChange={(e) => setImages(e.target.value)}
                />
              </div>
              <div className="row">
                {images?.map((image, index) => (
                  <div key={index} className="col-lg-4 col-md-6 mt-3">
                    <div className="card  text-white">
                      <img src={`../${image.url}`} className="card-img-top" />
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <button
                            onClick={() => handleDeleteImage(image._id)}
                            className="btn btn-outline-danger btn-lg"
                          >
                            Sil
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-between mt-3">
                <button
                  type="button"
                  className="btn btn-success w-20 py-8 fs-4 mb-4 rounded-2"
                  onClick={handleSubmit}
                >
                  Güncelle
                </button>
                <button className="btn btn-danger w-20 py-8 fs-4 mb-4 rounded-2">
                  Geri Dön
                </button>
              </div>
            </div>
          </div>

          {alert && (
            <div
              className={
                alertType ? "alert alert-primary" : "alert alert-danger"
              }
            >
              {alert}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
