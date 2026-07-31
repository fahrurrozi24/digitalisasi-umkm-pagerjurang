function Contact() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          background: "#2e7d32",
          color: "white",
          textAlign: "center",
          padding: "90px 20px",
        }}
      >
        <h1 style={{ fontSize: "46px" }}>
          Hubungi Kami
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto 0",
            lineHeight: "30px",
          }}
        >
          Apabila Anda membutuhkan informasi mengenai
          Padukuhan Pagerjurang, UMKM, wisata, maupun kegiatan
          masyarakat, silakan menghubungi kami melalui kontak berikut.
        </p>
      </section>

      {/* INFORMASI */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "70px auto",
          padding: "0 20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
          gap: "40px",
        }}
      >
        {/* Kiri */}
        <div
          style={{
            background: "white",
            borderRadius: "15px",
            padding: "35px",
            boxShadow: "0 5px 15px rgba(0,0,0,.1)",
          }}
        >
          <h2 style={{ color: "#2e7d32" }}>
            Informasi Kontak
          </h2>

          <hr
            style={{
              margin: "20px 0",
            }}
          />

          <p>
            <strong>Nama Dukuh</strong>
          </p>

          <p>Bapak Suwabi</p>

          <br />

          <p>
            <strong>Nomor WhatsApp</strong>
          </p>

          <p>+62 857-2605-6617</p>

          <br />

          <p>
            <strong>Email</strong>
          </p>

          <p>pagerjurang@gmail.com</p>

          <br />

          <p>
            <strong>Alamat</strong>
          </p>

          <p>
            Padukuhan Pagerjurang,
            Kalurahan Kepuharjo,
            Kecamatan Cangkringan,
            Kabupaten Sleman,
            Daerah Istimewa Yogyakarta.
          </p>

          <br />

          <p>
            <strong>Jam Pelayanan</strong>
          </p>

          <p>

            Senin - Jumat

            <br />

            08.00 - 15.00 WIB

          </p>
        </div>

        {/* Kanan */}
        <div
          style={{
            background: "white",
            borderRadius: "15px",
            padding: "35px",
            boxShadow: "0 5px 15px rgba(0,0,0,.1)",
          }}
        >
          <h2 style={{ color: "#2e7d32" }}>
            Kirim Pesan
          </h2>

          <hr
            style={{
              margin: "20px 0",
            }}
          />

          <input
            type="text"
            placeholder="Nama Lengkap"
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Email"
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Subjek"
            style={inputStyle}
          />

          <textarea
            rows="6"
            placeholder="Tulis pesan..."
            style={inputStyle}
          />

          <button
            style={{
              width: "100%",
              padding: "15px",
              background: "#2e7d32",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Kirim Pesan
          </button>
        </div>
      </section>

      {/* TOMBOL */}
      <section
        style={{
          textAlign: "center",
          paddingBottom: "80px",
        }}
      >
        <a
          href="https://wa.me/6285726056617"
          target="_blank"
          rel="noreferrer"
          style={{
            background: "#25D366",
            color: "white",
            padding: "15px 28px",
            textDecoration: "none",
            borderRadius: "8px",
            marginRight: "15px",
            display: "inline-block",
          }}
        >
          Chat WhatsApp
        </a>

        <a
          href="https://maps.app.goo.gl/E6cLadFe5asNbvLA9?g_st=aw"
          target="_blank"
          rel="noreferrer"
          style={{
            background: "#2e7d32",
            color: "white",
            padding: "15px 28px",
            textDecoration: "none",
            borderRadius: "8px",
            display: "inline-block",
          }}
        >
          Lihat Google Maps
        </a>
      </section>
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "15px",
  marginBottom: "18px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "15px",
  outline: "none",
};

export default Contact;