import { useState } from "react";
import "./Gallery.css";

import galeriBackground from "../assets/images/Galeri.jpeg";
import coverMinggu1 from "../assets/images/B Galeri.jpeg";

import foto1 from "../assets/images/A (1).jpeg";
import foto2 from "../assets/images/A (2).jpeg";
import foto3 from "../assets/images/A (3).jpeg";
import foto4 from "../assets/images/A (4).jpeg";
import foto5 from "../assets/images/A (5).jpeg";
import foto6 from "../assets/images/A (6).jpeg";
import foto7 from "../assets/images/A (7).jpeg";
import foto8 from "../assets/images/A (8).jpeg";
import foto9 from "../assets/images/A (9).jpeg";
import foto10 from "../assets/images/A (10).jpeg";
import foto11 from "../assets/images/A (11).jpeg";
import foto12 from "../assets/images/A (12).jpeg";
import foto13 from "../assets/images/A (13).jpeg";
import foto14 from "../assets/images/A (14).jpeg";
import foto15 from "../assets/images/A (15).jpeg";
import foto16 from "../assets/images/A (16).jpeg";
import foto17 from "../assets/images/A (17).jpeg";
import foto18 from "../assets/images/A (18).jpeg";
import foto19 from "../assets/images/A (19).jpeg";
import foto20 from "../assets/images/A (20).jpeg";
import foto21 from "../assets/images/A (21).jpeg";
import foto22 from "../assets/images/A (22).jpeg";
import foto23 from "../assets/images/A (23).jpeg";
import foto24 from "../assets/images/A (24).jpeg";

