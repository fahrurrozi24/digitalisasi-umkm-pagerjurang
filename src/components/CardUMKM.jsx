import { useState } from "react";
import "./CardUMKM.css";

function CardUMKM({ nama, kategori, gambar }) {
  const [showModal, setShowModal] = useState(false);

  const detailProduk = {
    "Slondok":
      "Slondok merupakan makanan ringan khas berbahan dasar singkong yang diolah secara tradisional. Memiliki tekstur renyah dan cita rasa gurih sehingga cocok dijadikan camilan maupun oleh-oleh khas Pagerjurang.",

    "Jahe Srikandi Merapi":
      "Jahe Srikandi Merapi merupakan minuman herbal berbahan jahe pilihan yang memberikan sensasi hangat, menyehatkan tubuh, dan cocok dinikmati saat cuaca dingin di kawasan lereng Merapi.",

    "Manggleng":
      "Manggleng adalah camilan tradisional dari singkong yang dipotong tipis, dikeringkan, lalu digoreng hingga renyah dengan berbagai varian rasa.",

    "Bakso Goreng":
      "Bakso Goreng merupakan olahan bakso yang digoreng hingga bagian luar renyah namun tetap lembut di bagian dalam. Cocok dijadikan camilan maupun lauk."
  };

  return (
    <>
      <div className="card-umkm">
        <img
          src={gambar}
          alt={nama}
          className="card-image"
        />

        <div className="card-overlay">
          <span className="card-category">{kategori}</span>

          <h3>{nama}</h3>

          <button onClick={() => setShowModal(true)}>
            Lihat Detail
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">

            <img src={gambar} alt={nama} />

            <h2>{nama}</h2>

            <p>{detailProduk[nama]}</p>

            <button
              className="close-btn"
              onClick={() => setShowModal(false)}
            >
              Tutup
            </button>

          </div>
        </div>
      )}
    </>
  );
}

export default CardUMKM;