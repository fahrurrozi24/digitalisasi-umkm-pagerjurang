import { useState } from "react";
import "./Gallery.css";

// Background halaman
import galeriBackground from "../assets/images/Galeri.jpeg";

// Foto cover Minggu 1
import bGaleri from "../assets/images/B Galeri.jpeg";

// Foto dokumentasi A (1) - A (24)
import fotoA1 from "../assets/images/A (1).jpeg";
import fotoA2 from "../assets/images/A (2).jpeg";
import fotoA3 from "../assets/images/A (3).jpeg";
import fotoA4 from "../assets/images/A (4).jpeg";
import fotoA5 from "../assets/images/A (5).jpeg";
import fotoA6 from "../assets/images/A (6).jpeg";
import fotoA7 from "../assets/images/A (7).jpeg";
import fotoA8 from "../assets/images/A (8).jpeg";
import fotoA9 from "../assets/images/A (9).jpeg";
import fotoA10 from "../assets/images/A (10).jpeg";
import fotoA11 from "../assets/images/A (11).jpeg";
import fotoA12 from "../assets/images/A (12).jpeg";
import fotoA13 from "../assets/images/A (13).jpeg";
import fotoA14 from "../assets/images/A (14).jpeg";
import fotoA15 from "../assets/images/A (15).jpeg";
import fotoA16 from "../assets/images/A (16).jpeg";
import fotoA17 from "../assets/images/A (17).jpeg";
import fotoA18 from "../assets/images/A (18).jpeg";
import fotoA19 from "../assets/images/A (19).jpeg";
import fotoA20 from "../assets/images/A (20).jpeg";
import fotoA21 from "../assets/images/A (21).jpeg";
import fotoA22 from "../assets/images/A (22).jpeg";
import fotoA23 from "../assets/images/A (23).jpeg";
import fotoA24 from "../assets/images/A (24).jpeg";


