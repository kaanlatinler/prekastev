import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "@/services/api";

export default function Users() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (!token) {
      alert("Giriş yapmalısınız");
      router.push("/admin/login");
    }

    const getUsers = async () => {
      try {
        const response = await api.get("/users/getUsers", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  // Kullanıcı silme fonksiyonu
  const handleDelete = async (userId) => {
    if (confirm("Bu kullanıcıyı silmek istediğinize emin misiniz?")) {
      try {
        await api.delete(`/users/deleteUser/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(users.filter((user) => user._id !== userId));
        alert("Kullanıcı başarıyla silindi");
      } catch (err) {
        console.log(err);
        alert("Kullanıcı silinirken bir hata oluştu");
      }
    }
  };

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

      <div className="m-5 p-5">
        <section className="fullwidthbanner-container pt-5">
          <div id="content" className="no-bottom no-top mt-5">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-8 d-flex align-items-stretch table-responsive">
                <table className="table table-dark table-hover border">
                  <thead className="text-center">
                    <tr className="table-light">
                      <th scope="col">Ad Soyad</th>
                      <th scope="col">Eposta</th>
                      <th scope="col">Şifre</th>
                      <th className="table-warning" scope="col">
                        Düzenle
                      </th>
                      <th className="table-danger" scope="col">
                        Sil
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index}>
                        <th scope="row">{user.name}</th>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td className="text-center">
                          <Link href={`/admin/user/${user._id}`}>
                            <span className="material-symbols-outlined">
                              edit_square
                            </span>
                          </Link>
                        </td>
                        <td className="text-center">
                          <span
                            className="material-symbols-outlined"
                            style={{ cursor: "pointer", color: "red" }}
                            onClick={() => handleDelete(user._id)}
                          >
                            delete
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Script dosyalarını ekliyoruz */}
      <Script src="../js/plugins.js" strategy="lazyOnload" />
      <Script src="../js/designesia.js" strategy="lazyOnload" />
      <Script src="../js/menu.js" strategy="lazyOnload" />
      <Script
        src="../rs-plugin/js/jquery.themepunch.plugins.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="../rs-plugin/js/jquery.themepunch.revolution.min.js"
        strategy="lazyOnload"
      />
      <Script src="../js/cookies.js" strategy="lazyOnload" />
      <Script src="../js/rev-slider.js" strategy="lazyOnload" />
    </>
  );
}
