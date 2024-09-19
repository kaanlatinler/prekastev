import { useState, useEffect } from "react";
import Link from "next/link";
import api from "@/services/api";
import { useRouter } from "next/router";

const UpdateForm = ({ user }) => {
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState(user.password);
  const [alert, setAlert] = useState("");
  const [alertType, setAlertType] = useState(false);
  const router = useRouter();

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  // useEffect to split the user name into first name and last name
  useEffect(() => {
    const [firstName, ...lastName] = user.name.split(" ");
    setName(firstName);
    setSurname(lastName.join(" "));
  }, [user.name]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setAlert("");

    const UserName = `${name} ${surname}`;

    try {
      const response = await api.put(
        `/users/updateUser/${user._id}`,
        {
          email,
          name: UserName,
          password,
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

  return (
    <div className="card mb-0">
      <div className="card-body">
        <p className="text-center text-white fs-4 pt-5">Kişi Güncelle</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="UserName" className="form-label text-white">
              İsim
            </label>
            <input
              type="text"
              className="form-control"
              id="UserName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="UserSurName" className="form-label text-white">
              Soyisim
            </label>
            <input
              type="text"
              className="form-control"
              id="UserSurName"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="UserEmail" className="form-label text-white">
              Eposta
            </label>
            <input
              type="email"
              className="form-control"
              id="UserEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="UserPassword" className="form-label text-white">
              Şifre
            </label>
            <input
              type="password"
              className="form-control"
              id="UserPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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

          <button
            type="submit"
            className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2"
          >
            Güncelle
          </button>
        </form>
        <Link
          className="btn btn-secondary w-100 py-8 fs-4 mb-4 rounded-2"
          href="/admin/users"
        >
          Geri Dön
        </Link>
      </div>
    </div>
  );
};

export default UpdateForm;
