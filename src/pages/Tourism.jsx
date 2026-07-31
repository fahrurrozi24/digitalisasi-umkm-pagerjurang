function Tourism() {
  const wisata = [
    {
      nama: "Panorama Lereng Merapi",
      deskripsi:
        "Menawarkan pemandangan alam Gunung Merapi yang indah dengan udara yang sejuk.",
      icon: "🌋",
    },
    {
      nama: "Wisata Edukasi Pertanian",
      deskripsi:
        "Pengunjung dapat belajar mengenai pertanian dan perkebunan khas Pagerjurang.",
      icon: "🌾",
    },
    {
      nama: "Budaya & Tradisi",
      deskripsi:
        "Berbagai kegiatan budaya dan tradisi masyarakat yang masih dilestarikan hingga sekarang.",
      icon: "🎭",
    },
    {
      nama: "Jelajah Alam",
      deskripsi:
        "Menikmati suasana pedesaan yang asri dengan jalur trekking ringan di sekitar padukuhan.",
      icon: "🥾",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "#2e7d32",
          color: "white",
          textAlign: "center",
          padding: "90px 20px",
        }}
      >
        <h1 style={{ fontSize: "45px" }}>
          Wisata Padukuhan Pagerjurang
        </h1>

        <p
          style={{
            maxWidth: "800px",
            margin: "20px auto 0",
            lineHeight: "30px",
          }}
        >
          Jelajahi keindahan alam, budaya, dan potensi wisata yang dimiliki
          Padukuhan Pagerjurang di lereng Gunung Merapi.
        </p>
      </section>

      {/* Tentang Wisata */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "60px auto",
          padding: "0 20px",
        }}
      >
        <h2>Tentang Wisata Pagerjurang</h2>

        <p
          style={{
            marginTop: "20px",
            lineHeight: "30px",
          }}
        >
          Padukuhan Pagerjurang memiliki potensi wisata yang didukung oleh
          panorama alam lereng Gunung Merapi, kehidupan masyarakat yang
          masih menjaga budaya lokal, serta berbagai aktivitas pertanian
          yang dapat menjadi daya tarik bagi wisatawan.
        </p>
      </section>

      {/* Destinasi */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "60px auto",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Potensi Wisata
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px",
          }}
        >
          {wisata.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "15px",
                padding: "30px",
                textAlign: "center",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              }}
            >
              <div style={{ fontSize: "60px" }}>
                {item.icon}
              </div>

              <h3 style={{ marginTop: "20px" }}>
                {item.nama}
              </h3>

              <p
                style={{
                  marginTop: "15px",
                  lineHeight: "28px",
                }}
              >
                {item.deskripsi}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Informasi */}
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
            textAlign: "center",
          }}
        >
          <h2>Informasi Kunjungan</h2>

          <p
            style={{
              marginTop: "20px",
              lineHeight: "30px",
            }}
          >
            Wisata di Padukuhan Pagerjurang dapat dinikmati sepanjang tahun.
            Pengunjung diharapkan menjaga kebersihan lingkungan,
            menghormati budaya masyarakat setempat, dan mengikuti
            petunjuk yang berlaku demi kenyamanan bersama.
          </p>
        </div>
      </section>

      {/* Penutup */}
      <section
        style={{
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h2>Selamat Datang di Pagerjurang</h2>

        <p
          style={{
            maxWidth: "800px",
            margin: "20px auto",
            lineHeight: "30px",
          }}
        >
          Mari menikmati keindahan alam, keramahan masyarakat,
          serta pengalaman wisata yang memberikan kesan mendalam
          di Padukuhan Pagerjurang.
        </p>
      </section>
    </>
  );
}

export default Tourism;