import {
  FaMapMarkerAlt,
  FaUsers,
  FaMountain,
  FaLeaf,
} from "react-icons/fa";

import merapiJogja from "../assets/images/Merapi Jogja.jpg";

function Profile() {
  return (
    <>
      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section
        style={{
          background: `linear-gradient(
            rgba(0, 0, 0, 0.55),
            rgba(0, 0, 0, 0.55)
          ), url("${merapiJogja}") center/cover`,

          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",

          color: "white",
          textAlign: "center",

          padding: "120px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "20px",
            color: "#ffffff",
            textShadow: "2px 2px 6px rgba(0,0,0,0.8)",
          }}
        >
          Profile Padukuhan Pagerjurang
        </h1>

        <p
          style={{
            maxWidth: "800px",
            margin: "auto",

            fontSize: "18px",
            lineHeight: "32px",

            color: "#ffffff",
            fontWeight: "500",

            opacity: "1",

            textShadow: "2px 2px 6px rgba(0,0,0,0.8)",
          }}
        >
          Mengenal lebih dekat Padukuhan Pagerjurang,
          Kalurahan Kepuharjo, Kecamatan Cangkringan,
          Kabupaten Sleman, Daerah Istimewa Yogyakarta.
        </p>
      </section>

      {/* ================================================= */}
      {/* TENTANG PADUKUHAN */}
      {/* ================================================= */}

      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h2>
          Tentang Padukuhan
        </h2>

        <p
          style={{
            marginTop: "20px",
            lineHeight: "32px",
          }}
        >
          Padukuhan Pagerjurang merupakan salah satu padukuhan
          yang berada di Kalurahan Kepuharjo, Kecamatan Cangkringan,
          Kabupaten Sleman, Daerah Istimewa Yogyakarta.
        </p>

        <p
          style={{
            marginTop: "15px",
            lineHeight: "32px",
          }}
        >
          Berada di kawasan lereng Gunung Merapi, Pagerjurang
          memiliki potensi pada sektor pertanian dan UMKM.
          Masyarakat Pagerjurang juga masih menjaga kehidupan
          sosial, budaya, serta lingkungan di sekitar padukuhan.
        </p>
      </section>

      {/* ================================================= */}
      {/* DATA SINGKAT */}
      {/* ================================================= */}

      <section
        style={{
          background: "#f5f5f5",
          padding: "70px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          Data Singkat
        </h2>

        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",

            display: "grid",

            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",

            gap: "25px",
          }}
        >
          <Card
            icon={<FaUsers />}
            title="Penduduk"
            value="450 Jiwa"
          />

          <Card
            icon={<FaMapMarkerAlt />}
            title="RT/RW"
            value="4/2"
          />

          <Card
            icon={<FaMountain />}
            title="Wilayah"
            value="Lereng Merapi"
          />

          <Card
            icon={<FaLeaf />}
            title="Potensi"
            value="Pertanian"
          />
        </div>
      </section>

      {/* ================================================= */}
      {/* POTENSI PADUKUHAN */}
      {/* ================================================= */}

      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Potensi Padukuhan
        </h2>

        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",

            gap: "25px",
          }}
        >
          {/* PERTANIAN */}

          <CardPotensi
            icon="🌾"
            title="Pertanian"
            desc="Komoditas pertanian masyarakat berupa jagung, talas, sayuran, cabai, palawija, serta berbagai hasil bumi lainnya."
          />

          {/* UMKM */}

          <CardPotensi
            icon="🛍️"
            title="UMKM"
            desc="Berbagai produk UMKM masyarakat Pagerjurang berupa makanan, minuman, serta produk olahan yang menjadi potensi ekonomi lokal."
          />
        </div>
      </section>

      {/* ================================================= */}
      {/* VISI */}
      {/* ================================================= */}

      <section
        style={{
          background: "#2e7d32",
          color: "white",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          <h2
            style={{
              color: "#ffffff",
            }}
          >
            Visi
          </h2>

          <p
            style={{
              marginTop: "20px",
              lineHeight: "32px",
              color: "#ffffff",
            }}
          >
            Terwujudnya Padukuhan Pagerjurang yang mandiri,
            maju, sejahtera, serta mampu mengembangkan potensi
            lokal melalui pemberdayaan masyarakat.
          </p>
        </div>
      </section>

      {/* ================================================= */}
      {/* MISI */}
      {/* ================================================= */}

      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h2>
          Misi
        </h2>

        <ul
          style={{
            marginTop: "25px",
            paddingLeft: "25px",
            lineHeight: "40px",
          }}
        >
          <li>
            Meningkatkan kesejahteraan masyarakat.
          </li>

          <li>
            Mengembangkan UMKM lokal.
          </li>

          <li>
            Mengembangkan potensi pertanian.
          </li>

          <li>
            Meningkatkan pemberdayaan masyarakat.
          </li>

          <li>
            Melestarikan budaya dan kehidupan sosial masyarakat.
          </li>

          <li>
            Menjaga kelestarian lingkungan.
          </li>
        </ul>
      </section>

      {/* ================================================= */}
      {/* LOKASI */}
      {/* ================================================= */}

      <section
        style={{
          background: "#f5f5f5",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2>
          Lokasi Padukuhan
        </h2>

        <p
          style={{
            marginTop: "20px",
            lineHeight: "30px",
            maxWidth: "800px",
            marginInline: "auto",
          }}
        >
          Padukuhan Pagerjurang,
          Kalurahan Kepuharjo,
          Kecamatan Cangkringan,
          Kabupaten Sleman,
          Daerah Istimewa Yogyakarta.
        </p>

        <a
          href="https://maps.app.goo.gl/E6cLadFe5asNbvLA9?g_st=aw"
          target="_blank"
          rel="noreferrer"
          style={{
            marginTop: "30px",

            display: "inline-block",

            background: "#2e7d32",
            color: "white",

            padding: "14px 28px",

            textDecoration: "none",

            borderRadius: "8px",

            transition: "0.3s",
          }}
        >
          Buka Google Maps
        </a>
      </section>
    </>
  );
}

/* ================================================= */
/* CARD DATA */
/* ================================================= */

function Card({ icon, title, value }) {
  return (
    <div
      style={{
        background: "white",

        padding: "30px",

        borderRadius: "12px",

        textAlign: "center",

        boxShadow:
          "0 5px 15px rgba(0,0,0,.1)",

        transition: "0.3s",
      }}
    >
      <div
        style={{
          fontSize: "40px",
          color: "#2e7d32",
          marginBottom: "15px",
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          margin: "0 0 10px",
          color: "#2e7d32",
        }}
      >
        {value}
      </h3>

      <p>
        {title}
      </p>
    </div>
  );
}

/* ================================================= */
/* CARD POTENSI */
/* ================================================= */

function CardPotensi({
  icon,
  title,
  desc,
}) {
  return (
    <div
      style={{
        background: "#ffffff",

        padding: "30px",

        borderRadius: "12px",

        boxShadow:
          "0 5px 15px rgba(0,0,0,.1)",

        transition: "0.3s",
      }}
    >
      <div
        style={{
          fontSize: "45px",
          marginBottom: "15px",
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          color: "#2e7d32",
          marginBottom: "15px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          lineHeight: "28px",
        }}
      >
        {desc}
      </p>
    </div>
  );
}

export default Profile;