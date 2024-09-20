import Link from "next/link"; // Next.js Link bileşeni
import Image from "next/image";

const Header = ({ disable }) => {
  return (
    <header className={disable ? "" : "d-none"}>
      {/* Üst Bilgi (Çalışma Saatleri ve Sosyal İkonlar) */}
      <div className="info">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="column">
                Working Hours Monday - Friday{" "}
                <span className="id-color">
                  <strong>08:00-16:00</strong>
                </span>
              </div>
              {/* Sosyal İkonlar */}
              <div className="column social">
                <Link href="https://www.instagram.com/prekastev/">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link href="https://www.youtube.com/@YIGITYUCEER">
                  <i className="fa-brands fa-youtube"></i>
                </Link>
                <Link href="https://www.linkedin.com/in/yigityuceer/">
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
                <Link href="https://linktr.ee/yigityuceer">
                  <i className="fa-brands fa-dribbble"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ana Menü */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="md-flex">
              {/* Logo */}
              <div id="logo">
                <Link href="/">
                  <img className="logo" src="/images/logo.png" alt="Logo" />
                </Link>
              </div>

              {/* Menü Butonu (Mobil İçin) */}
              <span id="menu-btn"></span>

              {/* Ana Menü */}
              <div>
                <nav className="md-flex">
                  <ul id="mainmenu">
                    <li>
                      <Link href="https://www.instagram.com/prekastev/">
                        İNSTAGRAM
                      </Link>
                    </li>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/models">MODELLER</Link>
                    </li>
                    <li>
                      <Link href="/services">HİZMETLER</Link>
                    </li>
                    <li>
                      <Link href="/faq">SSS</Link>
                    </li>
                    <li>
                      <Link href="/contact">İLETİŞİM</Link>
                    </li>
                    <li>
                      <Link href="/founder">KURUCUMUZ</Link>
                    </li>
                    <li>
                      <Link
                        target="_blank"
                        href="https://drive.google.com/file/d/17sjSQYnSRMC7rn8dUtY2cQV8_C-rLANr/view?usp=sharing"
                      >
                        KATALOG İNDİR
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
