import React, { useState, useEffect } from "react";
import Table from "../component/Table";
import "./JadwalTraining.css";
import axios from "axios";
import JadwalPDF from "../document/jadwal_training.pdf";
import { useTranslation } from "react-i18next";

function JadwalTraining() {
  const { t, i18n } = useTranslation();
  const [jadwalData, setJadwalData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedJadwal, setSelectedJadwal] = useState(null);
  const [formData, setFormData] = useState({
    nama: "",
    harga: "",
    jmlHari: "",
    bidang: "",
  });

  // 🔹 Ambil data dari backend
  const fetchData = () => {
    axios
      .get("http://localhost:5000/api/jadwal")
      .then((res) => {
        console.log("Data dari backend:", res.data);
        setJadwalData(res.data);
      })
      .catch((err) => {
        console.error("Gagal fetch data:", err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const payload = {
      ...formData,
      harga: Number(formData.harga),
      jmlHari: Number(formData.jmlHari),
    };

    await axios.post("http://localhost:5000/api/jadwal", payload);
    alert("Data berhasil ditambahkan!");
    setFormData({ nama: "", harga: "", jmlHari: "", bidang: "" });
    setShowModal(false);
    fetchData();
  } catch (err) {
    console.error("Gagal menambah data:", err.response?.data || err);
    alert("Gagal menambah data.");
  }
};

  // 🔹 Filter berdasarkan bidang
  const filterByBidang = (keyword) => {
    return jadwalData.filter((item) =>
      item.bidang.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  // 🔹 Hapus data
const handleDelete = async (id) => {
  if (!window.confirm("Yakin ingin menghapus data ini?")) return;
  try {
    await axios.delete(`http://localhost:5000/api/jadwal/${id}`);
    alert("Data berhasil dihapus!");
    fetchData(); // refresh data
  } catch (err) {
    console.error("Gagal menghapus data:", err);
    alert("Gagal menghapus data.");
  }
};

// 🔹 Buka modal edit + isi data form
  const handleEditClick = (item) => {
    setSelectedJadwal(item);
    setFormData({
      nama: item.nama,
      harga: item.harga,
      jmlHari: item.jmlHari,
      bidang: item.bidang,
    });
    setShowEditModal(true);
  };

  // 🔹 Simpan perubahan data (edit)
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/jadwal/${selectedJadwal.id}`, formData);
      alert("Data berhasil diupdate!");
      setShowEditModal(false);
      setFormData({ nama: "", harga: "", jmlHari: "", bidang: "" });
      fetchData();
    } catch (err) {
      console.error("Gagal mengupdate data:", err);
      alert("Gagal mengupdate data.");
    }
  };

  return (
    <div className="data-training">
      <h1>{t("jadwal.title")}</h1>

      <a className="download-jadwal" href={JadwalPDF} download>
        {t("jadwal.download")}
      </a>

      {/* Tombol Tambah Data */}
      <div className="text-end mb-3 container">
        <button className="btn btn-success" onClick={() => setShowModal(true)}>
          {t("jadwal.add")}
        </button>
      </div>

      {/* Semua tabel bidang */}
      <div className="container mb-3 mt-5">
        <h3>{t("jadwal.fields.elevator")}</h3>
        <Table data={filterByBidang("Elevator")} onDelete={handleDelete} onEdit={handleEditClick}/>
      </div>

      <div className="container">
        <h3>{t("jadwal.fields.fire")}</h3>
        <Table data={filterByBidang("Kebakaran")} onDelete={handleDelete} onEdit={handleEditClick}/>
      </div>

      <div className="container">
        <h3>{t("jadwal.fields.construction")}</h3>
        <Table data={filterByBidang("Konstruksi")} onDelete={handleDelete} onEdit={handleEditClick}/>
      </div>

      <div className="container">
        <h3>{t("jadwal.fields.angkat")}</h3>
        <Table data={filterByBidang("Pesawat Angkat")} onDelete={handleDelete} onEdit={handleEditClick}/>
      </div>

      <div className="container">
        <h3>{t("jadwal.fields.tenaga")}</h3>
        <Table data={filterByBidang("Pesawat Tenaga")} onDelete={handleDelete} onEdit={handleEditClick}/>
      </div>

      <div className="container">
        <h3>{t("jadwal.fields.uap")}</h3>
        <Table data={filterByBidang("Pesawat Uap")} onDelete={handleDelete} onEdit={handleEditClick}/>
      </div>

      <div className="container">
        <h3>{t("jadwal.fields.welding")}</h3>
        <Table data={filterByBidang("Pengelasan")} onDelete={handleDelete} onEdit={handleEditClick}/>
      </div>

      {/* 🔹 Modal Tambah Data */}
      <div
        className={`modal fade ${showModal ? "show d-block" : ""}`}
        tabIndex="-1"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title">{t("jadwal.modal.addTitle")}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">{t("jadwal.modal.name")}</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.nama}
                    onChange={(e) =>
                      setFormData({ ...formData, nama: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">{t("jadwal.modal.price")}</label>
                  <input
                    type="number"
                    className="form-control"
                    value={formData.harga}
                    onChange={(e) =>
                      setFormData({ ...formData, harga: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">{t("jadwal.modal.days")}</label>
                  <input
                    type="number"
                    className="form-control"
                    value={formData.jmlHari}
                    onChange={(e) =>
                      setFormData({ ...formData, jmlHari: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">{t("jadwal.modal.field")}</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.bidang}
                    onChange={(e) =>
                      setFormData({ ...formData, bidang: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  {t("jadwal.modal.cancel")}
                </button>
                <button type="submit" className="btn btn-primary">
                  {t("jadwal.modal.save")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* 🔹 Modal Edit */}
      <div className={`modal fade ${showEditModal ? "show d-block" : ""}`} style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleUpdate}>
              <div className="modal-header">
                <h5 className="modal-title">{t("jadwal.modal.editTitle")}</h5>
                <button type="button" className="btn-close" onClick={() => setShowEditModal(false)}></button>
              </div>
              <div className="modal-body">
                {[
                  { key: "nama", label: t("jadwal.modal.name") },
                  { key: "harga", label: t("jadwal.modal.price") },
                  { key: "jmlHari", label: t("jadwal.modal.days") },
                  { key: "bidang", label: t("jadwal.modal.field") },
                ].map((field) => (
                  <div className="mb-3" key={field.key}>
                    <label className="form-label text-capitalize">{field.label}</label>
                    <input
                      type={field.key === "harga" || field.key === "jmlHari" ? "number" : "text"}
                      className="form-control"
                      value={formData[field.key]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      required
                    />
                  </div>
                ))}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>
                  {t("jadwal.modal.cancel")}
                </button>
                <button type="submit" className="btn btn-primary">
                  {t("jadwal.modal.saveChanges")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JadwalTraining;
