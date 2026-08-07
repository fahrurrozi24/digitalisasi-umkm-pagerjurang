import { useState } from "react";

import slondok from "../assets/images/Slondok.jpg";
import jahe from "../assets/images/Wedang Jahe.jpg";
import manggleng from "../assets/images/Manggleng.jpg";
import bakso from "../assets/images/Bakso Goreng.jpg";

import "./Umkm.css";

function Umkm() {
  const [search, setSearch] = useState("");
  const [selectedUmkm, setSelectedUmkm] = useState(null);

  const umkm = [
    {
      nama: "Manggleng",
      kategori: "Snack",
      gambar: manggleng,
      deskripsi:
        "Olahan singkong tipis dengan rasa pedas manis yang menjadi salah satu camilan khas masyarakat.",
      detail:
        "Manggleng merupakan produk olahan singkong yang dibuat dengan proses sederhana namun menghasilkan cita rasa yang khas. Manggleng memiliki tekstur renyah dengan perpaduan rasa gurih, pedas, dan manis. Produk ini cocok dijadikan camilan sehari-hari maupun oleh-oleh khas daerah.",
    },

    {
      nama: "Slondok",
      kategori: "Snack",
      gambar: slondok,
      deskripsi:
        "Camilan dari olahan singkong pilihan dengan berbagai varian rasa.",
      detail:
        "Slondok merupakan salah satu makanan ringan berbahan dasar singkong. Singkong diolah hingga menghasilkan tekstur yang renyah dan rasa yang gurih. Produk ini menjadi salah satu olahan pangan yang dapat dikembangkan sebagai produk unggulan UMKM masyarakat Pagerjurang.",
    },

    {
      nama: "Bakso Goreng",
      kategori: "Camilan",
      gambar: bakso,
      deskripsi:
        "Camilan populer khas Nusantara dengan tekstur garing di luar dan empuk di dalam.",
      detail:
        "Bakso goreng merupakan camilan yang dibuat dari adonan bakso kemudian digoreng hingga menghasilkan tekstur yang renyah di bagian luar. Produk ini cocok dinikmati sebagai camilan bersama keluarga dan dapat menjadi salah satu produk kuliner unggulan masyarakat.",
    },

    {
      nama: "Jahe Srikandi Merapi",
      kategori: "Produk Alam",
      gambar: jahe,
      deskripsi:
        "Jahe segar dengan kualitas tinggi yang berasal dari kawasan lereng Gunung Merapi.",
      detail:
        "Jahe Srikandi Merapi merupakan produk berbahan dasar jahe yang berasal dari kawasan lereng Gunung Merapi. Produk ini memanfaatkan potensi pertanian lokal dan dapat diolah menjadi berbagai produk minuman maupun olahan lainnya.",
    },
  ];

  const hasil = umkm.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase())
  );

  /* ========================= */
  /* DETAIL PRODUK */
  /* ========================= */

  if (selectedUmkm) {
    return (
      <main className="umkm-detail-page">

        {/* HERO DETAIL */}

        <section
          className="umkm-detail-hero"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(0,0,0,.45),
                rgba(0,0,0,.65)
              ),
              url("${selectedUmkm.gambar}")
            `,
          }}
        >
          <div className="detail-hero-content">

            <span className="detail-category">
              {selectedUmkm.kategori}
            </span>

            <h1>{selectedUmkm.nama}</h1>

            <p>
              Produk unggulan masyarakat Padukuhan Pagerjurang
            </p>

          </div>
        </section>

        {/* ISI DETAIL */}

        <section className="detail-content">

          <div className="detail-image">
            <img
              src={selectedUmkm.gambar}
              alt={selectedUmkm.nama}
            />
          </div>

          <div className="detail-text">

            <span className="detail-label">
              TENTANG PRODUK
            </span>

            <h2>{selectedUmkm.nama}</h2>

            <p className="detail-description">
              {selectedUmkm.deskripsi}
            </p>

            <p>
              {selectedUmkm.detail}
            </p>

            <div className="detail-info">

              <div>
                <strong>Kategori</strong>
                <span>{selectedUmkm.kategori}</span>
              </div>

              <div>
                <strong>Asal</strong>
                <span>Pagerjurang</span>
              </div>

            </div>

            <button
              className="back-button"
              onClick={() => setSelectedUmkm(null)}
            >
              ← Kembali ke Daftar UMKM
            </button>

          </div>

        </section>

      </main>
    );
  }

  return (
    <main className="umkm-page">

      {/* ========================= */}
      {/* HERO */}
      {/* ========================= */}

      <section className="umkm-hero">

        <div className="umkm-hero-overlay">

          <span className="section-title">
            PRODUK LOKAL
          </span>

          <h1>
            UMKM Padukuhan Pagerjurang
          </h1>

          <p>
            Mengenal berbagai produk unggulan hasil karya
            masyarakat Padukuhan Pagerjurang.
          </p>

        </div>

      </section>

      {/* ========================= */}
      {/* TENTANG */}
      {/* ========================= */}

      <section className="umkm-about">

        <div className="container">

          <span className="section-title">
            TENTANG UMKM
          </span>

          <h2>
            Produk Unggulan Masyarakat
          </h2>

          <p>
            UMKM merupakan salah satu penggerak utama
            perekonomian masyarakat Padukuhan Pagerjurang.
            Berbagai produk makanan, minuman, hingga hasil
            pertanian diproduksi dan dikembangkan oleh
            masyarakat dengan memanfaatkan potensi lokal.
          </p>

        </div>

      </section>

      {/* ========================= */}
      {/* SEARCH */}
      {/* ========================= */}

      <section className="search-section">

        <div className="container">

          <input
            type="text"
            placeholder="Cari produk UMKM..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </section>

      {/* ========================= */}
      {/* DAFTAR UMKM */}
      {/* ========================= */}

      <section className="umkm-list">

        <div className="container">

          <div className="umkm-grid">

            {hasil.length > 0 ? (

              hasil.map((item, index) => (

                <div
                  className="umkm-card"
                  key={index}
                >

                  <div className="umkm-card-image">

                    <img
                      src={item.gambar}
                      alt={item.nama}
                    />

                  </div>

                  <div className="umkm-card-content">

                    <span className="category">
                      {item.kategori}
                    </span>

                    <h3>
                      {item.nama}
                    </h3>

                    <p>
                      {item.deskripsi}
                    </p>

                    <button
                      className="detail-button"
                      onClick={() =>
                        setSelectedUmkm(item)
                      }
                    >
                      Lihat Detail
                    </button>

                  </div>

                </div>

              ))

            ) : (

              <div className="not-found">

                <h3>
                  Produk tidak ditemukan
                </h3>

                <p>
                  Coba gunakan kata kunci lainnya.
                </p>

              </div>

            )}

          </div>

        </div>

      </section>

      {/* ========================= */}
      {/* PENUTUP */}
      {/* ========================= */}

      <section className="umkm-closing">

        <h2>
          Dukung UMKM Lokal
        </h2>

        <p>
          Dengan membeli produk UMKM Pagerjurang,
          Anda ikut mendukung pertumbuhan ekonomi
          masyarakat dan pelestarian potensi lokal.
        </p>

      </section>

    </main>
  );
}

export default Umkm;