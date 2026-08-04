import "./CardUMKM.css";

function CardUMKM({ nama, kategori, gambar }) {
  return (
    <div className="card-umkm">

      <img
        src={gambar}
        alt={nama}
        className="card-image"
      />

      <div className="card-overlay">

        <span className="card-category">
          {kategori}
        </span>

        <h3>{nama}</h3>

        <button>
          Lihat Detail →
        </button>

      </div>

    </div>
  );
}

export default CardUMKM;