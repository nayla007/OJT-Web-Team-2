
import { NavLink, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useTranslation } from "react-i18next"; // 

export default function Navbar() {
  const location = useLocation();
  const [isFixed, setIsFixed] = useState(false);
  const { t, i18n } = useTranslation(); // 🔹 Hook i18n

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
      Aos.init({ duration: 1000, once: false,
      easing: "ease-in-out", // transisi lebih smooth
      offset: 100,});
    }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🎠 Efek untuk mengaktifkan carousel otomatis
  useEffect(() => {
    const carouselElement = document.querySelector("#heroCarousel");
    if (carouselElement && window.bootstrap) {
      new window.bootstrap.Carousel(carouselElement, {
        interval: 3000, // auto-slide setiap 5 detik
        ride: "carousel", // langsung jalan otomatis
        pause: false, // biar gak berhenti waktu dihover
        wrap: true, // looping terus
      });
    }
  }, []);

  return (
    <div>
      {/* 🔹 Top Bar */}
      <div className="bg-light py-1 border-bottom small" >
        <div className="container d-flex justify-content-between align-items-center">
          
          {/* 🔸 Kiri: Ikon Sosial Media */}
    <div className="d-flex align-items-center">
      <a
    href="https://www.instagram.com/geomandirigroupcreative/" 
    className="text-dark me-3"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="bi bi-instagram"></i>
  </a>
      <a href="#" className="text-dark me-3">
        <i className="bi bi-twitter"></i>
      </a>
      <a href="#" className="text-dark me-3">
        <i className="bi bi-facebook"></i>
      </a>
      <a href="#" className="text-dark me-3">
        <i className="bi bi-youtube"></i>
      </a>
    </div>

    {/* 🔸 Kanan: Telepon, Bahasa, Tombol */}
    <div className="d-flex align-items-center">
      {/* Telepon */}
      <a
        href="tel:0218621510"
        className="text-dark me-3 text-decoration-none d-flex align-items-center"
      >
        <i className="bi bi-telephone me-2"></i>
        {t("navbar.phone")}
      </a>
      {/* Bahasa */}
<div className="dropdown me-3" style={{ zIndex: 9999 }}>
  <a
    className="dropdown-toggle text-dark text-decoration-none"
    href="#"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    {i18n.language.toUpperCase()}
  </a>
  <ul className="dropdown-menu dropdown-menu-end">
      <li><button className="dropdown-item" onClick={() => changeLanguage("id")}>{t("dropdown.id")}</button></li>
      <li><button className="dropdown-item" onClick={() => changeLanguage("en")}>{t("dropdown.eng")}</button></li>
  </ul>
</div>
      <a href="#" className="btn btn-outline-success btn-sm" style={{ borderColor: "#006d3b", color: "#006d3b" }}>
              {t("navbar.registration")}
      </a>
    </div>
        </div>
      </div>


      {/* 🔹 Navbar */}
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm ${
          isFixed ? "fixed-top" : ""
        }`}
        style={{
          top: isFixed ? "0" : "auto",
          zIndex: 1030,
          transition: "top 0.3s ease",
          paddingTop: "0.4rem",
          paddingBottom: "0.4rem",
          height: "70px",
        }}
      >
        <div className="container container-scroll">
          {/* 🔸 Logo */}
          <NavLink className="navbar-brand fw-bold text-dark" to="/beranda">
            <img
              src="/image/logo-geo.png"
              alt="Logo"
              style={{
                width: "100px",
                height: "auto",
                marginRight: "2px",
                maxHeight: "200px",
                objectFit: "contain",
              }}
            />
            <span style={{ color: "#006d3b" }}>Geo Mandiri Kreasi</span>
          </NavLink>

          {/* 🔸 Toggler (mobile) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* 🔸 Menu items */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarMain">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <NavLink
                  to="/beranda"
                  className={({ isActive }) =>
                    `nav-link fw-semibold px-3 ${
                      isActive ? "text-success" : "text-dark"
                    }`
                  }
                >
                  {t("navbar.home")}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/jadwal-training"
                  className={({ isActive }) =>
                    `nav-link fw-semibold px-3 ${
                      isActive ? "text-success" : "text-dark"
                    }`
                  }
                >
                  {t("navbar.training_schedule")}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/pelatihan-k3"
                  className={({ isActive }) =>
                    `nav-link fw-semibold px-3 ${
                      isActive ? "text-success" : "text-dark"
                    }`
                  }
                >
                  {t("navbar.training_k3")}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/pendaftaran"
                  className={({ isActive }) =>
                    `nav-link fw-semibold px-3 ${
                      isActive ? "text-success" : "text-dark"
                    }`
                  }
                >
                  {t("navbar.registration")}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Spacer biar konten nggak ketutup navbar fixed */}
      {isFixed && <div style={{ height: "80px" }}></div>}

      {/* 🔹 Hero Section */}
      {location.pathname === "/beranda" && (
      <div
        id="heroCarousel"
        className="carousel carousel-fade"
        data-bs-ride="carousel"
        data-aos="fade-up"
      >
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active ">
            <div
              className="d-flex align-items-center justify-content-center text-center text-light"
              style={{
                height: "90vh",
                backgroundImage:
                  "url('image/carousel-3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="w-100 h-100 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "rgba(0, 80, 50, 0.6)", // hijau gelap transparan
                }}
              >
                <div className="container ">
                  <h1 className="fw-bold text-light display-4 mb-3 text-uppercase">
                    {t("hero.slide1.title")}
                  </h1>
                  <p className="lead mb-4">
                    {t("hero.slide1.description")}
                  </p>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div
              className="d-flex align-items-center justify-content-center text-center text-light"
              style={{
                height: "90vh",
                backgroundImage:
                  "url('image/carouse-2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="w-100 h-100 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "rgba(0, 80, 50, 0.6)",
                }}
              >
                <div className="container">
                  <h1 className="fw-bold text-light display-4 mb-3 text-uppercase">
                    {t("hero.slide2.title")}
                  </h1>
                  <p className="lead mb-4">
                    {t("hero.slide2.description")}
                  </p>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div
              className="d-flex align-items-center justify-content-center text-center text-light"
              style={{
                height: "90vh",
                backgroundImage:
                  "url('image/carousel.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="w-100 h-100 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "rgba(0, 80, 50, 0.6)",
                }}
              >
                <div className="container">
                  <h1 className="fw-bold text-light display-4 mb-3 text-uppercase">
                    {t("hero.slide3.title")}
                  </h1>
                  <p className="lead mb-4">
                    {t("hero.slide3.description")}
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Navigasi panah kiri/kanan */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      )}
    </div>
  );

}
