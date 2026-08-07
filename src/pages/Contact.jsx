import { useState } from "react";

function Contact() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [subjek, setSubjek] = useState("");
  const [pesan, setPesan] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Cek apakah semua data sudah diisi
    if (!nama || !email || !subjek || !pesan) {
      alert("Silakan lengkapi semua data terlebih dahulu.");
      return;
    }

    // Membuat isi pesan WhatsApp
    const text = `
Halo, saya ingin menghubungi Padukuhan Pagerjurang.

Nama: ${nama}
Email: ${email}
Subjek: ${subjek}

Pesan:
${pesan}
    `;

    // Nomor WhatsApp tujuan
    const nomor = "6285726056617";

    // Membuka WhatsApp dengan pesan yang sudah diisi
    const whatsappURL = `https://wa.me/${nomor}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* ========================= */}
      {/* HERO */}
      {/* ========================= */}

      <section
        style={{
          background: "#2e7d32",
          color: "white",
          textAlign: "center",
          padding: "90px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "46px",
            color: "white",
            margin: 0,
          }}
        >
          Hubungi Kami
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto 0",
            lineHeight: "30px",
            color: "white",
          }}
        >
          Apabila Anda membutuhkan informasi mengenai
          Padukuhan Pagerjurang, UMKM, wisata, maupun kegiatan
          masyarakat, silakan menghubungi kami melalui kontak berikut.
        </p>
      </section>

      {/* ========================= */}
      {/* INFORMASI KONTAK */}
      {/* ========================= */}

      <section
        style={{
          padding: "70px 20px",
          background: "#fafafa",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "35px",
            alignItems: "stretch",
          }}
        >
          {/* ========================= */}
          {/* INFORMASI KONTAK */}
          {/* ========================= */}

          <div
            style={{
              background: "white",
              borderRadius: "18px",
              padding: "40px",
              boxShadow: "0 8px 25px rgba(0,0,0,.08)",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <h2
              style={{
                color: "#2e7d32",
                margin: 0,
                fontSize: "32px",
              }}
            >
              Informasi Kontak
            </h2>

            <hr
              style={{
                margin: "22px 0 30px",
                border: "none",
                borderTop: "1px solid #ddd",
              }}
            />

            <div style={infoItem}>
              <strong>Nama Dukuh</strong>
              <p>Bapak Suwabi</p>
            </div>

            <div style={infoItem}>
              <strong>Nomor WhatsApp</strong>
              <p>+62 857-2605-6617</p>
            </div>

            <div style={infoItem}>
              <strong>Email</strong>
              <p>pagerjurang@gmail.com</p>
            </div>

            <div style={infoItem}>
              <strong>Alamat</strong>
              <p>
                Padukuhan Pagerjurang,
                <br />
                Kalurahan Kepuharjo,
                <br />
                Kecamatan Cangkringan,
                <br />
                Kabupaten Sleman,
                <br />
                Daerah Istimewa Yogyakarta.
              </p>
            </div>

            <div
              style={{
                marginTop: "35px",
              }}
            >
              <strong>Jam Pelayanan</strong>

              <p
                style={{
                  marginTop: "12px",
                }}
              >
                Senin - Jumat
                <br />
                08.00 - 15.00 WIB
              </p>
            </div>
          </div>

          {/* ========================= */}
          {/* FORM KIRIM PESAN */}
          {/* ========================= */}

          <div
            style={{
              background: "white",
              borderRadius: "18px",
              padding: "40px",
              boxShadow: "0 8px 25px rgba(0,0,0,.08)",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <h2
              style={{
                color: "#2e7d32",
                margin: 0,
                fontSize: "32px",
              }}
            >
              Kirim Pesan
            </h2>

            <hr
              style={{
                margin: "22px 0 30px",
                border: "none",
                borderTop: "1px solid #ddd",
              }}
            />

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nama Lengkap"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                style={inputStyle}
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
              />

              <input
                type="text"
                placeholder="Subjek"
                value={subjek}
                onChange={(e) => setSubjek(e.target.value)}
                style={inputStyle}
              />

              <textarea
                rows="6"
                placeholder="Tulis pesan..."
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  minHeight: "150px",
                }}
              />

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "15px",
                  background: "#2e7d32",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "bold",
                  transition: ".3s",
                }}
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* TOMBOL KONTAK */}
      {/* ========================= */}

      <section
        style={{
          textAlign: "center",
          padding: "20px 20px 90px",
          background: "#fafafa",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "18px",
          }}
        >
          {/* WHATSAPP */}

          <a
            href="https://wa.me/6285726056617"
            target="_blank"
            rel="noreferrer"
            style={{
              width: "260px",
              boxSizing: "border-box",
              background: "#25D366",
              color: "white",
              padding: "15px 28px",
              textDecoration: "none",
              borderRadius: "10px",
              display: "block",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Chat WhatsApp
          </a>

          {/* GOOGLE MAPS */}

          <a
            href="https://maps.app.goo.gl/E6cLadFe5asNbvLA9?g_st=aw"
            target="_blank"
            rel="noreferrer"
            style={{
              width: "260px",
              boxSizing: "border-box",
              background: "#2e7d32",
              color: "white",
              padding: "15px 28px",
              textDecoration: "none",
              borderRadius: "10px",
              display: "block",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Lihat Google Maps
          </a>
        </div>
      </section>
    </>
  );
}

/* ========================= */
/* STYLE INFORMASI */
/* ========================= */

const infoItem = {
  marginBottom: "28px",
};

/* ========================= */
/* STYLE INPUT */
/* ========================= */

const inputStyle = {
  width: "100%",
  padding: "15px",
  marginBottom: "18px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "inherit",
};

export default Contact;