function Gallery() {

  // =========================
  // STATE MODAL
  // =========================

  const [showModal, setShowModal] = useState(false);

  // =========================
  // FOTO DOKUMENTASI
  // =========================

  const fotoDokumentasi = [
    fotoA1,
    fotoA2,
    fotoA3,
    fotoA4,
    fotoA5,
    fotoA6,
    fotoA7,
    fotoA8,
    fotoA9,
    fotoA10,
    fotoA11,
    fotoA12,
    fotoA13,
    fotoA14,
    fotoA15,
    fotoA16,
    fotoA17,
    fotoA18,
    fotoA19,
    fotoA20,
    fotoA21,
    fotoA22,
    fotoA23,
    fotoA24,
  ];


  // =========================
  // DATA KEGIATAN
  // =========================

  const dokumentasi = [
    {
      minggu: "Minggu 1",
      kegiatan: "New Journey",
      tanggal: "20 Juli 2026",
      deskripsi:
        "Disini Perjalanan Kita Mulai.",
      gambar: bGaleri,
      hasGallery: true,
    },

    {
      minggu: "Minggu 2",
      kegiatan: "Survei Lokasi & Pendataan UMKM",
      tanggal: "16 Juli 2026",
      deskripsi:
        "Mahasiswa melakukan survei wilayah serta pendataan UMKM sebagai dasar penyusunan program kerja.",
      gambar: null,
      hasGallery: false,
    },

    {
      minggu: "Minggu 3",
      kegiatan: "Pelatihan Digitalisasi UMKM",
      tanggal: "22 Juli 2026",
      deskripsi:
        "Pendampingan penggunaan media digital untuk promosi produk UMKM masyarakat.",
      gambar: null,
      hasGallery: false,
    },

    {
      minggu: "Minggu 4",
      kegiatan: "Gotong Royong Lingkungan",
      tanggal: "24 Juli 2026",
      deskripsi:
        "Kegiatan kerja bakti bersama masyarakat membersihkan area padukuhan.",
      gambar: null,
      hasGallery: false,
    },
  ];


  return (
    <>
      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

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

        <h1>
          Galeri KKN Pagerjurang 2026
        </h1>

        <p>
          Dokumentasi kegiatan mahasiswa Kuliah Kerja Nyata (KKN)
          selama satu bulan di Padukuhan Pagerjurang, Kalurahan
          Kepuharjo, Kecamatan Cangkringan, Kabupaten Sleman.
        </p>

      </section>


      {/* ================================================= */}
      {/* TENTANG */}
      {/* ================================================= */}

      <section className="gallery-intro">

        <h2>
          Dokumentasi Kegiatan
        </h2>

        <p>
          Halaman ini berisi dokumentasi berbagai kegiatan yang telah
          dilaksanakan oleh mahasiswa KKN bersama masyarakat Pagerjurang,
          mulai dari penerimaan, survei wilayah, pelaksanaan program kerja,
          hingga penutupan kegiatan KKN.
        </p>

      </section>


      {/* ================================================= */}
      {/* TIMELINE */}
      {/* ================================================= */}

      <section
        className="gallery-timeline"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.45),
              rgba(0, 0, 0, 0.55)
            ),
            url(${galeriBackground})
          `,
        }}
      >

        <div className="gallery-container">

          {/* JUDUL */}

          <div className="gallery-title">

            <span>
              KEGIATAN KKN
            </span>

            <h2>
              Timeline Kegiatan
            </h2>

            <p>
              Berbagai kegiatan yang dilaksanakan selama
              pelaksanaan KKN di Padukuhan Pagerjurang.
            </p>

          </div>


          {/* CARD */}

          <div className="gallery-grid">

            {dokumentasi.map((item, index) => (

              <div
                className="gallery-card"
                key={index}
              >

                {/* ===================================== */}
                {/* COVER FOTO */}
                {/* ===================================== */}

                <div className="gallery-image">

                  {item.gambar ? (

                    <img
                      src={item.gambar}
                      alt={item.kegiatan}
                    />

                  ) : (

                    <span
                      style={{
                        fontSize: "70px",
                      }}
                    >
                      📸
                    </span>

                  )}

                </div>


                {/* ===================================== */}
                {/* CONTENT */}
                {/* ===================================== */}

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


                  {/* ================================= */}
                  {/* BUTTON */}
                  {/* ================================= */}

                  {item.hasGallery ? (

                    <button
                      type="button"
                      className="gallery-button"
                      onClick={() => setShowModal(true)}
                    >
                      Lihat Dokumentasi
                    </button>

                  ) : (

                    <button
                      type="button"
                      className="gallery-button"
                      onClick={() =>
                        alert(
                          `${item.kegiatan}\n\n${item.deskripsi}`
                        )
                      }
                    >
                      Lihat Dokumentasi
                    </button>

                  )}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* MODAL DOKUMENTASI MINGGU 1 */}
      {/* ================================================= */}

      {showModal && (

        <div
          className="gallery-modal-overlay"
          onClick={() => setShowModal(false)}
        >

          <div
            className="gallery-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* HEADER MODAL */}

            <div className="gallery-modal-header">

              <div>

                <span>
                  DOKUMENTASI
                </span>

                <h2>
                  Minggu 1 - New Journey
                </h2>

                <p>
                  Dokumentasi perjalanan awal kegiatan KKN
                  di Padukuhan Pagerjurang.
                </p>

              </div>


              {/* CLOSE */}

              <button
                type="button"
                className="gallery-modal-close"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>

            </div>


            {/* ========================================= */}
            {/* FOTO A (1) - A (24) */}
            {/* ========================================= */}

            <div className="gallery-photo-grid">

              {fotoDokumentasi.map((foto, index) => (

                <div
                  className="gallery-photo-item"
                  key={index}
                >

                  <img
                    src={foto}
                    alt={`Dokumentasi ${index + 1}`}
                  />

                  <div className="gallery-photo-number">
                    Foto {index + 1}
                  </div>

                </div>

              ))}

            </div>


            {/* FOOTER MODAL */}

            <div className="gallery-modal-footer">

              <button
                type="button"
                className="gallery-close-button"
                onClick={() => setShowModal(false)}
              >
                Tutup Dokumentasi
              </button>

            </div>

          </div>

        </div>

      )}


      {/* ================================================= */}
      {/* STATISTIK */}
      {/* ================================================= */}

      <section className="gallery-statistics">

        <div className="statistics-container">

          <div className="stat-card">

            <h1>
              1
            </h1>

            <p>
              Bulan Kegiatan
            </p>

          </div>


          <div className="stat-card">

            <h1>
              4
            </h1>

            <p>
              Minggu Pelaksanaan
            </p>

          </div>


          <div className="stat-card">

            <h1>
              8
            </h1>

            <p>
              Kegiatan Utama
            </p>

          </div>


          <div className="stat-card">

            <h1>
              100+
            </h1>

            <p>
              Dokumentasi Foto
            </p>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* PENUTUP */}
      {/* ================================================= */}

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

    </>
  );
}


export default Gallery;