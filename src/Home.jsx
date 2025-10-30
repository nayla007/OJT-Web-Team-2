import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PelatihanK3 from "./pages/PelatihanK3";
import JadwalTraining from "./pages/JadwalTraining";
import "./Home.css";

function Home() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="main-content">
            <Routes>
              {/* Halaman jadwal training */}
              <Route path="/home" element={<Home/>}/>
              <Route path="/pelatihan-k3" element={<PelatihanK3/>}/>
              <Route path="/jadwal-training" element={<JadwalTraining />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default Home;
