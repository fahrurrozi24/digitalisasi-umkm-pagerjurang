import { useState } from "react";

import slondok from "../assets/images/Slondok.jpg";
import jahe from "../assets/images/Wedang Jahe.jpg";
import manggleng from "../assets/images/Manggleng.jpg";
import bakso from "../assets/images/Bakso Goreng.jpg";

import "./Umkm.css";

function Umkm() {
  const [search, setSearch] = useState("");
  const [selectedUmkm, setSelectedUmkm] = useState(null);

  /* ========================= */
  /* DATA UMKM */
  /* ========================= */

  const umkm = [
    {
      nama: "Manggleng",
      kategori: "Snack",
      gambar: manggleng,
      deskripsi:
        "Manggleng merupakan makanan ringan berbahan dasar singkong yang diolah dengan cara diiris tipis kemudian digoreng hingga renyah. Manggleng memiliki cita rasa pedas manis yang khas dan cocok dijadikan camilan sehari-hari.",
    },

    {
      nama: "Slondok",
      kategori: "Snack",
      gambar: slondok,
      deskripsi:
        "Slondok merupakan salah satu makanan ringan berbahan dasar singkong yang menjadi produk olahan masyarakat Padukuhan Pagerjurang. Singkong diolah menjadi camilan dengan tekstur renyah dan memiliki berbagai varian rasa. Produk ini cocok dinikmati sebagai teman bersantai maupun oleh-oleh.",
    },

    {
      nama: "Bakso Goreng",
      kategori: "Camilan",
      gambar: bakso,
      deskripsi:
        "Bakso Goreng merupakan camilan berbahan dasar adonan bakso yang digoreng hingga memiliki tekstur garing di bagian luar dan tetap lembut di bagian dalam. Produk ini cocok dinikmati sebagai camilan bersama keluarga.",
    },

    {
      nama: "Jahe Srikandi Merapi",
      kategori: "Produk Alam",
      gambar: jahe,
      deskripsi:
        "Jahe Srikandi Merapi merupakan produk olahan berbahan dasar jahe yang berasal dari kawasan sekitar lereng Gunung Merapi. Produk ini memiliki cita rasa khas jahe dan dapat dinikmati sebagai minuman hangat maupun digunakan sebagai bahan olahan lainnya.",
    },
  ];

  /* ========================= */
  /* SEARCH */
  /* ========================= */

  const hasil = umkm.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase())
  );

  /* ================================================= */
  /* HALAMAN DETAIL */
  /* ================================================= */

  if (selectedUmkm) {
    return (
      <>
        {/* ========================= */}
        {/* HERO DETAIL */}
        {/* ========================= */}

        <section
          className="umkm-detail-hero"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(0,0,0,.55),
                rgba(0,0,0,.65)
              ),
              url("${selectedUmkm.gambar}")
            `,
          }}
        >
          <div className="detail-hero-content">
            <span className="detail-label">
              PRODUK UMKM PAGERJURANG
            </span>

            <h1>{selectedUmkm.nama}</h1>

            <p>{selectedUmkm.kategori}</p>
          </div>
        </section>

        {/* ========================= */}
        {/* DETAIL PRODUK */}
        {/* ========================= */}

        <main className="umkm-detail">

          <button
            className="back-button"
            onClick={() => setSelectedUmkm(null)}
          >
            ← Kembali ke Daftar UMKM
          </button>

          <div className="detail-card">

            {/* GAMBAR */}

            <div className="detail-image">
              <img
                src={selectedUmkm.gambar}
                alt={selectedUmkm.nama}
              />
            </div>

            {/* INFORMASI */}

            <div className="detail-content">

              <span className="detail-category">
                {selectedUmkm.kategori}
              </span>

              <h2>{selectedUmkm.nama}</h2>

              <div className="detail-line"></div>

              <h3>Tentang Produk</h3>

              <p>
                {selectedUmkm.deskripsi}
              </p>

              <p>
                Produk ini merupakan salah satu hasil karya
                masyarakat Padukuhan Pagerjurang yang menjadi
                bagian dari potensi ekonomi lokal. Produk
                dihasilkan oleh masyarakat dan memiliki
                karakteristik serta cita rasa yang khas.
              </p>

              {/* INFORMASI PRODUK */}

              <div className="detail-info">

                <div>
                  <strong>Nama Produk</strong>

                  <span>
                    {selectedUmkm.nama}
                  </span>
                </div>

                <div>
                  <strong>Kategori</strong>

                  <span>
                    {selectedUmkm.kategori}
                  </span>
                </div>

                <div>
                  <strong>Asal Produk</strong>

                  <span>
                    Padukuhan Pagerjurang
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* TOMBOL BAWAH */}

          <div className="detail-bottom">

            <button
              className="back-button bottom"
              onClick={() => setSelectedUmkm(null)}
            >
              ← Lihat Produk UMKM Lainnya
            </button>

          </div>

        </main>
      </>
    );
  }

  /* ================================================= */
  /* HALAMAN UTAMA UMKM */
  /* ================================================= */

  return (
    <>
      {/* ========================= */}
      {/* HERO */}
      {/* ========================= */}

      <section className="umkm-hero">

        {/* BACKGROUND 4 GAMBAR */}

        <div className="umkm-background">

          <div
            className="bg-image"
            style={{
              backgroundImage: `url("${slondok}")`,
            }}
          ></div>

          <div
            className="bg-image"
            style={{
              backgroundImage: `url("${jahe}")`,
            }}
          ></div>

          <div
            className="bg-image"
            style={{
              backgroundImage: `url("${manggleng}")`,
            }}
          ></div>

          <div
            className="bg-image"
            style={{
              backgroundImage: `url("${bakso}")`,
            }}
          ></div>

        </div>

        {/* OVERLAY */}

        <div className="umkm-background-overlay"></div>

        {/* HERO TEXT */}

        <div className="umkm-hero-content">

          <span>
            PRODUK LOKAL
          </span>

          <h1>
            UMKM Padukuhan Pagerjurang
          </h1>

          <p>
            Mengenal berbagai produk unggulan hasil
            karya masyarakat Padukuhan Pagerjurang.
          </p>

        </div>

      </section>

      {/* ========================= */}
      {/* TENTANG UMKM */}
      {/* ========================= */}

      <section className="umkm-about">

        <span className="section-label">
          TENTANG UMKM
        </span>

        <h2>
          Produk Unggulan Pagerjurang
        </h2>

        <p>
          UMKM merupakan salah satu bagian penting dalam
          perekonomian masyarakat Padukuhan Pagerjurang.
          Berbagai produk makanan dan hasil olahan
          masyarakat dikembangkan menjadi produk yang
          memiliki nilai ekonomi dan potensi untuk dikenal
          lebih luas.
        </p>

      </section>

      {/* ========================= */}
      {/* SEARCH */}
      {/* ========================= */}

      <section className="umkm-search">

        <input
          type="text"
          placeholder="Cari produk UMKM..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </section>

      {/* ========================= */}
      {/* DAFTAR UMKM */}
      {/* ========================= */}

      <section className="umkm-list">

        <div className="umkm-list-header">

          <span className="section-label">
            PRODUK UNGGULAN
          </span>

          <h2>
            UMKM Pagerjurang
          </h2>

        </div>

        <div className="umkm-grid">

          {hasil.length > 0 ? (

            hasil.map((item, index) => (

              <div
                className="umkm-card"
                key={index}
              >

                {/* GAMBAR */}

                <div className="umkm-card-image">

                  <img
                    src={item.gambar}
                    alt={item.nama}
                  />

                </div>

                {/* INFORMASI */}

                <div className="umkm-card-content">

                  <span className="umkm-category">
                    {item.kategori}
                  </span>

                  <h3>
                    {item.nama}
                  </h3>

                  <p>
                    {item.deskripsi.substring(
                      0,
                      100
                    )}
                    ...
                  </p>

                  {/* DETAIL */}

                  <button
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

            <div className="no-result">

              <h3>
                Produk tidak ditemukan
              </h3>

              <p>
                Coba gunakan kata kunci lain.
              </p>

            </div>

          )}

        </div>

      </section>

      {/* ========================= */}
      {/* PENUTUP */}
      {/* ========================= */}

      <section className="umkm-support">

        <h2>
          Dukung UMKM Lokal
        </h2>

        <p>
          Dengan mengenal dan membeli produk UMKM
          Pagerjurang, kita turut mendukung perkembangan
          ekonomi masyarakat serta potensi lokal.
        </p>

      </section>
    </>
  );
}

export default Umkm;