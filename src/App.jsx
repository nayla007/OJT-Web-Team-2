import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./i18n";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Beranda from "./pages/Beranda";
import PelatihanK3 from "./pages/Pelatihan";
import JadwalTraining from "./pages/JadwalTraining";
import Pendaftaran from "./pages/Pendaftaran";
import DataPendaftar from "./pages/admin/DataPendaftar";
import DataPendaftarEdit from "./pages/admin/DataPendaftarEdit";
import LoginAdmin from "./pages/admin/LoginAdmin";

import "./component/Navbar.css";
import "./component/Table.css";
import "./pages/Beranda.css";

// ================= Layout Components =================
function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="main-content">{children}</div>
      <Footer />
    </>
  );
}

function AuthLayout({ children }) {
  return <div className="main-content">{children}</div>; // tanpa Navbar & Footer
}

// ================= App Component =================
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect otomatis dari / ke /beranda */}
        <Route path="/" element={<Navigate to="/beranda" />} />

        {/* Login Admin tanpa Navbar/Footer */}
        <Route
          path="/admin/login"
          element={
            <AuthLayout>
              <LoginAdmin />
            </AuthLayout>
          }
        />

        {/* Halaman utama dengan Navbar/Footer */}
        <Route
          path="/beranda"
          element={
            <MainLayout>
              <Beranda />
            </MainLayout>
          }
        />
        <Route
          path="/pelatihan-k3"
          element={
            <MainLayout>
              <PelatihanK3 />
            </MainLayout>
          }
        />
        <Route
          path="/jadwal-training"
          element={
            <MainLayout>
              <JadwalTraining />
            </MainLayout>
          }
        />
        <Route
          path="/pendaftaran"
          element={
            <MainLayout>
              <Pendaftaran />
            </MainLayout>
          }
        />
        <Route
          path="/admin/data-pendaftar"
          element={
            <MainLayout>
              <DataPendaftar />
            </MainLayout>
          }
        />
        <Route
          path="/admin/data-pendaftar/edit/:id"
          element={
            <MainLayout>
              <DataPendaftarEdit />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
