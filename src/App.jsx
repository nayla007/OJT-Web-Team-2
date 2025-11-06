import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./i18n";

import Navbar from "./component/Navbar";
import Beranda from "./pages/Beranda";
import PelatihanK3 from "./pages/Pelatihan";
import JadwalTraining from "./pages/JadwalTraining";
import Pendaftaran from "./pages/Pendaftaran";
import Footer from "./component/Footer";

// import "./Home.css";
import "./component/Navbar.css";
import "./component/Table.css";
import "./pages/Beranda.css";
// import "./component/Footer.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="main-content">
        <Routes>
          {/* Redirect otomatis dari / ke /beranda */}
          <Route path="/" element={<Navigate to="/beranda" />} />

          {/* Halaman utama */}
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/pelatihan-k3" element={<PelatihanK3 />} />
          <Route path="/jadwal-training" element={<JadwalTraining />} />
          <Route path="/pendaftaran" element={<Pendaftaran />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
