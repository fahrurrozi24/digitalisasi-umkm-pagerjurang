import {
  FaStore,
  FaHandsHelping,
  FaGraduationCap,
  FaShoppingBag,
  FaLeaf,
  FaUsers,
} from "react-icons/fa";

function Tourism() {
  const wisataUMKM = [
    {
      nama: "Mengenal UMKM Pagerjurang",
      deskripsi:
        "Kenali berbagai usaha masyarakat Pagerjurang yang berkembang dari keterampilan, pengalaman, dan potensi lokal masyarakat.",
      icon: <FaStore />,
    },
    {
      nama: "Belajar Proses Produksi",
      deskripsi:
        "Pengunjung dapat mengenal bagaimana sebuah produk dibuat mulai dari bahan, proses pengolahan, hingga menjadi produk yang siap dipasarkan.",
      icon: <FaGraduationCap />,
    },
    {
      nama: "Mengenal Produk Lokal",
      deskripsi:
        "Temukan berbagai produk dan olahan yang dihasilkan oleh pelaku UMKM masyarakat Pagerjurang.",
      icon: <FaShoppingBag />,
    },
    {
      nama: "Belajar Bersama Pelaku UMKM",
      deskripsi:
        "Berinteraksi langsung dengan pelaku usaha untuk mengetahui pengalaman, keterampilan, serta cerita di balik usaha mereka.",
      icon: <FaHandsHelping />,
    },
    {
      nama: "Potensi Lokal",
      deskripsi:
        "Mengenal pemanfaatan potensi lingkungan dan hasil pertanian sekitar sebagai bagian dari kegiatan ekonomi masyarakat.",
      icon: <FaLeaf />,
    },
    {
      nama: "Pemberdayaan Masyarakat",
      deskripsi:
        "Mengenal bagaimana UMKM menjadi salah satu bagian dari aktivitas ekonomi dan pemberdayaan masyarakat Pagerjurang.",
      icon: <FaUsers />,
    },
  ];

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url('/merapi.jpg') center/cover",
          color: "white",
          textAlign: "center",
          padding: "110px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "auto",
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.95)",
              color: "#2e7d32",
              padding: "10px 25px",
              borderRadius: "30px",
              fontSize: "14px",
              fontWeight: "bold",
              letterSpacing: "2px",
              marginBottom: "20px",
            }}
          >
            WISATA UMKM
          </span>

          <h1
            style={{
              fontSize: "48px",
              marginBottom: "20px",
            }}
          >
            Jelajah UMKM Pagerjurang
          </h1>

          <p
            style={{
              maxWidth: "800px",
              margin: "auto",
              lineHeight: "32px",
              fontSize: "18px",
              color: "#ffffff",
              textShadow: "2px 2px 6px rgba(0,0,0,0.8)",
            }}
          >
            Mengenal lebih dekat usaha masyarakat Pagerjurang,
            mulai dari produk lokal, proses produksi, hingga
            cerita di balik berkembangnya UMKM di tengah
            kehidupan masyarakat.
          </p>
        </div>
      </section>

      {/* =====================================================
          TENTANG WISATA UMKM
      ====================================================== */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "70px auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "35px",
          }}
        >
          <span
            style={{
              color: "#2e7d32",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            TENTANG
          </span>

          <h2
            style={{
              fontSize: "38px",
              marginTop: "12px",
            }}
          >
            Wisata UMKM Pagerjurang
          </h2>
        </div>

        <p
          style={{
            lineHeight: "32px",
            color: "#555",
            fontSize: "17px",
            textAlign: "center",
          }}
        >
          Padukuhan Pagerjurang tidak memiliki kawasan wisata
          khusus seperti tempat wisata pada umumnya. Namun,
          masyarakat Pagerjurang memiliki berbagai usaha dan
          produk lokal yang menjadi bagian dari kehidupan
          masyarakat.
        </p>

        <p
          style={{
            marginTop: "18px",
            lineHeight: "32px",
            color: "#555",
            fontSize: "17px",
            textAlign: "center",
          }}
        >
          Oleh karena itu, halaman ini menghadirkan konsep
          <strong> Wisata UMKM</strong>, yaitu pengalaman untuk
          mengenal, belajar, dan melihat potensi usaha masyarakat
          Pagerjurang secara lebih dekat.
        </p>
      </section>

      {/* =====================================================
          APA YANG BISA DIPELAJARI
      ====================================================== */}
      <section
        style={{
          background: "#f5f5f5",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            <span
              style={{
                color: "#2e7d32",
                fontWeight: "bold",
                letterSpacing: "2px",
              }}
            >
              PENGALAMAN
            </span>

            <h2
              style={{
                fontSize: "38px",
                marginTop: "12px",
              }}
            >
              Apa yang Bisa Dipelajari?
            </h2>

            <p
              style={{
                maxWidth: "750px",
                margin: "15px auto",
                lineHeight: "28px",
                color: "#666",
              }}
            >
              Wisata UMKM Pagerjurang memberikan kesempatan
              untuk mengenal usaha masyarakat dari berbagai
              sisi.
            </p>
          </div>

          {/* GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(280px,1fr))",
              gap: "25px",
            }}
          >
            {wisataUMKM.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "35px 30px",
                  borderRadius: "15px",
                  boxShadow:
                    "0 5px 20px rgba(0,0,0,0.08)",
                  textAlign: "center",
                }}
              >
                {/* ICON */}
                <div
                  style={{
                    width: "75px",
                    height: "75px",
                    margin: "0 auto 20px",
                    borderRadius: "50%",
                    background: "#e8f5e9",
                    color: "#2e7d32",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "32px",
                  }}
                >
                  {item.icon}
                </div>

                {/* JUDUL */}
                <h3
                  style={{
                    fontSize: "21px",
                    color: "#222",
                  }}
                >
                  {item.nama}
                </h3>

                {/* DESKRIPSI */}
                <p
                  style={{
                    marginTop: "15px",
                    lineHeight: "28px",
                    color: "#666",
                  }}
                >
                  {item.deskripsi}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUK UMKM
      ====================================================== */}
      <section
        style={{
          padding: "80px 20px",
          background: "white",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "#2e7d32",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            PRODUK LOKAL
          </span>

          <h2
            style={{
              fontSize: "38px",
              marginTop: "12px",
            }}
          >
            Kenali Produk UMKM Pagerjurang
          </h2>

          <p
            style={{
              maxWidth: "800px",
              margin: "20px auto",
              lineHeight: "30px",
              color: "#555",
            }}
          >
            Setiap produk UMKM memiliki cerita dan proses
            tersendiri. Melalui halaman ini, pengunjung dapat
            mengenal lebih jauh berbagai produk yang dihasilkan
            oleh masyarakat Pagerjurang.
          </p>

          <div
            style={{
              marginTop: "40px",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "25px",
            }}
          >
            <div
              style={{
                padding: "30px",
                border: "1px solid #e0e0e0",
                borderRadius: "15px",
              }}
            >
              <div
                style={{
                  fontSize: "45px",
                }}
              >
                🍴
              </div>

              <h3
                style={{
                  marginTop: "15px",
                }}
              >
                Produk Kuliner
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "26px",
                  marginTop: "10px",
                }}
              >
                Berbagai produk makanan dan olahan yang
                dikembangkan oleh masyarakat.
              </p>
            </div>

            <div
              style={{
                padding: "30px",
                border: "1px solid #e0e0e0",
                borderRadius: "15px",
              }}
            >
              <div
                style={{
                  fontSize: "45px",
                }}
              >
                🏡
              </div>

              <h3
                style={{
                  marginTop: "15px",
                }}
              >
                Usaha Rumahan
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "26px",
                  marginTop: "10px",
                }}
              >
                Usaha yang tumbuh dari rumah dan keterampilan
                masyarakat setempat.
              </p>
            </div>

            <div
              style={{
                padding: "30px",
                border: "1px solid #e0e0e0",
                borderRadius: "15px",
              }}
            >
              <div
                style={{
                  fontSize: "45px",
                }}
              >
                🌱
              </div>

              <h3
                style={{
                  marginTop: "15px",
                }}
              >
                Potensi Lokal
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "26px",
                  marginTop: "10px",
                }}
              >
                Pemanfaatan potensi dan sumber daya lokal
                sebagai bagian dari kegiatan usaha masyarakat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CARA BERKUNJUNG
      ====================================================== */}
      <section
        style={{
          background: "#f5f5f5",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "#2e7d32",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            BERINTERAKSI
          </span>

          <h2
            style={{
              fontSize: "38px",
              marginTop: "12px",
            }}
          >
            Ingin Mengenal UMKM Lebih Dekat?
          </h2>

          <p
            style={{
              marginTop: "20px",
              lineHeight: "30px",
              color: "#555",
            }}
          >
            Pengunjung dapat melihat informasi UMKM yang
            tersedia pada website dan mengenal berbagai produk
            yang dihasilkan masyarakat Pagerjurang.
          </p>

          <p
            style={{
              marginTop: "15px",
              lineHeight: "30px",
              color: "#555",
            }}
          >
            Untuk kunjungan atau interaksi langsung dengan
            pelaku UMKM, pengunjung dapat menghubungi kontak
            yang tersedia pada halaman UMKM.
          </p>

          <a
            href="/umkm"
            style={{
              display: "inline-block",
              marginTop: "30px",
              background: "#2e7d32",
              color: "white",
              padding: "14px 28px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Lihat UMKM Pagerjurang
          </a>
        </div>
      </section>

      {/* =====================================================
          PENUTUP
      ====================================================== */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "white",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "auto",
          }}
        >
          <h2
            style={{
              fontSize: "36px",
            }}
          >
            Bukan Sekadar Berkunjung
          </h2>

          <p
            style={{
              marginTop: "20px",
              lineHeight: "32px",
              color: "#555",
              fontSize: "17px",
            }}
          >
            Melalui Wisata UMKM Pagerjurang, setiap kunjungan
            diharapkan menjadi kesempatan untuk mengenal,
            belajar, dan menghargai usaha masyarakat lokal.
          </p>

          <p
            style={{
              marginTop: "15px",
              lineHeight: "32px",
              color: "#555",
              fontSize: "17px",
            }}
          >
            Karena di balik setiap produk, terdapat keterampilan,
            kerja keras, dan cerita dari masyarakat Pagerjurang.
          </p>
        </div>
      </section>
    </>
  );
}

export default Tourism;