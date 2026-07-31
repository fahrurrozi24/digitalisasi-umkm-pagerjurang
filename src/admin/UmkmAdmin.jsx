import { useEffect, useState } from "react";
import { getUmkm } from "../services/umkmService";

function UmkmAdmin() {
  const [umkm, setUmkm] = useState([]);

  useEffect(() => {
    loadUmkm();
  }, []);

  async function loadUmkm() {
    const data = await getUmkm();

    if (data) {
      setUmkm(data);
    }
  }

  return (
    <div>

      <h1>Kelola UMKM</h1>

      <button
        style={{
          padding: "10px 20px",
          background: "#2E7D32",
          color: "white",
          border: "none",
          borderRadius: "8px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        Tambah UMKM
      </button>

      <table
        border="1"
        cellPadding="10"
        width="100%"
      >
        <thead>
          <tr>
            <th>No</th>
            <th>Nama UMKM</th>
            <th>Pemilik</th>
            <th>Kategori</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>

          {umkm.map((item, index) => (

            <tr key={item.id}>

              <td>{index + 1}</td>

              <td>{item.nama_umkm}</td>

              <td>{item.pemilik}</td>

              <td>{item.kategori}</td>

              <td>

                <button>Edit</button>

                <button
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Hapus
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default UmkmAdmin;