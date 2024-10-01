import Link from "next/link";
import { useRouter } from "next/router";
import api from "@/services/api";

const ModelCard = ({ model, token }) => {
  const router = useRouter();

  const handelDelete = () => {
    const response = api.delete(`/portfoilo/deleteModel/${model._id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.data.success) {
      alert("Model başarıyla silindi");
      router.push("/admin/models");
    } else {
      alert("Model silinirken bir hata oluştu");
      router.push("/admin/models");
    }
  };

  const handleEdit = () => {
    router.push(`/admin/model/${model._id}`);
  };

  return (
    <div class="col-lg-4">
      <div class="card text-white">
        <img src={model.mainPicture} class="card-img-top" alt={model.title} />
        <div class="card-body">
          <h5 class="card-title mb-3">{model.title}</h5>
          <div className="d-flex justify-content-between">
            <button
              onClick={handleEdit}
              className="btn btn-outline-warning btn-lg me-3"
            >
              Düzenle
            </button>
            <button
              onClick={handelDelete}
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
