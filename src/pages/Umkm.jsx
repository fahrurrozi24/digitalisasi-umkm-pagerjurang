import { useState, useEffect } from "react";

// ===============================
// IMPORT GAMBAR UMKM
// ===============================

import slondok from "../assets/images/Slondok.jpg";
import jahe from "../assets/images/Wedang Jahe.jpg";
import manggleng from "../assets/images/Manggleng.jpg";
import bakso from "../assets/images/Bakso Goreng.jpg";

function Umkm() {
  // ===============================
  // SEARCH
  // ===============================

  const [search, setSearch] = useState("");

  // ===============================
  // MODAL DETAIL
  // ===============================

  const [selectedUmkm, setSelectedUmkm] = useState(null);

  // ===============================
  // BACKGROUND HERO
  // ===============================

  const heroImages = [
    slondok,
    jahe,
    manggleng,
    bakso,
  ];

  const [heroIndex, setHeroIndex] = useState(0);

  // Ganti background setiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => {
        return (prev + 1) % heroImages.length;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // ===============================
  // DATA UMKM
  // ===============================

  const umkm = [
    {
      nama: "Manggleng",
      kategori: "Snack",
      gambar: manggleng,
      deskripsi:
        "Olahan singkong tipis dengan rasa pedas manis yang renyah dan cocok dijadikan camilan.",
      detail:
        "Manggleng merupakan salah satu produk olahan singkong yang dibuat oleh masyarakat. Singkong diolah menjadi irisan tipis kemudian digoreng hingga renyah dan diberi bumbu dengan cita rasa pedas manis. Produk ini cocok dinikmati sebagai camilan maupun oleh-oleh khas daerah.",
    },

    {
      nama: "Slondok",
      kategori: "Snack",
      gambar: slondok,
      deskripsi:
        "Camilan dari olahan singkong pilihan dengan berbagai varian rasa.",
      detail:
        "Slondok merupakan makanan ringan berbahan dasar singkong yang diolah secara tradisional oleh masyarakat. Memiliki tekstur renyah dan tersedia dalam berbagai varian rasa. Slondok menjadi salah satu produk olahan lokal yang dapat dikembangkan sebagai produk unggulan Pagerjurang.",
    },

    {
      nama: "Bakso Goreng",
      kategori: "Camilan",
      gambar: bakso,
      deskripsi:
        "Camilan populer dengan tekstur garing di luar dan empuk di dalam.",
      detail:
        "Bakso goreng merupakan salah satu produk makanan yang dapat dinikmati sebagai camilan. Teksturnya yang garing di bagian luar dan lembut di bagian dalam membuat produk ini cocok dinikmati bersama saus maupun sebagai makanan ringan.",
    },

    {
      nama: "Jahe Srikandi Merapi",
      kategori: "Produk Alam",
      gambar: jahe,
      deskripsi:
        "Produk olahan jahe berkualitas yang berasal dari kawasan lereng Gunung Merapi.",
      detail:
        "Jahe Srikandi Merapi merupakan produk berbahan dasar jahe yang berasal dari kawasan sekitar Gunung Merapi. Produk ini memanfaatkan potensi hasil pertanian masyarakat dan dapat menjadi salah satu produk unggulan yang memperkenalkan potensi alam Pagerjurang.",
    },
  ];

  // ===============================
  // FILTER SEARCH
  // ===============================

  const hasil = umkm.filter((item) =>
    item.nama
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // ===============================
  // TAMPILAN
  // ===============================

  return (
    <>
      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section
        style={{
          position: "relative",
          minHeight: "560px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* BACKGROUND GAMBAR */}

        <img
          src={heroImages[heroIndex]}
          alt="Produk UMKM Pagerjurang"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            transition: "opacity 0.8s ease",
          }}
        />

        {/* OVERLAY GELAP */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.70))",
            zIndex: 1,
          }}
        />

        {/* ISI HERO */}

        <div
          style={{
            position: "relative",
            zIndex: 2,
            color: "white",
            padding: "40px 20px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "white",
              color: "#2e7d32",
              padding: "10px 25px",
              borderRadius: "30px",
              fontWeight: "bold",
              letterSpacing: "3px",
              marginBottom: "25px",
            }}
          >
            PRODUK LOKAL
          </span>

          <h1
            style={{
              fontSize: "52px",
              margin: "0",
              color: "white",
            }}
          >
            UMKM Padukuhan Pagerjurang
          </h1>

          <p
            style={{
              maxWidth: "850px",
              margin: "25px auto 0",
              fontSize: "19px",
              lineHeight: "32px",
              color: "white",
            }}
          >
            Mengenal berbagai produk unggulan hasil karya
            masyarakat Padukuhan Pagerjurang.
          </p>

          {/* INDIKATOR GAMBAR */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginTop: "35px",
            }}
          >
            {heroImages.map((_, index) => (
              <span
                key={index}
                style={{
                  width:
                    index === heroIndex
                      ? "35px"
                      : "10px",

                  height: "10px",

                  borderRadius: "20px",

                  background:
                    index === heroIndex
                      ? "#FFD54F"
                      : "white",

                  transition: "0.3s",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* TENTANG UMKM */}
      {/* ================================================= */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "70px auto",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            color: "#2e7d32",
            fontSize: "32px",
          }}
        >
          Tentang UMKM
        </h2>

        <p
          style={{
            marginTop: "20px",
            lineHeight: "30px",
            fontSize: "17px",
          }}
        >
          UMKM merupakan salah satu penggerak utama
          perekonomian masyarakat Padukuhan Pagerjurang.
          Berbagai produk makanan, minuman, kerajinan,
          hingga hasil pertanian diproduksi langsung oleh
          warga dengan kualitas yang baik.
        </p>

        <p
          style={{
            marginTop: "15px",
            lineHeight: "30px",
            fontSize: "17px",
          }}
        >
          Melalui pengembangan dan digitalisasi UMKM,
          produk masyarakat Pagerjurang diharapkan dapat
          semakin dikenal oleh masyarakat luas.
        </p>
      </section>

      {/* ================================================= */}
      {/* SEARCH */}
      {/* ================================================= */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "0 20px",
        }}
      >
        <input
          type="text"
          placeholder="Cari UMKM..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "16px 20px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "16px",
            outline: "none",
          }}
        />
      </section>

      {/* ================================================= */}
      {/* DAFTAR UMKM */}
      {/* ================================================= */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#2e7d32",
            marginBottom: "35px",
            fontSize: "32px",
          }}
        >
          Produk UMKM
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >
          {hasil.map((item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow:
                  "0 8px 25px rgba(0,0,0,.10)",
                transition: "0.3s",
              }}
            >
              {/* GAMBAR */}

              <img
                src={item.gambar}
                alt={item.nama}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* ISI CARD */}

              <div
                style={{
                  padding: "25px",
                }}
              >
                <h3
                  style={{
                    fontSize: "25px",
                    marginTop: "0",
                    marginBottom: "15px",
                  }}
                >
                  {item.nama}
                </h3>

                {/* KATEGORI */}

                <span
                  style={{
                    display: "inline-block",
                    background: "#2e7d32",
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    marginBottom: "15px",
                  }}
                >
                  {item.kategori}
                </span>

                {/* DESKRIPSI */}

                <p
                  style={{
                    lineHeight: "28px",
                    color: "#555",
                    marginBottom: "20px",
                  }}
                >
                  {item.deskripsi}
                </p>

                {/* BUTTON */}

                <button
                  onClick={() =>
                    setSelectedUmkm(item)
                  }
                  style={{
                    width: "100%",
                    padding: "13px",
                    background: "#2e7d32",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* JIKA DATA TIDAK DITEMUKAN */}

        {hasil.length === 0 && (
          <p
            style={{
              textAlign: "center",
              padding: "50px",
              color: "#777",
            }}
          >
            UMKM yang dicari tidak ditemukan.
          </p>
        )}
      </section>

      {/* ================================================= */}
      {/* PENUTUP */}
      {/* ================================================= */}

      <section
        style={{
          background: "#f4f4f4",
          padding: "70px 20px",
          textAlign: "center",
          marginTop: "80px",
        }}
      >
        <h2
          style={{
            color: "#2e7d32",
          }}
        >
          Dukung UMKM Lokal
        </h2>

        <p
          style={{
            marginTop: "20px",
            maxWidth: "800px",
            marginInline: "auto",
            lineHeight: "30px",
          }}
        >
          Dengan membeli produk UMKM Pagerjurang,
          Anda ikut mendukung pertumbuhan ekonomi
          masyarakat dan pelestarian potensi lokal.
        </p>
      </section>

      {/* ================================================= */}
      {/* MODAL DETAIL */}
      {/* ================================================= */}

      {selectedUmkm && (
        <div
          onClick={() =>
            setSelectedUmkm(null)
          }
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.65)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: "20px",
          }}
        >
          {/* KONTEN MODAL */}

          <div
            onClick={(e) =>
              e.stopPropagation()
            }
            style={{
              background: "white",
              width: "550px",
              maxWidth: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow:
                "0 20px 50px rgba(0,0,0,.3)",
            }}
          >
            {/* GAMBAR MODAL */}

            <img
              src={selectedUmkm.gambar}
              alt={selectedUmkm.nama}
              style={{
                width: "100%",
                height: "280px",
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* ISI MODAL */}

            <div
              style={{
                padding: "30px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  background: "#2e7d32",
                  color: "white",
                  padding: "7px 15px",
                  borderRadius: "20px",
                  fontSize: "13px",
                }}
              >
                {selectedUmkm.kategori}
              </span>

              <h2
                style={{
                  color: "#2e7d32",
                  fontSize: "30px",
                  marginTop: "15px",
                }}
              >
                {selectedUmkm.nama}
              </h2>

              <p
                style={{
                  marginTop: "20px",
                  lineHeight: "30px",
                  color: "#555",
                  textAlign: "justify",
                }}
              >
                {selectedUmkm.detail}
              </p>

              {/* TOMBOL TUTUP */}

              <button
                onClick={() =>
                  setSelectedUmkm(null)
                }
                style={{
                  width: "100%",
                  marginTop: "25px",
                  padding: "14px",
                  border: "none",
                  borderRadius: "8px",
                  background: "#2e7d32",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
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

export default Umkm;