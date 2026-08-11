import { useState } from "react";
import beritaBackground from "../assets/images/Berita.jpeg";

import foto1 from "../assets/images/1 (1).jpeg";
import foto2 from "../assets/images/1 (2).jpeg";
import foto3 from "../assets/images/1 (3).jpeg";
import foto4 from "../assets/images/1 (4).jpeg";
import foto5 from "../assets/images/1 (5).jpeg";
import foto6 from "../assets/images/1 (6).jpeg";
import foto7 from "../assets/images/1 (7).jpeg";
import foto8 from "../assets/images/1 (8).jpeg";
import foto9 from "../assets/images/1 (9).jpeg";
import foto10 from "../assets/images/1 (10).jpeg";
import foto11 from "../assets/images/1 (11).jpeg";
import foto12 from "../assets/images/1 (12).jpeg";
import foto13 from "../assets/images/1 (13).jpeg";
import foto14 from "../assets/images/1 (14).jpeg";
import foto15 from "../assets/images/1 (15).jpeg";
import foto16 from "../assets/images/1 (16).jpeg";
import foto17 from "../assets/images/1 (17).jpeg";
import foto18 from "../assets/images/1 (18).jpeg";
import foto19 from "../assets/images/1 (19).jpeg";
import foto20 from "../assets/images/1 (20).jpeg";
import foto21 from "../assets/images/1 (21).jpeg";

import "./News.css";

function News() {
  const [beritaDipilih, setBeritaDipilih] = useState(null);

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
  ];

  const berita = [
    {
      judul: "Kegiatan Gotong Royong Warga Pagerjurang",
      tanggal: "20 Juli 2026",
      kategori: "Kegiatan",
      gambar: foto1,
      isi:
        "Masyarakat Padukuhan Pagerjurang melaksanakan kegiatan gotong royong membersihkan lingkungan sebagai bentuk kepedulian terhadap kebersihan dan kesehatan lingkungan.",
    },
    {
      judul: "Pelatihan Digitalisasi UMKM",
      tanggal: "15 Juli 2026",
      kategori: "UMKM",
      gambar: foto5,
      isi:
        "Pelaku UMKM mengikuti pelatihan pemasaran digital untuk meningkatkan daya saing produk lokal melalui media sosial dan website.",
    },
    {
      judul: "Kegiatan Masyarakat Pagerjurang",
      tanggal: "10 Juli 2026",
      kategori: "Kegiatan",
      gambar: foto9,
      isi:
        "Berbagai kegiatan masyarakat Pagerjurang dilaksanakan secara bersama-sama untuk mempererat hubungan antarwarga dan meningkatkan kepedulian terhadap lingkungan.",
    },
    {
      judul: "Kegiatan Pertanian Warga",
      tanggal: "10 Juli 2026",
      kategori: "Pertanian",
      gambar: foto13,
      isi:
        "Masyarakat Pagerjurang terus mengembangkan sektor pertanian sebagai salah satu potensi utama yang mendukung perekonomian warga.",
    },
  ];

  return (
    <>
      {/* ========================= */}
      {/* HERO */}
      {/* ========================= */}

      <section className="news-hero">
        <h1>Berita Padukuhan Pagerjurang</h1>

        <p>
          Ikuti informasi terbaru mengenai kegiatan masyarakat,
          pembangunan, UMKM, serta berbagai aktivitas yang berlangsung
          di Padukuhan Pagerjurang.
        </p>
      </section>

      {/* ========================= */}
      {/* BERITA */}
      {/* ========================= */}

      <section
        className="news-section"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.58),
              rgba(0, 0, 0, 0.68)
            ),
            url(${beritaBackground})
          `,
        }}
      >
        <div className="news-container">

          {/* JUDUL */}

          <div className="news-heading">
            <span>INFORMASI TERKINI</span>

            <h2>Berita Terbaru</h2>

            <p>
              Berbagai informasi dan kegiatan terbaru dari
              masyarakat Padukuhan Pagerjurang.
            </p>
          </div>

          {/* CARD BERITA */}

          <div className="news-grid">

            {berita.map((item, index) => (
              <div className="news-card" key={index}>

                {/* FOTO UTAMA CARD */}

                <div className="news-image">
                  <img
                    src={item.gambar}
                    alt={item.judul}
                  />
                </div>

                {/* ISI */}

                <div className="news-content">

                  <span className="news-category">
                    {item.kategori}
                  </span>

                  <h3>
                    {item.judul}
                  </h3>

                  <p className="news-date">
                    {item.tanggal}
                  </p>

                  <p className="news-description">
                    {item.isi}
                  </p>

                  <button
                    type="button"
                    className="news-button"
                    onClick={() => setBeritaDipilih(item)}
                  >
                    Baca Selengkapnya
                  </button>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ========================= */}
      {/* PENUTUP */}
      {/* ========================= */}

      <section className="news-footer">

        <h2>
          Tetap Ikuti Informasi Terbaru
        </h2>

        <p>
          Website ini menjadi media informasi Padukuhan Pagerjurang
          untuk menyampaikan berita, kegiatan, pembangunan, serta
          perkembangan UMKM kepada masyarakat.
        </p>

      </section>

      {/* ========================= */}
      {/* MODAL DETAIL BERITA */}
      {/* ========================= */}

      {beritaDipilih && (
        <div
          className="news-modal"
          onClick={() => setBeritaDipilih(null)}
        >

          <div
            className="news-modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            {/* TOMBOL CLOSE */}

            <button
              type="button"
              className="news-modal-close"
              onClick={() => setBeritaDipilih(null)}
            >
              ×
            </button>

            {/* FOTO UTAMA */}

            <img
              className="news-modal-main-image"
              src={beritaDipilih.gambar}
              alt={beritaDipilih.judul}
            />

            {/* INFORMASI BERITA */}

            <div className="news-modal-body">

              <span className="news-category">
                {beritaDipilih.kategori}
              </span>

              <h2>
                {beritaDipilih.judul}
              </h2>

              <p className="news-modal-date">
                {beritaDipilih.tanggal}
              </p>

              <p className="news-modal-text">
                {beritaDipilih.isi}
              </p>

              <hr />

              {/* GALERI */}

              <h3 className="gallery-title">
                Dokumentasi Kegiatan
              </h3>

              <p className="gallery-description">
                Berikut dokumentasi kegiatan dan aktivitas
                masyarakat Padukuhan Pagerjurang.
              </p>

              <div className="news-gallery">

                {semuaFoto.map((foto, index) => (
                  <div
                    className="gallery-item"
                    key={index}
                  >
                    <img
                      src={foto}
                      alt={`Dokumentasi Pagerjurang ${index + 1}`}
                    />

                    <span>
                      Foto {index + 1}
                    </span>
                  </div>
                ))}

              </div>

              {/* TOMBOL TUTUP */}

              <button
                type="button"
                className="news-modal-button"
                onClick={() => setBeritaDipilih(null)}
              >
                Tutup
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}

export default News;