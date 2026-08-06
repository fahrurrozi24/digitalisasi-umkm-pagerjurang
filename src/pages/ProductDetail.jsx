import "../styles/ProductDetail.css";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  const products = {
    slondok: {
      nama: "Slondok",
      gambar: "/images/Slondok.jpg",
      deskripsi:
        "Slondok merupakan makanan ringan tradisional yang dibuat dari singkong pilihan. Memiliki tekstur renyah dan cita rasa gurih sehingga menjadi salah satu camilan khas masyarakat Pagerjurang.",
      harga: "Rp15.000",
    },

    jahe: {
      nama: "Jahe Srikandi Merapi",
      gambar: "/images/Wedang Jahe.jpg",
      deskripsi:
        "Jahe Srikandi Merapi merupakan minuman herbal berbahan dasar jahe yang diproduksi oleh masyarakat Pagerjurang. Cocok dikonsumsi untuk menghangatkan tubuh.",
      harga: "Rp20.000",
    },

    manggleng: {
      nama: "Manggleng",
      gambar: "/images/Manggleng.jpg",
      deskripsi:
        "Manggleng merupakan camilan tradisional berbahan dasar singkong dengan rasa gurih dan pedas yang cocok dijadikan oleh-oleh khas Pagerjurang.",
      harga: "Rp18.000",
    },

    bakso: {
      nama: "Bakso Goreng",
      gambar: "/images/Bakso Goreng.jpg",
      deskripsi:
        "Bakso Goreng merupakan makanan ringan yang memiliki tekstur renyah di luar dan lembut di dalam. Produk ini dibuat oleh UMKM Pagerjurang.",
      harga: "Rp20.000",
    },
  };

  const produk = products[id];

  if (!produk) {
    return <h2>Produk tidak ditemukan.</h2>;
  }

  return (
    <div className="detail-container">
      <img src={produk.gambar} alt={produk.nama} />

      <h1>{produk.nama}</h1>

      <p>{produk.deskripsi}</p>

      <h3>{produk.harga}</h3>
    </div>
  );
}

export default ProductDetail;