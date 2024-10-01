import Link from "next/link"; // Next.js Link bileşeni
import Image from "next/image";

const Header = ({ disable }) => {
  return (
    <header className={disable ? "" : "d-none"}>

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
