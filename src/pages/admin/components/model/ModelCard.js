import Link from "next/link";
import { useRouter } from "next/router";
import api from "@/services/api";

const ModelCard = ({ model, token }) => {
  const router = useRouter();

  // Model verisi eksikse bu durumda bir şey göstermeyin
  if (!model) {
    return <div>Model verisi bulunamadı.</div>;
  }

  const handleDelete = async () => {
    try {
      const response = await api.delete(`/portfoilo/deleteModel/${model._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        alert("Model başarıyla silindi");
        router.push("/admin/models");
      } else {
        alert("Model silinirken bir hata oluştu");
      }
    } catch (error) {
      console.error("Silme işleminde hata oluştu:", error);
      alert("Model silinirken bir hata oluştu");
    }
  };

  const handleEdit = () => {
    router.push(`/admin/model/${model._id}`);
  };

  return (
    <div className="col-lg-4">
      <div className="card text-white">
        <img
          src={model.mainPicture || "default-image.jpg"}
          className="card-img-top"
          alt={model.title || "Model"}
        />
        <div className="card-body">
          <h5 className="card-title mb-3">{model.title || "Model Başlığı"}</h5>
          <div className="d-flex justify-content-between">
            <button
              onClick={handleEdit}
              className="btn btn-outline-warning btn-lg me-3"
            >
              Düzenle
            </button>
            <button
              onClick={handleDelete}
              className="btn btn-outline-danger btn-lg"
            >
              Sil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
