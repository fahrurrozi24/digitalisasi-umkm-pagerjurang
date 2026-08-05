import { useState } from "react";

function Umkm() {
  const [search, setSearch] = useState("");

  const umkm = [
    {
      nama: "Manggleng",
      kategori: "Snack",
      deskripsi:
        "Olahan singkong tipis dengan rasa pedas manis.",
    },
    {
      nama: "Slondok",
      kategori: "Snack",
      deskripsi:
        "Camilan dari olahan singkong pilihan dengan berbagai varian rasa.",
    },
    {
      nama: "Bakso Goreng",
      kategori: "Camilan",
      deskripsi:
        "Camilan populer khas Nusantara betekstur garing di luar, empuk di dalam.",
    },
    {
      nama: "Jahe Srikandi Merapi",
      kategori: "Produk Alam",
      deskripsi:
        "Jahe segar dengan kualitas tinggi dari lereng Gunung Merapi.",
    },
  ];

  const hasil = umkm.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* HERO */}

      <section
        style={{
          background: "#2e7d32",
          color: "white",
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "45px" }}>
          UMKM Padukuhan Pagerjurang
        </h1>

        <p
          style={{
            marginTop: "20px",
            maxWidth: "800px",
            marginInline: "auto",
            lineHeight: "30px",
          }}
        >
          Temukan berbagai produk unggulan hasil karya
          masyarakat Padukuhan Pagerjurang.
        </p>
      </section>

      {/* TENTANG */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "60px auto",
          padding: "0 20px",
        }}
      >
        <h2>Tentang UMKM</h2>

        <p
          style={{
            marginTop: "20px",
            lineHeight: "30px",
          }}
        >
          UMKM merupakan salah satu penggerak utama
          perekonomian masyarakat Padukuhan Pagerjurang.
          Berbagai produk makanan, minuman, kerajinan,
          hingga hasil pertanian diproduksi langsung oleh
          warga dengan kualitas yang baik.
        </p>
      </section>

      {/* SEARCH */}

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
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
      </section>

      {/* LIST */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: "25px",
          }}
        >
          {hasil.map((item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "25px",
                boxShadow:
                  "0 5px 15px rgba(255, 226, 6, 0.98)",
              }}
            >
              <div
                style={{
                  height: "180px",
                  background: "#eeeeee",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "60px",
                }}
              >
                🏪
              </div>

              <h3
                style={{
                  marginTop: "20px",
                }}
              >
                {item.nama}
              </h3>

              <span
                style={{
                  background: "#2e7d32",
                  color: "white",
                  padding: "5px 12px",
                  borderRadius: "20px",
                  fontSize: "13px",
                }}
              >
                {item.kategori}
              </span>

              <p
                style={{
                  marginTop: "15px",
                  lineHeight: "28px",
                }}
              >
                {item.deskripsi}
              </p>

              <button
                style={{
                  marginTop: "20px",
                  width: "100%",
                  padding: "12px",
                  background: "#2e7d32",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Lihat Detail
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* PENUTUP */}

      <section
        style={{
          background: "#f4f4f4",
          padding: "70px 20px",
          textAlign: "center",
          marginTop: "80px",
        }}
      >
        <h2>Dukung UMKM Lokal</h2>

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
    </>
  );
}

export default Umkm;