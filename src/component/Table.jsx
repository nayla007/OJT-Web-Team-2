import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";


function Table({ data, className, onDelete, onEdit }) {
  const { t } = useTranslation();
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setTableData(data.map((item) => ({ ...item })));
    }
  }, [data]);

  const allMonths = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const tanggalPerBulan = {
    January: ["20-28"],
    February: ["11-15"],
    March: ["17-24"],
    April: ["01-07"],
    May: ["08-17"],
    June: ["10-18"],
    July: ["18-27"],
    August: ["16-28"],
    September: ["05-15"],
    October: ["24-30"],
    November: ["11-19"],
    December: ["03-09"],
  };

  const handleBulanChange = (index, bulan) => {
    const newData = [...tableData];
    newData[index].bulan = bulan;
    newData[index].tanggal = tanggalPerBulan[bulan]?.join(", ") || "";
    setTableData(newData);
  };

  return (
    <div className="table-responsive mb-5">

    <table className="table table-bordered align-middle text-center">
      <thead className="table-success">
        <tr>
          <th>{t("jadwal.table.no")}</th>
    <th>{t("jadwal.table.name")}</th>
    <th>{t("jadwal.table.price")}</th>
    <th>{t("jadwal.table.days")}</th>
    <th>{t("jadwal.table.field")}</th>
    <th>{t("jadwal.table.month")}</th>
    <th>{t("jadwal.table.date")}</th>
    <th>{t("jadwal.table.actions")}</th>
        </tr>
      </thead>
      <tbody>
        {tableData && tableData.length > 0 ? (
    tableData.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.nama}</td>
              <td>Rp {Number(item.harga).toLocaleString()}</td>
              <td>{item.jmlHari}</td>
              <td>{item.bidang}</td>
              <td>
              <select
  className="form-select form-select-sm"
  value={item.bulan ?? ""}   // pakai ?? untuk fallback ke string kosong
  onChange={(e) => handleBulanChange(index, e.target.value)}
>
  <option value="">--Pilih Bulan--</option>
  {allMonths.map((bulan) => (
    <option key={bulan} value={bulan}>
      {bulan}
    </option>
  ))}
</select>
            </td>
            <td>{item.tanggal}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => onEdit(item)}
                >
                  {t("jadwal.table.edit")}
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(item.id)}
                >
                  {t("jadwal.table.delete")}
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">{t("jadwal.table.noData")}</td>
          </tr>
        )}
      </tbody>
    </table>
    </div>
    
  );
}

export default Table;
