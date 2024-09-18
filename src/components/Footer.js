const Footer = () => {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mb-5">
              <img
                src="../images/logouzun.png"
                className="logo-small img-fluid"
                alt="Prekast Ev Logo"
              />
              <br />
              Prekast Ev olarak , en güvenilir ve dayanıklı bina türlerinden biri
              olan prekast evlerin yapımını sunuyoruz. Betonarme ve duvar panelleri
              kullanarak hava koşulları ve zamanın etkileri gibi çeşitli dış
              etkenlere dayanabilecek dayanıklı yapılar yaratıyoruz.
            </div>
  
            <div className="col-lg-3">
              <h3>İLETİŞİM</h3>
              <div className="widget widget-address">
                <address>
                  <span>
                    Gençlik, Fevzi Çakmak Cd. No:77, 07100 Muratpaşa/Antalya
                  </span>
                  <span>
                    <strong>Telefon:</strong> 0531 302 37 07{" "}
                  </span>
                  <span>
                    <strong>Email:</strong>
                    <a href="mailto:satis@prekastev.com">satis@prekastev.com</a>
                  </span>
                </address>
              </div>
            </div>
  
            <div className="col-lg-3">
              <div className="widget widget_recent_post">
                <h3>HİZMETLERİMİZ</h3>
                <ul>
                  <li>
                    <a href="/pages/Services.html">Arsa Keşfi</a>
                  </li>
                  <li>
                    <a href="/pages/Services.html">Ruhsat Projeleri</a>
                  </li>
                  <li>
                    <a href="/pages/Services.html">Elektrik Ve Otomasyon</a>
                  </li>
                  <li>
                    <a href="/pages/Services.html">Tüm Hizmetlerimiz</a>
                  </li>
                </ul>
              </div>
            </div>
  
            <div className="col-lg-3">
              <img
                src="../images/tescil/tescil.png"
                className="img-fluid"
                alt="Tescil"
                style={{ maxWidth: "150px", height: "auto" }}
              />
            </div>
          </div>
        </div>
  
        <div className="subfooter">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                &copy; Copyright 2024 - Archi Interior Design Template by{" "}
                <span className="id-color">Designesia</span>
              </div>
              <div className="col-md-6 text-right">
                <div className="social-icons">
                  <a href="https://www.instagram.com/prekastev/">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="https://www.youtube.com/@YIGITYUCEER">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/yigityuceer/">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="https://linktr.ee/yigityuceer">
                    <i className="fa-brands fa-dribbble"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#" id="back-to-top"></a>
      </footer>
    );
  };
  
  export default Footer;
  