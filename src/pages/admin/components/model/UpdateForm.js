import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import api from "@/services/api";

const UpdateForm = ({ model, token }) => {
  const router = useRouter();

  // Tüm state'leri varsayılan değerlerle başlat
  const [formData, setFormData] = useState({
    title: "",
    area: "",
    groundFloor: {
      grossArea: "",
      terrace: "",
      pool: "",
    },
    firstFloor: {
      grossArea: "",
      terrace: "",
    },
    roomCount: "",
    mainPicture: "",
    filter: "",
    images: [],
  });

  const [chosenImages, setChosenImages] = useState([]);
  const [chosenMainImage, setChosenMainImage] = useState("");
  const [deletedMainImage, setDeletedMainImage] = useState("");
  const [alert, setAlert] = useState("");
  const [alertType, setAlertType] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // model prop'u değiştiğinde form verilerini güncelle
  useEffect(() => {
    if (model) {
      setFormData({
        title: model.title || "",
        area: model.area || "",
        groundFloor: {
          grossArea: model.groundFloor?.grossArea || "",
          terrace: model.groundFloor?.terrace || "",
          pool: model.groundFloor?.pool || "",
        },
        firstFloor: {
          grossArea: model.firstFloor?.grossArea || "",
          terrace: model.firstFloor?.terrace || "",
        },
        roomCount: model.roomCount || "",
        mainPicture: model.mainPicture || "",
        filter: model.filter || "",
        images: model.images || [],
      });
    }
  }, [model]);

  if (!model) {
    return <div className="alert alert-danger">Model bulunamadı</div>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setAlert("");

    try {
      const response = await api.put(
        `/portfoilo/updateModel/${model._id}`,
        formData,
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
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFloorChange = (floor, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [floor]: {
        ...prev[floor],
        [field]: value,
      },
    }));
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
        setFormData((prev) => ({
          ...prev,
          images: prev.images.filter((image) => image._id !== imgId),
        }));
      }
    } catch (err) {
      console.log(err);
      setAlert("Silme işlemi sırasında hata oluştu");
      setAlertType(false);
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
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
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
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                />
              </div>
              {/* Zemin kat alanları */}
              <div className="form-group mt-3">
                <label htmlFor="gfGrossArea" className="form-label text-white">
                  Zemin Kat Brüt Alan
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="gfGrossArea"
                  value={formData.groundFloor.grossArea}
                  onChange={(e) =>
                    handleFloorChange(
                      "groundFloor",
                      "grossArea",
                      e.target.value
                    )
                  }
                />
              </div>
              {/* Diğer form alanları benzer şekilde güncellenecek */}
            </div>
            <div className="col-xxl-6">
              {/* Resim bölümü */}
              <div className="form-group mt-3">
                <label htmlFor="mainPicture" className="form-label text-white">
                  Ana Resim
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="mainPicture"
                  onChange={(e) => setChosenMainImage(e.target.files[0])}
                />
                {formData.mainPicture && (
                  <div className="col-lg-4 mt-5">
                    <div className="card text-white">
                      <img
                        src={formData.mainPicture}
                        className="card-img-top"
                        alt="Ana resim"
                      />
                      <div className="card-body">
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-lg"
                          onClick={() =>
                            setDeletedMainImage(formData.mainPicture)
                          }
                        >
                          Sil
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Diğer resimler bölümü */}
              <div className="form-group mt-3">
                <label htmlFor="images" className="form-label text-white">
                  Resimler
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="images"
                  multiple
                  onChange={(e) => setChosenImages(Array.from(e.target.files))}
                />
              </div>
              <div className="row">
                {formData.images?.map((image, index) => (
                  <div key={index} className="col-lg-4 col-md-6 mt-3">
                    <div className="card text-white">
                      <img
                        src={`../${image.url}`}
                        className="card-img-top"
                        alt={`Resim ${index + 1}`}
                      />
                      <div className="card-body">
                        <button
                          type="button"
                          onClick={() => handleDeleteImage(image._id)}
                          className="btn btn-outline-danger btn-lg"
                        >
                          Sil
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between mt-3">
            <button
              type="submit"
              className="btn btn-success w-20 py-8 fs-4 mb-4 rounded-2"
              disabled={isLoading}
            >
              {isLoading ? "Güncelleniyor..." : "Güncelle"}
            </button>
            <button
              type="button"
              className="btn btn-danger w-20 py-8 fs-4 mb-4 rounded-2"
              onClick={() => router.back()}
            >
              Geri Dön
            </button>
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
