import React from 'react';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-primary bg-gradient navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Geo Kreasi Mandiri</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarScroll">

          {/* MENU KIRI */}
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Home
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Visi & Misi</a></li>
                <li><a className="dropdown-item" href="#">Legalitas</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pelatihan K3
          </a>
          <ul className="dropdown-menu">
            <li className="dropdown-submenu">
                <a className="dropdown-item dropdown-toggle" 
                href="#" 
                >
                Sertifikasi kemnaker RI
                </a>
                <ul className="dropdown-menu">
                    <li className='dropdown-submenu'>
                    <a href="#" className="dropdown-item dropdown-toggle">
                    SMK3</a>
                    {/* <ul className="dropdown-menu">
                        <li><a href="#" className='dropdown-item'>Ahli K3 Umum</a></li>
                        <li><a href="#" className='dropdown-item'>Internal Auditor SMK3</a></li>
                    </ul> */}
                    </li>
                    <li className='dropdown-submenu'>
                        <a href="#" className='dropdown-item dropdown-toggle'>
                            K3 Kimia
                        </a>
                        {/* <ul className='dropdown-menu'>
                            <li><a href="#" className='dropdown-item'>Ahli K3 Kimia</a></li>
                            <li><a href="#" className='dropdown-item'>Petugas K3 Kimia</a></li>
                        </ul> */}
                    </li>
                    <li className='dropdown-submenu'>
                        <a href="#" className='dropdown-item dropdown-toggle'>
                            K3 Listrik
                        </a>
                        {/* <ul className='dropdown-menu'>
                            <li><a href="#" className='dropdown-item'>Ahli K3 Listrik</a></li>
                            <li><a href="#" className='dropdown-item'>Teknisi K3 Listrik</a></li>
                            <li><a href="#" className='dropdown-item'>Ahli K3 Elevator & Eskalator</a></li>
                            <li><a href="#" className='dropdown-item'>Operator K3 Eleveator & eskalator</a></li>
                            
                        </ul> */}
                    </li>
                    <li className='dropdown-submenu'>
                        <a href="#" className='dropdown-item dropdown-toggle'>
                            K3 Penanggulangan Kebakaran
                        </a>
                        {/* <ul className='dropdown-menu'>
                            <li><a href="#" className='dropdown-item'>Ahli K3 Kebakaran Kelas A</a></li>
                            <li><a href="#" className='dropdown-item'>Koordinator K3 Penanggulangan kelas B</a></li>
                            <li><a href="#" className='dropdown-item'>Petugas (Regu) K3 Penanggulangan</a></li>
                            <li><a href="#" className='dropdown-item'>   </a></li>
                            
                        </ul> */}
                    </li>
                    <li className='dropdown-submenu'>
                        <a href="#" className='dropdown-item dropdown-toggle'>
                            K3 Kontruksi
                        </a>
                        {/* <ul className='dropdown-menu'>
                            <li><a href="#" className='dropdown-item'>Ahli K3 Kebakaran Kelas A</a></li>
                            <li><a href="#" className='dropdown-item'>Koordinator K3 Penanggulangan kelas B</a></li>
                            <li><a href="#" className='dropdown-item'>Petugas (Regu) K3 Penanggulangan</a></li>
                            <li><a href="#" className='dropdown-item'>   </a></li>
                            
                        </ul> */}
                    </li>
                    <li className='dropdown-submenu'>
                        <a href="#" className='dropdown-item dropdown-toggle'>
                            K3 Lingkungan
                        </a>
                        {/* <ul className='dropdown-menu'>
                            <li><a href="#" className='dropdown-item'>Ahli K3 Kebakaran Kelas A</a></li>
                            <li><a href="#" className='dropdown-item'>Koordinator K3 Penanggulangan kelas B</a></li>
                            <li><a href="#" className='dropdown-item'>Petugas (Regu) K3 Penanggulangan</a></li>
                            <li><a href="#" className='dropdown-item'>   </a></li>
                            
                        </ul> */}
                    </li>
                    <li className='dropdown-submenu'>
                        <a href="#" className='dropdown-item dropdown-toggle'>
                            K3 Kesehatan Kerja
                        </a>
                        {/* <ul className='dropdown-menu'>
                            <li><a href="#" className='dropdown-item'>Ahli K3 Kebakaran Kelas A</a></li>
                            <li><a href="#" className='dropdown-item'>Koordinator K3 Penanggulangan kelas B</a></li>
                            <li><a href="#" className='dropdown-item'>Petugas (Regu) K3 Penanggulangan</a></li>
                            <li><a href="#" className='dropdown-item'>   </a></li>
                            
                        </ul> */}
                    </li>
                    <li className='dropdown-submenu'>
                        <a href="#" className='dropdown-item dropdown-toggle'>
                            Pesawat Angkat & Angkut
                        </a>
                        {/* <ul className='dropdown-menu'>
                            <li><a href="#" className='dropdown-item'>Ahli K3 Kebakaran Kelas A</a></li>
                            <li><a href="#" className='dropdown-item'>Koordinator K3 Penanggulangan kelas B</a></li>
                            <li><a href="#" className='dropdown-item'>Petugas (Regu) K3 Penanggulangan</a></li>
                            <li><a href="#" className='dropdown-item'>   </a></li>
                            
                        </ul> */}
                    </li>
                    <li className='dropdown-submenu'>
                        <a href="#" className='dropdown-item dropdown-toggle'>
                            Pesawat Tenaga & Produksi
                        </a>
                        {/* <ul className='dropdown-menu'>
                            <li><a href="#" className='dropdown-item'>Ahli K3 Kebakaran Kelas A</a></li>
                            <li><a href="#" className='dropdown-item'>Koordinator K3 Penanggulangan kelas B</a></li>
                            <li><a href="#" className='dropdown-item'>Petugas (Regu) K3 Penanggulangan</a></li>
                            <li><a href="#" className='dropdown-item'>   </a></li>
                            
                        </ul> */}
                    </li>
                    <li className='dropdown-submenu'>
                        <a href="#" className='dropdown-item dropdown-toggle'>
                            Pesawat Uap, Bejana Tekan & Tangki Timbun
                        </a>
                        {/* <ul className='dropdown-menu'>
                            <li><a href="#" className='dropdown-item'>Ahli K3 Kebakaran Kelas A</a></li>
                            <li><a href="#" className='dropdown-item'>Koordinator K3 Penanggulangan kelas B</a></li>
                            <li><a href="#" className='dropdown-item'>Petugas (Regu) K3 Penanggulangan</a></li>
                            <li><a href="#" className='dropdown-item'>   </a></li>
                            
                        </ul> */}
                    </li>
                    <li className='dropdown-submenu'>
                        <a href="#" className='dropdown-item dropdown-toggle'>
                            K3 Ruang Terbatas(Confine Space)
                        </a>
                        {/* <ul className='dropdown-menu'>
                            <li><a href="#" className='dropdown-item'>Ahli K3 Kebakaran Kelas A</a></li>
                            <li><a href="#" className='dropdown-item'>Koordinator K3 Penanggulangan kelas B</a></li>
                            <li><a href="#" className='dropdown-item'>Petugas (Regu) K3 Penanggulangan</a></li>
                            <li><a href="#" className='dropdown-item'>   </a></li>
                            
                        </ul> */}
                    </li>
                    <li className='dropdown-submenu'>
                        <a href="#" className='dropdown-item dropdown-toggle'>
                            K3 Ketinggian
                        </a>
                        {/* <ul className='dropdown-menu'>
                            <li><a href="#" className='dropdown-item'>Ahli K3 Kebakaran Kelas A</a></li>
                            <li><a href="#" className='dropdown-item'>Koordinator K3 Penanggulangan kelas B</a></li>
                            <li><a href="#" className='dropdown-item'>Petugas (Regu) K3 Penanggulangan</a></li>
                            <li><a href="#" className='dropdown-item'>   </a></li>
                            
                        </ul> */}
                    </li>
                    <li className='dropdown-submenu'>
                        <a href="#" className='dropdown-item dropdown-toggle'>
                            K3 Juru Las
                        </a>
                        {/* <ul className='dropdown-menu'>
                            <li><a href="#" className='dropdown-item'>Ahli K3 Kebakaran Kelas A</a></li>
                            <li><a href="#" className='dropdown-item'>Koordinator K3 Penanggulangan kelas B</a></li>
                            <li><a href="#" className='dropdown-item'>Petugas (Regu) K3 Penanggulangan</a></li>
                            <li><a href="#" className='dropdown-item'>   </a></li>
                            
                        </ul> */}
                    </li>
                </ul>
            </li>
            <li><a className="dropdown-item" href="#">Sertifikasi Kompetensi BNSP</a></li>
            <li><a className="dropdown-item" href="#">Training SDM & Management</a></li>
            <li><a className="dropdown-item" href="#">Riksa Uji K3</a></li>
            <li><a className="dropdown-item" href="#">Konsultan & Management</a></li>
            <li><a className="dropdown-item" href="#">Konsultan SLF</a></li>
          </ul>
        </li>

            <li className="nav-item">
              <a className="nav-link active" href="#">Jadwal Training</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">K3 Umum Indonesia</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Blog
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Artikel K3</a></li>
                <li><a className="dropdown-item" href="#">Berita Baru K3</a></li>
              </ul>
            </li>
          </ul>

            <div>
                
            </div>
          {/* MENU KANAN */}
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ID
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#">EN</a></li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav ms-3">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Pendaftaran
              </a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}