function Gallery() {
  const [selectedKegiatan, setSelectedKegiatan] = useState(null);
  const [selectedFoto, setSelectedFoto] = useState(null);

  const semuaFoto = [
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,
    foto6,
    foto7,
    foto8,
    foto9,
    foto10,
    foto11,
    foto12,
    foto13,
    foto14,
    foto15,
    foto16,
    foto17,
    foto18,
    foto19,
    foto20,
    foto21,
    foto22,
    foto23,
    foto24,
  ];

  const dokumentasi = [
    {
      minggu: "Minggu 1",
      kegiatan: "New Journey",
      tanggal: "20 Juli 2026",
      deskripsi: "Disini Perjalanan Kita Mulai.",
      cover: coverMinggu1,
    },

    {
      minggu: "Minggu 2",
      kegiatan: "Survei Lokasi & Pendataan UMKM",
      tanggal: "16 Juli 2026",
      deskripsi:
        "Mahasiswa melakukan survei wilayah serta pendataan UMKM sebagai dasar penyusunan program kerja.",
      cover: semuaFoto[1],
    },

    {
      minggu: "Minggu 3",
      kegiatan: "Pelatihan Digitalisasi UMKM",
      tanggal: "22 Juli 2026",
      deskripsi:
        "Pendampingan penggunaan media digital untuk promosi produk UMKM masyarakat.",
      cover: semuaFoto[2],
    },

    {
      minggu: "Minggu 4",
      kegiatan: "Gotong Royong Lingkungan",
      tanggal: "24 Juli 2026",
      deskripsi:
        "Kegiatan kerja bakti bersama masyarakat membersihkan area padukuhan.",
      cover: semuaFoto[3],
    },
  ];

  return (
    <>
      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section
        className="gallery-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.55),
              rgba(0, 0, 0, 0.65)
            ),
            url(${galeriBackground})
          `,
        }}
      >
        <h1>Galeri KKN Pagerjurang 2026</h1>

        <p>
          Dokumentasi kegiatan mahasiswa Kuliah Kerja Nyata (KKN)
          selama satu bulan di Padukuhan Pagerjurang, Kalurahan
          Kepuharjo, Kecamatan Cangkringan, Kabupaten Sleman.
        </p>
      </section>

      {/* ===================================================== */}
      {/* TENTANG */}
      {/* ===================================================== */}

      <section className="gallery-intro">
        <h2>Dokumentasi Kegiatan</h2>

        <p>
          Halaman ini berisi dokumentasi berbagai kegiatan yang telah
          dilaksanakan oleh mahasiswa KKN bersama masyarakat Pagerjurang,
          mulai dari penerimaan, survei wilayah, pelaksanaan program kerja,
          hingga penutupan kegiatan KKN.
        </p>
      </section>

      {/* ===================================================== */}
      {/* TIMELINE */}
      {/* ===================================================== */}

      <section
        className="gallery-timeline"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.45),
              rgba(0, 0, 0, 0.60)
            ),
            url(${galeriBackground})
          `,
        }}
      >
        <div className="gallery-container">

          <div className="gallery-title">
            <span>KEGIATAN KKN</span>

            <h2>Timeline Kegiatan</h2>

            <p>
              Berbagai kegiatan yang dilaksanakan selama
              pelaksanaan KKN di Padukuhan Pagerjurang.
            </p>
          </div>

          {/* CARD KEGIATAN */}

          <div className="gallery-grid">

            {dokumentasi.map((item, index) => (
              <div
                className="gallery-card"
                key={index}
              >

                {/* COVER FOTO */}

                <div className="gallery-image">
                  <img
                    src={item.cover}
                    alt={item.kegiatan}
                  />
                </div>

                {/* CONTENT */}

                <div className="gallery-content">

                  <div className="gallery-meta">

                    <span className="gallery-week">
                      {item.minggu}
                    </span>

                    <small>
                      {item.tanggal}
                    </small>

                  </div>

                  <h3>
                    {item.kegiatan}
                  </h3>

                  <p>
                    {item.deskripsi}
                  </p>

                  <button
                    type="button"
                    className="gallery-button"
                    onClick={() =>
                      setSelectedKegiatan(item)
                    }
                  >
                    Lihat Dokumentasi
                  </button>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* STATISTIK */}
      {/* ===================================================== */}

      <section className="gallery-statistics">

        <div className="statistics-container">

          <div className="stat-card">
            <h1>1</h1>
            <p>Bulan Kegiatan</p>
          </div>

          <div className="stat-card">
            <h1>4</h1>
            <p>Minggu Pelaksanaan</p>
          </div>

          <div className="stat-card">
            <h1>8</h1>
            <p>Kegiatan Utama</p>
          </div>

          <div className="stat-card">
            <h1>24</h1>
            <p>Dokumentasi Foto</p>
          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* PENUTUP */}
      {/* ===================================================== */}

      <section className="gallery-footer">

        <h2>
          Terima Kasih Pagerjurang
        </h2>

        <p>
          Dokumentasi ini menjadi kenangan dan bukti kolaborasi antara
          mahasiswa KKN dengan masyarakat Padukuhan Pagerjurang dalam
          melaksanakan berbagai program pengabdian selama satu bulan
          kegiatan berlangsung.
        </p>

        <p className="footer-period">
          KKN Universitas Respati Yogyakarta •
          Periode Juli–Agustus 2026
        </p>

      </section>

      {/* ===================================================== */}
      {/* MODAL LIHAT DOKUMENTASI */}
      {/* ===================================================== */}

      {selectedKegiatan && (
        <div
          className="gallery-modal"
          onClick={() => setSelectedKegiatan(null)}
        >

          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            {/* HEADER MODAL */}

            <div className="gallery-modal-header">

              <div>
                <span className="gallery-modal-week">
                  {selectedKegiatan.minggu}
                </span>

                <h2>
                  {selectedKegiatan.kegiatan}
                </h2>

                <p>
                  {selectedKegiatan.tanggal}
                </p>
              </div>

              <button
                className="gallery-close"
                onClick={() =>
                  setSelectedKegiatan(null)
                }
              >
                ×
              </button>

            </div>

            {/* DESKRIPSI */}

            <p className="gallery-modal-description">
              {selectedKegiatan.deskripsi}
            </p>

            {/* SEMUA FOTO */}

            <div className="gallery-photo-grid">

              {semuaFoto.map((foto, index) => (
                <div
                  className="gallery-photo-item"
                  key={index}
                  onClick={() =>
                    setSelectedFoto(foto)
                  }
                >

                  <img
                    src={foto}
                    alt={`Dokumentasi ${index + 1}`}
                  />

                </div>
              ))}

            </div>

          </div>
        </div>
      )}

      {/* ===================================================== */}
      {/* FOTO FULLSCREEN */}
      {/* ===================================================== */}

      {selectedFoto && (
        <div
          className="gallery-photo-preview"
          onClick={() => setSelectedFoto(null)}
        >

          <button
            className="gallery-preview-close"
            onClick={() => setSelectedFoto(null)}
          >
            ×
          </button>

          <img
            src={selectedFoto}
            alt="Dokumentasi KKN"
            onClick={(e) => e.stopPropagation()}
          />

        </div>
      )}
    </>
  );
}

export default Gallery;