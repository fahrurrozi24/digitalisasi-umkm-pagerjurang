function Gallery() {
  const dokumentasi = [
    {
      minggu: "Minggu 1",
      kegiatan: "New Journey",
      tanggal: "20 Juli 2026",
      deskripsi: "Kegiatan penerimaan mahasiswa KKN oleh Dukuh dan perangkat Padukuhan Pagerjurang.",
      icon: "/assets/images/foto1.jpeg",
    },
    {
      minggu: "Minggu 2",
      kegiatan: "Survei Lokasi & Pendataan UMKM",
      tanggal: "16 Juli 2026",
      deskripsi: "Mahasiswa melakukan survei wilayah serta pendataan UMKM sebagai dasar penyusunan program kerja.",
      icon: "📋",
    },
    {
      minggu: "Minggu 3",
      kegiatan: "Pelatihan Digitalisasi UMKM",
      tanggal: "22 Juli 2026",
      deskripsi: "Pendampingan penggunaan media digital untuk promosi produk UMKM masyarakat.",
      icon: "💻",
    },
    {
      minggu: "Minggu 4",
      kegiatan: "Gotong Royong Lingkungan",
      tanggal: "24 Juli 2026",
      deskripsi: "Kegiatan kerja bakti bersama masyarakat membersihkan area padukuhan.",
      icon: "🧹",
    },
  ];

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
          Galeri KKN Pagerjurang 2026
        </h1>

        <p
          style={{
            maxWidth: "850px",
            margin: "20px auto 0",
            lineHeight: "30px",
          }}
        >
          Dokumentasi kegiatan mahasiswa Kuliah Kerja Nyata (KKN) selama
          satu bulan di Padukuhan Pagerjurang, Kalurahan Kepuharjo,
          Kecamatan Cangkringan, Kabupaten Sleman.
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
        <h2>Dokumentasi Kegiatan</h2>

        <p
          style={{
            marginTop: "20px",
            lineHeight: "30px",
          }}
        >
          Halaman ini berisi dokumentasi berbagai kegiatan yang telah
          dilaksanakan oleh mahasiswa KKN bersama masyarakat Pagerjurang,
          mulai dari penerimaan, survei wilayah, pelaksanaan program kerja,
          hingga penutupan kegiatan KKN.
        </p>
      </section>

      {/* TIMELINE */}
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
            marginBottom: "40px",
          }}
        >
          Timeline Kegiatan
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "25px",
          }}
        >
          {dokumentasi.map((item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 5px 15px rgba(0,0,0,.1)",
              }}
            >
              {/* Placeholder Foto */}
              <div
                style={{
                  height: "220px",
                  background: "#eeeeee",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "70px",
                }}
              >
                {item.icon}
              </div>

              <div style={{ padding: "25px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "15px",
                  }}
                >
                  <span
                    style={{
                      background: "#2e7d32",
                      color: "white",
                      padding: "5px 12px",
                      borderRadius: "20px",
                      fontSize: "13px",
                    }}
                  >
                    {item.minggu}
                  </span>

                  <small style={{ color: "#777" }}>
                    {item.tanggal}
                  </small>
                </div>

                <h3>{item.kegiatan}</h3>

                <p
                  style={{
                    marginTop: "15px",
                    lineHeight: "28px",
                    color: "#555",
                  }}
                >
                  {item.deskripsi}
                </p>

                <button
                  style={{
                    marginTop: "20px",
                    background: "#2e7d32",
                    color: "white",
                    border: "none",
                    padding: "12px 20px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    width: "100%",
                  }}
                >
                  Lihat Dokumentasi
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATISTIK */}
      <section
        style={{
          background: "#f5f5f5",
          padding: "70px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: "25px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,.08)",
            }}
          >
            <h1 style={{ color: "#2e7d32" }}>1</h1>
            <p>Bulan Kegiatan</p>
          </div>

          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,.08)",
            }}
          >
            <h1 style={{ color: "#2e7d32" }}>4</h1>
            <p>Minggu Pelaksanaan</p>
          </div>

          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,.08)",
            }}
          >
            <h1 style={{ color: "#2e7d32" }}>8</h1>
            <p>Kegiatan Utama</p>
          </div>

          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,.08)",
            }}
          >
            <h1 style={{ color: "#2e7d32" }}>100+</h1>
            <p>Dokumentasi Foto</p>
          </div>
        </div>
      </section>

      {/* PENUTUP */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2>Terima Kasih Pagerjurang</h2>

        <p
          style={{
            maxWidth: "850px",
            margin: "20px auto",
            lineHeight: "30px",
          }}
        >
          Dokumentasi ini menjadi kenangan dan bukti kolaborasi antara
          mahasiswa KKN dengan masyarakat Padukuhan Pagerjurang dalam
          melaksanakan berbagai program pengabdian selama satu bulan
          kegiatan berlangsung.
        </p>

        <p style={{ marginTop: "25px", color: "#777" }}>
          KKN Universitas Respati Yogyakarta • Periode Juli–Agustus 2026
        </p>
      </section>
    </>
  );
}

export default Gallery;